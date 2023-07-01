import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import MovieForm from "./MovieForm";
import { Flex } from "../StyledComponents/styles";

const Modal = ({ icon, iconText, getFormData }) => {
  const [flag, setFlag] = useState(false);

  // * toggle to toggle modal
  const toggleBtn = () => {
    setFlag(!flag);
  };

  return (
    <div className={flag ? styles.active : ""}>
      <button
        style={{ fontWeight: "700" }}
        onClick={toggleBtn}
      >
        {icon}
        {iconText}
      </button>
      <div
        onClick={toggleBtn}
        className={styles.overlay}
      ></div>
      <div className={styles.modal}>
        <MovieForm
          toggleBtn={toggleBtn}
          getFormData={getFormData}
        />
      </div>
    </div>
  );
};

export default Modal;
