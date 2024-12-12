import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Button } from '../ui/button';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email",
    content: "info@aditonadvertising.com",
    link: "mailto:info@aditonadvertising.com"
  },
  {
    icon: <Phone className="w-6 h-6 text-green-600" />,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: <MapPin className="w-6 h-6 text-red-600" />,
    title: "Address",
    content: "123 Business Ave, Suite 100, New York, NY 10001",
    link: "https://maps.google.com/?q=123+Business+Ave,+Suite+100,+New+York,+NY+10001"
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-600" />,
    title: "Business Hours",
    content: "Monday - Friday: 9AM - 5PM EST",
    link: null
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const sendEmail = httpsCallable(functions, 'sendEmail');

    try {
      const result = await sendEmail(formData);
      console.log('Function result:', result);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error calling function:', error);
      toast.error(`Failed to send message: ${error.message || 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-black max-w-[100vw] overflow-x-hidden overflow-y-auto">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Hero Section */}
      <section className="w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="max-w-[90rem] mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-600 mb-4 sm:mb-6 text-sm sm:text-base">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch with Aditon Advertising
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-black leading-relaxed">
              Have questions about our services or ready to start generating high-quality leads? We're here to help. Reach out to our team of experts today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-blue-600 hover:underline">{item.content}</a>
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full px-4 py-16 bg-white">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095989635!2d-74.00425878428698!3d40.74076904379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1637176218061!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-[90rem] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Elevate Your Lead Generation?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't miss out on high-quality leads. Let's discuss how Aditon Advertising can transform your immigration business.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

