import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NewQuiz from "../newQuiz/NewQuiz";

export default function QuizByTopic({ visible, toggleVisible, scrollToTop }) {
  const quizzes = useSelector((state) => state.quizzes);
  const topics = useSelector((state) => state.topics);
  let { id } = useParams();
  let topicName = topics.find((topic) => topic.id === id).name;
  let quizByTopic = quizzes.filter((quiz) => quiz.topic === topicName);

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="content-container">
      <div className="page-title">Quizzes by Topic - {topicName}</div>
      <div className="quizzes-container">
        {quizByTopic.length > 0 ? (
          quizByTopic.map((quiz) => {
            return (
              <div className="quiz-tile" key={quiz.id}>
                <Link to={quiz.id} className="button-link">
                  {quiz.name}
                </Link>
              </div>
            );
          })
        ) : (
          <NewQuiz />
        )}
      </div>
      <div
        className={`${visible ? "show" : "hide"} scroll-button`}
        onClick={scrollToTop}
      ></div>
    </div>
  );
}
