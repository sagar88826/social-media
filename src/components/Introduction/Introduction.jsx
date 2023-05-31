import React, { useEffect, useRef } from "react";
import "./Introduction.css";
const Introduction = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);
  useEffect(() => {
    const box1 = boxRef1.current;
    const box2 = boxRef2.current;
    const box3 = boxRef3.current;
    const box4 = boxRef4.current;
    const box5 = boxRef5.current;
    const box6 = boxRef6.current;
    const box7 = boxRef7.current;
    const box8 = boxRef8.current;
    const box9 = boxRef9.current;
    const addBackground = () => {
      console.log(window.scrollY);
      // 1
      if (window.scrollY < 600) {
        box1.style.transform = "translateY(-26rem) scale(.02)";
        box1.style.opacity = "0";
      }
      // 2
      if (window.scrollY >= 600 && window.scrollY < 800) {
        box1.style.transform = "translateY(-24rem) scale(.1)";
        box1.style.opacity = "1";
        box2.style.transform = "translateY(-26rem) scale(.02)";
        box2.style.opacity = "0";
        // box2.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 3
      if (window.scrollY >= 800 && window.scrollY < 1000) {
        box1.style.transform = "translateY(20rem) scale(1)";
        box2.style.transform = "translateY(-24rem) scale(.1)";
        box2.style.opacity = "1";
        box3.style.transform = "translateY(-26rem) scale(.02)";
        box3.style.opacity = "0";
      }
      // 4
      if (window.scrollY >= 1000 && window.scrollY < 1200) {
        box1.style.transform = "translateY(130rem) scale(1.5)";
        box2.style.transform = "translateY(20rem) scale(1)";
        box3.style.transform = "translateY(-24rem) scale(.1)";
        box3.style.opacity = "1";
        box4.style.transform = "translateY(-26rem) scale(.02)";
        box4.style.opacity = "0";
      }
      // 5
      if (window.scrollY >= 1200 && window.scrollY < 1400) {
        box2.style.transform = "translateY(130rem) scale(1.5)";
        box3.style.transform = "translateY(20rem) scale(1)";
        box4.style.transform = "translateY(-24rem) scale(.1)";
        box4.style.opacity = "1";
        // box5.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 6
      if (window.scrollY >= 1400 && window.scrollY < 1600) {
        box3.style.transform = "translateY(130rem) scale(1.5)";
        box4.style.transform = "translateY(20rem) scale(1)";
        // box5.style.transform = "translateY(-24rem) scale(.1)";
        // box6.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 7
      if (window.scrollY >= 1600 && window.scrollY < 1800) {
        box4.style.transform = "translateY(130rem) scale(1.5)";
        // box4.style.transform = "translateY(20rem) scale(1)";
        // box5.style.transform = "translateY(-24rem) scale(.1)";
        // box6.style.transform = "translateY(-26rem) scale(.02)";
      }
    };
    window.addEventListener("scroll", addBackground);
  });
  return (
    <>
      <section className="section-introduction">
        <div
          ref={boxRef1}
          className="box main__post-box--color-1 box--position box--position-1"
        >
          <div className="text">
            <p className="zoom-in-text">2023</p>
          </div>
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
        <div
          ref={boxRef2}
          className="box main__post-box--color-1 box--position box--position-2"
        >
          <div className="text">
            <p className="zoom-in-text">2022</p>
          </div>
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
        <div
          ref={boxRef3}
          className="box main__post-box--color-1 box--position box--position-3"
        >
          <div className="text">
            <p className="zoom-in-text">2021</p>
          </div>
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
        <div
          ref={boxRef4}
          className="box main__post-box--color-1 box--position box--position-4"
        >
          <div className="text">
            <p className="zoom-in-text">2021</p>
          </div>
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
        <h1 className="heading-primary alignment-center">
          Personal Introduction
        </h1>
        <div className="cover-photo">
          <img src="images/k.jpg" alt="cover-image" className="cover-image" />
          <div className="profile-photo">
            <i className="bi bi-person-circle user-icon"></i>
          </div>
        </div>
        <div className="timeline"></div>
      </section>
    </>
  );
};

export default Introduction;
