import React from 'react';
import Image from 'next/image';

type SupporterItemProps = {
  name: string;
  imageUrl: string;
  maxHeight: number;
  maxWidth: number;
  ratio: number | 'auto' | undefined;
};

const SupporterItem = (props: SupporterItemProps) => {
  return (
    <div className="w-[110px]">
      <Image
        unoptimized
        src={props.imageUrl}
        alt={props.imageUrl}
        width={props.maxWidth}
        height={props.maxHeight}
      />
    </div>
  );
};

export default SupporterItem;
