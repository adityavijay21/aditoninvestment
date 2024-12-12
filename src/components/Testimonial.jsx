import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonial = ({ name, role, company, content, image }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100 shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">&ldquo;{content}&rdquo;</p>
        <div>
          <h3 className="font-bold text-xl text-[#0A3981]">{name}</h3>
          <p className="text-[#1F509A]/80 font-medium">{role}</p>
          <p className="text-[#1F509A]/60">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;

