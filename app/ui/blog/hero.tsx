import styles from './hero.module.css';
import Image from 'next/image';
import heroIMG from '@/public/blog/hero.png';

function BlogHero() {
  return (
    <section>
      <div className={styles.container}>
        <Image src={heroIMG} alt="hero" width={928} height={480} />
      </div>
    </section>
  );
}

export default BlogHero;
