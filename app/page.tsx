import styles from './page.module.css';
import Hero from '@/app/ui/hero';
import { blogData, recipesData, databaseData } from './lib/data-placeholder';
import CardList from '@/app/ui/shared/card-list';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <section>
          <h2>Новые статьи</h2>
          <CardList data={blogData} />
        </section>
        <section>
          <h2>Перцы</h2>
          <CardList data={databaseData} />
        </section>
        <section>
          <h2>Популярные рецепты</h2>
          <CardList data={recipesData} />
        </section>
      </main>
    </div>
  );
}
