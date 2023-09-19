import React, { useState } from "react";
import "./Cards.css";

export default function ({ front, back}) {
  const [cardFace, setCardFace] = useState(true);
  const toggleCard = () => {
    setCardFace(!cardFace);
  };

  return <div onClick={toggleCard} className="card-tile">{cardFace ? front : back}</div>;
}
