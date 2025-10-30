import movie1 from '@/assets/movie1.jpg';
import movie2 from '@/assets/movie2.jpg';
import movie3 from '@/assets/movie3.jpg';
import movie4 from '@/assets/movie4.jpg';
import movie5 from '@/assets/movie5.jpg';
import movie6 from '@/assets/movie6.jpg';

export interface Movie {
  id: string;
  title: string;
  image: string;
  trailer: string;
  description: string;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'The Haunted Manor',
    image: movie1,
    trailer: 'https://www.youtube.com/embed/n6vHdf7HqaE',
    description: 'A bone-chilling tale of a Victorian mansion where the walls whisper secrets of the damned. When a family inherits this gothic estate, they discover that some doors should never be opened, and some spirits never rest.',
  },
  {
    id: '2',
    title: 'Asylum Shadows',
    image: movie2,
    trailer: 'https://www.youtube.com/embed/hBJYAyiLpYk',
    description: 'Deep within the corridors of an abandoned psychiatric hospital, darkness takes physical form. A documentary crew ventures inside, only to realize they are not alone—and may never leave.',
  },
  {
    id: '3',
    title: 'Graveyard Keeper',
    image: movie3,
    trailer: 'https://www.youtube.com/embed/FtqqXMdkZ28',
    description: 'A mysterious figure haunts the fog-shrouded cemetery, guarding a terrible secret buried beneath ancient tombstones. Those who disturb the dead will face a fate worse than death itself.',
  },
  {
    id: '4',
    title: 'Mirror of Souls',
    image: movie4,
    trailer: 'https://www.youtube.com/embed/pzD9zGcUNrw',
    description: 'An antique mirror reveals more than just reflections—it shows the true nature of the soul. But gazing too long into its depths will trap you in a nightmarish realm between worlds.',
  },
  {
    id: '5',
    title: 'The Cursed Tome',
    image: movie5,
    trailer: 'https://www.youtube.com/embed/BHLBaOASC74',
    description: 'An ancient book of forbidden rituals surfaces in a modern bookshop, bringing unspeakable evil into our world. Each page turned unleashes new horrors that defy comprehension.',
  },
  {
    id: '6',
    title: 'Dollhouse',
    image: movie6,
    trailer: 'https://www.youtube.com/embed/vTgiMXmBAmY',
    description: 'In a dusty attic, a collection of porcelain dolls harbors malevolent spirits. When night falls, they come alive with sinister intent, playing deadly games with those who dare enter their domain.',
  },
];
