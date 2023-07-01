import React from "react";
import styles from "./Navbar.module.css";
import Modal from "../Movies/Modal";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/movies.actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  // taking formdata from from and passing to the redux action
  const getFormData = (movieData) => {
    dispatch(addMovie(movieData, toast));
  };

  return (
    <header className={styles.navbar}>
      <Link
        style={{ textDecoration: "none" }}
        to="/"
      >
        <h1>Movies</h1>
      </Link>

      {/* Add Movies */}
      <Modal
        icon={<GrAddCircle />}
        onClick={addMovie}
        iconText={"Add Movie"}
        getFormData={getFormData}
      />
    </header>
  );
};

export default Navbar;
