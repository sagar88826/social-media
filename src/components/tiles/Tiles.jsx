import React from "react";
import "./tiles.css";
const Tiles = () => {
  return (
    <div className="main__posts">
      <div className="main__post-box main__post-box--1">
        <div className="main__user">
          <div className="main__dp main__dp--color-1">
            <i class="bi bi-person-circle"></i>
          </div>
          {/* <img src="images/dp.svg" alt="dp" className="main__dp" /> */}
          <p className="main__username main__username--color-1">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon main__icon--color-1"></i>
          <i class="bi bi-chat-left main__icon main__icon--color-1"></i>
          <i class="bi bi-share main__icon main__icon--color-1"></i>
        </div>
      </div>
      <div className="main__post-box main__post-box--2">
        <div className="main__user">
          <div className="main__dp main__dp--color-2">
            <i class="bi bi-person-circle"></i>
          </div>
          <p className="main__username main__username--color-2">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon main__icon--color-2"></i>
          <i class="bi bi-chat-left main__icon main__icon--color-2"></i>
          <i class="bi bi-share main__icon main__icon--color-2"></i>
        </div>
      </div>
      <div className="main__post-box main__post-box--3">
        <div className="main__user">
          <div className="main__dp main__dp--color-3">
            <i class="bi bi-person-circle"></i>
          </div>
          <p className="main__username main__username--color-3">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon main__icon--color-3"></i>
          <i class="bi bi-chat-left main__icon main__icon--color-3"></i>
          <i class="bi bi-share main__icon main__icon--color-3"></i>
        </div>
      </div>
      <div className="main__post-box main__post-box--4">
        <div className="main__user">
          <div className="main__dp main__dp--color-4">
            <i class="bi bi-person-circle"></i>
          </div>
          <p className="main__username main__username--color-4">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon main__icon--color-4"></i>
          <i class="bi bi-chat-left main__icon main__icon--color-4"></i>
          <i class="bi bi-share main__icon main__icon--color-4"></i>
        </div>
      </div>
      <div className="main__post-box main__post-box--5 ">
        <div className="main__user">
          <div className="main__dp main__dp--color-5">
            <i class="bi bi-person-circle"></i>
          </div>
          <p className="main__username main__username--color-5">Sagar Mandal</p>
        </div>
        <div className="main__content">
          <img
            src="images/pic-1.jpg"
            alt="pic-1"
            className="main__post-image"
          />
        </div>
        <div className="main__interaction">
          <i class="bi bi-balloon-heart main__icon main__icon--color-5"></i>
          <i class="bi bi-chat-left main__icon main__icon--color-5"></i>
          <i class="bi bi-share main__icon main__icon--color-5"></i>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
