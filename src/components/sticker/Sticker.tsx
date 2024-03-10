import { useState } from "react";
import "./Sticker.css";

declare type Props = {
  src: string;
  nombre: string;
};

const Sticker: React.FC<Props> = ({ src, nombre }) => {
  const [isFav, setIsFav] = useState(false);
  const favClass = isFav ? "sticker-fav active" : "sticker-fav";
  return (
    <div className="sticker-container">
      <a href={src} target="_blank">
        <img src={src} alt={nombre} className="sticker-image" />
      </a>
      <button className="sticker-name"
        onClick={() => setIsFav(!isFav)}
      >
        {nombre}
      </button>
      <span className={favClass}></span>
    </div>
  );
};

export default Sticker;
