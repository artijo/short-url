
import { createClient } from '@supabase/supabase-js'

const options = {
    db: {
        schema: 'public',
      },
    }

const supabaseUrl = 'https://jeyyrrhtdcjsvmohvoau.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey, options)
//dattabase

export default supabase