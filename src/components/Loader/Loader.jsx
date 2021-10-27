import React from "react";
import styles from "./Loader.module.css"

const Loader = (props) => {
  return (
    <div className={styles.ldsRoller} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
