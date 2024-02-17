import Image from 'next/image';
import React from 'react';

import styles from './social-footer-item.module.scss';
import Link from 'next/link';

type SocialProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  icon: string;
  // eslint-disable-next-line react/no-unused-prop-types
  name: string;
  link: string;
  href: string;
};

const SocialFooterItem = (props: SocialProps) => {
  return (
    <div className={styles.image}>
      <Link href={props.href ?? ''}>
        <Image unoptimized alt="" height={45} width={45} src={props.link} />
      </Link>
    </div>
  );
};

export default SocialFooterItem;
