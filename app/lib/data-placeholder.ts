import blogPic1 from '@/public/sections/1.png';
import blogPic2 from '@/public/sections/2.png';
import blogPic3 from '@/public/sections/3.png';
import blogPic4 from '@/public/sections/4.png';
import dbPic1 from '@/public/sections/5.png';
import dbPic2 from '@/public/sections/6.png';
import dbPic3 from '@/public/sections/7.png';
import dbPic4 from '@/public/sections/8.png';
import recPic1 from '@/public/sections/9.png';
import recPic2 from '@/public/sections/10.png';
import recPic3 from '@/public/sections/11.png';
import recPic4 from '@/public/sections/12.png';

const navList = [
  { id: 1, title: 'Главная', path: '/' },
  { id: 2, title: 'Рецепты', path: '/recipes' },
  { id: 3, title: 'Блог', path: '/blog' },
  { id: 4, title: 'Каталог', path: '/database' },
  { id: 5, title: 'Магазин', path: '/shop', disabled: true },
  { id: 6, title: 'Контакты', path: '/contacts' },
];

const blogData = [
  {
    id: 1,
    title: 'Полное руководство по выращиванию перцев',
    description: '',
    image: blogPic1,
    content: 'The Ultimate Guide to Growing Peppers',
  },
  {
    id: 2,
    title: 'Лучшие семена острого перца для начинающих',
    description: '',
    image: blogPic2,
    content: 'The Best Hot Pepper Seeds for Beginners',
  },
  {
    id: 3,
    title: 'Как приготовить острый соус: руководство для начинающих',
    description: '',
    image: blogPic3,
    content: "How to Make Hot Sauce: A Beginner's Guide",
  },
  {
    id: 4,
    title: '10 самых острых перцев в мире',
    description: '',
    image: blogPic4,
    content: 'The 10 Hottest Peppers in the World',
  },
];

const databaseData = [
  {
    id: 1,
    title: 'Ghost Pepper',
    description: '2.2M SHU',
    image: dbPic1,
    content: 'Ghost Pepper',
  },
  {
    id: 2,
    title: 'Habanero Pepper',
    description: '100k-350k SHU',
    image: dbPic2,
    content: 'Habanero Pepper',
  },
  {
    id: 3,
    title: 'Jalapeno Pepper',
    description: '2.5k-8k SHU',
    image: dbPic3,
    content: 'Jalapeno Pepper',
  },
  {
    id: 4,
    title: 'Poblano Pepper',
    description: '1k-1.5k SHU',
    image: dbPic4,
    content: 'Poblano Pepper',
  },
];

const recipesData = [
  {
    id: 1,
    title: 'Острый соус Ghost Pepper',
    description: 'Острый, с легкой кислинкой и идеально подходит для тако.',
    image: recPic1,
    content: 'Ghost Pepper Hot Sauce',
  },
  {
    id: 2,
    title: 'Сальса с хабанеро',
    description: 'Свежий, бодрящий и идеально подходит для чипсов.',
    image: recPic2,
    content: 'Habanero Salsa',
  },
  {
    id: 3,
    title: 'Фаршированные халапеньо',
    description:
      'Хрустящий, сливочный и идеально подходит для просмотра матчей.',
    image: recPic3,
    content: 'Jalapeno Popperss',
  },
  {
    id: 4,
    title: 'Энчиладас с поблано',
    description: 'Сырный, дымный и идеально подходит для ужина.',
    image: recPic4,
    content: 'Poblano Enchiladas',
  },
];

export { navList, blogData, databaseData, recipesData };
