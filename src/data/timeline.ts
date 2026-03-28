export interface TimelineEvent {
  year: string;
  badge: string;
  badgeType: 'default' | 'red' | 'green';
  title: string;
  body: string;
  isNow?: boolean;
}

export const timeline: TimelineEvent[] = [
  {
    year: '2018',
    badge: 'The Spark',
    badgeType: 'default',
    title: 'Born Inside a Boardroom',
    body: 'A handful of colleagues at a corporate company discovered they all shared the same secret — a love for dance that had nowhere to go. Late nights, empty meeting rooms, and a shared playlist later, Zealots Dance Crew was born.',
  },
  {
    year: '2019',
    badge: 'Growing Within',
    badgeType: 'default',
    title: 'The Crew Takes Shape',
    body: "Word spread through the office. More colleagues joined. Rehearsals moved from corridors to proper spaces. Internal events, team gatherings, and cultural fests became our stage. We were still corporate — but we were also something more.",
  },
  {
    year: '2020',
    badge: 'The Pivot',
    badgeType: 'red',
    title: 'COVID Changes Everything',
    body: "The world shut down. Offices emptied. Our crew scattered across cities. But the energy didn't die — it moved online. We created <strong>@zealots_dance</strong> on Instagram and launched our YouTube channel, and started sharing our dance with the world.",
  },
  {
    year: '2021',
    badge: 'Beyond the Office',
    badgeType: 'default',
    title: 'Breaking Org Boundaries',
    body: 'Something unexpected happened. People from <em>other</em> companies, other cities, other backgrounds — all corporate professionals — found us online and wanted in. Zealots was no longer one company\'s crew. It belonged to anyone who lived the 9-to-5 and still felt the beat.',
  },
  {
    year: 'Today',
    badge: 'Right Now',
    badgeType: 'green',
    title: '120+ Collaborators. One Movement.',
    body: 'Today, Zealots is a thriving movement — <strong>120+ passionate corporate dancers</strong> from different organisations, cities, and backgrounds, all collaborating under one name. A core leadership team keeps the show running. We still punch in at 9. And we still hit the floor like nothing else matters.',
    isNow: true,
  },
];
