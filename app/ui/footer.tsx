import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Hot Pepper Database</div>
        <div>pestov-web.ru 2025</div>
      </div>
    </footer>
  );
}

export default Footer;
