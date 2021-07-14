import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import Player from '../Player';
import { useRouter } from 'next/router';

import logo from '../../../public/logo_bycross.png';

export default function Header() {
  const router = useRouter();
  const [mouseOverNoticias, setMouseOverNoticias] = useState<boolean>(false);
  const [playerClick, setPlayerClick] = useState<boolean>(false);

  return (
    <>
      <header
        className={styles.container}
        style={{ display: ['/login', '/dashboard'].includes(router.asPath) ? 'none' : 'flex' }}
      >
        <Link href="/">
          <div className={styles.flex}>
            <Image src={logo} alt="ByCross" />
          </div>
        </Link>

        <div className={styles.containerOptions}>
          <span>
            <span
              onClick={() => setMouseOverNoticias(!mouseOverNoticias)}
              onMouseLeave={() => setMouseOverNoticias(false)}
            >
              Notícias
            </span>
            <div
              className={styles.optionsContainer}
              style={{ display: mouseOverNoticias ? 'flex' : 'none' }}
              onClick={() => setMouseOverNoticias(false)}
              onMouseOver={() => setMouseOverNoticias(true)}
            >
              <span>LOL</span>
              <span>Free Fire</span>
              <span>Valorant</span>
              <span>CS:GO</span>
              <span>Nerd</span>
            </div>
          </span>
          {/* <Link href="/videocast">
            <span>VideoCast</span>
          </Link> */}
          <Link href="/podcast">
            <span>Podcast</span>
          </Link>
          <span className={styles.player} onClick={() => setPlayerClick(!playerClick)}>
            Player
          </span>
        </div>

        <Player playerOpen={playerClick} />
      </header>
    </>
  );
}
