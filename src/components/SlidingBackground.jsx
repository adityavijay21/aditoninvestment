import React from 'react';
import Image from 'next/image';

const SlidingBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 w-[300%] h-full flex animate-slide">
        <div className="w-1/3 h-full relative">
          <Image
            src="https://as2.ftcdn.net/v2/jpg/01/73/21/81/1000_F_173218114_a9aGZyRW6stMASOKVvlTscWyMsrWcdf3.jpg"
            alt="Sliding background 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="https://as1.ftcdn.net/v2/jpg/02/25/72/22/1000_F_225722233_UaFHWKTZTRh5cdQVNEHz0wsvYqNOZitt.jpg"
            alt="Sliding background 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-1/3 h-full relative">
          <Image
            src="https://as2.ftcdn.net/v2/jpg/02/01/17/51/1000_F_201175173_QTZx2gCqEgu9aQlmNtUyBmgzGnQZaWqq.jpg"
            alt="Sliding background 3"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SlidingBackground;
