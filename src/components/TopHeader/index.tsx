import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function TopHeader({ tops }: any) {
  return (
    <>
      <div className={styles.container}>
        <Link href={`/noticia/${tops[0]?.title?.split(' ').join('-')}-${tops[0]?.id}`}>
          <div className={styles.relativeContainer}>
            <div className={styles.topItem}>
              <div className={styles.tag}>{tops[0]?.category}</div>
              <h2 className={styles.title}>{tops[0]?.title}</h2>
            </div>

            <div className={styles.topOneImgContainer}>
              <Image src={tops[0]?.image} alt="" />
            </div>
          </div>
        </Link>

        <div className={styles.mobileOthersContainer}>
          <Link href={`/noticia/${tops[1]?.title?.split(' ').join('-')}-${tops[1]?.id}`}>
            <div className={styles.relativeContainer}>
              <div className={styles.topItem}>
                <div className={styles.tag}>{tops[1]?.category}</div>
                <h2 className={styles.title}>{tops[1]?.title}</h2>
              </div>

              <div className={styles.othersImgContainer}>
                <Image src={tops[1]?.image} alt="" />
              </div>
            </div>
          </Link>

          <Link href={`/noticia/${tops[2]?.title?.split(' ').join('-')}-${tops[2]?.id}`}>
            <div className={styles.relativeContainer}>
              <div className={styles.topItem}>
                <div className={styles.tag}>{tops[2]?.category}</div>
                <h2 className={styles.title}>{tops[2]?.title}</h2>
              </div>

              <div className={styles.othersImgContainer}>
                <Image src={tops[2]?.image} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
