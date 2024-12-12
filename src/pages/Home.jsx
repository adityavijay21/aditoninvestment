import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import Globe3D from '../components/Glode3D';
import { Stats } from '../components/stats';
import { Button } from '../ui/button';
import PremiumCTA from '../components/PremiumCTA';
import Footer from '../components/Footer';
import { ArrowRight, Globe2, Users2, ShieldCheck, HeadphonesIcon, BarChart3, Settings2, Star, CheckCircle } from 'lucide-react';
import FAQ from '../components/FAQ';

const AnimatedDotBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const numberOfDots = window.innerWidth < 640 ? 150 : 300;
      const newDots = Array.from({ length: numberOfDots }, (_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        direction: Math.random() > 0.5 ? 1 : -1,
        opacity: Math.random() * 0.4 + 0.2
      }));
      setDots(newDots);
    };

    generateDots();
    window.addEventListener('resize', generateDots);
    return () => window.removeEventListener('resize', generateDots);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ 
            x: dot.x, 
            y: dot.y,
            opacity: dot.opacity
          }}
          animate={{ 
            x: dot.x + dot.direction * 70,
            y: dot.y + dot.direction * 70,
            opacity: [dot.opacity, dot.opacity * 0.5, dot.opacity]
          }}
          transition={{
            duration: dot.speed * 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(212, 235, 248, 0.2)', 
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const features = [
    {
      icon: Users2,
      title: "Qualified HNWI Leads",
      description: "Access to pre-qualified high-net-worth individuals actively seeking immigration opportunities."
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Extensive network spanning key markets including China, Middle East, and Southeast Asia."
    },
    {
      icon: ShieldCheck,
      title: "Compliance Assured",
      description: "All leads are vetted according to international AML and KYC requirements."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "24/7 support team to assist with lead management and conversion optimization."
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      description: "Regular market reports and analytics to help optimize your campaigns."
    },
    {
      icon: Settings2,
      title: "Custom Solutions",
      description: "Tailored lead generation strategies aligned with your specific program requirements."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Plan",
      description: "Begin your lead generation journey",
      leads: "15-20 Leads",
      duration: "Within 30-60 Days",
      features: [
        "Qualified By Experts",
        "HNWI's Data",
        "Basic Support",
        "Monthly Reports"
      ],
      color: "bg-blue-500"
    },
    {
      name: "Premium Plan",
      description: "Elevate your lead generation game",
      leads: "30-50 Leads",
      duration: "Within 30-90 Days",
      features: [
        "Qualified By Experts",
        "HNWI's + UHNWI's Data",
        "Priority Support",
        "Weekly Reports",
        "Custom Campaign Strategy"
      ],
      color: "bg-purple-500"
    },
    {
      name: "Superior Plan",
      description: "Maximize your lead generation potential",
      leads: "120-150 Leads",
      duration: "Within 30-120 Days",
      features: [
        "Qualified By Experts",
        "HNWI's + UHNWI's Data",
        "24/7 Dedicated Support",
        "Daily Reports",
        "Custom Campaign Strategy",
        "Exclusive Market Insights"
      ],
      color: "bg-green-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Global Mobility Solutions",
      content: "Aditon Advertising has transformed our lead generation process. The quality of HNWI leads we receive is exceptional and has significantly improved our conversion rates."
    },
    {
      name: "Michael Chen",
      role: "Director, Pacific Immigration Services",
      content: "The ROI we've seen since partnering with Aditon has been remarkable. Their leads are well-qualified and ready to invest, saving us time and resources."
    },
    {
      name: "Elena Rodriguez",
      role: "Partner, European Migration Group",
      content: "Aditon's expertise in targeting high-net-worth individuals has been a game-changer for our firm. Their custom strategies have opened new markets for us."
    }
  ];

  return (
    <div className="relative min-h-screen text-[#0A3981] max-w-[100vw] overflow-x-hidden overflow-y-auto bg-[#D4EBF8]">
      <AnimatedDotBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative z-10 w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 px-4 relative z-20"
              >
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-4 sm:mb-6 text-sm sm:text-base">
                  #1 Immigration Lead Generation Platform
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 
                  bg-gradient-to-r from-[#0A3981] to-[#1F509A] bg-clip-text text-transparent 
                  break-words relative z-30">
                  Empowering Your Immigration Business
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-[#1F509A]/80 leading-relaxed 
                  break-words relative z-30">
                  Unlock unparalleled access to high-net-worth individuals seeking elite global immigration programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 relative z-30">
                  <Button size="lg" className="w-full sm:w-auto group bg-[#E38E49] hover:bg-[#1F509A] text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-[#1F509A]/10 text-[#0A3981] border-[#1F509A]">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative z-10"
              >
                <Suspense fallback={<div className="h-full flex items-center justify-center">Loading...</div>}>
                  <Globe3D />
                </Suspense>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative z-10 w-full px-4 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto bg-white/70 rounded-2xl sm:rounded-3xl shadow-lg">
            <Stats />
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-12 sm:mb-16 relative px-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
                Our Advantages
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0A3981] break-words">
                Why Choose Aditon Advertising?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#1F509A]/80 max-w-2xl mx-auto break-words">
                Experience the difference with our comprehensive suite of services
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-xl border border-[#1F509A]/20 bg-white/80 hover:shadow-lg hover:border-[#1F509A] transition-all duration-300 relative z-30"
                >
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E38E49] mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-[#0A3981] break-words">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1F509A]/80 leading-relaxed break-words">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#D4EBF8] to-white">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-12 sm:mb-16 relative px-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
                Our Pricing Plans
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0A3981] break-words">
                Choose the Right Plan for Your Business
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#1F509A]/80 max-w-2xl mx-auto break-words">
                Tailored solutions to meet your lead generation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col p-6 sm:p-8 rounded-xl border-2 border-[#1F509A]/20 bg-white shadow-lg hover:shadow-xl transition-all duration-300 relative z-30 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-2 ${plan.color}`}></div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#0A3981]">{plan.name}</h3>
                  <p className="text-[#1F509A]/80 mb-4">{plan.description}</p>
                  <div className="mb-6 flex-grow">
                    <p className="text-2xl font-semibold text-[#E38E49]">{plan.leads}</p>
                    <p className="text-sm text-[#1F509A]/70">{plan.duration}</p>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-[#1F509A]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full text-white ${plan.color} hover:opacity-90 transition-opacity duration-300`}
                    onClick={() => window.location.href = `mailto:info@aditonadvertising.com?subject=Inquiry about ${plan.name}`}
                  >
                    Get Started
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24 bg-[#F8FBFE]">
          <div className="max-w-7xl mx-auto relative z-20">
            <div className="text-center mb-12 sm:mb-16 relative px-4">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
                Client Success Stories
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0A3981] break-words">
                What Our Partners Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 w-6 h-6 mr-2" />
                    <Star className="text-yellow-400 w-6 h-6 mr-2" />
                    <Star className="text-yellow-400 w-6 h-6 mr-2" />
                    <Star className="text-yellow-400 w-6 h-6 mr-2" />
                    <Star className="text-yellow-400 w-6 h-6" />
                  </div>
                  <p className="text-[#1F509A]/80 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-[#0A3981]">{testimonial.name}</p>
                    <p className="text-sm text-[#1F509A]/60">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
        <PremiumCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

