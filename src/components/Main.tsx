import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

interface MainProps {
  score: number;
  increaseScore: () => void;
  resetScore: () => void;
  handleMaxScore: () => void;
}

const Main: React.FC<MainProps> = ({
  score,
  increaseScore,
  resetScore,
  handleMaxScore,
}) => {
  const [imgs, setImgs] = useState<Pokemon[]>([]);
  const [clicked, setClicked] = useState<Pokemon[]>([]);
  const [shuffled, setShuffled] = useState<Pokemon[]>([]);
  const ids = Array.from({ length: 25 }, (_, i) => i + 1);

  useEffect(() => {
    const fetchPokeImg = async (id: number): Promise<Pokemon> => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) throw new Error("fetch was not complete");
      const result = await response.json();
      return result;
    };

    const fetchAllImgs = async () => {
      try {
        const pokies = await Promise.all(ids.map((id) => fetchPokeImg(id)));
        setImgs(pokies);
        setShuffled(getShuffledImgs(pokies));
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finish");
      }
    };

    fetchAllImgs();
  }, []);

  const handleClick = (pokemon: Pokemon) => {
    if (clicked.some((a) => a.id === pokemon.id)) {
      resetScore();
      setClicked([]);
    } else {
      setClicked([...clicked, pokemon]);
      increaseScore();
      handleMaxScore();
      setShuffled(getShuffledImgs(imgs));
    }
  };

  const handleShuffle = () => {
    setShuffled(shuffleArray(shuffled));
  };

  const getShuffledImgs = (imgs: Pokemon[]) => {
    if (!imgs || imgs.length === 0) return [];
    const shuffledImgs = shuffleArray(imgs).slice(0, 14);
    const nonClicked = imgs.filter(
      (poke) => !clicked.some((a) => a.id === poke.id)
    );
    const handleIncluding = shuffledImgs.some((img) =>
      nonClicked.some((a) => img.id === a.id)
    );

    if (nonClicked.length > 0 && handleIncluding) {
      return shuffledImgs;
    } else if (nonClicked.length === 0) {
      console.log("you won the game");
      return [];
    } else {
      handleShuffle();
      return shuffledImgs;
    }
  };

  const shuffleArray = (a: Pokemon[]) => {
    let shuffledArray = a.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  console.log(score);
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] m-10 gap-10">
      {shuffled.map((pokemon) => (
        <Card
          pokemon={pokemon}
          key={pokemon.name}
          onClick={() => handleClick(pokemon)}
        />
      ))}
    </div>
  );
};

export default Main;
