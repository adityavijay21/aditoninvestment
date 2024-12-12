import React from 'react';
import { motion } from 'framer-motion';

const FounderCard = ({ name, role, image, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-blue-100 shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-bold text-2xl text-[#0A3981] mb-2">{name}</h3>
    <p className="text-[#1F509A]/80 text-lg font-medium mb-2">{role}</p>
    <p className="text-[#1F509A]/70 text-center">{description}</p>
  </motion.div>
);

const Founders = () => {
  return (
    <section id="about" className="relative z-10 w-full px-4 py-16 bg-[#D4EBF8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 text-[#0A3981] mb-3 sm:mb-4 text-sm sm:text-base">
            Meet Our Founders
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A3981]">Visionary Leaders</h2>
          <p className="text-xl text-[#1F509A]/80 max-w-3xl mx-auto">
            Driving innovation in immigration lead generation
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <FounderCard
            name="Aditya Soni"
            role="Partner"
            image="/images/IMG_5076.JPG"
            description="With a passion for innovation and a deep understanding of the immigration industry, Aditya leads our company's vision and strategy."
          />
          <FounderCard
            name="Sharad Gautam"
            role="Partner"
            image="/images/IMG_5520.JPG"
            description="Sharadh brings years of executive experience to drive our operational excellence and ensure we deliver unparalleled value to our clients."
          />
        </div>
      </div>
    </section>
  );
};

export default Founders;
