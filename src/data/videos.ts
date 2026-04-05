export interface VideoEntry {
  id: string;       // YouTube video ID — from URL: youtube.com/watch?v=THIS_PART
  title: string;
}

// ⬇️ Replace each id with a real YouTube video ID from your channel
// Example: youtube.com/watch?v=dQw4w9WgXcQ → id: 'dQw4w9WgXcQ'
export const featuredVideos: VideoEntry[] = [
  { id: 'f1G-zANynOs', title: "Sangeet Performance — Ravi & Srivalli's Wedding" },
  { id: 'jrsOPKv3s3A', title: "Sangeet Performance — Shreekar & Ashritha's Wedding" },
  { id: 'RnCNtpKWk0k', title: 'Group Dance — Representing Different States of India' },
  { id: 'IEfydOEGgBA', title: '2 Years of Zealots — Anniversary Special' },
  { id: 'Ymh1MxFeBds', title: 'Dance Antakshari — Quarantine Edition' },
  { id: 'jjgco3xCrs8', title: 'Dance Tribute to Saroj Khan' },
  { id: 'vMTCqRnVCQo', title: 'Zealots Flash Mob' },
  { id: '8ZuGThQq7Jc', title: 'Ya Re Ya — Ganesh Chaturthi Special' },
];
