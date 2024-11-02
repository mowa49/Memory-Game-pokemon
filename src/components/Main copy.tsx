interface img {
  id: number;
  path: string;
}
interface pokie {
  pokie: array;
}

import { useEffect, useState } from "react";
import Card from "./Card";

function Main() {
  const [img, setImg] = useState(null);
  const [pokie, setPokie] = useState([]);
  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const id = 12;
  useEffect(() => {
    const fetchPokeImg = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) throw new Error("fetch was not complete");
      const result = await response.json();
      return result;
    };
    const fetchAllImgs = async () => {
      try {
        const poke = await Promise.all(ids.map((id) => fetchPokeImg(id)));
        setPokie(poke);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finish");
      }
      return;
    };
    fetchAllImgs();
  }, [id]);

  //   useEffect(() => {
  //     makeList = async () => await setPokie[...pokie, ids.map((id) => fetchPokeImg(id));
  //     ]})

  //   [cards, setCards] = useState();
  return (
    <div className="grid grid-cols-8 grid-rows-2 m-10 gap-5">
      {pokie.map((e) => (
        <Card path={e} key={e} />
      ))}
    </div>
  );
}
export default Main;
