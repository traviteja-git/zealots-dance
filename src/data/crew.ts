export interface CrewMember {
  name: string;
  initial: string;
  tenure: string;
  photo?: string; // add image path here when photos are available
}

export const activeMembers: CrewMember[] = [
  { name: 'Raviteja', initial: 'R', tenure: '2018 – Present' },
  { name: 'Ayushi Dash', initial: 'A', tenure: '2019 – Present' },
  { name: 'Shreekaar Padma', initial: 'S', tenure: '2022 – Present' },
];

export const alumniMembers: CrewMember[] = [
  { name: 'Sagun Somani', initial: 'S', tenure: '2018 – 2019' },
  { name: 'Raghav', initial: 'R', tenure: '2019 – 2024' },
  { name: 'Sowjanya', initial: 'S', tenure: '2018 – 2019' },
];
