export interface CrewMember {
  name: string;
  initial: string;
  tenure: string;
  photo?: string; // add image path here when photos are available
}

export const activeMembers: CrewMember[] = [
  { name: 'Raviteja Tholupunoori', initial: 'RT', tenure: '2018 – Present', photo: '/zealots-dance/crew/raviteja.jpg' },
  { name: 'Ayushi Dash', initial: 'AD', tenure: '2020 – Present', photo: '/zealots-dance/crew/ayushi.jpg' },
  { name: 'Shreekaar Padma', initial: 'SP', tenure: '2023 – Present', photo: '/zealots-dance/crew/shreekaar.jpg' },
];

export const alumniMembers: CrewMember[] = [
  { name: 'Sagun Somani', initial: 'SS', tenure: '2018 – 2019', photo: '/zealots-dance/crew/sagun.jpg' },
  { name: 'Raghavan Srinivasan', initial: 'RS', tenure: '2019 – 2024', photo: '/zealots-dance/crew/raghavan.jpg' },
  { name: 'Sowjanya Chilveru', initial: 'SC', tenure: '2018 – 2019', photo: '/zealots-dance/crew/sowjanya.jpg' },
];
