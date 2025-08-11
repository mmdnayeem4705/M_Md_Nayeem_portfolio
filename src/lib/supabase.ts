import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type ContactMessage = {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}