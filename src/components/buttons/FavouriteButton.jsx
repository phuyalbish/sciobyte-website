import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function FavoriteButton({ slug }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(slug));
  }, [slug]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(slug)) {
      favorites = favorites.filter(name => name !== slug);
    } else {
      favorites.push(slug);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={toggleFavorite} className="cursor-pointer">
      {isFavorite ? (
        <FaHeart className="text-red-500" />
      ) : (
        <FaRegHeart className="text-red-500" />
      )}
    </div>
  );
}

export default FavoriteButton;