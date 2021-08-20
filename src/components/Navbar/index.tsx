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
            <button className={styles.btnClose} onClick={() => onClose(false)}>
              <FiX size={40} />
            </button>

            <ul>
              <li>Notícias</li>

              <ul className={styles.subItems}>
                <li>LOL</li>
                <li>Free Fire</li>
                <li>Valorant</li>
                <li>CS:GO</li>
                <li>Nerd</li>
              </ul>

              {/* <Link href="/videocast">
            <span>VideoCast</span>
          </Link> */}
              <Link href="/podcast" passHref={true}>
                <li>Podcast</li>
              </Link>

              <li className={styles.player} onClick={() => {}}>
                Player
              </li>
            </ul>
          </nav>

          <div className={styles.blackShadow} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
