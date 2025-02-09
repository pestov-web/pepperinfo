import blogPic1 from '../../public/sections/1.png';
import blogPic2 from '../../public/sections/2.png';
import blogPic3 from '../../public/sections/3.png';
import blogPic4 from '../../public/sections/4.png';
import dbPic1 from '../../public/sections/5.png';
import dbPic2 from '../../public/sections/6.png';
import dbPic3 from '../../public/sections/7.png';
import dbPic4 from '../../public/sections/8.png';
import recPic1 from '../../public/sections/9.png';
import recPic2 from '../../public/sections/10.png';
import recPic3 from '../../public/sections/11.png';
import recPic4 from '../../public/sections/12.png';

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
    title: 'The Ultimate Guide to Growing Peppers',
    description: '',
    image: blogPic1,
    content: 'The Ultimate Guide to Growing Peppers',
  },
  {
    id: 2,
    title: 'The Best Hot Pepper Seeds for Beginners',
    description: '',
    image: blogPic2,
    content: 'The Best Hot Pepper Seeds for Beginners',
  },
  {
    id: 3,
    title: "How to Make Hot Sauce: A Beginner's Guide",
    description: '',
    image: blogPic3,
    content: "How to Make Hot Sauce: A Beginner's Guide",
  },
  {
    id: 4,
    title: 'The 10 Hottest Peppers in the World',
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
    title: 'Ghost Pepper Hot Sauce',
    description: 'Spicy, tangy, and perfect for tacos',
    image: recPic1,
    content: 'Ghost Pepper Hot Sauce',
  },
  {
    id: 2,
    title: 'Habanero Salsa',
    description: 'Fresh, zesty, and perfect for chips',
    image: recPic2,
    content: 'Habanero Salsa',
  },
  {
    id: 3,
    title: 'Jalapeno Poppers',
    description: 'Crispy, creamy, and perfect for game day',
    image: recPic3,
    content: 'Jalapeno Popperss',
  },
  {
    id: 4,
    title: 'Poblano Enchiladas',
    description: 'Cheesy, smoky, and perfect for dinner',
    image: recPic4,
    content: 'Poblano Enchiladas',
  },
];

export { navList, blogData, databaseData, recipesData };
