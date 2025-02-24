import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from './footer.module.css';
import { navList, footerSocials } from '@/app/lib/data-placeholder';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {navList.map(
              (item) =>
                !item.disabled && (
                  <li key={item.title}>
                    <Link href={item.path} aria-label={item.title}>
                      {item.title}
                    </Link>
                  </li>
                )
            )}
          </ul>
          <ul className={styles.socials}>
            {footerSocials.map((item) => (
              <li key={item.title}>
                <Link href={item.path}>
                  <Icon icon={item.icon} width="24" height="24" />
                </Link>
              </li>
            ))}
          </ul>
          <span>© 2025 pestov-web.ru</span>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
