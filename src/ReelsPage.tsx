import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Clapperboard, ImagePlus, Search } from 'lucide-react';
import { uploadedReels } from './reelsData';
import { loadSavedReels, saveReel, type SavedReelRecord } from './reelStorage';

type LocalReel = SavedReelRecord & { src: string };

export default function ReelsPage() {
  const [localReels, setLocalReels] = useState<LocalReel[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const fileInput = useRef<HTMLInputElement>(null);
  const objectUrls = useRef<string[]>([]);
  const reels = useMemo(() => [
    ...localReels.map(reel => ({ id: reel.id, title: reel.name, date: `Added ${new Date(reel.addedAt).toLocaleDateString()}`, src: reel.src, poster: undefined as string | undefined, source: 'Added in this browser' })),
    ...uploadedReels,
  ].filter(reel => `${reel.title} ${reel.date} ${reel.source}`.toLowerCase().includes(search.toLowerCase())), [localReels, search]);

  useEffect(() => {
    let cancelled = false;
    loadSavedReels().then(records => {
      if (cancelled) return;
      const loaded = records.map(record => { const src = URL.createObjectURL(record.blob); objectUrls.current.push(src); return { ...record, src }; });
      setLocalReels(loaded);
      if (loaded.length) setStatus(`${loaded.length} locally saved ${loaded.length === 1 ? 'reel is' : 'reels are'} ready.`);
    }).catch(() => { if (!cancelled) setStatus('Local reel storage is unavailable in this browser.'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; objectUrls.current.forEach(URL.revokeObjectURL); objectUrls.current = []; };
  }, []);

  const addReels = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = '';
    if (!files.length) return;
    let added = 0;
    const errors: string[] = [];
    for (const file of files) {
      if (!['video/mp4', 'video/webm'].includes(file.type)) { errors.push(`${file.name}: use MP4 or WebM`); continue; }
      if (file.size > 200 * 1024 * 1024) { errors.push(`${file.name}: larger than 200 MB`); continue; }
      try {
        const record = await saveReel(file);
        const src = URL.createObjectURL(record.blob);
        objectUrls.current.push(src);
        setLocalReels(current => [{ ...record, src }, ...current]);
        added += 1;
      } catch { errors.push(`${file.name}: could not save this reel`); }
    }
    setStatus([added ? `${added} ${added === 1 ? 'reel was' : 'reels were'} added and saved in this browser.` : '', ...errors].filter(Boolean).join(' '));
  };

  return <main className="reels-page"><header className="reels-page-header"><a href="/" className="reels-brand">SAGNIK BERA <span>WILDLIFE PHOTOGRAPHER</span></a><a href="/" className="reels-back"><ArrowLeft size={15}/> BACK TO PORTFOLIO</a></header><section className="reels-page-intro"><span className="section-number">THE MOVING ARCHIVE</span><h1>Wildlife <em>Reels.</em></h1><p>Videos from Sagnik's Instagram reels archive, with room to add new clips.</p><span className="reel-count">{reels.length} REELS</span></section><section className="reels-library" aria-label="Reels library"><div className="reels-toolbar"><label className="reel-search"><Search size={15}/><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search reel file names" aria-label="Search reels"/></label><label className="upload-reels" id="add-reel"><input ref={fileInput} type="file" accept="video/mp4,video/webm" multiple onChange={addReels}/><span><Clapperboard size={15}/> ADD REELS</span></label></div><p className="reel-storage-note">New reels are saved in this browser on this device. To publish for everyone, add the videos to <code>media/reels</code> and rebuild the site.</p>{status && <p className="reel-status" role="status">{status}</p>}{loading ? <p className="reels-empty">Loading your reel library…</p> : reels.length ? <div className="reels-grid">{reels.map(reel => <article className="reel-card" key={reel.id}><div className="reel-video-wrap"><video src={reel.src} poster={reel.poster} controls playsInline preload="none" aria-label={reel.title}/><span className="reel-source">{reel.source}</span></div><div className="reel-card-copy"><h2>{reel.title}</h2><span>{reel.date}</span></div></article>)}</div> : <div className="reels-empty"><Clapperboard size={26}/><p>No reels match this search yet.</p></div>}</section><footer className="reels-footer"><a href="/">← Sagnik Bera portfolio</a><a href="https://www.instagram.com/sagnikwildlifelens/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a><span>MP4 AND WEBM REELS</span></footer></main>;
}
