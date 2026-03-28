export interface VideoEntry {
  id: string;       // YouTube video ID — from URL: youtube.com/watch?v=THIS_PART
  title: string;
}

// ⬇️ Replace each id with a real YouTube video ID from your channel
// Example: youtube.com/watch?v=dQw4w9WgXcQ → id: 'dQw4w9WgXcQ'
export const featuredVideos: VideoEntry[] = [
  { id: 'f1G-zANynOs', title: 'Sangeeth Performance' },
  { id: 'jrsOPKv3s3A', title: 'Sangeeth Performance' },
  { id: 'RnCNtpKWk0k', title: 'Corporate Performance' },
];
