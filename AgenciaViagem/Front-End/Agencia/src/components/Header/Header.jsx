import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <h1>Nova Cidade</h1>
      </div>
      <div className={styles.links}>
        <p className={styles.link}>
          <NavLink to="/">Home</NavLink>
        </p>
        <p className={styles.link}>
          <NavLink to="/Destinos">Destinos</NavLink>
        </p>
        <p className={styles.link}>
          <NavLink to="/Contato">Contato</NavLink>
        </p>
        <p className={styles.link}>
          <NavLink to="/Promocoes">Promos!</NavLink>
        </p>
      </div>
    </div>
  );
}
export default Header;
