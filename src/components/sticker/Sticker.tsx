import { useEffect, useState } from "react";
import "./Sticker.css";
import { StickerModel } from "../../models/StickerModel";
import { favsService } from "../../services/fav-service";

declare type Props = {
  sticker: StickerModel;
};

const Sticker: React.FC<Props> = ({ sticker }) => {
  const [isFav, setIsFav] = useState(false);
  const favClass = isFav ? "sticker-fav active" : "sticker-fav";

  const favClicked = (id: string) => {
    if (isFav) {
      favsService.removeFav(id);
    } else {
      favsService.addFav(sticker);
    }
  };

  useEffect(() => {
    const sub = favsService.favs.subscribe((favs) => {
      setIsFav(favs.some((fav) => fav.id === sticker.id));
    });
    return () => sub.unsubscribe();
  }, [sticker.id]);

  return (
    <div className="sticker-container">
      <a href={sticker.imageUrl} target="_blank">
        <img
          src={sticker.imageUrl}
          alt={sticker.title}
          className="sticker-image"
        />
      </a>
      <button
        className="action"
        title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
        onClick={() => {
          setIsFav(!isFav);
          favClicked(sticker.id);
        }}
      >
        <span className="sticker-name">{sticker.title}</span>
        <span className={favClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.58a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.09a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.53a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Sticker;
