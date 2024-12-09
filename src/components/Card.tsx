import React from "react";

interface Pokemon {
  name: string;
  sprites: Sprite;
}

interface Sprite {
  front_default: string;
}

interface CardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

const Card: React.FC<CardProps> = ({ pokemon, onClick }) => {
  const url = pokemon.sprites.front_default;
  return (
    <div
      className="bg-[hsla(201,19%,26%,0.8)] backdrop-blur-sm h-[350px] flex flex-col content-center justify-center gap-10 rounded-3xl transition-all hover:shadow-3xl shadow-black active:bg-neutral-400 active:shadow-xl font-sans text-xl cursor-pointer"
      onClick={() => onClick(pokemon)}
    >
      <div className="bg-white w-[80%] self-center rounded-2xl align-center">
        <img src={url} alt={url} width={180} />
      </div>
      <h3 className="font-mono text-center text-white">{pokemon.name}</h3>
    </div>
  );
};

export default Card;
