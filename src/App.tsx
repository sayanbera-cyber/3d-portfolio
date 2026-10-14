import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Aperture, Bird, Check, ChevronDown, ImagePlus, Instagram, Menu, Search, X } from 'lucide-react';
import { sagnikPortraits, work, type Work, type WorkCategory } from './data';
import { achievements, analyzedSpecies, fieldNotes, nikonSources, profile, purbasthaliMoment } from './content';
import { asWorkItem, loadLocalPhotos, saveLocalPhoto } from './photoStorage';
import { uploadedReels } from './reelsData';

const CameraExperience = lazy(() => import('./components/CameraExperience'));
const categories: WorkCategory[] = ['All', 'Birds', 'Mammals', 'Reptiles', 'Insects', 'Portraits', 'Achievements', 'Places & creative'];
const navItems = [['Work', '#work'], ['Reels', '#reels'], ['Species', '#species'], ['Moments', '#moments'], ['Gear', '#gear'], ['Expeditions', '#expeditions'], ['Achievements', '#achievements'], ['Field Notes', '#journal'], ['About', '#about'], ['Contact', '#contact']];

function AnimatedStat({ value, label, context }: { value: number; label: string; context: string }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let timer = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) { setShown(value); observer.disconnect(); return; }
      let start: number | null = null;
      const step = (time: number) => {
        if (start === null) start = time;
        const progress = Math.min((time - start) / 850, 1);
        setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) timer = requestAnimationFrame(step); else observer.disconnect();
      };
      timer = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(timer); };
  }, [value]);
  return <div className="stat" ref={ref}><span className="stat-index">FIELD DATA</span><strong>{shown.toLocaleString('en-US')}</strong><span className="stat-label">{label}</span><small>{context}</small></div>;
}

export default function App() {
  const [category, setCategory] = useState<WorkCategory | null>(null);
  const [addedPhotos, setAddedPhotos] = useState<Work[]>([]);
  const [uploadCategory, setUploadCategory] = useState<Exclude<WorkCategory, 'All'>>('Birds');
  const [uploadStatus, setUploadStatus] = useState('');
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const localPhotoUrls = useRef<string[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [photoZoom, setPhotoZoom] = useState(false);
  const [selectedPortrait, setSelectedPortrait] = useState<number | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<(typeof analyzedSpecies)[number] | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);
  const [photoSearch, setPhotoSearch] = useState('');
  const [speciesSearch, setSpeciesSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [cursorLabel, setCursorLabel] = useState('');
  const [activeSection, setActiveSection] = useState('work');
  const [compactHeader, setCompactHeader] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const cameraStageRef = useRef<HTMLDivElement>(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const modalOpen = selectedPhoto !== null || selectedPortrait !== null || selectedSpecies !== null || storyOpen;
  const allPhotos = useMemo(() => [...work, ...addedPhotos], [addedPhotos]);
  const visiblePhotos = useMemo(() => allPhotos.map((item, index) => ({ ...item, index })).filter(item => (category === null || category === 'All' || item.category === category) && `${item.name} ${item.category}`.toLowerCase().includes(photoSearch.toLowerCase())), [allPhotos, category, photoSearch]);
  const folders = useMemo(() => categories.slice(1).map(name => ({ name, items: allPhotos.filter(item => item.category === name) })).filter(folder => folder.items.length > 0), [allPhotos]);
  const speciesMatches = useMemo(() => analyzedSpecies.filter(item => item.name.toLowerCase().includes(speciesSearch.toLowerCase())), [speciesSearch]);
  const hero = allPhotos.find(item => item.image.includes('DSC_0603-DeNoiseAI-clear')) ?? allPhotos[0];

  useEffect(() => { setPhotoZoom(false); }, [selectedPhoto]);

  useEffect(() => {
    let cancelled = false;
    loadLocalPhotos().then(records => {
      if (cancelled) return;
      const photos = records.map(record => { const url = URL.createObjectURL(record.blob); localPhotoUrls.current.push(url); return asWorkItem(record, url); });
      setAddedPhotos(photos);
      if (photos.length) setUploadStatus(`${photos.length} locally saved ${photos.length === 1 ? 'photo is' : 'photos are'} ready in this browser.`);
    }).catch(() => { if (!cancelled) setUploadStatus('Local photo storage is unavailable in this browser.'); });
    return () => { cancelled = true; localPhotoUrls.current.forEach(URL.revokeObjectURL); localPhotoUrls.current = []; };
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    const onScroll = () => {
      const y = window.scrollY;
      setCompactHeader(y > 48);
      const image = heroImageRef.current;
      if (image && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) image.style.transform = `scale(1.06) translateY(${Math.min(y * 0.055, 75)}px)`;
      document.querySelectorAll<HTMLElement>('main section[id]').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.3) setActiveSection(section.id);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    const cameraObserver = new IntersectionObserver(entries => setCameraVisible(entries[0].isIntersecting), { rootMargin: '160px 0px', threshold: 0.01 });
    if (cameraStageRef.current) cameraObserver.observe(cameraStageRef.current);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); observer.disconnect(); cameraObserver.disconnect(); };
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('dialog-open');
    window.setTimeout(() => dialogCloseRef.current?.focus(), 0);
    return () => { document.body.classList.remove('dialog-open'); previousFocus?.focus(); };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setSelectedPhoto(null); setSelectedPortrait(null); setSelectedSpecies(null); setStoryOpen(false); }
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('[role="dialog"][aria-modal="true"]');
        const focusable = dialog ? [...dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]')] : [];
        if (focusable.length) {
          const first = focusable[0], last = focusable[focusable.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
      }
      if (selectedPhoto !== null && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        const index = visiblePhotos.findIndex(item => item.index === selectedPhoto);
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        setSelectedPhoto(visiblePhotos[(index + direction + visiblePhotos.length) % visiblePhotos.length]?.index ?? selectedPhoto);
      }
      if (selectedPortrait !== null && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        const direction = event.key === 'ArrowRight' ? 1 : -1;
        setSelectedPortrait((selectedPortrait + direction + sagnikPortraits.length) % sagnikPortraits.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, selectedPhoto, selectedPortrait, visiblePhotos]);

  useEffect(() => {
    const over = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-cursor]') : null;
      setCursorLabel(target?.dataset.cursor ?? (target?.matches('a') ? 'OPEN' : ''));
    };
    const move = (event: PointerEvent) => { if (event.pointerType === 'mouse' && cursorRef.current) { cursorRef.current.style.left = `${event.clientX}px`; cursorRef.current.style.top = `${event.clientY}px`; } };
    window.addEventListener('pointerover', over); window.addEventListener('pointermove', move, { passive: true });
    return () => { window.removeEventListener('pointerover', over); window.removeEventListener('pointermove', move); };
  }, []);

  const stepPhoto = (direction: number) => {
    if (selectedPhoto === null || visiblePhotos.length < 1) return;
    const current = visiblePhotos.findIndex(item => item.index === selectedPhoto);
    setSelectedPhoto(visiblePhotos[(current + direction + visiblePhotos.length) % visiblePhotos.length].index);
  };
  const submitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const fields = new FormData(event.currentTarget);
    const subject = String(fields.get('subject') || 'Portfolio enquiry');
    const body = `From: ${fields.get('name')}\nReply email: ${fields.get('email')}\n\n${fields.get('message')}`;
    setContactMessage('Opening your email app with this message addressed to Sagnik.');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const addPhotos = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = '';
    if (!files.length) return;
    let saved = 0;
    const rejected: string[] = [];
    for (const file of files) {
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(file.type)) { rejected.push(`${file.name}: use JPEG, PNG, WebP or AVIF`); continue; }
      if (file.size > 25 * 1024 * 1024) { rejected.push(`${file.name}: larger than 25 MB`); continue; }
      try {
        const record = await saveLocalPhoto(file, uploadCategory);
        const url = URL.createObjectURL(record.blob);
        localPhotoUrls.current.push(url);
        setAddedPhotos(current => [...current, asWorkItem(record, url)]);
        saved += 1;
      } catch {
        rejected.push(`${file.name}: could not read or save this image`);
      }
    }
    setUploadStatus([saved ? `${saved} ${saved === 1 ? 'photo was' : 'photos were'} added to ${uploadCategory} and saved in this browser.` : '', ...rejected].filter(Boolean).join(' '));
  };

  return <>
    <div className={`loading-screen ${entered ? 'loading-complete' : ''}`} aria-hidden="true"><span>SAGNIK BERA</span><small>WILDLIFE PHOTOGRAPHY</small><i/>ENTERING THE WILDâ€¦</div>
    <div ref={cursorRef} className={`custom-cursor ${cursorLabel ? 'cursor-active' : ''}`} aria-hidden="true">{cursorLabel}</div>
    <header className={`site-header ${compactHeader ? 'compact' : ''}`}>
      <a className="brand" href="#top" aria-label="Sagnik Bera, home"><span className="brand-mark"><Aperture size={18}/></span><span>SAGNIK BERA<small>WILDLIFE PHOTOGRAPHER</small></span></a>
      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} className={activeSection === href.slice(1) ? 'active' : ''} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-social" href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero" aria-label="Sagnik Bera wildlife photography">
        <img ref={heroImageRef} className="hero-image" src={hero.image} alt="Bird photograph from Sagnik Bera's supplied archive" fetchPriority="high"/>
        <div className="hero-content"><p className="eyebrow"><span className="eyebrow-line"/> SAGNIK BERA <span className="eyebrow-count">WILDLIFE PHOTOGRAPHER</span></p><h1>MADE TO<br/><em>WITNESS</em><br/>THE WILD<span className="period">.</span></h1><p className="hero-tagline">{profile.yearsInField} years in the field. Countless hours of waiting.<br/>Moments that exist for only a fraction of a second.</p><div className="hero-actions"><a href="#work" className="hero-cta" data-cursor="OPEN">EXPLORE THE WORK <ArrowUpRight size={15}/></a><a href="#species" className="hero-secondary" data-cursor="EXPLORE">ENTER THE WILD <ArrowDown size={14}/></a></div></div>
        <div className="hero-side"><span>WEST BENGAL Â· INDIA</span><span className="side-rule"/><span>THREE YEARS IN THE FIELD</span></div><a className="scroll-cue" href="#practice"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a><div className="hero-index"><span>01</span><i/><span>06</span></div>
      </section>

      <section id="practice" className="intro section-pad" data-reveal><div className="intro-label"><span className="section-number">01 / THE PRACTICE</span><span className="small-dash"/></div><div className="intro-copy"><p className="eyebrow muted">A LIFE OUTSIDE THE FRAME</p><h2>{profile.yearsInField} years<br/><em>in the field.</em></h2><div className="intro-lower"><p>Wildlife photography asks for patience, attention and a willingness to wait. This collection brings together the birds, portraits, places and experiments made along the way.</p><a href="#about" className="text-link">Meet Sagnik <ArrowUpRight size={15}/></a></div></div><div className="intro-aside"><span className="asterisk">âœ³</span><p>{profile.yearsInField} YEARS<br/>IN THE FIELD</p><span className="aside-line"/><p>NIKON D7500<br/>200â€“500MM</p></div></section>

      <section id="work" className="work section-pad" data-reveal><div className="section-heading"><div><span className="section-number">02 / THE COLLECTION</span><h2>Made of <em>moments.</em></h2></div><p>Original photographs from the supplied archive.<br/>Open a folder, then a frame, to explore it.</p></div>
        <div className="photo-add-toolbar"><label className="upload-category">SAVE NEW PHOTOS IN<select value={uploadCategory} onChange={event => setUploadCategory(event.target.value as Exclude<WorkCategory, 'All'>)}>{categories.slice(1).map(item => <option key={item} value={item}>{item}</option>)}</select></label><label className="upload-photos"><input ref={uploadInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple onChange={addPhotos}/><span><ImagePlus size={15}/> ADD PHOTOS</span></label><p>Saved in this browser on this device only. For a public update, add photos to <code>public/Images</code>.</p>{uploadStatus && <span className="upload-status" role="status">{uploadStatus}</span>}</div>
        {category === null ? <div className="folder-grid" aria-label="Photo folders"><button className="folder-card all-folder" onClick={() => setCategory('All')}><div className="folder-cover"><img src={hero.image} alt="Complete archive preview" loading="lazy"/><span className="folder-tab">COMPLETE ARCHIVE</span><span className="folder-open">OPEN FOLDER <ArrowUpRight size={15}/></span></div><div className="folder-info"><div><h3>All photographs</h3><p>Every image in the archive, including locally added photos</p></div><span>{allPhotos.length} FRAMES</span></div></button>{folders.map(folder => <button className="folder-card" key={folder.name} onClick={() => setCategory(folder.name)}><div className="folder-cover"><img src={folder.items[0].image} alt={`${folder.name} folder preview`} loading="lazy"/><span className="folder-tab">{folder.name.toUpperCase()}</span><span className="folder-open">OPEN FOLDER <ArrowUpRight size={15}/></span></div><div className="folder-info"><div><h3>{folder.name}</h3><p>Browse photographs and available details</p></div><span>{folder.items.length} FRAMES</span></div></button>)}</div> : <><div className="folder-breadcrumb"><button onClick={() => setCategory(null)}><ArrowLeft size={15}/> ALL FOLDERS</button><span>{category === 'All' ? 'ALL PHOTOGRAPHS' : category.toUpperCase()} | {visiblePhotos.length} FRAMES</span></div><div className="gallery-toolbar"><div className="filter-list" role="group" aria-label="Filter photographs">{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={category === item ? 'selected' : ''} aria-pressed={category === item}>{item}</button>)}</div><label className="species-search photo-search"><Search size={15}/><input value={photoSearch} onChange={event => setPhotoSearch(event.target.value)} placeholder="Find a filename or folder" aria-label="Search photographs"/><span>{visiblePhotos.length} MATCHES</span></label></div><div className="gallery-grid">{visiblePhotos.map(({ image, name, category: kind, index }, i) => <button className={`gallery-item ${i % 7 === 0 ? 'photo-tall' : i % 5 === 0 ? 'photo-wide' : ''}`} key={image} onClick={() => setSelectedPhoto(index)} aria-label={`View ${kind} photograph ${name}`} data-cursor="VIEW"><img src={image} alt={`${kind} photograph, ${name}`} loading={i < 8 ? 'eager' : 'lazy'}/><span className="image-shade"/><span className="gallery-meta"><span className="photo-index">{String(index + 1).padStart(3, '0')} / {allPhotos.length}</span><span className="photo-title">{kind}<small>{name}</small></span><span className="view-circle"><ArrowUpRight size={17}/></span></span></button>)}</div></>}
        <div className="work-end"><span>THE COLLECTION | {allPhotos.length} IMAGES</span><span>ORIGINAL ARCHIVE | SORTED BY SUBJECT</span></div>
      </section>

      <section id="reels" className="reels-section section-pad" data-reveal><div className="reels-section-head"><div><span className="section-number">THE MOVING ARCHIVE ? {uploadedReels.length} UPLOADED REELS</span><h2>Stories in <em>motion.</em></h2></div><p>Watch the reels archive from Sagnik's Instagram, or open the full library to add new videos.</p></div><div className="reels-preview-grid">{uploadedReels.slice(0, 3).map(reel => <article className="reels-preview-card" key={reel.id}><video src={reel.src} poster={reel.poster} controls playsInline preload="none" aria-label={reel.title}/><div className="reels-preview-meta"><span>INSTAGRAM REEL</span><span>{reel.date}</span></div></article>)}</div><div className="reels-preview-actions"><a href="/reels.html">VIEW ALL {uploadedReels.length} REELS <ArrowUpRight size={14}/></a><a href="/reels.html#add-reel">ADD REELS <ImagePlus size={14}/></a></div></section>

      <section id="species" className="species-section section-pad" data-reveal><div className="section-heading"><div><span className="section-number">03 / INSTAGRAM SPECIES INDEX</span><h2>Species I've <em>met.</em></h2></div><p>Counts below are appearances in analyzed reels,<br/>not portfolio-photo or total-species counts.</p></div><div className="species-intro-row"><p>{analyzedSpecies.length} species names appear in the supplied analysis summary. Names are preserved as supplied; portfolio images have not been confidently matched to each species yet.</p><label className="species-search"><Search size={15}/><input value={speciesSearch} onChange={event => setSpeciesSearch(event.target.value)} placeholder="Search species" aria-label="Search species"/><span>{speciesMatches.length} FOUND</span></label></div>
        <div className="species-explorer"><div className="species-orbit"><svg viewBox="0 0 640 430" role="img" aria-label="Interactive species diagram sized by analyzed reel appearances"><ellipse cx="320" cy="215" rx="244" ry="157"/><ellipse cx="320" cy="215" rx="162" ry="101"/><circle className="orbit-center" cx="320" cy="215" r="46"/><text className="orbit-center-label" x="320" y="210" textAnchor="middle">FIELD</text><text className="orbit-center-label" x="320" y="226" textAnchor="middle">RECORD</text>{speciesMatches.map((item, i) => { const angle = (i / Math.max(speciesMatches.length, 1)) * Math.PI * 2 - Math.PI / 2; const x = 320 + Math.cos(angle) * (i % 2 ? 205 : 135); const y = 215 + Math.sin(angle) * (i % 2 ? 132 : 78); return <g key={item.name} role="button" tabIndex={0} aria-label={`${item.name}, ${item.reels} analyzed reels`} onClick={() => setSelectedSpecies(item)} onKeyDown={event => {if(event.key==='Enter'||event.key===' '){event.preventDefault();setSelectedSpecies(item)}}}><circle className="species-node" cx={x} cy={y} r={7 + item.reels * 2}/><text className="species-node-label" x={x} y={y - 18} textAnchor="middle">{item.name}</text></g>; })}</svg><div className="species-legend"><span><i/> node size = analyzed reels</span><span>SELECT A SPECIES</span></div></div>
          <div className="species-list"><div className="species-list-head"><span>ANALYZED REELS</span><span>{speciesMatches.length} SPECIES</span></div>{speciesMatches.map(item => <button key={item.name} className="species-row" onClick={() => setSelectedSpecies(item)}><span>{item.name}</span><b>{item.reels}</b><ArrowUpRight size={14}/></button>)}</div></div>
      </section>

      <section id="moments" className="moments-section section-pad" data-reveal><div className="section-heading"><div><span className="section-number">04 / STORIES IN THE FRAME</span><h2>Made of <em>moments.</em></h2></div><p>Frames from the archive, with the context<br/>Sagnik supplied for them.</p></div><div className="moment-feature"><div className="moment-image">{purbasthaliMoment.image ? <img src={purbasthaliMoment.image} alt="Osprey carrying a fish over Purbasthali" loading="lazy"/> : <div className="moment-image-pending"><Bird size={28}/><span>FEATURE IMAGE NOT YET MATCHED</span><small>Set the supplied photograph path in src/content.ts when identified.</small></div>}<span className="moment-image-label">{purbasthaliMoment.location.toUpperCase()} Â· {purbasthaliMoment.date.toUpperCase()}</span></div><div className="moment-copy"><span className="section-number">FEATURED FIELD STORY</span><h3>{purbasthaliMoment.title}</h3><p className="moment-location">{purbasthaliMoment.location} Â· {purbasthaliMoment.date}</p><p>{purbasthaliMoment.story}</p><button className="text-link" onClick={() => setStoryOpen(true)}>Read the full story <ArrowUpRight size={15}/></button><div className="capture-details"><span>SPECIES<b>{purbasthaliMoment.species ?? 'Not supplied'}</b></span><span>CAPTURE DETAILS<b>Osprey photographs from the supplied media archive</b></span></div></div></div><div className="purbasthali-photos" aria-label="Osprey photographs from Purbasthali">{purbasthaliMoment.images.map((image, index) => <button key={image} onClick={() => {setCategory('All');setSelectedPhoto(allPhotos.findIndex(item => item.image === image));}} aria-label={`Open Purbasthali Osprey photo ${index + 1}`}><img src={image} alt={`Osprey at Purbasthali, field frame ${index + 1}`} loading="lazy"/><span>OSPREY FRAME {String(index + 1).padStart(2, '0')}</span></button>)}</div>
        <div className="moments-strip">{allPhotos.filter(item => item.category === 'Birds').slice(0, 4).map((item, index) => <button key={item.image} onClick={() => { const photoIndex = allPhotos.indexOf(item); setCategory('All'); setSelectedPhoto(photoIndex); }} data-cursor="VIEW"><img src={item.image} alt={`Archive bird frame ${index + 1}`} loading="lazy"/><span>ARCHIVE FRAME Â· {String(index + 1).padStart(2, '0')}</span></button>)}</div>
      </section>

      <section className="stats-section section-pad" data-reveal><div className="stats-head"><span className="section-number">05 / THE JOURNEY IN NUMBERS</span><h2>A practice measured<br/>in <em>encounters.</em></h2><p>{profile.statsSource} Instagram species appearances are not a portfolio inventory.</p></div><div className="stats-grid">{profile.stats.map(stat => <AnimatedStat key={stat.label} value={stat.value} label={stat.label} context={stat.context}/>)}</div><button className="insights-toggle" aria-expanded={insightsOpen} onClick={() => setInsightsOpen(!insightsOpen)}>VIEW CREATOR INSIGHTS <ChevronDown size={15}/></button>{insightsOpen && <div className="insights-panel"><p>Profile analysis: {profile.instagramHandle} Â· 1,666 followers Â· 428 following Â· 276 posts Â· 19 highlights.</p><p>{profile.stats[2].value} distinct species were listed across the analyzed reels. Full post-level performance and format breakdowns require the missing workbook.</p></div>}</section>

      <section id="gear" className="gear-section section-pad" data-reveal><div className="gear-copy"><span className="section-number">06 / THE GEAR BEHIND THE FRAME</span><h2>Built for the<br/><em>long wait.</em></h2><p>The profile analysis lists a Nikon D7500 with the AF-S NIKKOR 200â€“500mm f/5.6E ED VR. A long zoom range and vibration reduction are useful tools for framing distant wildlife.</p><div className="gear-model"><span>01</span><strong>Nikon D7500</strong><i>AF-S NIKKOR 200â€“500mm f/5.6E ED VR</i></div><a className="text-link" href="#why-gear">Why this setup <ArrowUpRight size={15}/></a></div><div className="camera-stage" ref={cameraStageRef} data-cursor="EXPLORE">{cameraVisible ? <Suspense fallback={<div className="camera-loading">PREPARING THE FIELD KITâ€¦</div>}><CameraExperience/></Suspense> : <div className="camera-loading">INTERACTIVE FIELD KIT · SCROLL TO LOAD</div>}</div><div className="gear-bottom"><span>SPECIFICATIONS VERIFIED AGAINST NIKON</span><span>DRAG Â· HOVER Â· TAP TO EXPLORE</span></div></section>

      <section id="why-gear" className="why-gear section-pad" data-reveal><span className="section-number">07 / WHY THIS GEAR</span><h2>Reach without<br/><em>the intrusion.</em></h2><p>A 200â€“500mm zoom offers framing flexibility across a long focal range; VR helps counter camera shake. These are general equipment capabilities, not claims about a specific photograph or personal field experience.</p><div className="gear-sources"><a href={nikonSources.camera} target="_blank" rel="noreferrer">Nikon D7500 specifications <ArrowUpRight size={13}/></a><a href={nikonSources.lens} target="_blank" rel="noreferrer">NIKKOR 200â€“500mm specifications <ArrowUpRight size={13}/></a></div></section>

      <section id="expeditions" className="expedition section-pad" data-reveal><div className="section-heading"><div><span className="section-number">08 / WHERE I'VE BEEN</span><h2>Field <em>locations.</em></h2></div><p>Only a location supplied in the project brief<br/>is shown here; photo-by-photo locations remain unassigned.</p></div><div className="location-card"><div className="location-map"><iframe title="OpenStreetMap around Purbasthali, West Bengal" src="https://www.openstreetmap.org/export/embed.html?bbox=88.30%2C23.42%2C88.38%2C23.50&amp;layer=mapnik&amp;marker=23.4667%2C88.3444" loading="lazy" referrerPolicy="no-referrer"/><a href="https://www.openstreetmap.org/?mlat=23.4667&amp;mlon=88.3444#map=13/23.4667/88.3444" target="_blank" rel="noreferrer">OPEN MAP <ArrowUpRight size={13}/></a></div><div className="location-copy"><span>KNOWN FEATURED LOCATION</span><h3>Purbasthali</h3><p>West Bengal, India</p><div className="location-meta"><span>STORY DATE<b>{purbasthaliMoment.date}</b></span><span>LINKED PHOTOGRAPHS<b>{purbasthaliMoment.image ? '3 featured frames' : 'Awaiting image match'}</b></span></div><button className="text-link" onClick={() => {document.querySelector('#moments')?.scrollIntoView({behavior:'smooth'});setStoryOpen(true)}}>See the field story <ArrowUpRight size={14}/></button></div></div></section>

      <section id="achievements" className="journey achievement-section section-pad" data-reveal><div className="section-heading"><div><span className="section-number">09 / ACHIEVEMENTS</span><h2>Recognition <em>earned.</em></h2></div><p>Award details and photographs are shown from the supplied certificate and media archive.</p></div><div className="achievements-grid">{achievements.map(achievement => <article className="achievement-card" key={achievement.event}><div className="achievement-copy"><span className="achievement-rank">{achievement.title}</span><h3>{achievement.event}</h3><p className="achievement-category">{achievement.category}</p><p>{achievement.description}</p><dl><div><dt>ORGANIZER</dt><dd>{achievement.organizer}</dd></div><div><dt>DATE</dt><dd>{achievement.date}</dd></div><div><dt>PLACE</dt><dd>{achievement.location}</dd></div></dl></div><div className="achievement-images">{achievement.images.map((item, index) => <button key={item.image} onClick={() => {setCategory('All');setSelectedPhoto(allPhotos.findIndex(photo => photo.image === item.image));}} aria-label={`View achievement evidence ${index + 1}`}><img src={item.image} alt={item.alt} loading="lazy"/><span>{index === 0 ? 'CERTIFICATE' : 'AWARD PRESENTATION'} <ArrowUpRight size={13}/></span></button>)}</div></article>)}</div><p className="achievement-unconfirmed">The separate Osprey district contest mentioned in the earlier brief remains unconfirmed by the supplied certificate.</p></section>

      <section id="journal" className="journal section-pad" data-reveal><div className="section-heading"><div><span className="section-number">10 / FIELD NOTES</span><h2>Notes from <em>the wait.</em></h2></div><p>Stories here are limited to experiences<br/>Sagnik has supplied.</p></div><div className="journal-grid">{fieldNotes.map((note, index) => <article className="journal-feature" key={note.title}><div className="journal-img">{note.image ? <img src={note.image} alt={note.title} loading="lazy"/> : <div className="journal-image-pending"><Bird size={25}/><span>FIELD IMAGE TO BE MATCHED</span></div>}<span>{note.category} Â· {note.date}</span></div><small>{String(index + 1).padStart(2, '0')} / FIELD STORY</small><h3>{note.title}</h3><p>{note.excerpt}</p><button aria-label={`Read ${note.title}`} onClick={() => setStoryOpen(true)}><ArrowUpRight/></button></article>)}</div></section>

      <section className="conservation section-pad" data-reveal><div className="conservation-image"><img src={allPhotos.find(item => item.category === 'Birds')?.image ?? hero.image} alt="Bird from Sagnik Bera's archive" loading="lazy"/><span className="image-shade"/></div><div className="conservation-copy"><span className="section-number">11 / PHOTOGRAPHY WITH A PURPOSE</span><span className="conservation-star">âœ³</span><h2>Look closer.<br/><em>Leave room for wild.</em></h2><p>Photography can invite a closer look at the lives and habitats around us. This section shares that intention without making unverified conservation claims or partnership statements.</p><span className="conservation-note">OBSERVE WITH CARE Â· LEAVE NO TRACE</span></div></section>

      <section id="about" className="about-section section-pad" data-reveal><div className="about-copy"><span className="section-number">12 / BEHIND THE LENS</span><h2>Sagnik <em>Bera.</em></h2><p className="about-role">WILDLIFE PHOTOGRAPHER Â· {profile.yearsInField} YEARS IN THE FIELD</p><p>Meet Sagnik Bera, the photographer behind this collection. These field portraits show him with the camera, out where the photographs begin.</p><p>His supplied profile lists a Nikon D7500 and 200â€“500mm lens.</p><a className="text-link" href={profile.instagram} target="_blank" rel="noreferrer">{profile.instagramHandle} <ArrowUpRight size={15}/></a></div><div className="about-portrait-grid">{sagnikPortraits.map((portrait, i) => <button className={`about-portrait portrait-${i + 1}`} key={portrait.image} onClick={() => setSelectedPortrait(i)} aria-label={`View portrait of Sagnik Bera, image ${i + 1}`} data-cursor="VIEW"><img src={portrait.image} alt={portrait.alt} loading="lazy"/><span>{String(i + 1).padStart(2, '0')} Â· IN THE FIELD</span></button>)}</div></section>

      <section id="contact" className="contact-section section-pad" data-reveal><div className="contact-intro"><span className="section-number">13 / GET IN TOUCH</span><h2>Let's talk about<br/>the <em>wild.</em></h2><p>For assignments, collaborations, exhibitions, print enquiries, or simply to talk photography.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14}/></a><a href={profile.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14}/></a><a href={profile.instagram} target="_blank" rel="noreferrer">{profile.instagramHandle} <ArrowUpRight size={14}/></a><span>CONTACT FORM OPENS YOUR EMAIL APP</span></div></div><form className="contact-form" onSubmit={submitContact} onChange={() => contactMessage && setContactMessage('')}><label>Your name<input name="name" required autoComplete="name" placeholder="Name"/></label><label>Email address<input type="email" name="email" required autoComplete="email" placeholder="you@example.com"/></label><label>Subject<select name="subject" required defaultValue=""><option value="" disabled>Choose a subject</option><option>Assignment</option><option>Collaboration</option><option>Print enquiry</option><option>Photography conversation</option></select></label><label>Message<textarea name="message" required rows={4} placeholder="What would you like to discuss?"/></label><button className="submit-button" type="submit">OPEN EMAIL APP <ArrowUpRight size={14}/></button>{contactMessage && <p className="form-feedback" role="status">{contactMessage}</p>}</form></section>
    </main>

    <footer className="footer"><a className="footer-brand" href="#top">SAGNIK BERA<span>WILDLIFE PHOTOGRAPHER Â· {profile.yearsInField} YEARS IN THE FIELD</span></a><p>MADE OF MOMENTS.</p><div><a href="#work">Work</a><a href="#species">Species</a><a href="#moments">Moments</a><a href="#reels">Reels</a><a href="#gear">Gear</a><a href="#achievements">Achievements</a><a href="#about">About</a><a href="#contact">Contact</a><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={12}/></a><a href={`mailto:${profile.email}`}>Email</a><a href={profile.facebook} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={12}/></a></div><span className="copyright">Â© 2026 SAGNIK BERA</span></footer>

    {selectedPhoto !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph details" onClick={() => setSelectedPhoto(null)}><button ref={dialogCloseRef} className="lightbox-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photograph viewer"><X/></button><button className="lightbox-prev" aria-label="Previous photograph" onClick={event => {event.stopPropagation();stepPhoto(-1)}}><ArrowLeft/></button><div className="lightbox-content" onClick={event => event.stopPropagation()} onTouchStart={event => setTouchStartX(event.touches[0].clientX)} onTouchEnd={event => {const delta=event.changedTouches[0].clientX-touchStartX;if(Math.abs(delta)>55)stepPhoto(delta<0?1:-1)}}><button className="zoom-toggle" aria-label={photoZoom ? 'Zoom out' : 'Zoom photograph'} onClick={() => setPhotoZoom(!photoZoom)}>{photoZoom ? 'âˆ’' : '+'}</button><img className={photoZoom ? 'photo-zoomed' : ''} onClick={() => setPhotoZoom(!photoZoom)} src={allPhotos[selectedPhoto].image} alt={`${allPhotos[selectedPhoto].category} photograph, ${allPhotos[selectedPhoto].name}`}/><div className="lightbox-details"><div><span>{String(selectedPhoto + 1).padStart(3, '0')} / {allPhotos.length} Â· {allPhotos[selectedPhoto].category.toUpperCase()}</span><h2>{allPhotos[selectedPhoto].title ?? allPhotos[selectedPhoto].name}</h2><p>{allPhotos[selectedPhoto].caption ?? `This image is part of the supplied ${allPhotos[selectedPhoto].category.toLowerCase()} folder. The archive does not provide a caption for this frame.`}</p>{allPhotos[selectedPhoto].story && <p>{allPhotos[selectedPhoto].story}</p>}</div><div className="exif"><span>FOLDER<b>{allPhotos[selectedPhoto].category}</b></span><span>ORIGINAL FILE<b>{allPhotos[selectedPhoto].name}</b></span><span>IMAGE SIZE<b>{allPhotos[selectedPhoto].width} Ã— {allPhotos[selectedPhoto].height}px</b></span><span>DATE Â· LOCATION<b>{[allPhotos[selectedPhoto].date, allPhotos[selectedPhoto].location].filter(Boolean).join(' Â· ') || 'Not supplied'}</b></span>{(allPhotos[selectedPhoto].camera || allPhotos[selectedPhoto].lens || allPhotos[selectedPhoto].focalLength || allPhotos[selectedPhoto].aperture || allPhotos[selectedPhoto].shutterSpeed || allPhotos[selectedPhoto].iso) && <span>CAPTURE DETAILS<b>{[allPhotos[selectedPhoto].camera, allPhotos[selectedPhoto].lens, allPhotos[selectedPhoto].focalLength, allPhotos[selectedPhoto].aperture, allPhotos[selectedPhoto].shutterSpeed, allPhotos[selectedPhoto].iso && `ISO ${allPhotos[selectedPhoto].iso}`].filter(Boolean).join(' Â· ')}</b></span>}</div></div></div><button className="lightbox-next" aria-label="Next photograph" onClick={event => {event.stopPropagation();stepPhoto(1)}}><ArrowRight/></button></div>}
    {selectedPortrait !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Sagnik Bera portrait viewer" onClick={() => setSelectedPortrait(null)}><button ref={dialogCloseRef} className="lightbox-close" onClick={() => setSelectedPortrait(null)} aria-label="Close portrait"><X/></button><button className="lightbox-prev" aria-label="Previous portrait" onClick={event => {event.stopPropagation();setSelectedPortrait((selectedPortrait+sagnikPortraits.length-1)%sagnikPortraits.length)}}><ArrowLeft/></button><div className="lightbox-content portrait-viewer" onClick={event => event.stopPropagation()}><img src={sagnikPortraits[selectedPortrait].image} alt={sagnikPortraits[selectedPortrait].alt}/><div className="lightbox-details"><div><span>PORTRAIT Â· SAGNIK BERA</span><h2>Behind the lens</h2><p>A field portrait supplied for Sagnik's introduction.</p></div><div className="exif"><span>PHOTOGRAPHER<b>Sagnik Bera</b></span><span>FILE<b>{sagnikPortraits[selectedPortrait].image.split('/').pop()}</b></span><span>DATE Â· LOCATION<b>Not supplied</b></span></div></div></div><button className="lightbox-next" aria-label="Next portrait" onClick={event => {event.stopPropagation();setSelectedPortrait((selectedPortrait+1)%sagnikPortraits.length)}}><ArrowRight/></button></div>}
    {selectedSpecies && <div className="lightbox species-dialog-backdrop" role="dialog" aria-modal="true" aria-label={`${selectedSpecies.name} details`} onClick={() => setSelectedSpecies(null)}><div className="species-dialog" onClick={event => event.stopPropagation()}><button className="lightbox-close" onClick={() => setSelectedSpecies(null)} aria-label="Close species details"><X/></button><span className="section-number">SPECIES IN ANALYZED REELS</span><h2>{selectedSpecies.name}</h2><p className="species-reel-count">{selectedSpecies.reels} analyzed {selectedSpecies.reels === 1 ? 'reel' : 'reels'}</p><p>{selectedSpecies.note ?? 'Species name preserved from the supplied analysis summary.'}</p><p>Portfolio photographs are not yet mapped to this species, so no photo count, date, location, or scientific name is claimed.</p><button className="text-link" onClick={() => {setSelectedSpecies(null);setCategory('Birds');document.querySelector('#work')?.scrollIntoView({behavior:'smooth'})}}>Browse the Birds folder <ArrowUpRight size={15}/></button></div></div>}
    {storyOpen && <div className="lightbox story-dialog-backdrop" role="dialog" aria-modal="true" aria-label="Purbasthali field story" onClick={() => setStoryOpen(false)}><article className="story-dialog" onClick={event => event.stopPropagation()}><button ref={dialogCloseRef} className="lightbox-close" onClick={() => setStoryOpen(false)} aria-label="Close story"><X/></button><span className="section-number">{purbasthaliMoment.location.toUpperCase()} Â· {purbasthaliMoment.date.toUpperCase()}</span><h2>{purbasthaliMoment.title}</h2><p>{purbasthaliMoment.story}</p><div className="story-image-note">{purbasthaliMoment.images.length} Osprey photographs from the supplied media archive are featured with this Purbasthali story.</div></article></div>}
  </>;
}
