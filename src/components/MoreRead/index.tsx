/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import Link from 'next/link';

export default function MoreRead({ moreRead }: any) {
  const handleOpenInNewTab = (event: any) => {
    if (event.button === 1) {
      window.open(`/noticia/${moreRead?.title?.split(' ').join('-')}-${moreRead?._id}`);
    }
  };

  return (
    <>
      <Link href={`/noticia/${moreRead?.title?.split(' ').join('-')}-${moreRead?._id}`} passHref={true}>
        <div className={styles.relativeContainer} onMouseDown={handleOpenInNewTab}>
          <div className={styles.topItem}>
            <div className={styles.tag}>{moreRead?.category}</div>
            <div className={styles.title}>{moreRead?.title}</div>
          </div>

          <div className={styles.othersImgContainer}>
            <img src={moreRead?.image} alt="image" />
          </div>
        </div>
      </Link>
    </>
  );
}
