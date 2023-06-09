import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kpavaluenojkyotzkpwl.supabase.co';
const SUPABASE_KEY = 'process.env.REACT_APP_DATABASE_KEY';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
