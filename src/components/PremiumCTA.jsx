import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react'; 

const PremiumCTA = () => {
  return (
    <section className="w-full px-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[90rem] mx-auto">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#D4EBF8] to-[#1F509A]/20 p-6 sm:p-12 md:p-16 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1F509A_0,transparent_50%)] opacity-20" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#0A3981] relative break-words">
            Ready to Scale Your Immigration Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-[#1F509A] max-w-2xl mx-auto relative break-words">
            Join leading immigration firms worldwide who trust Aditon Advertising for qualified HNWI leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <Button size="lg" className="w-full sm:w-auto bg-[#E38E49] hover:bg-[#0A3981] group text-white">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-[#1F509A]/10 text-[#0A3981] border-[#1F509A]">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCTA;