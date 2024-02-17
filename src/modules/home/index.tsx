'use client';

import { selectUser } from '@/lib/features/users/usersSlice';
import { FC } from 'react';
import { useSelector } from 'react-redux';

const HomePage: FC = () => {
  const userSelector: any = useSelector(selectUser);

  return (
    <p className="text-2xl font-bold">
      Hi {userSelector ? userSelector.username : ''} !
    </p>
  );
};

export default HomePage;
