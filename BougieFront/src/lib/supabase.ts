import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvlsvughznxbyuphajtt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bHN2dWdoem54Ynl1cGhhanR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MzI3ODcsImV4cCI6MjA2NzUwODc4N30.RBjs4OpnUyY322zTJdDpf4weejE6UiFmnX6rkOj1q9o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration_minutes: number
  category: string
  image_url?: string
  is_active: boolean
  created_at: string
}

export interface Customer {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  dog_name?: string
  dog_breed?: string
  dog_age?: number
  special_instructions?: string
  created_at: string
}

export interface Booking {
  id: string
  customer_id: string
  service_id: string
  booking_date: string
  booking_time: string
  status: string
  total_amount: number
  special_notes?: string
  created_at: string
}

export interface Payment {
  id: string
  booking_id: string
  payment_method: string
  payment_status: string
  amount: number
  transaction_id?: string
  payment_date?: string
  created_at: string
}