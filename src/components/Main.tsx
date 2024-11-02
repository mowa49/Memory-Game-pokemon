interface imgs {
  imgs: string;
  pokemon: Pokemon;
}
interface pokies {
  pokies: array;
}

interface Name {
  name: string;
}
interface Pokemon {
  pokemon: Pokemon; // Use a more descriptive name for the prop
}
interface CardProps {
  pokemon: {
    name: string;
    sprites: {
      front_default: string;
    };
  };
  onClick: () => void; // Define the onClick prop type
}

import { useEffect, useState } from "react";
import Card from "./Card";

function Main({ score, increaseScore, resetScore, handleMaxScore }) {
  const [imgs, setImgs] = useState([]);
  const [clicked, setClicked] = useState([]);
  // const [shuffledImgs, setShuffledImgs] = useState([...imgs]);

  let id = 2;
  const ids = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  useEffect(() => {
    const fetchPokeImg = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) throw new Error("fetch was not complete");
      const result = await response.json();
      return result;
    };
    const fetchAllImgs = async () => {
      try {
        const pokies = await Promise.all(ids.map((id) => fetchPokeImg(id)));
        setImgs(pokies);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finish");
      }
      return;
    };

    fetchAllImgs();
  }, [id]);

  function handleClick(pokemon) {
    console.log(pokemon.id);
    if (clicked.some((a) => a.id === pokemon.id)) {
      resetScore(), setClicked([]);
    } else setClicked([...clicked, pokemon]), increaseScore(), handleMaxScore();
    HandleShuffle();
  }

  function HandleShuffle() {
    shuffleArray(imgs);
  }
  const shuffledImgs = shuffleArray(imgs).slice(0, 14);

  function shuffleArray(a) {
    let shuffledArray = a.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  //   useEffect(() => {
  //     makeList = async () => await setImgs[...imgs, ids.map((id) => fetchPokeImg(id));
  //     ]})

  //   [cards, setCards] = useState();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] m-10 gap-10">
      {shuffledImgs.map((pokemon) => (
        <Card
          pokemon={pokemon}
          key={pokemon.name}
          onClick={() => handleClick(pokemon)}
        />
      ))}
    </div>
  );
}

// function shuffle(array) {
//   for (let i = array.lenght - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//   }
// }
export default Main;
