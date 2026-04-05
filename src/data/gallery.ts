export type GalleryCategory = 'corporate' | 'sangeeth' | 'workshops';

export interface GalleryPhoto {
  src: string;
  category: GalleryCategory;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Corporate Events
  { src: '/Zealots/Corporate Events/_DSC9265.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/2019_fam_day.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/20250729_132029.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC_4331.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC_4367.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC_4392.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC00546.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC09092.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC09670.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC09780.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/DSC09799.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/Family Day 1.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/Family Day.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/grouppic.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/image (2).png', category: 'corporate' },
  { src: '/Zealots/Corporate Events/image (3).png', category: 'corporate' },
  { src: '/Zealots/Corporate Events/IMG_0201.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/IMG_9133.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/MD - Family Day.jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/RKSN4228.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/SAP.JPG', category: 'corporate' },
  { src: '/Zealots/Corporate Events/shared image (6).jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/shared image (9).jpg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/TES_7289.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/Zealots CBO .jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/Zealots Outing.jpeg', category: 'corporate' },
  { src: '/Zealots/Corporate Events/Zealots_Group.jpg', category: 'corporate' },

  // Sangeeth
  { src: '/Zealots/Sangeeth/shared image (3).jpg', category: 'sangeeth' },
  { src: '/Zealots/Sangeeth/shared image (4).jpg', category: 'sangeeth' },
  { src: '/Zealots/Sangeeth/shared image (7).jpg', category: 'sangeeth' },

  // Workshops
  { src: '/Zealots/Workshops/20230914_205614.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/20230915_220212.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/20230915_220251.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/c1174663-af76-44cd-9f47-9ca74b70fdce.jpeg', category: 'workshops' },
  { src: '/Zealots/Workshops/FullSizeRender.jpeg', category: 'workshops' },
  { src: '/Zealots/Workshops/IMG_3104.JPG', category: 'workshops' },
  { src: '/Zealots/Workshops/IMG_8258.JPG', category: 'workshops' },
  { src: '/Zealots/Workshops/Practice Sessions.jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/shared image (2).jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/shared image (5).jpg', category: 'workshops' },
  { src: '/Zealots/Workshops/shared image (8).jpg', category: 'workshops' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'sangeeth', label: 'Sangeeth' },
  { id: 'workshops', label: 'Workshops' },
] as const;
