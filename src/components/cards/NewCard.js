import React, { useState } from "react";
import "./Cards.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addCard } from "./cardsSlice";

export default function NewCard({ setShowCardForm, quizId }) {
  const dispatch = useDispatch();
  const [cardFront, setCardFront] = useState();
  const [cardBack, setCardBack] = useState();
  const [valid, setValid] = useState(undefined);

  const handleAddCard = () => {
    if (!cardFront || !cardBack) {
      setValid(false);
    } else {
      setValid(true);
      dispatch(
        addCard({
          id: nanoid(),
          quizId: quizId,
          front: cardFront,
          back: cardBack,
        })
      );
      setShowCardForm(false);
    }
  };

  return (
    <div className="form-container">
      <input
        className="input-field smaller-font"
        type="text"
        placeholder="Front"
        maxLength="100"
        onChange={(e) => setCardFront(e.target.value)}
      ></input>
      <input
        className="input-field smaller-font"
        type="text"
        placeholder="Back"
        maxLength="300"
        onChange={(e) => setCardBack(e.target.value)}
      ></input>
      <div
        className={`${valid === undefined && "hide"} ${valid && "hide"} ${
          !valid && "show"
        } validate-text`}
      >
        Please fill out card front and back.
      </div>
      <div>
        <div className="button-div smaller-font" onClick={handleAddCard}>
          Add Card
        </div>
        <div
          className="button-div smaller-font"
          onClick={() => setShowCardForm(false)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
