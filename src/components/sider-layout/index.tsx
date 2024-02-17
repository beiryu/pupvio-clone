'use client';

import { Icons } from '@/lib/icons/iconsSvg';
import { Avatar, Divider, Layout, Menu, MenuProps } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import Sider from 'antd/lib/layout/Sider';
import { Content, Header } from 'antd/lib/layout/layout';
import { ReactNode, useState } from 'react';
import styles from './slider-layout.module.scss';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { removeFromStorage } from '@/lib/utils/storage.util';
import { resetUserState } from '@/lib/features/users/usersSlice';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem('Home', '1', <Icons.home />),
  getItem('Portfolio', '2', <Icons.portfolio />),
  getItem('Web3', '3', <Icons.web3 />),
  getItem('Market', '4', <Icons.market />),
  getItem('Reports', '5', <Icons.report />),
];

const itemsSetting: MenuItem[] = [
  getItem('Setting', '6', <Icons.home />),
  getItem('Notification', '7', <Icons.portfolio />),
  getItem('Profile', '8', <Avatar icon={<UserOutlined />} />, [
    getItem('Sign out', '9'),
  ]),
];

const SiderLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handlerLogout = (keyPath: string[]) => {
    if (keyPath.includes('9')) {
      removeFromStorage('access_token');
      removeFromStorage('user_info');
      dispatch(resetUserState());
      router.push('/sign-in');
    }
  };
  return (
    <Layout className="flex flex-row h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className={styles.sider}
      >
        <Link href={'/home'}>
          <Icons.logo className="mx-auto mb-6 mt-2 w-[60px]" />
        </Link>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
        <Divider className="my-5" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={itemsSetting}
          onClick={({ keyPath }) => handlerLogout(keyPath)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: 'white' }} />
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SiderLayout;
