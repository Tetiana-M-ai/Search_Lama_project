// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Import via bare specifier thanks to the import_map.json file.
import Stripe from 'stripe';

const stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') as string, {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient(),
});
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider();

console.log('Stripe webhook');

serve(async (request) => {
  const signature = request.headers.get('Stripe-Signature');

  // First step is to verify the event. The .text() method must be used as the
  // verification relies on the raw request body rather than the parsed JSON.
  const body = await request.text();
  let receivedEvent;
  try {
    receivedEvent = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
      undefined,
      cryptoProvider,
    );
  } catch (err) {
    return new Response(err.message, { status: 400 });
  }
  const userEmail = receivedEvent?.data?.object?.customer_details?.email;
  const supabaseClient = createClient(
    'https://kpavaluenojkyotzkpwl.supabase.co',
    Deno.env.get('REACT_APP_DATABASE_KEY') ?? '',
  );
  const { data, error } = await supabaseClient
    .from('credits')
    .select('credit')
    .eq('email', userEmail)
    .maybeSingle();
  console.log(data);
  if (data && data.credit > 0) {
    await supabaseClient
      .from('credits')
      .update({ credit: data.credit + 100 })
      .eq('email', userEmail);
  } else {
    const { data, error } = await supabaseClient
      .from('credits')
      .insert({ email: userEmail, credit: 100 });
  }
  console.log(`🔔 Event received: ${JSON.stringify(receivedEvent)}`);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});
