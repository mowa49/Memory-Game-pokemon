import Score from "./Score";

function Header({ score, maxScore }) {
  return (
    <div className="bg-[rgba(192,202,207,0.3)] text min-h-[100px] flex flex-row justify-between p-5 font-serif text-3xl text-white backdrop-blur-xl]">
      <h1>Memory Card Game V</h1>
      <div className="">
        <Score score={score} />
        <div>max score {maxScore}</div>
      </div>
    </div>
  );
}

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
