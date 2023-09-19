import React from "react";
import "./Quizzes.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Quizzes({
  visible,
  toggleVisible,
  scrollToTop,
}) {
  const quizzes = useSelector((state) => state.quizzes);

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="quizzes-container">
      <div className="page-title">All Quizzes</div>
      <div className="quizzes-list">
        {quizzes.map((quiz) => {
          return (
            <div className="quiz-tile" key={quiz.id}>
              <Link to={quiz.id} className="button-link">
                {quiz.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="button-div">
        <Link to="/new-quiz" className="button-link smaller-font">
          Create New Quiz
        </Link>
      </div>
      <div
        className={`${visible ? "show" : "hide"} scroll-button`}
        onClick={scrollToTop}
      ></div>
    </div>
  );
}
