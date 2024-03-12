import { useEffect, useState, FC } from "react";
import "./Header.css";
import { favsService } from "../../services/fav-service";

declare type Props = {
  favClicked: () => void;
};

const Header: FC<Props> = ({ favClicked }) => {
  const [favoritesCount, setFavoritesCount] = useState(0);
  useEffect(() => {
    const sub = favsService.favs.subscribe((favs) => {
      setFavoritesCount(favs.length);
    });
    return () => sub.unsubscribe();
  }, []);
  return (
    <header>
      <div>
        <h1>Valorant Stickers para el termo</h1>
        <button
          onClick={() => {
            console.log("clicked");
            favClicked();
          }}
        >
          <span>{favoritesCount}</span>
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
        </button>
      </div>
    </header>
  );
};

export default Header;
