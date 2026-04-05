export type GalleryCategory = 'corporate' | 'sangeeth' | 'workshops' | 'outings';

export interface GalleryPhoto {
  src: string;
  category: GalleryCategory;
  alt: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Corporate Events
  { src: '/Zealots/Corporate Events/zealots_corporate_04.jpg', category: 'corporate', alt: 'Zealots Dance Crew stage performance at corporate gala Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_05.jpg', category: 'corporate', alt: 'Corporate dance group Hyderabad performing on stage' },
  { src: '/Zealots/Corporate Events/zealots_corporate_06.jpg', category: 'corporate', alt: 'Zealots Dance Crew corporate event performance Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_07.jpg', category: 'corporate', alt: 'Corporate dance crew Hyderabad live show' },
  { src: '/Zealots/Corporate Events/zealots_corporate_08.jpeg', category: 'corporate', alt: 'Zealots Dance Crew performing at corporate show Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_10.jpeg', category: 'corporate', alt: 'Zealots dance group corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_11.jpeg', category: 'corporate', alt: 'Zealots Dance Crew performing at Hyderabad corporate event' },
  { src: '/Zealots/Corporate Events/zealots_corporate_12_1.jpeg', category: 'corporate', alt: 'Zealots Dance Crew family day performance Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_13.jpeg', category: 'corporate', alt: 'Zealots Dance Crew family day corporate celebration Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_15.png', category: 'corporate', alt: 'Zealots Dance Crew corporate event promotional photo Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_17.jpg', category: 'corporate', alt: 'Zealots Dance Crew performing at a corporate event Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_18.jpg', category: 'corporate', alt: 'Zealots Dance Crew corporate dance performance photo' },
  { src: '/Zealots/Corporate Events/zealots_corporate_19.jpg', category: 'corporate', alt: 'Zealots Dance Crew MD family day celebration Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_22.jpg', category: 'corporate', alt: 'Zealots Dance Crew group shot at corporate show Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_23.jpg', category: 'corporate', alt: 'Zealots Dance Crew Deloitte corporate event group photo Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_24.jpeg', category: 'corporate', alt: 'Zealots Dance Crew live performance photo Hyderabad corporate' },
  { src: '/Zealots/Corporate Events/zealots_corporate_26.jpeg', category: 'corporate', alt: 'Zealots Dance Crew corporate outing group photo Hyderabad' },
  { src: '/Zealots/Corporate Events/zealots_corporate_27.jpg', category: 'corporate', alt: 'Zealots Dance Crew full group photo at Hyderabad corporate event' },

  // Sangeeth
  { src: '/Zealots/Sangeeth/zealots_sangeeth_01.jpg', category: 'sangeeth', alt: 'Zealots Dance Crew sangeet performance at Hyderabad wedding' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_03.jpg', category: 'sangeeth', alt: 'Sangeet night dance performance by Zealots Dance Crew Hyderabad' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_04.jpg', category: 'sangeeth', alt: 'Zealots Dance Crew sangeet group performance at wedding ceremony' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_05.jpg', category: 'sangeeth', alt: 'Zealots Dance Crew sangeet night performance Hyderabad wedding' },
  { src: '/Zealots/Sangeeth/zealots_sangeeth_06.jpg', category: 'sangeeth', alt: 'Zealots Dance Crew sangeet dance Hyderabad wedding celebration' },

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

// Outings
export const outingPhotos: GalleryPhoto[] = [
  { src: '/Zealots/Outings/zealots_outing_01.jpg', category: 'outings', alt: 'Zealots Dance Crew team outing group photo' },
  { src: '/Zealots/Outings/zealots_outing_02.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing hangout' },
  { src: '/Zealots/Outings/zealots_outing_03.jpg', category: 'outings', alt: 'Zealots Dance Crew team bonding outing' },
  { src: '/Zealots/Outings/zealots_outing_04.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing together' },
  { src: '/Zealots/Outings/zealots_outing_05.jpg', category: 'outings', alt: 'Zealots Dance Crew group outing Hyderabad' },
  { src: '/Zealots/Outings/zealots_outing_06.jpg', category: 'outings', alt: 'Zealots Dance Crew team outing fun' },
  { src: '/Zealots/Outings/zealots_outing_07.jpg', category: 'outings', alt: 'Zealots Dance Crew outing hangout photo' },
  { src: '/Zealots/Outings/zealots_outing_08.jpg', category: 'outings', alt: 'Zealots Dance Crew crew gathering outing' },
  { src: '/Zealots/Outings/zealots_outing_09.jpg', category: 'outings', alt: 'Zealots Dance Crew team day out Hyderabad' },
  { src: '/Zealots/Outings/zealots_outing_10.jpg', category: 'outings', alt: 'Zealots Dance Crew outing group moment' },
  { src: '/Zealots/Outings/zealots_outing_11.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing snapshot' },
  { src: '/Zealots/Outings/zealots_outing_12.jpg', category: 'outings', alt: 'Zealots Dance Crew team outing activity' },
  { src: '/Zealots/Outings/zealots_outing_13.jpg', category: 'outings', alt: 'Zealots Dance Crew group outing memory' },
  { src: '/Zealots/Outings/zealots_outing_14.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing together Hyderabad' },
  { src: '/Zealots/Outings/zealots_outing_15.jpg', category: 'outings', alt: 'Zealots Dance Crew early days crew outing 2019' },
  { src: '/Zealots/Outings/zealots_outing_16.jpg', category: 'outings', alt: 'Zealots Dance Crew team hangout 2019' },
  { src: '/Zealots/Outings/zealots_outing_17.jpg', category: 'outings', alt: 'Zealots Dance Crew group outing 2019' },
  { src: '/Zealots/Outings/zealots_outing_18.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing 2020' },
  { src: '/Zealots/Outings/zealots_outing_19.jpg', category: 'outings', alt: 'Zealots Dance Crew team bonding outing 2020' },
  { src: '/Zealots/Outings/zealots_outing_20.jpg', category: 'outings', alt: 'Zealots Dance Crew crew outing group shot' },
  { src: '/Zealots/Outings/zealots_outing_21.jpg', category: 'outings', alt: 'Zealots Dance Crew team outing fun moment' },
  { src: '/Zealots/Outings/zealots_outing_22.jpg', category: 'outings', alt: 'Zealots Dance Crew outing crew photo' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'sangeeth', label: 'Sangeeth' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'outings', label: 'Crew Outings' },
] as const;
