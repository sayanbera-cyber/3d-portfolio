export type SavedReelRecord = {
  id: string;
  name: string;
  addedAt: string;
  blob: Blob;
};

const databaseName = 'sagnik-portfolio-local-reels';
const storeName = 'reels';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('This browser does not support local reel storage.')); return; }
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(storeName)) request.result.createObjectStore(storeName, { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Could not open local reel storage.'));
  });
}

export async function loadSavedReels(): Promise<SavedReelRecord[]> {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
    request.onsuccess = () => { db.close(); resolve(request.result as SavedReelRecord[]); };
    request.onerror = () => { db.close(); reject(request.error ?? new Error('Could not load saved reels.')); };
  });
}

export async function saveReel(file: File): Promise<SavedReelRecord> {
  const record: SavedReelRecord = { id: crypto.randomUUID(), name: file.name.replace(/\.[^.]+$/, ''), addedAt: new Date().toISOString(), blob: file };
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    transaction.objectStore(storeName).put(record);
    transaction.oncomplete = () => { db.close(); resolve(record); };
    transaction.onerror = () => { db.close(); reject(transaction.error ?? new Error('Could not save this reel.')); };
    transaction.onabort = () => { db.close(); reject(transaction.error ?? new Error('Reel storage is full or unavailable.')); };
  });
}
