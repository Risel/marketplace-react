import React from "react";
import styles from "./Error.module.scss";


const Error = ({children,props}) => {
  return (
    <div
    className={styles.error}
    {...props}
  >
  {children}
  </div>
  )
};

export default Error;
