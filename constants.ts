import type { Project } from './types';

export const HERO_IMAGES: string[] = [
  'https://clicklovegrow.com/wp-content/uploads/2021/11/249760416-344296844160973-2673832256139964403-n.jpg?_t=1639532336',
  'https://clicklovegrow.com/wp-content/uploads/2021/11/251847194-1174185533109806-1614300298115582513-n.jpg?_t=1639532213',
  'https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/1280x1280/products/26519/2010043/73896-1024__13520.1721347799.jpg?c=2',
  'https://res.cloudinary.com/dfjvcvbsn/image/upload/v1756302675/Whisk_de8cac4839_n46dm9.jpg',
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sudut Kota Balikpapan',
    description: 'Menangkap denyut kehidupan kota yang sering terlewatkan dalam hiruk pikuk sehari-hari.',
    style: 'Street',
    imageUrl: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: 2,
    title: 'Wajah Pesisir',
    description: 'Kumpulan potret tulus dari para pekerja di pesisir pantai, menceritakan kisah mereka.',
    style: 'Portrait',
    imageUrl: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 3,
    title: 'Horizon Kalimantan',
    description: 'Menjelajahi keindahan alam liar dan cakrawala tak berujung dari tanah Borneo.',
    style: 'Landscape',
    imageUrl: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 4,
    title: 'Melankolia Urban',
    description: 'Sebuah eksplorasi visual tentang kesendirian dan keindahan di tengah keramaian kota.',
    style: 'Conceptual',
    imageUrl: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: 5,
    title: 'Pasar Pagi',
    description: 'Energi dan interaksi manusia yang otentik di jantung aktivitas ekonomi lokal.',
    style: 'Street',
    imageUrl: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: 6,
    title: 'Senja di Manggar',
    description: 'Siluet dan warna dramatis saat matahari terbenam di salah satu pantai ikonik Balikpapan.',
    style: 'Landscape',
    imageUrl: 'https://picsum.photos/400/300?random=6',
  },
  {
    id: 7,
    title: 'Sang Penjaga Tradisi',
    description: 'Potret seorang seniman lokal yang berdedikasi melestarikan budaya warisan.',
    style: 'Portrait',
    imageUrl: 'https://picsum.photos/400/300?random=7',
  },
  {
    id: 8,
    title: 'Refleksi Diri',
    description: 'Permainan cahaya dan bayangan untuk menciptakan narasi tentang identitas dan introspeksi.',
    style: 'Conceptual',
    imageUrl: 'https://picsum.photos/400/300?random=8',
  },
];