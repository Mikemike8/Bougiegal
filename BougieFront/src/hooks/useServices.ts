import { useState, useEffect } from 'react'
import { supabase, Service } from '@/lib/supabase'

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('category', { ascending: true })
          .order('price', { ascending: true })

        if (error) {
          throw error
        }

        setServices(data || [])
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading, error }
}

export function useBooking() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createBooking = async (bookingData: {
    customerData: {
      email: string
      first_name: string
      last_name: string
      phone?: string
      dog_name?: string
      dog_breed?: string
      dog_age?: number
      special_instructions?: string
    }
    serviceId: string
    bookingDate: string
    bookingTime: string
    specialNotes?: string
  }) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.functions.invoke('create-booking', {
        body: bookingData
      })

      if (error) {
        throw error
      }

      return data.data
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create booking'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const processPayment = async (paymentData: {
    bookingId: string
    paymentMethod: string
    amount: number
    paymentToken?: string
  }) => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.functions.invoke('process-payment', {
        body: paymentData
      })

      if (error) {
        throw error
      }

      return data.data
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to process payment'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return {
    createBooking,
    processPayment,
    loading,
    error
  }
}