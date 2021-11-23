/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo_gkn.png" alt="ByCross" />

        <ul>
          <Link href="/sobre" passHref={true}>
            <li>Sobre</li>
          </Link>
          <Link href="/contact" passHref={true}>
            <li>Fale conosco</li>
          </Link>
          <Link href="/politicas-cookies" passHref={true}>
            <li>Políticas de Cookies</li>
          </Link>
          <Link href="/politicas-privacidade" passHref={true}>
            <li>Política de Privacidade</li>
          </Link>
        </ul>

        <div className={styles.socialMediaIconsContainer}>
          <a target="_blank" href="https://www.instagram.com/portal.geeknews/" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          <a target="_blank" href="https://www.facebook.com/portal.geeknews" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCI24qbWUtrPZx9NT-w1qyPw" rel="noopener noreferrer">
            <AiFillYoutube />
          </a>
          <a target="_blank" href="https://twitter.com/PortalGeekNews" rel="noopener noreferrer">
            <AiFillTwitterCircle />
          </a>
        </div>
      </footer>
    </>
  );
}
