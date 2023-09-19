import React from "react";

export default function Topic({ icon, name }) {
  return (
    <div className="topic-tile">
      <img src={icon} className="topic-icon" alt="topic-icon"/>
      <span className="topic-name smaller-font">{name}</span>
    </div>
  );
}
