import React from "react";
import classes from "./ProjectSubjectList.module.scss";
import ProjectSubjectCard from "../ProjectSubjectCard";

const ProjectSubjectList = ({ projectSubjects, onDelete }) => {
  return (
    <div className={classes.projectSubjectList}>
      {projectSubjects.map((subject) => (
        <ProjectSubjectCard
          key={subject.id}
          subject={subject}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectSubjectList;
