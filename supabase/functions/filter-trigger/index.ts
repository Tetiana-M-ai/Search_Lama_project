// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// type InsertPayload = {
//   type: ‘INSERT’
//   table: string
//   schema: string
//   record: TableRecord<T>
//   old_record: null
// }
// type UpdatePayload = {
//   type: ‘UPDATE’
//   table: string
//   schema: string
//   record: TableRecord<T>
//   old_record: TableRecord<T>
// }
// type DeletePayload = {
//   type: ‘DELETE’
//   table: string
//   schema: string
//   record: null
//   old_record: TableRecord<T>
// }

serve(async (req) => {
  const { table, record } = await req.json();
  console.log(table);
  console.log(record);

  const supabaseClient = createClient(
    'https://kpavaluenojkyotzkpwl.supabase.co',
    Deno.env.get('REACT_APP_DATABASE_KEY') ?? '',
  );
  let query = supabaseClient
    .from('realEstate_items')
    .select('URL')
    .eq('nemovitost', record?.nemovitost)
    .eq('action', record?.type)
    .filter(
      'disposition',
      'in',
      record?.disposition?.replace('[', '(').replace(']', ')'),
    )
    .eq('town', record?.town)
    .like('street', `%${record?.street}%`)
    .eq('building', record?.building);
  if (record?.other === 'balcony') {
    query = query.not('balcony', 'is', null);
  }
  if (record?.other === 'loggiea') {
    query = query.not('loggiea', 'is', null);
  }
  if (record?.other === 'terrace') {
    query = query.not('terrace', 'is', null);
  }

  const { data } = await query;
  const result = data?.map((item) => {
    return item.URL;
  });
  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('SEND_GRID_KEY')}`,
    },
    body: JSON.stringify({
      template_id: 'd-0c2eb2021d0a468c98dacfbf4271f196',
      personalizations: [
        {
          to: [
            {
              email: record?.email,
              // name: 'Alina',
            },
          ],
          dynamic_template_data: {
            urls: result,
          },
        },
      ],
      from: {
        email: 'alina.a.khoptar@lpnu.ua',
        name: 'Lama',
      },

      subject: 'Cool content',
    }),
  });

  return new Response(JSON.stringify(''), {
    headers: { 'Content-Type': 'application/json' },
  });
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
