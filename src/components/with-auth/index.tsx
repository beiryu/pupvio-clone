import { setUserState } from '@/lib/features/users/usersSlice';
import { retrieveFromStorage } from '@/lib/utils/storage.util';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AntSpin from '../spin';
import { User } from '@/interfaces/user/user.interface';

export default function withAuth(Component: any) {
  const WrappedComponent = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
      const accessToken = retrieveFromStorage('access_token');
      const storedUserInfo = retrieveFromStorage('user_info');

      if (!accessToken) {
        router.replace('/sign-in');
      } else if (storedUserInfo) {
        const userInfo = JSON.parse(storedUserInfo) as User;
        dispatch(setUserState(userInfo));

        if (!userInfo.isEmailVerified && !userInfo.isPhoneVerified) {
          router.replace('/onboarding');
        }
      }

      setIsLoading(false);
    }, []);

    return isLoading ? <AntSpin /> : <Component {...props} />;
  };

  return WrappedComponent;
}
