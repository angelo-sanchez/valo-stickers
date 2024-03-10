import { BehaviorSubject } from "rxjs";
import { StickerModel } from "../models/StickerModel";

const stickers$ = new BehaviorSubject<StickerModel[]>([]);

export const stickersService = {
  init: () => {
    fetch("https://valorant-api.com/v1/sprays?language=es-MX")
      .then((response) => response.json())
      .then(({ data, status }: { data: object[]; status: number }) => {
        if (status !== 200) {
          throw new Error("Error al obtener los stickers");
        }
        const parsed = data.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (e: any): StickerModel => ({
            id: e.uuid,
            imageUrl: e.fullTransparentIcon ?? e.fullIcon ?? e.displayIcon,
            title: e.displayName,
          })
        );
        stickers$.next(parsed);
      });
  },
  stickers: stickers$.asObservable(),
};
