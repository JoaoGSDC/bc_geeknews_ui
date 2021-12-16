import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const ModalCookies = () => {
  const [closeModal, setCloseModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    const confirmCookies: boolean = Boolean(localStorage.getItem('confirmCookies'));

    if (!confirmCookies) {
      setTimeout(() => {
        setCloseModal(true);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteCookies = () => {
    var theCookies = document.cookie.split(';');
    for (var i = 0; i < theCookies.length; i++) {
      document.cookie = theCookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  };

  const closeCookiesModal = () => {
    localStorage.setItem('confirmCookies', 'true');
    setCloseModal(false);
  };

  return (
    <>
      {closeModal ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal}>
              <span>
                Utilizamos cookies para personalizar sua experiência. Ao acessar o site, você concorda com a nossa{' '}
                <Link href="/politicas-privacidade" passHref={true}>
                  Política de Privacidade
                </Link>
                .
              </span>

              <button onClick={() => closeCookiesModal()}>Ok, entendi</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalCookies;
