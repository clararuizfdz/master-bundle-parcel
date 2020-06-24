import React from "react";
const logo = require("./content/source.gif");
const classes = require("./headerStyles.scss");

export const Header: React.FC = () => {
  console.log(classes);
  console.log(classes.header);
  return (
      <div className={classes.header}>
        <img src={logo} className={classes.logo} />
        <span>Hello World!</span>
      </div>      
  );
};