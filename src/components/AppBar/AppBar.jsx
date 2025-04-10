import React from "react";
import Logo from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={s.container}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default AppBar;
