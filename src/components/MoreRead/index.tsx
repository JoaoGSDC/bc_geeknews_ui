import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function MoreRead({ moreRead }: any) {
  return (
    <>
      <div className={styles.relativeContainer}>
        <div className={styles.topItem}>
          <div className={styles.tag}>{moreRead?.category}</div>
          <div className={styles.title}>{moreRead?.title}</div>
        </div>

        <div className={styles.othersImgContainer}>
          <Image src={moreRead?.image} alt="" />
        </div>
      </div>
    </>
  );
}
