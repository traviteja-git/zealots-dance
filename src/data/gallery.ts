export type GalleryCategory = 'corporate' | 'sangeeth' | 'workshops';

export interface GalleryPhoto {
  src: string;
  category: GalleryCategory;
  alt: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Corporate Events
  { src: '/Zealots/Corporate Events/zealots_corporate_01.jpeg', category: 'corporate', alt: 'Zealots Dance Crew performing at a corporate event in Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_02.jpg', category: 'corporate', alt: 'Zealots Dance Crew at a 2019 family day corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_03.jpg', category: 'corporate', alt: 'Zealots Dance Crew corporate performance 2025 Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_04.jpg', category: 'corporate', alt: 'Zealots Dance Crew stage performance at corporate gala Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_05.jpg', category: 'corporate', alt: 'Corporate dance group Hyderabad performing on stage' },
  { src: '/Zealots/Corporate Events/zealots_corporate_06.jpg', category: 'corporate', alt: 'Zealots Dance Crew corporate event performance Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_07.jpg', category: 'corporate', alt: 'Corporate dance crew Hyderabad live show' },
  { src: '/Zealots/Corporate Events/zealots_corporate_08.jpeg', category: 'corporate', alt: 'Zealots Dance Crew performing at corporate show Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_09.jpeg', category: 'corporate', alt: 'Zealots Dance Crew group photo at corporate event' },
  { src: '/Zealots/Corporate Events/zealots_corporate_10.jpeg', category: 'corporate', alt: 'Zealots dance group corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_11.jpeg', category: 'corporate', alt: 'Zealots Dance Crew performing at Hyderabad corporate event' },
  { src: '/Zealots/Corporate Events/zealots_corporate_12.jpeg', category: 'corporate', alt: 'Zealots Dance Crew family day performance Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_13.jpeg', category: 'corporate', alt: 'Zealots Dance Crew family day corporate celebration Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_14.jpeg', category: 'corporate', alt: 'Zealots Dance Crew full group photo at corporate event' },
  { src: '/Zealots/Corporate Events/zealots_corporate_15.png', category: 'corporate', alt: 'Zealots Dance Crew corporate event promotional photo Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_16.png', category: 'corporate', alt: 'Zealots corporate dance performance Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_17.jpg', category: 'corporate', alt: 'Zealots Dance Crew performing at a corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_18.jpg', category: 'corporate', alt: 'Zealots Dance Crew corporate dance performance photo' },
  { src: '/Zealots/Corporate Events/zealots_corporate_19.jpg', category: 'corporate', alt: 'Zealots Dance Crew MD family day celebration Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_20.jpg', category: 'corporate', alt: 'Zealots Dance Crew at corporate event Hyderabad stage' },
  { src: '/Zealots/Corporate Events/zealots_corporate_21.jpg', category: 'corporate', alt: 'Zealots Dance Crew performing at SAP corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_22.jpg', category: 'corporate', alt: 'Zealots Dance Crew group shot at corporate show Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_23.jpg', category: 'corporate', alt: 'Zealots Dance Crew at corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_24.jpeg', category: 'corporate', alt: 'Zealots Dance Crew live performance photo Hyderabad corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_25.jpeg', category: 'corporate', alt: 'Zealots Dance Crew CBO corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_26.jpeg', category: 'corporate', alt: 'Zealots Dance Crew corporate outing group photo Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_27.jpg', category: 'corporate', alt: 'Zealots Dance Crew full group photo at Hyderabad corporate event' },

  // Sangeeth
  { src: '/Zealots/Sangeeth/zealots_sangeeth_01.jpg', category: 'sangeeth', alt: 'Zealots Dance Crew sangeet performance at Hyderabad wedding' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_02.jpg', category: 'sangeeth', alt: 'Zealots sangeet dance group performing at Hyderabad wedding ceremony' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_03.jpg', category: 'sangeeth', alt: 'Sangeet night dance performance by Zealots Dance Crew Hyderabad' },

  // Workshops
  { src: '/Zealots/Workshops/zealots_workshops_01.jpg', category: 'workshops', alt: 'Zealots Dance Crew workshop session Hyderabad 2023' },
  { src: '/Zealots/Workshops/zealots_workshops_02.jpg', category: 'workshops', alt: 'Zealots dance workshop class in Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_03.jpg', category: 'workshops', alt: 'Dance workshop by Zealots Dance Crew Hyderabad participants' },
  { src: '/Zealots/Workshops/zealots_workshops_04.jpeg', category: 'workshops', alt: 'Zealots Dance Crew workshop attendees Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_05.jpeg', category: 'workshops', alt: 'Zealots dance training workshop Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_06.jpg', category: 'workshops', alt: 'Zealots Dance Crew workshop group photo Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_07.jpg', category: 'workshops', alt: 'Dance workshop class by Zealots Dance Crew Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_08.jpg', category: 'workshops', alt: 'Zealots Dance Crew practice session Hyderabad workshop' },
  { src: '/Zealots/Workshops/zealots_workshops_09.jpg', category: 'workshops', alt: 'Zealots Dance Crew workshop participants Hyderabad' },
  { src: '/Zealots/Workshops/zealots_workshops_10.jpg', category: 'workshops', alt: 'Zealots dance workshop event Hyderabad 2023' },
  { src: '/Zealots/Workshops/zealots_workshops_11.jpg', category: 'workshops', alt: 'Zealots Dance Crew workshop performance photo Hyderabad' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'sangeeth', label: 'Sangeeth' },
  { id: 'workshops', label: 'Workshops' },
] as const;
