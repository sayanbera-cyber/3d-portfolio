export const profile = {
  name: 'Sagnik Bera',
  role: 'Wildlife Photographer',
  yearsInField: 3,
  instagram: 'https://www.instagram.com/sagnikwildlifelens/',
  instagramHandle: '@sagnikwildlifelens',
  email: 'sagnikbera238@gmail.com',
  facebook: 'https://www.facebook.com/sagnik123456',
  following: 428,
  highlights: 19,
  statsSource: 'Values transcribed from the supplied Instagram-analysis brief; source workbook is not present in this checkout.',
  stats: [
    { value: 1666, label: 'Instagram followers', context: 'Profile analysis' },
    { value: 276, label: 'Instagram posts', context: 'Profile analysis' },
    { value: 19, label: 'Species in analyzed reels', context: 'Not a count of all species photographed' },
    { value: 3, label: 'Years in the field', context: 'Photographer-supplied' },
  ],
  gear: { camera: 'Nikon D7500', lens: 'AF-S NIKKOR 200–500mm f/5.6E ED VR' },
};

export const analyzedSpecies = [
  { name: 'Blue-tailed Bee-eater', reels: 4 },
  { name: 'Blue-throated Barbet', reels: 4 },
  { name: 'Indian Paradise Flycatcher', reels: 4 },
  { name: 'Spotted Owl', reels: 4, note: 'Original supplied name retained; identification not verified here.' },
  { name: 'Baya Weaver', reels: 2 },
  { name: 'Common Hawk-Cuckoo', reels: 2 },
  { name: 'Asian Green Bee-eater', reels: 1 },
  { name: 'Black-rumped Flameback', reels: 1 },
  { name: 'Chestnut-tailed Starling', reels: 1 },
  { name: 'Common Cuckoo', reels: 1 },
  { name: 'Common Iora', reels: 1 },
  { name: 'Indian Pied Myna', reels: 1 },
  { name: 'Indian Pond Heron', reels: 1 },
  { name: 'Lineated Barbet', reels: 1 },
  { name: 'Orange-headed Thrush', reels: 1 },
  { name: 'Purple-rumped Sunbird', reels: 1 },
  { name: 'Red Munia', reels: 1 },
  { name: 'Red-vented Bulbul', reels: 1 },
  { name: 'Shrike', reels: 1 },
].map(item => ({ ...item, category: 'Birds' as const }));

export const purbasthaliMoment = {
  location: 'Purbasthali',
  region: 'West Bengal, India',
  date: '24 December 2025',
  title: 'A Day for One Frame',
  image: '/Images/Media-Imports/17871247434507500.jpg',
  species: 'Osprey',
  images: ['/Images/Media-Imports/17871247434507500.jpg', '/Images/Media-Imports/18127945900673762.jpg', '/Images/Media-Imports/17972129181095328.jpg'],
  story: 'We spent the entire day on the boat, waiting beneath the relentless sun and heat, knowing that the wild never works on our schedule. Hour after hour passed. The waiting became part of the experience. And then, finally, the moment arrived. One frame made the entire day worthwhile—a reminder that in wildlife photography, patience is often the price of the photograph.',
};

export const nikonSources = {
  camera: 'https://imaging.nikon.com/imaging/lineup/dslr/d7500/',
  lens: 'https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/telephotozoom/af-s_200-500mmf_56e_ed_vr/index.html',
};

export const fieldNotes = [{
  category: 'FIELD STORY',
  title: purbasthaliMoment.title,
  date: purbasthaliMoment.date,
  location: purbasthaliMoment.location,
  excerpt: 'A long day on the boat beneath the sun, and the patience behind one frame.',
  body: purbasthaliMoment.story,
  image: purbasthaliMoment.image,
}];


export const achievements = [{
  title: '1st Rank - Photography',
  event: 'Aranya Saptaha 2026',
  category: 'Photography Competition',
  organizer: 'Purba Medinipur Forest Division in collaboration with the District Administration, Purba Medinipur',
  date: '20 July 2026',
  location: 'Nimtouri, Tamluk, West Bengal',
  description: 'The supplied Certificate of Merit names Sagnik Bera as 1st rank in the Photography category of the Aranya Saptaha 2026 competition for residents of Purba Medinipur district.',
  images: [
    { image: '/Images/Media-Imports/18101046530270627.jpg', alt: 'Certificate of Merit for Sagnik Bera, first rank in the Aranya Saptaha 2026 Photography competition' },
    { image: '/Images/Media-Imports/18117100219915507.jpg', alt: 'Sagnik Bera holding the Aranya Saptaha photography award certificate and recognition' },
  ],
}];
