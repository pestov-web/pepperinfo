import Image from 'next/image';
import heroPic from '../../public/hero.webp';
import styles from './Hero.module.css';
function Hero() {
  return (
    <section className={styles.hero}>
      <Image src={heroPic} alt="hero" width={455} height={276} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Ваш источник всего, что связано с острым перцем.
        </h1>
        <div>search</div>
      </div>
    </section>
  );
}

export default Hero;
