import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Award, Heart, Sparkles, Crown, Scissors } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Crown,
      title: 'Luxury Experience',
      description: 'Premium grooming services inspired by Dior’s attention to detail and elegance.'
    },
    {
      icon: Award,
      title: 'Expert Professionals',
      description: 'Certified grooming specialists with years of experience in luxury pet care.'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every service is tailored to your pet’s unique needs and personality.'
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'We use only the finest, organic products safe for your beloved pet.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      pet: 'Golden Retriever - Bella',
      rating: 5,
      comment: 'Bougie Paws transformed Bella into an absolute princess! The attention to detail is incredible.'
    },
    {
      name: 'Michael Chen',
      pet: 'French Bulldog - Louis',
      rating: 5,
      comment: 'The Royal Treatment Package was worth every penny. Louis has never looked so sophisticated!'
    },
    {
      name: 'Emily Rodriguez',
      pet: 'Poodle - Coco',
      rating: 5,
      comment: 'The staff treats Coco like royalty. This is luxury pet care at its finest.'
    }
  ]

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
      image: '/images/professional-styling.jpg'
    },
    {
      name: 'Royal Treatment Package',
      price: '$295',
      duration: '240 min',
      image: '/images/groomed-dogs.jpg'
    }
  ]

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-grooming.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-purple-900/70 to-blue-900/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-pink-300" />
              <span className="text-sm font-medium">Luxury Pet Grooming Excellence</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-300 via-white to-blue-300 bg-clip-text text-transparent">
                Bougie Paws
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-light text-pink-100">
                Where Elegance Meets Pet Care
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Inspired by Dior’s timeless sophistication, we provide an unparalleled grooming experience that transforms your beloved pet into a work of art.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
              >
                <Link to="/shop">Book Your Luxury Experience</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-pink-200">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">500+ Happy Pets</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Signature <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-full font-medium transition-all duration-200"
                  >
                    <Link to="/shop">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Bougie Paws <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart is our unwavering commitment to luxury, quality, and the happiness of your furry family members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-pink-200 to-blue-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don’t just take our word for it – hear from the satisfied pet parents who trust us with their beloved companions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">\"{testimonial.comment}\"</p>
                  <div className="border-t pt-6">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your luxury grooming experience today and discover why Bougie Paws is the premier choice for discerning pet owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <Link to="/shop">Book Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}