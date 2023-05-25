import React from "react";
import "./tiles.css";
const Tiles = () => {
  return (
    <div className="main__posts">
      <div className="main__post-box main__post-box--1"></div>
      <div className="main__post-box main__post-box--2"></div>
      <div className="main__post-box main__post-box--3"></div>
      <div className="main__post-box main__post-box--4"></div>
      <div className="main__post-box main__post-box--5 ">
        <div className="main__user">
          <img src="images/dp.svg" alt="dp" className="main__dp" />
          <p className="main__username">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon"></i>
          <i class="bi bi-chat-left main__icon"></i>
          <i class="bi bi-share main__icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
