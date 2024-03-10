import { StickerModel } from "../../models/StickerModel";
import Sticker from "../sticker/Sticker";
import "./StickerGrid.css";

declare type Props = {
  stickers: StickerModel[];
};
const StickerGrid: React.FC<Props> = ({ stickers }) => {
  return (
    <div className="sticker-grid">
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          src={sticker.imageUrl}
          nombre={sticker.title}
        />
      ))}
    </div>
  );
};

export default StickerGrid;
