import React from "react";
import styles from "./page.module.css";
import Menu from "./components/Menu";
export default function page() {
  return (
    <div>
      <Menu />

      <div className="row justify-content-center">
        <h2 className={styles.myText}>this is home page</h2>
        <h2 className={styles.myHeading}>this is home page</h2>
        <img src="/images/a6.webp" alt="image" />
        <h1>HomePage</h1>
      </div>
    </div>
  );
}
