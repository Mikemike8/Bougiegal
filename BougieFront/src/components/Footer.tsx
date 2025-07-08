import { Link } from 'react-router-dom'
import { Heart, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-pink-400 group-hover:text-pink-300 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Bougie Paws
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              The premier destination for luxury dog grooming. We pamper your furry family members with the same attention to detail and elegance that Dior brings to fashion.
            </p>
            <div className="flex items-center space-x-2 text-pink-400">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made with love for your pets</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/shop' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-300 hover:text-pink-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Premium Services</h3>
            <div className="space-y-2">
              {[
                'Signature Luxury Bath',
                'The Dior Diamond Cut',
                'Spa Day Deluxe Package',
                'Royal Treatment Package',
                'Executive Express Groom',
              ].map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white">Luxury Location</div>
                  <div>123 Elite Boulevard</div>
                  <div>Beverly Hills, CA 90210</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white">Call Us</div>
                  <div>(555) 123-PAWS</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white">Email</div>
                  <div>hello@bougiepaws.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white">Hours</div>
                  <div>Mon-Sat: 8AM - 7PM</div>
                  <div>Sunday: 10AM - 5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Bougie Paws. All rights reserved. | Luxury Pet Grooming Services
            </div>
            <div className="text-gray-400 text-sm">
              Crafted with elegance and sophistication
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}