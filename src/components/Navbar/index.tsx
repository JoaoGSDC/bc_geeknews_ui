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
              <li style={{ borderBottom: '1px solid #404c54', textAlign: 'center' }}>
                <span>Notícias</span>
              </li>

              <ul className={styles.subItems}>
                <Link href="/categoria/LOL" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1639513509/icons/icon-lol_r8pa5u.png"
                      alt="LOL"
                    />
                    LOL
                  </li>
                </Link>
                <Link href="/categoria/FF" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      className={styles.icon}
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1639513509/icons/icon-ff_eaydef.png"
                      alt="LOL"
                    />
                    Free Fire
                  </li>
                </Link>
                <Link href="/categoria/VAVA" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1639513509/icons/icon-vava_uaqfhf.png"
                      alt="LOL"
                    />
                    Valorant
                  </li>
                </Link>
                <Link href="/categoria/WR" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1639513509/icons/icon-wr_fzr2ra.png"
                      alt="LOL"
                    />
                    Wild Rift
                  </li>
                </Link>
                <Link href="/categoria/Nerd" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      className={styles.icon}
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1639513509/icons/icon-nerd_uhs1ki.png"
                      alt="LOL"
                    />
                    Nerd
                  </li>
                </Link>
                <Link href="/categoria/Nerd" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1640218170/icons/icon-esports_pgbjwn.png"
                      alt="LOL"
                    />
                    eSports
                  </li>
                </Link>
                <Link href="/categoria/Nerd" passHref={true}>
                  <li onClick={() => onClose(false)}>
                    <img
                      src="https://res.cloudinary.com/dj0vikcpc/image/upload/v1640218170/icons/icon-games_x0jwuq.png"
                      alt="LOL"
                    />
                    Games
                  </li>
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
