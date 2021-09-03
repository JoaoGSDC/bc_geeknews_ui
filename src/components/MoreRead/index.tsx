/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import Link from 'next/link';

export default function MoreRead({ moreRead }: any) {
  return (
    <>
      <Link href={`/noticia/${moreRead?.title?.split(' ').join('-')}-${moreRead?._id}`} passHref={true}>
        <div className={styles.relativeContainer}>
          <div className={styles.topItem}>
            <div className={styles.tag}>{moreRead?.category}</div>
            <div className={styles.title}>{moreRead?.title}</div>
          </div>

          <div className={styles.othersImgContainer}>
            <img src={moreRead?.image} alt="" />
          </div>
        </div>
      </Link>
    </>
  );
}
