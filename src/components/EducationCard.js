import React from "react";

const EducationCard = ({ title, marks, college, span, src }) => {
  return (
    <div className="education__card">
      <img src={src} alt={title} />
      <div className="education__card_content">
      <h3>{title}</h3>
      <p>{college}</p>
      <p>{span}</p>
      <p>{marks}</p>
      </div>
    </div>
  );
};

export default EducationCard;
