import React from "react";
import classes from "./ProjectSubjectCard.module.scss";

const ProjectSubjectCard = ({ subject, onDelete }) => {
  return (
    <div className={classes.card}>
      <img src={subject.image} className={classes.cardImg} alt={subject.name} />
      <h3 className={classes.heading}>{subject.name}</h3>
      <p>{subject.description}</p>
      <button onClick={() => onDelete(subject.id)}>Delete</button>
    </div>
  );
};

export default ProjectSubjectCard;
