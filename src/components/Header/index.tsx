/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

import styles from './styles.module.scss';
import Player from '../Player';
import { useRouter } from 'next/router';

import logo from '../../../public/logo_geek_news.png';
import Navbar from '../Navbar';

export default function Header() {
  const router = useRouter();
  const [mouseOverNoticias, setMouseOverNoticias] = useState<boolean>(false);
  const [mouseOverCategories, setMouseOverCategories] = useState<boolean>(false);
  const [playerClick, setPlayerClick] = useState<boolean>(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header
        className={styles.container}
        style={{ display: ['/login', '/dashboard'].includes(router.asPath) ? 'none' : 'flex' }}
      >
        <div className={styles.menu}>
          <button className={styles.btnMenu} onClick={() => setMobileMenuOpen(true)}>
            <FiMenu size={40} color="#ffffff" />
          </button>
        </div>

        <Link href="/" passHref={true}>
          <div className={styles.flex}>
            <img src="/logo_gkn.png" alt="ByCross" />
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
              <Link href="/categoria/LOL" passHref={true}>
                <span>LOL</span>
              </Link>
              <Link href="/categoria/FF" passHref={true}>
                <span>Free Fire</span>
              </Link>
              <Link href="/categoria/VAVA" passHref={true}>
                <span>Valorant</span>
              </Link>
              <Link href="/categoria/WR" passHref={true}>
                <span>Wild Rift</span>
              </Link>
              <Link href="/categoria/Nerd" passHref={true}>
                <span>Nerd</span>
              </Link>
            </div>
          </span>

          <span>
            <span
              onClick={() => setMouseOverCategories(!mouseOverCategories)}
              onMouseLeave={() => setMouseOverCategories(false)}
            >
              Categorias
            </span>
            <div
              className={styles.optionsContainer}
              style={{ display: mouseOverCategories ? 'flex' : 'none' }}
              onClick={() => setMouseOverCategories(false)}
              onMouseOver={() => setMouseOverCategories(true)}
            >
              <Link href="/categoria/LOL" passHref={true}>
                <span>eSports</span>
              </Link>
              <Link href="/categoria/WR" passHref={true}>
                <span>Games</span>
              </Link>
            </div>
          </span>
          {/* <Link href="/videocast">
            <span>VideoCast</span>
          </Link> */}
          {/* <Link href="/podcast" passHref={true}>
            <span>Podcast</span>
          </Link>
          <span className={styles.player} onClick={() => setPlayerClick(!playerClick)}>
            Player
          </span> */}

          <div className={styles.socialMediaIconsContainer}>
            <a target="_blank" href="https://www.instagram.com/portal.geeknews/" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
            <a target="_blank" href="https://www.facebook.com/portal.geeknews" rel="noopener noreferrer">
              <AiFillFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCI24qbWUtrPZx9NT-w1qyPw"
              rel="noopener noreferrer"
            >
              <AiFillYoutube />
            </a>
            <a target="_blank" href="https://twitter.com/PortalGeekNews" rel="noopener noreferrer">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>

        <Player playerOpen={playerClick} />
      </header>

      <Navbar open={mobileMenuOpen} onClose={(value: boolean) => setMobileMenuOpen(value)} />
    </>
  );
}
