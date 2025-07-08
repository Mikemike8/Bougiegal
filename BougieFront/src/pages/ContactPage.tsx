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

  const quickActions = [
    {
      title: 'Book an Appointment',
      description: 'Schedule your luxury grooming experience',
      action: 'Book Now',
      link: '/shop',
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Emergency Grooming',
      description: 'Last-minute appointments available',
      action: 'Call Now',
      link: 'tel:(555)123-7297',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Gift Certificates',
      description: 'Perfect gift for pet lovers',
      action: 'Purchase',
      link: '/shop',
      color: 'from-purple-500 to-pink-500'
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

      {/* Enhanced Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Actions</span>
            </h2>
            <p className="text-xl text-gray-600">Get started with Bougie Paws in just one click</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden hover:scale-105 bg-white/90 backdrop-blur-sm">
                <div className={`h-3 bg-gradient-to-r ${action.color}`} />
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{action.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{action.description}</p>
                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${action.color} hover:scale-105 text-white rounded-full px-8 py-3 font-semibold text-lg transition-all duration-300 shadow-lg`}
                    >
                      <a href={action.link}>{action.action}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes more space on desktop */}
            <div className="xl:col-span-3">
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center mr-6 shadow-lg">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                      <p className="text-gray-600 mt-1">We'll respond within 2 hours</p>
                    </div>
                  </div>
                  
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We’ll get back to you within 2 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="petName" className="text-sm font-medium text-gray-700">Pet’s Name</Label>
                          <Input
                            id="petName"
                            name="petName"
                            value={formData.petName}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="mt-1"
                          placeholder="Tell us about your pet and what services you’re interested in..."
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Enhanced Contact Information */}
            <div className="xl:col-span-2 space-y-8">
              <div className="text-center xl:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Contact <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Information</span>
                </h2>
                <p className="text-gray-600 text-lg">Multiple ways to reach our luxury pet care experts</p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white/90 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                            <div className="space-y-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600 text-lg leading-relaxed">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              
              {/* Additional Contact CTA */}
              <Card className="border-0 bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
                  <p className="mb-6 opacity-90">Our luxury pet care specialists are standing by to help</p>
                  <Button
                    asChild
                    className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href="tel:(555)123-7297">Call Now: (555) 123-PAWS</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Luxury Salon</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Beverly Hills, our salon offers a premium environment for your pet’s grooming experience.
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Map integration coming soon</p>
                <p className="text-sm text-gray-500 mt-2">123 Elite Boulevard, Beverly Hills, CA 90210</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <a href="tel:(555)123-7297">Call (555) 123-PAWS</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}