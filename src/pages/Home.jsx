import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stats } from '../components/stats';
import { Button } from '../ui/button';
import Globe3D from '../components/Glode3D';
import PremiumCTA from '../components/PremiumCTA';
import Footer from '../components/Footer';
import { ArrowRight, Globe2, Users2, ShieldCheck, HeadphonesIcon, BarChart3, Settings2, CheckCircle } from 'lucide-react'; // Removed unused import Star
import FAQ from '../components/FAQ';
import Testimonial from '../components/Testimonial';
import Founders from '../components/Founders';
import Modal from '../components/Modal';



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

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://as2.ftcdn.net/v2/jpg/01/73/21/81/1000_F_173218114_a9aGZyRW6stMASOKVvlTscWyMsrWcdf3.jpg",
    "https://as1.ftcdn.net/v2/jpg/02/25/72/22/1000_F_225722233_UaFHWKTZTRh5cdQVNEHz0wsvYqNOZitt.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/01/17/51/1000_F_201175173_QTZx2gCqEgu9aQlmNtUyBmgzGnQZaWqq.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);


  const programs = [
    { name: "Caribbean", description: "Explore immigration options in the Caribbean, offering easy pathways to permanent residency and citizenship.", flag: "🇨🇦" },
    { name: "Canada", description: "Access Canada's robust immigration programs, offering opportunities for skilled professionals, entrepreneurs, and investors.", flag: "🇨🇦" },
    { name: "Hungary", description: "Benefit from Hungary’s Golden Visa program, which allows for residency through investment.", flag: "🇭🇺" },
    { name: "Greece", description: "Take advantage of Greece’s Golden Visa Program, providing residency through investment in real estate.", flag: "🇬🇷" },
    { name: "Portugal", description: "Portugal offers one of the most popular Golden Visa programs, ideal for investors seeking residency in the EU.", flag: "🇵🇹" },
    { name: "EB-5", description: "The EB-5 program offers a pathway to permanent residency in the U.S. through investment in job-creating businesses.", flag: "🇺🇸" },
    { name: "Turkey", description: "Turkey offers a citizenship-by-investment program with attractive opportunities in real estate and business.", flag: "🇹🇷" },
  ];

  const handleGetLeads = (program) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

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
        <section className="relative z-10 w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
          <BackgroundCarousel />
          
          <div className="max-w-7xl mx-auto relative z-10">
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
                    Inquire Now
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

        {/* Programs Section */}
        <section className="w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">Programs We Work on</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div key={program.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-2xl font-semibold">{program.name} {program.flag}</div>
                  <p className="mt-4 text-sm text-gray-600">{program.description}</p>
                  <Button
                    className="mt-6 w-full bg-blue-500 text-white"
                    onClick={() => handleGetLeads(program)}
                  >
                    Get Qualified Leads
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Lead Collection */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleFormSubmit}
        />

        {/* Stats Section 
        <section className="relative z-10 w-full px-4 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto bg-white/70 rounded-2xl sm:rounded-3xl shadow-lg">
            <Stats />
          </div>
        </section> */}

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
        <section id="pricing" className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#D4EBF8] to-white">
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
        <section id="testimonials" className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24 bg-[#F8FBFE]">
          <div className="max-w-7xl mx-auto relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 sm:mb-16 relative px-4"
            >
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
                Client Success Story
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0A3981] break-words">
                What Our Partners Say
              </h2>
              <p className="text-lg text-[#1F509A]/80 max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience with Aditon Advertising
              </p>
            </motion.div>

            <Testimonial
              name="Kyle de Klerk"
              role="Business Development Manager"
              company="Holborn Assets LLC"
              content="I want to express my gratitude for Aditya, our Citizenship by Investment Lead Specialist. Aditya not only delivered exceptional results as promised but exceeded our expectations. His strategic approach and industry expertise led to a substantial increase in quality leads for our program. Aditya's proactive communication and adaptability showcased his professionalism, making our collaboration seamless. We're not just satisfied with the immediate results; we're excited about the future. Our successful partnership will undoubtedly continue, and we look forward to achieving even greater milestones together."
              image="/images/WhatsApp Image 2024-12-12 at 18.15.39.jpeg"
            />
          </div>
        </section>

        {/* Meet the Founders Section */}
        <Founders />

        {/* FAQ Section */}
        <FAQ />

        <PremiumCTA />
        <Footer />
        {/* WhatsApp Sticky Button */}
        <a
          href="https://wa.me/+917410893130"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
