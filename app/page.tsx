import { Phone, Shield, Clock, Star, CheckCircle, Wrench, Droplet, FlameKindling, Zap, Home, Users, ThumbsUp } from "lucide-react";

export default function DenverPlumbingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Denver Plumbing Co.</div>
          <div className="flex items-center space-x-4">
            <a href="tel:720-555-0123" className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(720) 555-0123</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Denver's Trusted Plumbing Experts</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Licensed, bonded, and insured plumbers serving Denver and surrounding areas. 
            Emergency services available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:720-555-0123" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2">
              <Phone className="w-6 h-6" />
              <span>Call Now for Emergency Service</span>
            </a>
            <a href="#contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Denver Plumbing Co.?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock availability for urgent repairs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5-Star Reviews</h3>
              <p className="text-gray-600">Highly rated by satisfied customers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Plumbing Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <Droplet className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Water Heater Services</h3>
              </div>
              <p className="text-gray-600 mb-4">Installation, repair, and replacement of traditional and tankless water heaters</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Same-day water heater replacement</li>
                <li>• Tankless water heater installation</li>
                <li>• Emergency repairs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <Wrench className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Drain Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">Professional drain and sewer cleaning services</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Clogged drain cleaning</li>
                <li>• Sewer line inspection</li>
                <li>• Hydro jetting services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Toilet Repairs</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete toilet repair and replacement services</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Toilet installation</li>
                <li>• Running toilet fixes</li>
                <li>• Toilet unclogging</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Emergency Plumbing</h3>
              </div>
              <p className="text-gray-600 mb-4">24/7 emergency plumbing services</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Burst pipe repairs</li>
                <li>• Water leak detection</li>
                <li>• Emergency shutoffs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <FlameKindling className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Pipe Repairs</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive pipe repair and replacement</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Leaking pipe repairs</li>
                <li>• Pipe replacement</li>
                <li>• Repiping services</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-900 mr-3" />
                <h3 className="text-xl font-semibold">Bathroom Remodeling</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete bathroom renovation plumbing</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fixture installation</li>
                <li>• Plumbing layout changes</li>
                <li>• New construction plumbing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Denver Plumbing Co.</h2>
              <p className="text-gray-600 mb-4">
                Denver Plumbing Co. has been serving the Denver metropolitan area and surrounding communities 
                for over 20 years. Our team of licensed, experienced plumbers provides reliable, professional 
                plumbing services for residential and commercial properties.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in delivering quality workmanship, honest pricing, and exceptional customer service. 
                Whether you need emergency repairs, routine maintenance, or a complete plumbing renovation, 
                we have the expertise to get the job done right.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-900" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-900" />
                  <span className="text-sm">20+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-5 h-5 text-blue-900" />
                  <span className="text-sm">Local Family Owned</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>• Denver</div>
                <div>• Aurora</div>
                <div>• Lakewood</div>
                <div>• Thornton</div>
                <div>• Arvada</div>
                <div>• Westminster</div>
                <div>• Englewood</div>
                <div>• Littleton</div>
                <div>• Wheat Ridge</div>
                <div>• Commerce City</div>
                <div>• Broomfield</div>
                <div>• Northglenn</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our hot water heater started leaking and Denver Plumbing Co. was able to replace it the same day. 
                Great service and fair pricing!"
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional, punctual, and reasonably priced. They fixed our kitchen sink issue quickly and 
                cleaned up after themselves. Highly recommend!"
              </p>
              <p className="font-semibold">- Mike R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Called them for an emergency pipe burst. They came out within an hour and had it fixed quickly. 
                Excellent emergency service!"
              </p>
              <p className="font-semibold">- Jennifer L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Your Free Estimate</h2>
              <p className="text-blue-100 mb-6">
                Ready to solve your plumbing problems? Contact Denver Plumbing Co. today for a free, 
                no-obligation estimate. We're here to help with all your plumbing needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <span className="text-xl">(720) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <span>24/7 Emergency Service Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <span>Licensed, Bonded & Insured</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg text-gray-900">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">How Can We Help You?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your plumbing needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Get Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Denver Plumbing Co.</h3>
              <p className="text-gray-400 mb-4">
                Your trusted local plumbing experts serving Denver and surrounding areas for over 20 years.
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>(720) 555-0123</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Water Heater Services</li>
                <li>Drain Cleaning</li>
                <li>Toilet Repairs</li>
                <li>Emergency Plumbing</li>
                <li>Pipe Repairs</li>
                <li>Bathroom Remodeling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Denver</li>
                <li>Aurora</li>
                <li>Lakewood</li>
                <li>Thornton</li>
                <li>Arvada</li>
                <li>Westminster</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Emergency Service</li>
                <li>Licensed & Insured</li>
                <li>Free Estimates</li>
                <li>Satisfaction Guaranteed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Denver Plumbing Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
