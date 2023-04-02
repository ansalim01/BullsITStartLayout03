import React from "react";
import styles from "./MyButton.module.scss";

function MyButton(props) {
  let st = styles.buttonIm;

  if (props.st === "buttonTx") {
    st = styles.buttonTx;
  }
  return (
    <div className={styles.buttons} onClick={props.onClick}>
      <button className={st}>
        <span>{props.text}</span>
        {props.children}
      </button>
    </div>
  );
}

export default MyButton;
