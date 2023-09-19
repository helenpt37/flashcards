import { React, useState } from "react";
import "./NewQuiz.css";
import { useDispatch } from "react-redux";
import { addQuiz } from "../quizzes/quizzesSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NewQuiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const topics = useSelector((state) => state.topics);
  const [newQuizName, setNewQuizName] = useState();
  const [topic, setTopic] = useState();
  const [valid, setValid] = useState(undefined);

  const handleCreateNewQuiz = () => {
    if (!newQuizName || !topic) {
      setValid(false);
    } else {
      setValid(true);
      dispatch(addQuiz({ id: nanoid(), name: newQuizName, topic }));
      navigate("/quizzes");
    }
  };

  return (
    <div className="new-quiz-container">
      <div className="page-title">Create a new quiz</div>
      <input
        type="text"
        className="input-field smaller-font"
        placeholder="Quiz title"
        maxLength="20"
        onChange={(e) => setNewQuizName(e.target.value)}
      />

      <select
        id="topics-select"
        className="smaller-font"
        onChange={(e) => setTopic(e.target.value)}
      >
        <option>Select topic</option>
        {topics.map((topic) => (
          <option value={topic.name} key={topic.id}>
            {topic.name}
          </option>
        ))}
      </select>
      <div
        className={`${valid === undefined && "hide"} ${valid && "hide"} ${
          !valid && "show"
        } validate-text`}
      >
        Please enter a quiz title and select a topic.
      </div>
      <div className="button-div smaller-font" onClick={handleCreateNewQuiz}>
        Add Quiz
      </div>
    </div>
  );
}
