/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function TopHeader({ tops }: any) {
  const handleOpenInNewTab = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (event.button === 1) {
      window.open(`/noticia/${tops[index]?.title?.split(' ').join('-')}-${tops[index]?._id}`);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Link href={`/noticia/${tops[0]?.title?.split(' ').join('-')}-${tops[0]?._id}`} passHref={true}>
          <div
            className={styles.relativeContainer}
            onMouseDown={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOpenInNewTab(event, 0)}
          >
            <div className={styles.topItem}>
              <div className={styles.tag}>{tops[0]?.category}</div>
              <h2 className={styles.title}>{tops[0]?.title}</h2>
            </div>

            <div className={styles.topOneImgContainer}>
              <img src={tops[0]?.image} alt="image" />
            </div>
          </div>
        </Link>

        <div className={styles.mobileOthersContainer}>
          <Link href={`/noticia/${tops[1]?.title?.split(' ').join('-')}-${tops[1]?._id}`} passHref={true}>
            <div
              className={styles.relativeContainer}
              onMouseDown={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOpenInNewTab(event, 1)}
            >
              <div className={styles.topItem}>
                <div className={styles.tag}>{tops[1]?.category}</div>
                <h2 className={styles.title}>{tops[1]?.title}</h2>
              </div>

              <div className={styles.othersImgContainer}>
                <img src={tops[1]?.image} alt="image" />
              </div>
            </div>
          </Link>

          <Link href={`/noticia/${tops[2]?.title?.split(' ').join('-')}-${tops[2]?._id}`} passHref={true}>
            <div
              className={styles.relativeContainer}
              onMouseDown={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOpenInNewTab(event, 2)}
            >
              <div className={styles.topItem}>
                <div className={styles.tag}>{tops[2]?.category}</div>
                <h2 className={styles.title}>{tops[2]?.title}</h2>
              </div>

              <div className={styles.othersImgContainer}>
                <img src={tops[2]?.image} alt="image" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
