import { BehaviorSubject } from "rxjs";
import { StickerModel } from "../models/StickerModel";

const favs$ = new BehaviorSubject<StickerModel[]>([]);

export const favsService = {
  init: () => {
    const idb = indexedDB.open("valorant-stickers", 1);
    idb.onupgradeneeded = () => {
      const db = idb.result;
      db.createObjectStore("stickers", { keyPath: "id" });
    };
    idb.onsuccess = () => {
      const db = idb.result;
      const tx = db.transaction("stickers", "readonly");
      const store = tx.objectStore("stickers");
      const req = store.getAll();
      req.onsuccess = () => {
        favs$.next(req.result);
      };
    };
  },
  addFav: (sticker: StickerModel) => {
    const idb = indexedDB.open("valorant-stickers", 1);
    idb.onsuccess = () => {
      const db = idb.result;
      const tx = db.transaction("stickers", "readwrite");
      const store = tx.objectStore("stickers");
      store.put(sticker);
      tx.oncomplete = () => {
        favs$.next([...favs$.value, sticker]);
      };
    };
  },
  removeFav: (id: string) => {
    const idb = indexedDB.open("valorant-stickers", 1);
    idb.onsuccess = () => {
      const db = idb.result;
      const tx = db.transaction("stickers", "readwrite");
      const store = tx.objectStore("stickers");
      store.delete(id);
      tx.oncomplete = () => {
        favs$.next(favs$.value.filter((sticker) => sticker.id !== id));
      };
    };
  },
  favs: favs$.asObservable(),
};
