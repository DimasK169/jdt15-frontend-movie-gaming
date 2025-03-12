import React from "react";
import { Movie } from "../../services/type";

interface CardProps {
  data: Movie;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { original_title, original_name, poster_path } = data;
  return (
    <div className="flex flex-col w-[300px] shrink-0 rounded-xl shadow-xl">
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title ?? original_name}
        className="rounded-t-xl object-cover max-h-[380px]"
      />
      <div className="flex flex-col text-center p-4 text-lg">
        <h1>{original_title ?? original_name}</h1>
      </div>
    </div>
  );
};

export default Card;
