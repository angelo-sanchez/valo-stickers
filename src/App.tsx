import Header from "./components/header/Header";
import StickerGrid from "./components/sticker-grid/StickerGrid";
import { StickerModel } from "./models/StickerModel";
import { useEffect, useState } from "react";

function App() {
  // Primero usamos el state para guardar los stickers
  const [stickers, setStickers] = useState<StickerModel[]>([]);

  // Luego, usamos el useEffect para hacer el fetch
  // y guardar los stickers en el state
  useEffect(() => {
    fetch("https://valorant-api.com/v1/sprays?language=es-MX")
      .then((response) => response.json())
      .then(({ data, status }: {data: object[], status: number}) => {
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
        setStickers(parsed);
      });
  });

  return (
    <>
      <Header favoritesCount={1}></Header>
      <StickerGrid stickers={stickers}></StickerGrid>
    </>
  );
}

export default App;
