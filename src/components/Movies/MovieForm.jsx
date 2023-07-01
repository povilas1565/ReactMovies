import React, { useState } from "react";
import styles from "./MovieForm.module.css";

const initialData = {
  Title: "",
  Year: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Poster: "",
  Ratings: [],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
};

const MovieForm = ({ getFormData, toggleBtn }) => {
  const [formData, setFormData] = useState(initialData);

  // handle input change to store data into the object
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or update state

    // pass the formData to getFormData callback
    getFormData(formData);

    // resetting the form
    setFormData(initialData);

    // removing modal
    toggleBtn();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label>
        <span>Title:</span>
        <input
          placeholder="Enter Movie Title"
          type="text"
          name="Title"
          value={formData.Title}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Year:</span>
        <input
          placeholder="Enter publish Year"
          type="number"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Rated:</span>
        <input
          placeholder="Enter Rated"
          type="number"
          name="Rated"
          value={formData.Rated}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Released:</span>
        <input
          placeholder="Enter Released date"
          type="date"
          name="Released"
          value={formData.Released}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Runtime:</span>
        <input
          placeholder="Enter Movie Runtime"
          type="text"
          name="Runtime"
          value={formData.Runtime}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Genre:</span>
        <input
          placeholder="Enter Genre"
          type="text"
          name="Genre"
          value={formData.Genre}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Director:</span>
        <input
          placeholder="Enter Director"
          type="text"
          name="Director"
          value={formData.Director}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Writer:</span>
        <input
          placeholder="Enter Writer"
          type="text"
          name="Writer"
          value={formData.Writer}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Actors:</span>
        <input
          placeholder="Enter Actors"
          type="text"
          name="Actors"
          value={formData.Actors}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Plot:</span>
        <input
          placeholder="Enter Plot"
          type="text"
          name="Plot"
          value={formData.Plot}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Language:</span>
        <input
          placeholder="Enter Language"
          type="text"
          name="Language"
          value={formData.Language}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Country:</span>
        <input
          placeholder="Enter Country"
          type="text"
          name="Country"
          value={formData.Country}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Awards:</span>
        <input
          placeholder="Enter Awards AChieved"
          type="text"
          name="Awards"
          value={formData.Awards}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Poster:</span>
        <input
          placeholder="Enter Poster"
          type="text"
          name="Poster"
          value={formData.Poster}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
