import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const AntSpin: React.FC = () => (
  <div className="w-full h-screen justify-center flex items-center">
    <Spin indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />} />
  </div>
);

export default AntSpin;
