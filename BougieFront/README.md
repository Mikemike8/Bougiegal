# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```























  {/* Services by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(serviceCategories).map(([category, categoryServices], categoryIndex) => {
            const CategoryIcon = categoryIcons[category] || Sparkles
            return (
              <div key={category} className={categoryIndex > 0 ? 'mt-32' : ''}>
                {/* Enhanced Category Header */}
                <div className="text-center mb-16 lg:mb-20">
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center shadow-lg">
                      <CategoryIcon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">{category}</h2>
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
                </div>
                
                {/* Enhanced Horizontal Layout - 2 Services Per Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {categoryServices.map((service, serviceIndex) => (
                    <Card 
                      key={service.id} 
                      className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden bg-white/80 backdrop-blur-sm"
                    >
                      <div className="relative h-64 lg:h-80 bg-gradient-to-br from-pink-100 to-blue-100 overflow-hidden">
                        {service.image_url ? (
                          <img
                            src={service.image_url}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <CategoryIcon className="h-24 w-24 text-pink-400" />
                          </div>
                        )}
                        
                        {/* Enhanced Price Badge */}
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-white/95 text-gray-900 hover:bg-white px-5 py-3 text-base font-bold shadow-lg">
                            ${service.price}
                          </Badge>
                        </div>
                        
                        {/* Enhanced Duration Badge */}
                        <div className="absolute bottom-6 left-6">
                          <Badge variant="secondary" className="bg-black/70 text-white hover:bg-black/80 px-4 py-3 backdrop-blur-sm text-base">
                            <Clock className="h-5 w-5 mr-2" />
                            {service.duration_minutes} min
                          </Badge>
                        </div>
                        
                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Enhanced Card Content with More Space */}
                      <CardHeader className="pb-6">
                        <CardTitle className="text-2xl lg:text-3xl text-gray-900 leading-tight">{service.name}</CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0 pb-10">
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg lg:text-xl">{service.description}</p>
                        
                        {/* Enhanced Bottom Section with More Spacing */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-base text-gray-500 mb-2">Starting at</span>
                            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                              ${service.price}
                            </div>
                          </div>
                          <Button
                            onClick={() => handleBookService(service)}
                            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-full px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            Book Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enhanced Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              {currentStep === 'details' && 'Booking Details'}
              {currentStep === 'payment' && 'Payment Information'}
              {currentStep === 'confirmation' && 'Booking Confirmed!'}
            </DialogTitle>
            
            {/* Progress Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === 'details' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>1</div>
                <div className={`w-16 h-1 rounded-full ${
                  ['payment', 'confirmation'].includes(currentStep) ? 'bg-pink-500' : 'bg-gray-200'
                }`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === 'payment' ? 'bg-pink-500 text-white' : ['confirmation'].includes(currentStep) ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>2</div>
                <div className={`w-16 h-1 rounded-full ${
                  currentStep === 'confirmation' ? 'bg-green-500' : 'bg-gray-200'
                }`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === 'confirmation' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>3</div>
              </div>
            </div>
          </DialogHeader>
          
          {selectedService && (
            <div className="space-y-6">
              {/* Enhanced Service Summary */}
              <Card className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center">
                        <Crown className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{selectedService.name}</h3>
                        <p className="text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {selectedService.duration_minutes} minutes
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Total</p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                        ${selectedService.price}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {currentStep === 'details' && (
                <div className="space-y-8">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm mr-3">1</div>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</Label>
                        <Input
                          id="firstName"
                          value={bookingData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={bookingData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Information Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm mr-3">2</div>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Pet Information Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm mr-3">3</div>
                      Pet Information
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="dogName" className="text-sm font-medium text-gray-700">Dog's Name</Label>
                        <Input
                          id="dogName"
                          value={bookingData.dogName}
                          onChange={(e) => handleInputChange('dogName', e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dogBreed" className="text-sm font-medium text-gray-700">Breed</Label>
                        <Input
                          id="dogBreed"
                          value={bookingData.dogBreed}
                          onChange={(e) => handleInputChange('dogBreed', e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dogAge" className="text-sm font-medium text-gray-700">Age (years)</Label>
                        <Input
                          id="dogAge"
                          type="number"
                          value={bookingData.dogAge}
                          onChange={(e) => handleInputChange('dogAge', e.target.value)}
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Appointment Scheduling Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm mr-3">4</div>
                      Appointment Scheduling
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="bookingDate" className="text-sm font-medium text-gray-700">Preferred Date *</Label>
                        <Input
                          id="bookingDate"
                          type="date"
                          value={bookingData.bookingDate}
                          onChange={(e) => handleInputChange('bookingDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="mt-2 h-12"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="bookingTime" className="text-sm font-medium text-gray-700">Preferred Time *</Label>
                        <Select value={bookingData.bookingTime} onValueChange={(value) => handleInputChange('bookingTime', value)}>
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {generateTimeSlots().map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Special Instructions Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm mr-3">5</div>
                      Special Instructions
                      <span className="text-sm font-normal text-gray-500 ml-2">(Optional)</span>
                    </h3>
                    <Textarea
                      id="specialInstructions"
                      value={bookingData.specialInstructions}
                      onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                      placeholder="Any special requests or concerns about your pet..."
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <Button 
                      variant="outline" 
                      onClick={resetBooking}
                      className="px-8 py-3 border-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleBookingSubmit}
                      disabled={bookingLoading || !bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.bookingDate || !bookingData.bookingTime}
                      className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {bookingLoading ? 'Processing...' : 'Continue to Payment →'}
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 'payment' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-3">Select Payment Method</h3>
                    <p className="text-gray-600 text-lg">Choose your preferred payment method for your booking</p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card 
                      className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                        paymentMethod === 'paypal' 
                          ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-200' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                      }`}
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          paymentMethod === 'paypal' ? 'bg-blue-500' : 'bg-gray-100'
                        }`}>
                          <CreditCard className={`h-8 w-8 ${paymentMethod === 'paypal' ? 'text-white' : 'text-blue-600'}`} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">PayPal</h4>
                        <p className="text-gray-600">Secure payment with PayPal</p>
                        <p className="text-sm text-gray-500 mt-2">Credit card, debit card, or PayPal balance</p>
                      </CardContent>
                    </Card>
                    
                    <Card 
                      className={`cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                        paymentMethod === 'cashapp' 
                          ? 'border-green-500 bg-green-50 shadow-lg shadow-green-200' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                      }`}
                      onClick={() => setPaymentMethod('cashapp')}
                    >
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          paymentMethod === 'cashapp' ? 'bg-green-500' : 'bg-gray-100'
                        }`}>
                          <DollarSign className={`h-8 w-8 ${paymentMethod === 'cashapp' ? 'text-white' : 'text-green-600'}`} />
                        </div>
                        <h4 className="text-xl font-bold mb-2">Cash App Pay</h4>
                        <p className="text-gray-600">Pay with Cash App</p>
                        <p className="text-sm text-gray-500 mt-2">Fast and secure mobile payment</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-yellow-800 text-sm font-bold flex-shrink-0 mt-1">!</div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Payment Framework Ready</h4>
                        <p className="text-sm text-yellow-700">
                          This booking system is ready for payment integration. PayPal and Cash App credentials can be configured to enable live payments.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep('details')}
                      className="px-8 py-3 border-gray-300 hover:bg-gray-50"
                    >
                      ← Back
                    </Button>
                    <Button
                      onClick={handlePayment}
                      disabled={bookingLoading}
                      className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 px-8 py-3 text-base font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {bookingLoading ? 'Processing...' : `Confirm Booking - $${selectedService.price}`}
                    </Button>
                  </div>
                </div>
              )}
              
              {currentStep === 'confirmation' && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for choosing Bougie Paws! We’ve received your booking and will contact you shortly to confirm your appointment.
                    </p>
                  </div>
                  
                  {bookingResult && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-6">
                        <div className="space-y-2 text-left">
                          <div className="flex justify-between">
                            <span className="font-medium">Booking ID:</span>
                            <span className="text-sm font-mono">{bookingResult.booking.id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Service:</span>
                            <span>{selectedService.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Date & Time:</span>
                            <span>{bookingData.bookingDate} at {bookingData.bookingTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Total:</span>
                            <span className="font-bold">${selectedService.price}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  
                  <Button
                    onClick={resetBooking}
                    className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
                  >
                    Book Another Service
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
