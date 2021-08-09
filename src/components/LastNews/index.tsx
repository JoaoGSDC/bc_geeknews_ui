import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function LastNews({ notice }: any) {
  return (
    <>
      <Link href={`/noticia/${notice.title?.split(' ').join('-')}-${notice.id}`} passHref={true}>
        <div className={styles.container}>
          <div className={styles.relativeContainer}>
            <div className={styles.topItem}>
              <div className={styles.tag}>{notice.category}</div>
            </div>

            <div className={styles.othersImgContainer}>
              <Image src={notice.image} alt="" />
            </div>
          </div>

          <div className={styles.bodyContainer}>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>{notice.title}</h3>

              <span className={styles.text}>{notice.subtitle}</span>
            </div>

            <button type="button">Leia mais...</button>
          </div>
        </div>
      </Link>
    </>
  );
}
