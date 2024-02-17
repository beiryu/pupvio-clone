'use client';

import React, { FC } from 'react';
import SupportForm from '@/components/forms/support-form';
import { Icons } from '@/lib/icons/iconsSvg';
import { useSelector } from 'react-redux';
import { selectUser } from '@/lib/features/users/usersSlice';

const Support: FC = () => {
  const userSelector = useSelector(selectUser);
  return (
    <div className="container relative h-[800px] flex-col items-center justify-center md:grid md:max-w-none md:grid-cols-2 md:px-0">
      <div className="hidden md:flex bg-[#000]flex-1 flex-col justify-center items-center p-20">
        <Icons.headphoneLogo width={180} height={180} />
        <Icons.baseLogo width={300} height={300} />
      </div>
      <div className="flex-1">
        <SupportForm />
      </div>
    </div>
  );
};

export default Support;
