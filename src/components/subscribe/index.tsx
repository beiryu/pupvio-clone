'use client';

import Image from 'next/image';
import React from 'react';

import { InputWithButton } from '../input/input-with-button';

const Subscribe = () => {
  return (
    <div className="lg:flex-row px-10 py-16 w-full flex flex-col items-center gap-10 justify-between bg-[#0047ff]">
      <div className='basis-1/2'>
        <p className="text-white text-[25px] font-medium pb-10">
          Subscribe for our newsletter
        </p>
        <InputWithButton />
      </div>
      <div className='m-auto'>
        <Image
          unoptimized
          alt="subscribe"
          height={200}
          width={250}
          src="/assets/images/subscribe.png"
        />
      </div>
    </div>
  );
};

export default Subscribe;
