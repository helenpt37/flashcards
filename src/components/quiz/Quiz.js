import React, { useState } from "react";
import "./Quiz.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../cards/Card";
import NewCard from "../cards/NewCard";

export default function Quiz({ visible, toggleVisible, scrollToTop }) {
  const quizzes = useSelector((state) => state.quizzes);
  const cards = useSelector((state) => state.cards);
  const [showCardForm, setShowCardForm] = useState(false);
  let { id } = useParams();
  let quiz = quizzes.find((quizObj) => quizObj.id === id);

  let quizCards = cards.filter((card) => card.quizId === id);

  const handleAddNewCardClick = () => {
    setShowCardForm(true);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="content-container">
      <div className="cards-container">
        <div className="page-title">{quiz.name}</div>
        <div>
          {quizCards?.map((card) => (
            <div key={card.id}>
              <Card front={card.front} back={card.back} />
            </div>
          ))}
        </div>
        <div>
          {showCardForm && (
            <NewCard setShowCardForm={setShowCardForm} quizId={id} key={id} />
          )}
        </div>
      </div>
      <div
        onClick={handleAddNewCardClick}
        className={`${showCardForm ? "hide" : "show"} button-div smaller-font`}
      >
        Add a New Card
      </div>
      <div
        className={`${visible ? "show" : "hide"} scroll-button`}
        onClick={scrollToTop}
      ></div>
    </div>
  );
}
