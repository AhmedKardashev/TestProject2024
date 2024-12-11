import React from "react";

const ProjectSubjectFilter = ({ onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};

export default ProjectSubjectFilter;