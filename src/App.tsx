import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  function handleMaxScore() {
    if (maxScore <= score) {
      setMaxScore(score + 1);
    } else return;
  }
  function increaseScore() {
    setScore(score + 1);
  }
  function resetScore() {
    setScore(0);
  }
  return (
    <>
      <div className="bg-hero-pattern image bg-cover min-h-[100vh]">
        <Header score={score} maxScore={maxScore} />
        <Main
          score={score}
          increaseScore={increaseScore}
          resetScore={resetScore}
          handleMaxScore={handleMaxScore}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
