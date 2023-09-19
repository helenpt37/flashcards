import React, { useState } from "react";
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Topics from "../components/topics/Topics";
import Quizzes from "../components/quizzes/Quizzes";
import NewQuiz from "../components/newQuiz/NewQuiz";
import NewTopic from "../components/newTopic/NewTopic";
import Quiz from "../components/quiz/Quiz";
import QuizByTopic from "../components/quizzes/QuizByTopic";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    let scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div className="nav-container">
        <NavLink to="/topics" className="nav-item">
          Topics
        </NavLink>
        <NavLink to="/quizzes" className="nav-item">
          Quizzes
        </NavLink>
        <NavLink to="/new-quiz" className="nav-item">
          New Quiz
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/topics"
          element={
            <Topics
              visible={visible}
              toggleVisible={toggleVisible}
              scrollToTop={scrollToTop}
            />
          }
        />
        <Route
          path="/quizzes"
          element={
            <Quizzes
              visible={visible}
              toggleVisible={toggleVisible}
              scrollToTop={scrollToTop}
            />
          }
        />
        <Route path="/new-quiz" element={<NewQuiz />} />
        <Route path="/new-topic" element={<NewTopic />} />
        <Route
          path="/quizzes/:id"
          element={
            <Quiz
              visible={visible}
              toggleVisible={toggleVisible}
              scrollToTop={scrollToTop}
            />
          }
        />
        <Route
          path="/topics/:id"
          element={
            <QuizByTopic
              visible={visible}
              toggleVisible={toggleVisible}
              scrollToTop={scrollToTop}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
