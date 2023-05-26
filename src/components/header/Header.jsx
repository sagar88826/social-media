import React from "react";
import "./header.css";
import Tiles from "../tiles/Tiles";
const Header = () => {
  return (
    <>
      <header className="section-header">
        <nav className="navigation">
          <img src="images/logo.png" alt="logo" className="navigation__logo" />
          <ul className="navigation__option-box">
            <li className="navigation__list">Article</li>
            <li className="navigation__list">People</li>
            <li className="navigation__list">Stories</li>
          </ul>
        </nav>
        <div className="main">
          <div className="main__intro">
            <h1 className="heading-primary heading-primary--italic ">
              connect to people you know...
            </h1>
            <form className="main__form">
              <input
                type="text"
                placeholder="Phone number, username or email"
                className="main__input"
              />
              <input
                type="text"
                placeholder="Password"
                className="main__input"
              />
              <input
                type="submit"
                value="Login"
                className="main__submit-button"
              />
            </form>
          </div>
          <Tiles />
        </div>
      </header>
      <section className="section__categories">
        <div className="section__category--1">
          <Tiles />
          <h2 className="heading-secondary heading-secondary--position-right">
            Education
          </h2>
        </div>
        <div className="section__category--2">
          <h2 className="heading-secondary heading-secondary--position-left">
            Bussiness
          </h2>
          <Tiles />
        </div>
      </section>
    </>
  );
};

export default Header;
