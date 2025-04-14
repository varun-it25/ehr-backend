import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whomnhwbyluvcfrvcgkb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indob21uaHdieWx1dmNmcnZjZ2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MTUwNjUsImV4cCI6MjA2MDA5MTA2NX0.XQ7sZuFdzyq9mRIntJT_qrA1dZaJKBB354tKf_yzQMc';


export const supabase = createClient(supabaseUrl, supabaseKey)