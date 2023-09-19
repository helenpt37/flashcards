import React from "react";
import "./Topics.css";
import Topic from "../topic/Topic";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Topics({ visible, toggleVisible, scrollToTop }) {
  const topics = useSelector((state) => state.topics);
  const navigate = useNavigate();

  const handleTopicClick = (id) => {
    navigate(`/topics/${id}`);
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="content-container">
      <div className="page-title">All Topics</div>
      <div className="topics-container">
        {topics.map((topic) => (
          <div key={topic.id} onClick={() => handleTopicClick(topic.id)}>
            <Topic icon={topic.icon} name={topic.name} />
          </div>
        ))}
      </div>
      <div className="button-div">
        <Link to="/new-topic" className="button-link smaller-font">
          Create new topic
        </Link>
      </div>
      <div
        className={`${visible ? "show" : "hide"} scroll-button`}
        onClick={scrollToTop}
      ></div>
    </div>
  );
}
