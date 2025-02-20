import Link from 'next/link';

import styles from './user-menu.module.css';
function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <Link href="/login" className={styles.link} aria-label="Войти">
        Войти
      </Link>
    </div>
  );
}

export default UserMenu;
