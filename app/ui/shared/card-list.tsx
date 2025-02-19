import { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from './card-list.module.css';

type CardsListProps = {
  id: number;
  title: string;
  description: string | undefined;
  image: StaticImageData;
  content: string;
};

function CardList({ data }: { data: CardsListProps[] }) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.item} key={item.id}>
          <Image src={item.image} alt={item.content} width={223} height={223} />
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default CardList;
