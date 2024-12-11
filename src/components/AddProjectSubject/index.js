import React, { useState } from "react";
import classes from "./AddProjectSubject.module.scss";

const AddProjectSubject = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [hasError, setHsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image || !description) {
      setHsError(true);
      return;
    }
    setHsError(false);

    const newSubject = {
      id: Date.now(),
      name,
      image,
      description,
    };

    onAdd(newSubject);
    setName("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {hasError && <p className={classes.error}>Please fill all fields</p>}{" "}
      <button type="submit" className={classes.button}>
        Add ProjectSubject
      </button>
    </form>
  );
};

export default AddProjectSubject;
