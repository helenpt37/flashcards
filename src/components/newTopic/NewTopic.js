import { React, useState } from "react";
import "./NewTopic.css";
import { ALL_ICONS } from "../../data/icons";
import { useDispatch } from "react-redux";
import { addTopic } from "../topics/topicsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export default function NewTopic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newTopicName, setNewTopicName] = useState();
  const [newTopicIcon, setNewTopicIcon] = useState();
  const [valid, setValid] = useState(undefined);

  const handleCreateNewTopic = () => {
    if (!newTopicName || !newTopicIcon) {
      setValid(false);
    } else {
      setValid(true);
      dispatch(
        addTopic({ id: nanoid(), name: newTopicName, icon: newTopicIcon })
      );
      navigate("/topics");
    }
  };

  return (
    <div className="new-topic-container">
      <div className="page-title">Create a new topic</div>
      <input
        type="text"
        className="input-field smaller-font"
        placeholder="Enter topic's name"
        onChange={(e) => setNewTopicName(e.target.value)}
      />

      <select
        id="icons-select"
        className="smaller-font"
        maxlength="20"
        onChange={(e) => setNewTopicIcon(e.target.value)}
      >
        <option>Select an icon</option>
        {ALL_ICONS.map((icon) => (
          <option value={icon.url}>{icon.name}</option>
        ))}
      </select>
      <div
        className={`${valid === undefined && "hide"} ${valid && "hide"} ${
          !valid && "show"
        } validate-text`}
      >
        Please enter a topic name and select an icon.
      </div>
      <div className="button-div smaller-font" onClick={handleCreateNewTopic}>
        Add Topic
      </div>
    </div>
  );
}
