import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gqtehkiebvvqaztfmbxw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdGVoa2llYnZ2cWF6dGZtYnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzNDQ5NTEsImV4cCI6MjAzODkyMDk1MX0.yHnzp8ebCHSp-sWpGVwzuMqJXc5nwYPMmfWMv7ts-2Y'

export const supabase = createClient(supabaseUrl, supabaseKey);