import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Users, Megaphone, PieChart, Lock, RefreshCcw, Banknote, Briefcase, BarChart } from 'lucide-react';

const faqs = [
  {
    question: "WHERE WOULD THE APPLICANT BE BASED?",
    answer: "We conduct highly targeted ad campaigns, specifically tailored to reach audiences within the geographical regions of your preference.",
    icon: MapPin,
  },
  {
    question: "DOES THE COST PER LEAD VARY BY LOCATION?",
    answer: "Indeed, prices can vary slightly in the USA, Canada, and Australia due to specific market conditions. However, we work to maintain competitive and consistent pricing in other countries, prioritizing affordability and fairness.",
    icon: DollarSign,
  },
  {
    question: "CAN YOU TARGET SPECIFIC NATIONALITIES?",
    answer: "We can only target individuals residing in a specific country. Unfortunately, most advertising platforms lack specific filters for nationality. However, we'll work diligently to reach the right audience within your chosen location.",
    icon: Users,
  },
  {
    question: "WHAT MARKETING CHANNELS ARE PART OF YOUR STRATEGY?",
    answer: "We utilize various advertising platforms such as Facebook, Instagram, Native ads, and LinkedIn to reach our desired audience. Through these diverse channels, we curate and deliver leads belonging to the (HNWI & UHNWI) categories.",
    icon: Megaphone,
  },
  {
    question: "DO YOU OPERATE ON A REVENUE-SHARING OR COMMISSION BASIS?",
    answer: "At Aditon, we don't operate on revenue-sharing or commission arrangements. Instead, we are committed to offering you high-quality leads and appointments, prioritizing your satisfaction and the achievement of your goals.",
    icon: PieChart,
  },
  {
    question: "HOW CAN I BE SURE THAT MY LEADS WON'T BE SHARED WITH OTHER COMPANIES?",
    answer: "We prioritize lead confidentiality. You can trust our stringent policies that ensure each lead we generate is exclusive to your company. Rest assured, we never share your leads with any other organizations, guaranteeing the exclusivity and privacy of your leads.",
    icon: Lock,
  },
  {
    question: "DO YOU HAVE A REFUND POLICY?",
    answer: "Your satisfaction is paramount. In rare cases where we can't fully meet commitments, we offer a partial refund of up to 50%. However, our track record showcases our commitment to excellence, and we remain dedicated to providing high-quality, qualified leads.",
    icon: RefreshCcw,
  },
  {
    question: "WHY IS THE COST PER LEAD HIGH?",
    answer: "The cost per lead may appear higher because our process involves generating a substantial number of leads, typically 100-300, in your preferred geography. Our expert team engages with these leads, conducting in-depth qualifications and consistent follow-ups to ensure we deliver only the highest-quality leads to you. Additionally, all costs associated with achieving our goals are covered by us, ensuring you receive exceptional value.",
    icon: Banknote,
  },
  {
    question: "OUR TEAM CAN ALSO RUN CAMPAIGNS, SO WHY SHOULD WE HIRE YOU?",
    answer: "While your in-house team is a great asset, partnering with us brings expertise and hassle-free lead generation. Our seasoned experts handle marketing complexities, keeping you up-to-date with evolving tactics. You'll enjoy direct access to qualified leads, making your business growth seamless.",
    icon: Briefcase,
  },
  {
    question: "WHAT'S THE CLIENT CONVERSION RATE OUT OF THE LEADS YOU PROVIDE?",
    answer: "Conversion rates hinge on your sales team's skills. Our records show an 8-10% closing ratio with qualified leads. However exceptional sales teams can achieve even higher rates.",
    icon: BarChart,
  },
  {
    question: "HOW DO YOU MEASURE LEADS AS QUALIFIED?",
    answer: "A qualified lead for us signifies individuals with a genuine intent and purchasing capacity for a second citizenship. Typically, this entails being a business owner or a top-level management professional with high net worth. Our focus is on connecting you with individuals who align with these criteria.",
    icon: Users,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 w-full px-4 py-16 sm:py-20 lg:py-24 bg-[#D4EBF8]">
      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 relative px-4"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#0A3981] break-words">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#1F509A]/80 max-w-2xl mx-auto break-words">
            Find answers to common questions about our services and process
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-30"
            >
              <div 
                className="p-6 sm:p-8 rounded-xl border-2 border-[#1F509A]/20 bg-white/80 hover:shadow-lg hover:border-[#1F509A] transition-all duration-300 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-4 bg-[#E38E49]/10 p-2 sm:p-3 rounded-full">
                      <faq.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#E38E49]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0A3981] break-words">
                      {faq.question}
                    </h3>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 text-[#1F509A] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {openIndex === index && (
                  <div className="pl-16 sm:pl-20 mt-2 text-sm sm:text-base text-[#1F509A]/80 leading-relaxed break-words">
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;