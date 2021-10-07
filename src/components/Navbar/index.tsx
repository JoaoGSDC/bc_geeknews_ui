/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

interface IPropsDTO {
  open: boolean;
  onClose: any;
}

const Navbar = ({ open, onClose }: IPropsDTO) => {
  return (
    <>
      {open ? (
        <>
          <nav className={styles.container}>
            <div className={styles.headerContainer}>
              <button className={styles.btnClose} onClick={() => onClose(false)}>
                <FiX size={40} />
              </button>

              <img src="/logo_gkn.png" alt="ByCross" />
            </div>

            <ul className={styles.ul}>
              <li>Notícias</li>

              <ul className={styles.subItems}>
                <Link href="/categoria/LOL" passHref={true}>
                  <li onClick={() => onClose(false)}>LOL</li>
                </Link>
                <Link href="/categoria/FF" passHref={true}>
                  <li onClick={() => onClose(false)}>Free Fire</li>
                </Link>
                <Link href="/categoria/VAVA" passHref={true}>
                  <li onClick={() => onClose(false)}>Valorant</li>
                </Link>
                <Link href="/categoria/CSGO" passHref={true}>
                  <li onClick={() => onClose(false)}>CS:GO</li>
                </Link>
                <Link href="/categoria/Nerd" passHref={true}>
                  <li onClick={() => onClose(false)}>Nerd</li>
                </Link>
              </ul>

              {/* <Link href="/videocast">
            <span>VideoCast</span>
          </Link> */}
              {/* <Link href="/podcast" passHref={true}>
                <li>Podcast</li>
              </Link> */}
            </ul>

            <div className={styles.footer}>
              {/* <iframe
                src="https://open.spotify.com/embed/playlist/6Bfn01ZKUp2xN8DBR21V11?theme=0"
                width="100%"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
              ></iframe> */}
            </div>
          </nav>

          <div className={styles.blackShadow} onClick={() => onClose(false)} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
