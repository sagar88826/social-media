import React from "react";
import "./Introduction.css";
const Introduction = () => {
  return (
    <>
      <section className="section-introduction">
        <h1 className="heading-primary alignment-center">
          Personal Introduction
        </h1>
        <div className="cover-photo">
          <img src="images/k.jpg" alt="cover-image" className="cover-image" />
          <div className="profile-photo">
            <i className="bi bi-person-circle user-icon"></i>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline__card">sagar</div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
