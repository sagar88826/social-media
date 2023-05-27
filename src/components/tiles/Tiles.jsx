import React, { useRef, useEffect } from "react";
import "./tiles.css";
const Tiles = () => {
  const coords1 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords2 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords3 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords4 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const coords5 = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const isClicked = useRef(false);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);
  useEffect(() => {
    if (!boxRef5) return;
    const box = boxRef5.current;
    const container = containerRef5.current;
    const mouseDown = (e) => {
      isClicked.current = true;
      coords5.current.startX = e.clientX;
      coords5.current.startY = e.clientY;
      box.style.transition = "transform .25s";
      box.style.transform = "scale(1.15)";
    };
    const mouseUp = (e) => {
      isClicked.current = false;
      coords5.current.lastX = box.offsetLeft;
      coords5.current.lastY = box.offsetTop;
      box.style.transform = "scale(1)";

      if (box.offsetLeft < -20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "-500rem";
        document.body.style.backgroundColor = "#FFBC4B";
      } else if (box.offsetLeft > 20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "500rem";
        document.body.style.backgroundColor = "#FFBC4B";
      }
    };
    const mouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords5.current.startX + coords5.current.lastX;
      const nextY = e.clientY - coords5.current.startY + coords5.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };
    box.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
  });
  useEffect(() => {
    if (!boxRef4) return;
    const box = boxRef4.current;
    const container = containerRef4.current;
    const mouseDown = (e) => {
      isClicked.current = true;
      coords4.current.startX = e.clientX;
      coords4.current.startY = e.clientY;
      box.style.transition = "transform .25s";
      box.style.transform = "scale(1.15)";
    };
    const mouseUp = (e) => {
      isClicked.current = false;
      coords4.current.lastX = box.offsetLeft;
      coords4.current.lastY = box.offsetTop;
      box.style.transform = "scale(1)";

      if (box.offsetLeft < -20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "-500rem";
        document.body.style.backgroundColor = "#A4C9D8";
      } else if (box.offsetLeft > 20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "500rem";
        document.body.style.backgroundColor = "#A4C9D8";
      }
    };
    const mouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords4.current.startX + coords4.current.lastX;
      const nextY = e.clientY - coords4.current.startY + coords4.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };
    box.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
  });
  useEffect(() => {
    if (!boxRef3) return;
    const box = boxRef3.current;
    const container = containerRef3.current;
    const mouseDown = (e) => {
      isClicked.current = true;
      coords3.current.startX = e.clientX;
      coords3.current.startY = e.clientY;
      box.style.transition = "transform .25s";
      box.style.transform = "scale(1.15)";
    };
    const mouseUp = (e) => {
      isClicked.current = false;
      coords3.current.lastX = box.offsetLeft;
      coords3.current.lastY = box.offsetTop;
      box.style.transform = "scale(1)";

      if (box.offsetLeft < -20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "-500rem";
        document.body.style.backgroundColor = "#FFBC4B";
      } else if (box.offsetLeft > 20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "500rem";
        document.body.style.backgroundColor = "#FFBC4B";
      }
    };
    const mouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords3.current.startX + coords3.current.lastX;
      const nextY = e.clientY - coords3.current.startY + coords3.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };
    box.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
  });
  useEffect(() => {
    if (!boxRef2) return;
    const box = boxRef2.current;
    const container = containerRef2.current;
    const mouseDown = (e) => {
      isClicked.current = true;
      coords2.current.startX = e.clientX;
      coords2.current.startY = e.clientY;
      box.style.transition = "transform .25s";
      box.style.transform = "scale(1.15)";
    };
    const mouseUp = (e) => {
      isClicked.current = false;
      coords2.current.lastX = box.offsetLeft;
      coords2.current.lastY = box.offsetTop;
      box.style.transform = "scale(1)";

      if (box.offsetLeft < -20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "-500rem";
        document.body.style.backgroundColor = "#FFD0D5";
      } else if (box.offsetLeft > 20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "500rem";
        document.body.style.backgroundColor = "#FFD0D5";
      }
    };
    const mouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords2.current.startX + coords2.current.lastX;
      const nextY = e.clientY - coords2.current.startY + coords2.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };
    box.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
  });
  useEffect(() => {
    if (!boxRef1) return;
    const box = boxRef1.current;
    const container = containerRef1.current;
    const mouseDown = (e) => {
      isClicked.current = true;
      coords1.current.startX = e.clientX;
      coords1.current.startY = e.clientY;
      box.style.transition = "transform .25s";
      box.style.transform = "scale(1.15)";
    };
    const mouseUp = (e) => {
      isClicked.current = false;
      coords1.current.lastX = box.offsetLeft;
      coords1.current.lastY = box.offsetTop;
      box.style.transform = "scale(1)";

      if (box.offsetLeft < -20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "-500rem";
      } else if (box.offsetLeft > 20) {
        box.style.transition = "all .5s ease-in-out";
        box.style.left = "500rem";
      }
    };
    const mouseMove = (e) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords1.current.startX + coords1.current.lastX;
      const nextY = e.clientY - coords1.current.startY + coords1.current.lastY;
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };
    box.addEventListener("mousedown", mouseDown);
    container.addEventListener("mouseup", mouseUp);
    container.addEventListener("mousemove", mouseMove);
  });
  return (
    <div className="main__posts">
      <div ref={containerRef1} className="ref-border">
        <div ref={boxRef1} className="main__post-box main__post-box--1">
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
      <div ref={containerRef2} className="ref-border">
        <div ref={boxRef2} className="main__post-box main__post-box--2">
          <div className="main__user">
            <div className="main__dp main__dp--color-2">
              <i className="bi bi-person-circle"></i>
            </div>
            <p className="main__username main__username--color-2">
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
            <i className="bi bi-balloon-heart main__icon main__icon--color-2"></i>
            <i className="bi bi-chat-left main__icon main__icon--color-2"></i>
            <i className="bi bi-share main__icon main__icon--color-2"></i>
          </div>
        </div>
      </div>
      <div ref={containerRef3} className="ref-border">
        <div ref={boxRef3} className="main__post-box main__post-box--3">
          <div className="main__user">
            <div className="main__dp main__dp--color-3">
              <i className="bi bi-person-circle"></i>
            </div>
            <p className="main__username main__username--color-3">
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
            <i className="bi bi-balloon-heart main__icon main__icon--color-3"></i>
            <i className="bi bi-chat-left main__icon main__icon--color-3"></i>
            <i className="bi bi-share main__icon main__icon--color-3"></i>
          </div>
        </div>
      </div>
      <div ref={containerRef4} className="ref-border">
        <div ref={boxRef4} className="main__post-box main__post-box--4">
          <div className="main__user">
            <div className="main__dp main__dp--color-4">
              <i className="bi bi-person-circle"></i>
            </div>
            <p className="main__username main__username--color-4">
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
            <i className="bi bi-balloon-heart main__icon main__icon--color-4"></i>
            <i className="bi bi-chat-left main__icon main__icon--color-4"></i>
            <i className="bi bi-share main__icon main__icon--color-4"></i>
          </div>
        </div>
      </div>
      <div ref={containerRef5} className="ref-border">
        <div ref={boxRef5} className="main__post-box main__post-box--5 ">
          <div className="main__user">
            <div className="main__dp main__dp--color-5">
              <i className="bi bi-person-circle"></i>
            </div>
            <p className="main__username main__username--color-5">
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
            <i className="bi bi-balloon-heart main__icon main__icon--color-5"></i>
            <i className="bi bi-chat-left main__icon main__icon--color-5"></i>
            <i className="bi bi-share main__icon main__icon--color-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
