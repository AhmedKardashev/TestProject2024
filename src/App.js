import React, { useState } from "react";
import AddProjectSubject from "./components/AddProjectSubject/index";
import ProjectSubjectFilter from "./components/ProjectSubjectFilter";
import ProjectSubjectList from "./components/ProjectSubjectList/index";
import classes from "./App.module.scss";

const App = () => {
  const [projectSubjects, setProjectSubjects] = useState([]);
  const [filter, setFilter] = useState("");

  // Add new ProjectSubject
  const addProjectSubject = (newSubject) => {
    setProjectSubjects([...projectSubjects, newSubject]);
  };

  // Delete a ProjectSubject
  const deleteProjectSubject = (id) => {
    setProjectSubjects(projectSubjects.filter((subject) => subject.id !== id));
  };

  // Filter ProjectSubjects
  const filteredSubjects = projectSubjects.filter((subject) =>
    subject.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <h1>Interactive ProjectSubject Manager</h1>
      </header>
      <AddProjectSubject onAdd={addProjectSubject} />
      <ProjectSubjectFilter onFilterChange={setFilter} />
      <ProjectSubjectList
        projectSubjects={filteredSubjects}
        onDelete={deleteProjectSubject}
      />
    </div>
  );
};

export default App;
