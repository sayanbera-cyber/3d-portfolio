import type { Work } from './data';

export type LocalPhotoRecord = {
  id: string;
  name: string;
  category: Exclude<Work['category'], 'All'>;
  width: number;
  height: number;
  blob: Blob;
};

const databaseName = 'sagnik-portfolio-local-photos';
const storeName = 'photos';

function openPhotoDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      reject(new Error('This browser does not support local photo storage.'));
      return;
    }
    const request = window.indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(storeName)) {
        request.result.createObjectStore(storeName, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Could not open local photo storage.'));
  });
}

export async function loadLocalPhotos(): Promise<LocalPhotoRecord[]> {
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll();
    request.onsuccess = () => { db.close(); resolve(request.result as LocalPhotoRecord[]); };
    request.onerror = () => { db.close(); reject(request.error ?? new Error('Could not load saved photos.')); };
  });
}

export async function saveLocalPhoto(file: File, category: LocalPhotoRecord['category']): Promise<LocalPhotoRecord> {
  const bitmap = await createImageBitmap(file);
  const record: LocalPhotoRecord = {
    id: crypto.randomUUID(),
    name: file.name.replace(/\.[^.]+$/, ''),
    category,
    width: bitmap.width,
    height: bitmap.height,
    blob: file,
  };
  bitmap.close();
  const db = await openPhotoDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readwrite');
    transaction.objectStore(storeName).put(record);
    transaction.oncomplete = () => { db.close(); resolve(record); };
    transaction.onerror = () => { db.close(); reject(transaction.error ?? new Error('Could not save this photo.')); };
    transaction.onabort = () => { db.close(); reject(transaction.error ?? new Error('Photo storage is full or unavailable.')); };
  });
}

export function asWorkItem(record: LocalPhotoRecord, imageUrl: string): Work {
  return {
    image: imageUrl,
    name: record.name,
    category: record.category,
    width: record.width,
    height: record.height,
    localPhotoId: record.id,
  };
}
