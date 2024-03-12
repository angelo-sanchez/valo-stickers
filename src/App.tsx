import Header from "./components/header/Header";
import StickerGrid from "./components/sticker-grid/StickerGrid";
import { StickerModel } from "./models/StickerModel";
import { useEffect, useState } from "react";
import { stickersService } from "./services/stickers-service";
import { favsService } from "./services/fav-service";

function App() {
  const [stickers, setStickers] = useState<StickerModel[]>([]);
  const [favs, setFavs] = useState<StickerModel[]>([]);

  useEffect(() => {
    const sub = stickersService.stickers.subscribe(setStickers);
    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    const sub = favsService.favs.subscribe(setFavs);
    return () => sub.unsubscribe();
  }, []);

  const [favMode, setFavMode] = useState(false);
  const toggleFavMode = () => setFavMode(!favMode);

  return (
    <>
      <Header favClicked={toggleFavMode} />
      <StickerGrid stickers={favMode ? favs : stickers}></StickerGrid>
    </>
  );
}

export default App;
