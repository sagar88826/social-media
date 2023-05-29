import React from "react";
import { useEffect, useRef } from "react";
import "./Homepage.css";
const Homepage = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  useEffect(() => {
    const box1 = boxRef1.current;
    const box2 = boxRef2.current;
    const box3 = boxRef3.current;
    const box4 = boxRef4.current;
    const box5 = boxRef5.current;
    const addBackground = () => {
      console.log(window.scrollY);
      // 1
      if (window.scrollY < 10) {
        box1.style.transform = "translateY(0rem) scale(0)";
      }
      // 2
      if (window.scrollY >= 10 && window.scrollY < 300) {
        box1.style.transform = "translateY(1rem) scale(1)";
        box2.style.transform = "translateY(0rem) scale(0)";
      }
      // 3
      if (window.scrollY >= 300 && window.scrollY < 500) {
        box1.style.transform = "translateY(20rem) scale(10)";
        box2.style.transform = "translateY(1rem) scale(1)";
        box3.style.transform = "translateY(0rem) scale(0)";
      }
      // 4
      if (window.scrollY >= 500 && window.scrollY < 900) {
        box1.style.transform = "translateY(50rem) scale(60)";
        box2.style.transform = "translateY(20rem) scale(10)";
        box3.style.transform = "translateY(1rem) scale(1)";
        box4.style.transform = "translateY(0rem) scale(0)";
      }
      // 5
      if (window.scrollY >= 900 && window.scrollY < 1200) {
        box1.style.transform = "translateY(130rem) scale(60)";
        box2.style.transform = "translateY(50rem) scale(60)";
        box3.style.transform = "translateY(20rem) scale(10)";
        box4.style.transform = "translateY(1rem) scale(1)";
        box5.style.transform = "translateY(0rem) scale(0)";
      }
      // 6
      if (window.scrollY >= 1200 && window.scrollY < 1500) {
        box2.style.transform = "translateY(130rem) scale(60)";
        box3.style.transform = "translateY(50rem) scale(60)";
        box4.style.transform = "translateY(20rem) scale(10)";
        box5.style.transform = "translateY(1rem) scale(1)";
      }
      // 7
      if (window.scrollY >= 1500 && window.scrollY < 1700) {
        box3.style.transform = "translateY(130rem) scale(60)";
        box4.style.transform = "translateY(50rem) scale(60)";
        box5.style.transform = "translateY(20rem) scale(10)";
      }
      // 8
      if (window.scrollY >= 1700 && window.scrollY < 1900) {
        box4.style.transform = "translateY(130rem) scale(60)";
        box5.style.transform = "translateY(50rem) scale(60)";
      }
      // 9
      if (window.scrollY >= 1900) {
        box5.style.transform = "translateY(130rem) scale(60)";
      }
    };
    window.addEventListener("scroll", addBackground);
  });
  return (
    <section className="section-home">
      <nav className="navigation">
        <img src="images/logo.png" alt="logo" className="navigation__logo" />
        <ul className="navigation__option-box">
          <li className="navigation__list">Article</li>
          <li className="navigation__list">People</li>
          <li className="navigation__list">Stories</li>
        </ul>
      </nav>
      <div className="container">
        <div ref={boxRef1} className="box1">
          <div className="main__post-box main__post-box--color">
            <div className="main__user">
              <div className="main__dp main__dp--color-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <p className="main__username main__username--color-1">
                Sagar Mandal
              </p>
            </div>
            <div className="main__content">
              <img
                src="images/pic-1.jpg"
                alt="pic-1"
                className="main__post-image"
              />
            </div>
            <div className="main__interaction">
              <i className="bi bi-balloon-heart main__icon main__icon--color-1"></i>
              <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
              <i className="bi bi-share main__icon main__icon--color-1"></i>
            </div>
          </div>
        </div>
        <div ref={boxRef2} className="box2">
          <div className="main__post-box main__post-box--color">
            <div className="main__user">
              <div className="main__dp main__dp--color-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <p className="main__username main__username--color-1">
                Sagar Mandal
              </p>
            </div>
            <div className="main__content">
              <img
                src="images/pic-1.jpg"
                alt="pic-1"
                className="main__post-image"
              />
            </div>
            <div className="main__interaction">
              <i className="bi bi-balloon-heart main__icon main__icon--color-1"></i>
              <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
              <i className="bi bi-share main__icon main__icon--color-1"></i>
            </div>
          </div>
        </div>
        <div ref={boxRef3} className="box3">
          <div className="main__post-box main__post-box--color">
            <div className="main__user">
              <div className="main__dp main__dp--color-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <p className="main__username main__username--color-1">
                Sagar Mandal
              </p>
            </div>
            <div className="main__content">
              <img
                src="images/pic-1.jpg"
                alt="pic-1"
                className="main__post-image"
              />
            </div>
            <div className="main__interaction">
              <i className="bi bi-balloon-heart main__icon main__icon--color-1"></i>
              <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
              <i className="bi bi-share main__icon main__icon--color-1"></i>
            </div>
          </div>
        </div>
        <div ref={boxRef4} className="box4">
          <div className="main__post-box main__post-box--color">
            <div className="main__user">
              <div className="main__dp main__dp--color-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <p className="main__username main__username--color-1">
                Sagar Mandal
              </p>
            </div>
            <div className="main__content">
              <img
                src="images/pic-1.jpg"
                alt="pic-1"
                className="main__post-image"
              />
            </div>
            <div className="main__interaction">
              <i className="bi bi-balloon-heart main__icon main__icon--color-1"></i>
              <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
              <i className="bi bi-share main__icon main__icon--color-1"></i>
            </div>
          </div>
        </div>
        <div ref={boxRef5} className="box5">
          <div className="main__post-box main__post-box--color">
            <div className="main__user">
              <div className="main__dp main__dp--color-1">
                <i className="bi bi-person-circle"></i>
              </div>
              <p className="main__username main__username--color-1">
                Sagar Mandal
              </p>
            </div>
            <div className="main__content">
              <img
                src="images/pic-1.jpg"
                alt="pic-1"
                className="main__post-image"
              />
            </div>
            <div className="main__interaction">
              <i className="bi bi-balloon-heart main__icon main__icon--color-1"></i>
              <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
              <i className="bi bi-share main__icon main__icon--color-1"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
