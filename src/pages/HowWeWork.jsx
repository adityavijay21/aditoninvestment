import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, Filter, Clock, BarChartIcon as ChartBar, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import Footer from '../components/Footer';
import PremiumCTA from '../components/PremiumCTA';

const processSteps = [
  {
    icon: <Users className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Client Consultation",
    description: "We begin with an in-depth consultation to understand your specific needs, target markets, and immigration program focus."
  },
  {
    icon: <Target className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Audience Research",
    description: "Our team conducts thorough research to identify high-net-worth individuals interested in immigration opportunities."
  },
  {
    icon: <Filter className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Lead Qualification",
    description: "We meticulously screen and qualify each lead to ensure they meet the financial and personal criteria for your programs."
  },
  {
    icon: <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Real-Time Delivery",
    description: "Qualified leads are delivered to you in real-time, allowing for immediate follow-up and higher conversion rates."
  },
  {
    icon: <ChartBar className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Performance Analysis",
    description: "We continuously monitor and analyze campaign performance, making data-driven adjustments for optimal results."
  },
  {
    icon: <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-[#E38E49]" />,
    title: "Ongoing Optimization",
    description: "Our team works tirelessly to refine strategies, ensuring your lead generation efforts stay ahead of the curve."
  }
];

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-[#D4EBF8] text-[#0A3981]">
      {/* Hero Section */}
      <section className="w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4EBF8] to-[#F8FBFE] opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0A3981] to-[#1F509A]">
              How We Work
            </h1>
            <p className="text-xl md:text-2xl text-[#1F509A]/80 mb-8 max-w-3xl mx-auto">
              Discover our proven process for delivering high-quality HNWI leads for immigration programs
            </p>
            <Button size="lg" className="bg-[#E38E49] hover:bg-[#1F509A] text-white">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="w-full px-4 py-16 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A3981]">Our Streamlined Process</h2>
          <div className="relative">
            <svg className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" viewBox="0 0 2 100" preserveAspectRatio="none">
              <path d="M1 0 Q 1.5 50 1 100" stroke="#E38E49" strokeWidth="2" fill="none" />
            </svg>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-[#1F509A]/20 relative">
                    <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-4' : '-left-4'} transform -translate-y-1/2 w-8 h-8 bg-[#E38E49] rounded-full border-4 border-white z-10`}></div>
                    <div className="flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#0A3981]">{step.title}</h3>
                    <p className="text-sm text-[#1F509A]/80">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full px-4 py-16 bg-[#F8FBFE]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A3981]">Our Unique Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-[#1F509A]/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0A3981]">Data-Driven Targeting</h3>
              <p className="text-[#1F509A]/80 mb-4">
                We leverage advanced data analytics and AI to identify and target high-net-worth individuals who are most likely to be interested in immigration programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Predictive modeling for lead scoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Behavioral analysis for personalized outreach</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Continuous refinement of targeting criteria</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-[#1F509A]/20"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#0A3981]">Multi-Channel Engagement</h3>
              <p className="text-[#1F509A]/80 mb-4">
                We employ a diverse range of channels to reach and engage potential clients, ensuring maximum visibility and response rates for your immigration programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Targeted social media campaigns</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Personalized email marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#E38E49] mr-2" />
                  <span className="text-[#1F509A]/80">Strategic partnerships with luxury brands</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full px-4 py-16 bg-gradient-to-r from-[#0A3981] to-[#1F509A] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <blockquote className="text-2xl italic mb-4">
            "Aditon Advertising has revolutionized our lead generation process. The quality of leads we receive is unparalleled, and it's significantly improved our conversion rates."
          </blockquote>
          <p className="text-xl font-semibold">- Sarah Johnson, CEO of Global Mobility Solutions</p>
        </div>
      </section>

      <PremiumCTA />
      <Footer />
    </div>
  );
};

export default HowWeWork;

