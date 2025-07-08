import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Car, Crown } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', petName: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Luxury Salon',
      details: [
        '123 Elite Boulevard',
        'Beverly Hills, CA 90210',
        'Valet parking available'
      ]
    },
    {
      icon: Phone,
      title: 'Call or Text Us',
      details: [
        '(555) 123-PAWS',
        '(555) 123-7297',
        'Available 7 days a week'
      ]
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      details: [
        'hello@bougiepaws.com',
        'bookings@bougiepaws.com',
        'Response within 2 hours'
      ]
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        'Monday - Saturday: 8AM - 7PM',
        'Sunday: 10AM - 5PM',
        'Holiday hours may vary'
      ]
    }
  ]

  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to give your pet the luxury treatment they deserve? We’re here to answer your questions and schedule your appointment. Experience the Bougie Paws difference today.
            </p>
          </div>
        </div>
      </section>

    

 <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
        Visit the{" "}
        <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          Store
        </span>
      </h2>
      <p className="text-xl text-gray-600">
        Experience events at the iconic Liberty Bowl Memorial Stadium in the heart of Memphis.
      </p>
    </div>

    <Card className="border-0 shadow-2xl overflow-hidden">
      <div className="relative h-96">
        <iframe
          title="Memphis Liberty Bowl Stadium Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.6539378555226!2d-90.05738062423625!3d35.140308572766564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e8fc1d707a9%3A0x8ac9afcba62f83fe!2sBeale%20St%2C%20Memphis%2C%20TN%2038103!5e0!3m2!1sen!2sus!4v1751944761555!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
     </div>
    </Card>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don’t wait – give your pet the luxury grooming experience they deserve. Book now or call us for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="/shop">Book Online</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-purple-600 hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="tel:(555)123-7297">Call (555) 123-PAWS</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}