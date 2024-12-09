// import { useState } from "react";
import React from "react";

interface ScoreProp {
  score: number;
}

const Score: React.FC<ScoreProp> = ({ score }) => {
  return <div className="font-doto">Score : {score}</div>;
};

export default Score;
