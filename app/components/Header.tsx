import styles from './Header.module.css';
import { navList } from '../lib/data-placeholder';
import UserMenu from './UserMenu';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>Hot Pepper Database</div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {navList.map(
              (item) =>
                !item.disabled && (
                  <li className={styles.nav__item} key={item.id}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                )
            )}
          </ul>
          <UserMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
