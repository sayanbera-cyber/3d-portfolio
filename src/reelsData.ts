const reelModules = import.meta.glob('../media/reels/**/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function monthFromPath(path: string) {
  const month = path.match(/\/(20\d{4})\//)?.[1];
  if (!month) return 'Instagram reel';
  return new Date(Number(month.slice(0, 4)), Number(month.slice(4, 6)) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export const uploadedReels = Object.entries(reelModules)
  .map(([path, url]) => {
    const id = path.split('/').pop()?.replace(/\.mp4$/i, '') ?? 'wildlife-reel';
    return { id, title: `Wildlife reel ${id}`, date: monthFromPath(path), src: url, poster: `/Reel-Posters/${id}.jpg`, source: 'Instagram archive' };
  })
  .sort((a, b) => a.id.localeCompare(b.id));
