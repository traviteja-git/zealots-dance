export interface CrewMember {
  name: string;
  initial: string;
  tenure: string;
  photo?: string; // add image path here when photos are available
  instagram?: string;
}

export const activeMembers: CrewMember[] = [
  { name: 'Raviteja Tholupunoori', initial: 'RT', tenure: '2018 – Present', photo: '/crew/rt.png', instagram: 'this.raviteja' },
  { name: 'Ayushi Dash', initial: 'AD', tenure: '2020 – Present', photo: '/crew/ayushi.jpg', instagram: '_caffeine_she_is_' },
  { name: 'Shreekaar Padma', initial: 'SP', tenure: '2023 – Present', photo: '/crew/sreekaar.jpg', instagram: 'shreekaarpadma' },
];

export const alumniMembers: CrewMember[] = [
  { name: 'Sagun Somani', initial: 'SS', tenure: '2018 – 2019', photo: '/crew/sagun.png', instagram: 'sagsomani' },
  { name: 'Raghavan Srinivasan', initial: 'RS', tenure: '2019 – 2024', photo: '/crew/raghav.jpg', instagram: 'rags_srini' },
  { name: 'Sowjanya Chilveru', initial: 'SC', tenure: '2018 – 2019', photo: '/crew/sowjanya.jpg', instagram: 'chilveru.sai.sowjanya' },
];
