import React from "react";
import Score from "./Score";

interface HeadearProps {
  score: number;
  maxScore: number;
}

const Header: React.FC<HeadearProps> = ({ score, maxScore }) => {
  return (
    <div className="bg-[rgba(192,202,207,0.3)] text min-h-[100px] flex flex-row justify-between p-5 items-center font-serif text-3xl text-white backdrop-blur-xl]">
      <h1 className="lg:ml-24 m-1 m">Memory Card Game</h1>
      <div className="font-doto lg:mr-24 m-1">
        <Score score={score} />

        <div>Max score : {maxScore}</div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <nav className="">
<ul className="flex-row flex justify-end gap-4 p-3">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">About</a>
  </li>
  <li>
    <a href="#">Contact</a>
  </li>
</ul>
</nav> */
}
