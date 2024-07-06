import React, { useState } from "react";
import "./Nav.css";
import { IoToggleSharp } from "react-icons/io5";

const Nav = () => {
  const [checked, setChecked] = useState(false);

  function click() {
    setChecked("hello");
  }
  return (
    <nav className="nav">
      <h3><span className="money">Master</span> Kimmy </h3>
      <div className="nav__icon">
        <input 
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </div>

      <ul className={`bar ${checked ? "active" : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
