import React from 'react';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';

import styles from './styles.module.scss';

interface IPropsDTO {
  playerOpen: boolean;
}

export default function Player({ playerOpen }: IPropsDTO) {
  return (
    <>
      <div className={styles.container} style={{ right: playerOpen ? 0 : -355 }}>
        <div className={styles.circle}>
          <FaMusic size={80} />
        </div>

        <h2>Lorem Ipsum</h2>

        <div className={styles.buttons}>
          <FaPlay size={20} />
          <FaPause size={20} />
        </div>
      </div>
    </>
  );
}
