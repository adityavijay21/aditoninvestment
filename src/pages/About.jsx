import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Button } from '../ui/button';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  Compass,
  Heart, 
  Users2,
  Globe,
  Star,
  Briefcase,
  Rocket
} from 'lucide-react';

const teamMembers = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp0GbYPeR_WDX5mCzvcOTY004J_d3Ef5Mtg&s",
    name: "Sarah Johnson",
    role: "CEO & Founder",
    icon: <Star className="w-6 h-6 text-yellow-500" />
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp0GbYPeR_WDX5mCzvcOTY004J_d3Ef5Mtg&s",
    name: "Michael Chen",
    role: "Lead Strategy Officer",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp0GbYPeR_WDX5mCzvcOTY004J_d3Ef5Mtg&s",
    name: "Emma Williams",
    role: "Head of Operations",
    icon: <Globe className="w-6 h-6 text-green-500" />
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpp0GbYPeR_WDX5mCzvcOTY004J_d3Ef5Mtg&s",
    name: "David Miller",
    role: "Marketing Director",
    icon: <Rocket className="w-6 h-6 text-purple-500" />
  }
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-black max-w-[100vw] overflow-x-hidden overflow-y-auto">
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
              <Globe className="w-4 h-4" />
              About Aditon Advertising
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Trusted Partner in Immigration Lead Generation
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-black leading-relaxed">
              We specialize in connecting immigration professionals with pre-qualified high-net-worth individuals seeking global mobility solutions. Through innovative technology and deep market insights, we deliver leads that convert, helping your business scale efficiently and effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[90rem] mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the world's leading platform connecting immigration professionals with qualified prospects, driving industry innovation and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <Compass className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium-quality leads and innovative solutions that empower immigration professionals to achieve exceptional business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <Heart className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed">
                We uphold unwavering integrity in all our dealings, drive continuous innovation and improvement, deliver excellence in every interaction, and foster strong partnerships to grow together with our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-4 py-16 bg-white">
        <div className="max-w-[90rem] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 mb-4">
              <Users2 className="w-4 h-4" />
              Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts combines decades of experience in immigration, marketing, and technology to deliver exceptional results for our clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[16/9]"
                >
                  <img
                    src={teamMembers[currentSlide].image}
                    alt={teamMembers[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {teamMembers[currentSlide].icon}
                      <h3 className="text-xl font-bold">{teamMembers[currentSlide].name}</h3>
                    </div>
                    <p>{teamMembers[currentSlide].role}</p>
                  </div>
                </motion.div>
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
              
              <div className="flex justify-center mt-4 gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-[90rem] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join leading immigration firms worldwide who trust Aditon Advertising for qualified leads and comprehensive marketing solutions
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
