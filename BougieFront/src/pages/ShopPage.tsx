import { useState } from 'react'
import { useServices, useBooking } from '@/hooks/useServices'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Clock, Star, Crown, Sparkles, Calendar, CreditCard, DollarSign, CheckCircle } from 'lucide-react'
import { Service } from '@/lib/supabase'

interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dogName: string
  dogBreed: string
  dogAge: string
  specialInstructions: string
  bookingDate: string
  bookingTime: string
}

export default function ShopPage() {
  const { services, loading, error } = useServices()
  const { createBooking, processPayment, loading: bookingLoading } = useBooking()
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [currentStep, setCurrentStep] = useState<'details' | 'payment' | 'confirmation'>('details')
  const [bookingData, setBookingData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    specialInstructions: '',
    bookingDate: '',
    bookingTime: ''
  })
  const [bookingResult, setBookingResult] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'cashapp'>('paypal')

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleBookService = (service: Service) => {
    setSelectedService(service)
    setShowBookingModal(true)
    setCurrentStep('details')
  }

  const handleBookingSubmit = async () => {
    if (!selectedService) return

    try {
      const result = await createBooking({
        customerData: {
          email: bookingData.email,
          first_name: bookingData.firstName,
          last_name: bookingData.lastName,
          phone: bookingData.phone,
          dog_name: bookingData.dogName,
          dog_breed: bookingData.dogBreed,
          dog_age: bookingData.dogAge ? parseInt(bookingData.dogAge) : undefined,
          special_instructions: bookingData.specialInstructions
        },
        serviceId: selectedService.id,
        bookingDate: bookingData.bookingDate,
        bookingTime: bookingData.bookingTime,
        specialNotes: bookingData.specialInstructions
      })

      setBookingResult(result)
      setCurrentStep('payment')
    } catch (error) {
      console.error('Booking failed:', error)
    }
  }

  const handlePayment = async () => {
    if (!bookingResult || !selectedService) return

    try {
      const paymentResult = await processPayment({
        bookingId: bookingResult.booking.id,
        paymentMethod,
        amount: selectedService.price
      })

      if (paymentResult.paymentResult.status === 'completed') {
        setCurrentStep('confirmation')
      } else {
        // Handle payment framework (no actual processing yet)
        setCurrentStep('confirmation')
      }
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  const resetBooking = () => {
    setShowBookingModal(false)
    setSelectedService(null)
    setCurrentStep('details')
    setBookingData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dogName: '',
      dogBreed: '',
      dogAge: '',
      specialInstructions: '',
      bookingDate: '',
      bookingTime: ''
    })
    setBookingResult(null)
  }

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 8; hour <= 17; hour++) {
      slots.push(`${hour}:00`)
      if (hour < 17) slots.push(`${hour}:30`)
    }
    return slots
  }

  const serviceCategories = services.reduce((acc, service) => {
    const category = service.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(service)
    return acc
  }, {} as Record<string, Service[]>)

  const categoryIcons: Record<string, any> = {
    'Basic Grooming': Sparkles,
    'Premium Styling': Crown,
    'Luxury Package': Star,
    'Quick Service': Clock,
    'VIP Experience': Crown,
    'Therapeutic': Star,
    'Puppy Care': Sparkles,
    'Senior Care': Star
  }


    const quickServices = [
    {
      name: 'Signature Luxury Bath',
      price: '$85',
      duration: '90 min',
      image: '/images/luxury-bath.jpeg'
    },
    {
      name: 'The Dior Diamond Cut',
      price: '$150',
      duration: '120 min',
      image: '/images/pinkdog.jpg'
    },
    {
      name: 'Royal Treatment Package',
      price: '$295',
      duration: '240 min',
      image: '/images/groomed-dogs.jpg'
    }
  ]

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading our luxury services...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading services: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-10 sm:pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Luxury <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your beloved pet with my  signature grooming services. Each treatment is crafted with masterful elegance and attention to detail.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Premium Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>


        {/* Quick Services Preview */}
              <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                     Book <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Now</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Experience our most popular luxury treatments, each designed to pamper your pet with Dior-inspired elegance.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {quickServices.map((service, index) => (
                      <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="text-sm font-medium opacity-90">{service.duration}</div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-gray-900">
                              {service.price}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded font-medium transition-all duration-200"
                          >
                            <Link to="/shop">Book This Service</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
        

    
    </div>
  )
}