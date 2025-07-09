import { Card, CardContent } from '@/components/ui/card'
import { Award, Heart, Star, Users, Crown, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Crown,
      title: 'Luxury Excellence',
      description: 'I believe every pet deserves the finest care, delivered with the same attention to detail that defines everything I do.'
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'My love for animals drives everything I do. Every service is performed with genuine care and respect for your pet’s comfort and well-being.'
    },
    {
      icon: Award,
      title: 'Professional Mastery',
      description: 'I am a certified professional with years of experience in luxury pet grooming and an unwavering commitment to excellence.'},
    {
      icon: Sparkles,
      title: 'Personalized Experience',
      description: 'I understand that every pet is unique. My services are tailored to meet the individual needs and personality of each furry client.'}
  ]

  const team = [
   
  {
    name: 'Custom Styling',
    title: 'Signature Cuts & Creative Styling',
    experience: 'Tailored to your pet',
    specialty: 'Creating unique, fashionable looks for every pet',
    image: '/images/tishdogOne.jpg'
  },
  {
    name: 'Therapeutic Treatment',
    title: 'Relaxing Spa Treatments',
    experience: 'Wellness focused',
    specialty: 'Soothing baths, skin care, and calming therapies',
    image: '/images/tishdogTwo.jpg'
  },
  {
    name: 'Breed-Specific Grooming',
    title: 'Expert Breed Standards',
    experience: 'Precision and care',
    specialty: 'Perfect trims and styling for each breed’s unique needs',
    image: '/images/tishdogThree.jpg'
  }


  ]

  const stats = [
    { number: '500+', label: 'Happy Pets Served' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '5★', label: 'Average Rating' },
    { number: '24/7', label: 'Care Support' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  My <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Story</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Born from a passion for luxury and an unwavering love for animals, Bougie Paws represents the pinnacle of pet grooming excellence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
               With a touch of timeless sophistication, Bougie paws offer a grooming experience that transforms your beloved pet into a work of art while ensuring their comfort and happiness every step of the way.</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-white/60 backdrop-blur-sm">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/tish.jpg"
                  alt="Bougie Paws luxury salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full opacity-20" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-pink-500 to-purple-500" />
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">My Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide an unparalleled luxury grooming experience that celebrates the unique beauty of every pet while ensuring their comfort, safety, and happiness. We strive to create lasting relationships with pet families through exceptional service and genuine care.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-500" />
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">My Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the world’s most trusted name in luxury pet grooming, setting the standard for excellence in the industry. We envision a world where every pet receives the royal treatment they deserve, regardless of size, breed, or background.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Me <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">Master Groomer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate professionals bring years of experience and an unwavering commitment to your pet’s well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium mb-2">
                      {member.experience} Experience
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Specialty:</span> {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
              <Users className="h-5 w-5 text-pink-300" />
              <span className="text-sm font-medium">My Promise to You</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Pet’s Happiness is My Priority
            </h2>
            
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
           “I understand that your pet is not just an animal — they’re a cherished member of your family. That’s why I’ve dedicated myself to providing a grooming experience that prioritizes their comfort, safety, and happiness above all else.”</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Eco</div>
                <div className="text-sm opacity-90">Friendly Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}