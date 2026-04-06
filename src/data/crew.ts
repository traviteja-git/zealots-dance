export type CrewCategory = 'founder' | 'choreographer' | 'core' | 'alumni';

export interface CrewMember {
  name: string;
  initial: string;
  role: string;
  category: CrewCategory;
  tenure: string;
  photo?: string;
  instagram?: string;
}

export const categoryOrder: CrewCategory[] = ['founder', 'choreographer', 'core', 'alumni'];

export const categoryLabels: Record<CrewCategory, string> = {
  founder: 'Founders',
  choreographer: 'Lead Choreographers',
  core: 'Core Members',
  alumni: 'Alumni — Those who built the foundation',
};

export const crewMembers: CrewMember[] = [
  // Founders
  { name: 'Raviteja Tholupunoori', initial: 'RT', role: 'Founder & Captain', category: 'founder', tenure: '2018 – Present', photo: '/crew/raviteja.png', instagram: 'this.raviteja' },
  { name: 'Ayushi Dash', initial: 'AD', role: 'Founder & Captain', category: 'founder', tenure: '2020 – Present', photo: '/crew/ayushi.jpg', instagram: '_caffeine_she_is_' },
  { name: 'Shreekaar Padma', initial: 'SP', role: 'Founder & Captain', category: 'founder', tenure: '2023 – Present', photo: '/crew/sreekaar.jpg', instagram: 'shreekaarpadma' },

  // Core Members
  { name: 'Teja Bora', initial: 'TB', role: 'Core Member', category: 'core', tenure: '2022 – Present', photo: '/crew/core/teja.jpg' },
  { name: 'Vishnu', initial: 'V', role: 'Core Member', category: 'core', tenure: '2022 – Present', photo: '/crew/core/vishnu.jpg' },
  { name: 'Yoshitha', initial: 'Y', role: 'Core Member', category: 'core', tenure: '2022 – Present', photo: '/crew/core/yoshitha.jpg' },
  { name: 'Sai Kiran', initial: 'SK', role: 'Core Member', category: 'core', tenure: '2025 – Present', photo: '/crew/core/saikiran.jpg' },
  { name: 'Shoba', initial: 'SH', role: 'Core Member', category: 'core', tenure: '2024 – Present', photo: '/crew/core/shoba.jpg' },
  { name: 'Sai Priya', initial: 'SP', role: 'Core Member', category: 'core', tenure: '2024 – Present', photo: '/crew/core/priya.jpg' },
  { name: 'Ratna', initial: 'R', role: 'Core Member', category: 'core', tenure: '2025 – Present', photo: '/crew/core/ratna.jpg' },
  { name: 'Komali', initial: 'K', role: 'Core Member', category: 'core', tenure: '2024 – Present', photo: '/crew/core/komali.jpg' },
  { name: 'Nancy', initial: 'N', role: 'Core Member', category: 'core', tenure: '2024 – Present', photo: '/crew/core/nancy.jpg' },
  { name: 'Pooja', initial: 'P', role: 'Core Member', category: 'core', tenure: '2024 – Present', photo: '/crew/core/pooja.jpg' },
  // Alumni
  { name: 'Sagun Somani', initial: 'SA', role: 'Core Member', category: 'alumni', tenure: '2018 – 2019', photo: '/crew/sagun.png', instagram: 'sagsomani' },
  { name: 'Raghavan Srinivasan', initial: 'RS', role: 'Core Member', category: 'alumni', tenure: '2019 – 2024', photo: '/crew/raghav.jpg', instagram: 'rags_srini' },
  { name: 'Sowjanya Chilveru', initial: 'SC', role: 'Core Member', category: 'alumni', tenure: '2018 – 2019', photo: '/crew/sowjanya.jpg', instagram: 'chilveru.sai.sowjanya' },
];

// Keep legacy exports for any other components that may reference them
// export const activeMembers = crewMembers.filter(m => m.category !== 'alumni');
// export const alumniMembers = crewMembers.filter(m => m.category === 'alumni');
