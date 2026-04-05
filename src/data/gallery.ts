export type GalleryCategory = 'corporate' | 'sangeeth' | 'workshops';

export interface GalleryPhoto {
  src: string;
  category: GalleryCategory;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Corporate Events
  { src: '/Zealots/Corporate Events/zealots_corporate_01.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_02.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_03.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_04.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_05.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_06.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_07.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_08.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_09.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_10.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_11.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_12.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_13.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_14.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_15.png', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_16.png', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_17.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_18.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_19.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_20.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_21.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_22.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_23.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_24.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_25.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_26.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_27.jpg', category: 'corporate' },

  // Sangeeth
  { src: '/Zealots/Sangeeth/zealots_sangeeth_01.jpg', category: 'sangeeth' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_02.jpg', category: 'sangeeth' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_03.jpg', category: 'sangeeth' },

  // Workshops
  { src: '/Zealots/Workshops/zealots_workshops_01.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_02.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_03.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_04.jpeg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_05.jpeg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_06.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_07.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_08.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_09.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_10.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/zealots_workshops_11.jpg', category: 'workshops' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'sangeeth', label: 'Sangeeth' },
  { id: 'workshops', label: 'Workshops' },
] as const;
