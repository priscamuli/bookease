import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CreditCard, Users, Phone } from "lucide-react";
import logo from "./assets/logo.png";
import herobackground from "./assets/herobackground.png";
import image4 from "./assets/image4.jpg";

function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const booking = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      service: formData.get("service"),
    };
    console.log("Booking submitted:", booking);
    setSubmitted(true);
    e.target.reset();
  };

  return (
   <div className="bg-gradient-to-b from-orange-50 to-white text-gray-800">
  {/* Navbar */}
  <nav className="sticky top-0 bg-white shadow-md z-50">
    <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-4">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
        <span className="font-bold text-lg md:text-xl text-orange-500">BookEase</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-orange-500 hover:text-orange-600 visited:text-orange-500">Home</a>
        <a href="#features" className="hover:text-orange-600">Features</a>
        <a href="#demo" className="hover:text-orange-600">Demo</a>
        <a href="#pricing" className="hover:text-orange-600">Pricing</a>
        <a href="#contact" className="hover:text-orange-600">Contact</a>
      </div>
    </div>
  </nav>

  {/* Hero Section */}
  <section id="home" className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    <div className="relative w-full flex justify-center">
      <div className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[600px]">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-50 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 md:px-8">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Smart Booking with <span className="text-orange-500">BookEase</span>
          </motion.h1>
          <motion.p
            className="mb-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Manage appointments, reservations, and payments seamlessly.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#demo"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 shadow-md transition"
            >
              Try Demo
            </a>
            <a
              href="#pricing"
              className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300 shadow-md transition"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>


      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-orange-500">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <CalendarDays className="w-10 h-10 text-orange-500" />, title: "Scheduling", desc: "Book appointments and manage calendars effortlessly." },
              { icon: <CreditCard className="w-10 h-10 text-orange-500" />, title: "Payments", desc: "Secure online payments and invoicing." },
              { icon: <Users className="w-10 h-10 text-orange-400" />, title: "Customer Management", desc: "Track customer details and booking history." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg md:text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section id="demo" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600">Try a Demo Booking</h2>
          <p className="mb-8 text-gray-600">Experience how easy it is to schedule an appointment with BookEase.</p>

          <form
            className="max-w-lg mx-auto bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg space-y-6 transition hover:shadow-xl"
            onSubmit={handleSubmit}
          >
            {["name", "email", "date", "time"].map((field, i) => (
              <div key={i} className="text-left">
                <label className="block text-gray-700 mb-2 font-medium capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : field}
                  name={field}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
            ))}
            <div className="text-left">
              <label className="block text-gray-700 mb-2 font-medium">Service</label>
              <select
                name="service"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              >
                <option value="">Select a service</option>
                <option value="Consultation">Consultation</option>
                <option value="Reservation">Reservation</option>
                <option value="Event Booking">Event Booking</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-orange-400 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-transform transform hover:scale-105 shadow-md"
            >
              Book Now
            </button>
            {submitted && (
              <div className="mt-6 p-4 bg-orange-100 text-orange-500 rounded-lg text-left shadow-sm">
                ✅ Booking submitted successfully! Check the console for details.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Pricing Section */}
            {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-orange-600">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { plan: "Starter", kes: "KES 5,000/mo", usd: "$40/mo", desc: "Perfect for small businesses" },
              { plan: "Professional", kes: "KES 15,000/mo", usd: "$120/mo", desc: "For growing businesses" },
              { plan: "Enterprise", kes: "KES 50,000/mo", usd: "$400/mo", desc: "For large organizations" },
            ].map((tier, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.plan}</h3>
                <p className="text-orange-600 text-2xl md:text-3xl font-semibold mb-1">{tier.kes}</p>
                <p className="text-gray-500 text-sm mb-4">{tier.usd}</p>
                <p className="mb-4 text-gray-700 italic">{tier.desc}</p>
                <a
                  href="#demo"
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition visited:text-white"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Call-to-Action Banner */}
<section className="bg-gray-50 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
      Ready to simplify your bookings?
    </h2>
    <p className="text-black mb-6 max-w-xl mx-auto">
      Join businesses already using BookEase to manage appointments, payments, and customers effortlessly.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="#demo"
        className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition shadow-md"
      >
        Try Demo
      </a>
      <a
        href="#pricing"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition shadow-md"
      >
        View Pricing
      </a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 text-center md:text-left">
            <motion.img
              src={logo}
              alt="Logo"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full mb-8 md:mb-0 shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-gray-600">
                Have questions? Reach out and we’ll be happy to help.
              </p>
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 justify-center md:justify-start">
                <a href="tel:+254700000000" className="flex items-center space-x-2 text-orange-600 hover:underline">
                  <Phone className="w-5 h-5" /> <span>+254 700 000 000</span>
                </a>
                <a href="mailto:info@bookease.com" className="flex items-center space-x-2 text-orange-600 hover:underline">
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 shadow-inner">
        © {new Date().getFullYear()} BookEase. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
