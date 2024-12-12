import { motion } from 'framer-motion';

const services = [
  {
    title: "Qualified HNWI Leads",
    description: "Every lead is thoroughly vetted and pre-qualified."
  },
  {
    title: "Customized Campaigns",
    description: "Targeted strategies for specific programs like EB-5 or Golden Visas."
  },
  {
    title: "Expert Support",
    description: "From campaign creation to lead delivery, we're with you every step of the way."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-bold mb-8 text-center"
        >
          Tailored Solutions for Immigration Professionals
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl mb-6">
            At Aditon, we don't just deliver leads – we deliver results. Our focus on quality ensures your business connects with the right people, increasing conversions and maximizing your ROI.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300"
          >
            Request a Proposal Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

