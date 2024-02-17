'use client';

import SiderLayout from '@/components/sider-layout';
import HomePage from '@/modules/home';
import withAuth from '@/components/with-auth';

function Home() {
  return (
    <SiderLayout>
      <HomePage />
    </SiderLayout>
  );
}

export default withAuth(Home);
