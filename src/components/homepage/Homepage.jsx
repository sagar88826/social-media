import { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [emojisUp, setEmojisUp] = useState({
    like: "",
    emojis: "",
  });
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);
  const reaction = () => {
    emojisUp.emojis === "" && emojisUp.like === ""
      ? setEmojisUp({
          emojis: "emojis-after-click",
          like: "like-expand",
        })
      : setEmojisUp({
          emojis: "",
          like: "",
        });
  };
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
      // console.log(window.scrollY);
      // 1
      if (window.scrollY < 10) {
        box1.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 2
      if (window.scrollY >= 10 && window.scrollY < 300) {
        box1.style.transform = "translateY(-24rem) scale(.1)";
        box2.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 3
      if (window.scrollY >= 300 && window.scrollY < 500) {
        box1.style.transform = "translateY(20rem) scale(1)";
        box2.style.transform = "translateY(-24rem) scale(.1)";
        box3.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 4
      if (window.scrollY >= 500 && window.scrollY < 900) {
        box1.style.transform = "translateY(130rem) scale(1.5)";
        box2.style.transform = "translateY(20rem) scale(1)";
        box3.style.transform = "translateY(-24rem) scale(.1)";
        box4.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 5
      if (window.scrollY >= 900 && window.scrollY < 1200) {
        box2.style.transform = "translateY(130rem) scale(1.5)";
        box3.style.transform = "translateY(20rem) scale(1)";
        box4.style.transform = "translateY(-24rem) scale(.1)";
        box5.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 6
      if (window.scrollY >= 1200 && window.scrollY < 1500) {
        box3.style.transform = "translateY(130rem) scale(1.5)";
        box4.style.transform = "translateY(20rem) scale(1)";
        box5.style.transform = "translateY(-24rem) scale(.1)";
        box6.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 7
      if (window.scrollY >= 1500 && window.scrollY < 1700) {
        box4.style.transform = "translateY(130rem) scale(1.5)";
        box5.style.transform = "translateY(20rem) scale(1)";
        box6.style.transform = "translateY(-24rem) scale(.1)";
        box7.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 8
      if (window.scrollY >= 1700 && window.scrollY < 1900) {
        box5.style.transform = "translateY(130rem) scale(1.5)";
        box6.style.transform = "translateY(10rem) scale(1)";
        box7.style.transform = "translateY(-24rem) scale(.1)";
        box8.style.transform = "translateY(-26rem) scale(.02)";
      }
      // 9
      if (window.scrollY >= 1900 && window.scrollY < 2100) {
        box6.style.transform = "translateY(130rem) scale(1.5)";
        box7.style.transform = "translateY(10rem) scale(1)";
        box8.style.transform = "translateY(-24rem) scale(.1)";
        box9.style.transform = "translateY(-26rem) scale(.02)";
      }
      if (window.scrollY > 2100 && window.scrollY < 2300) {
        box7.style.transform = "translateY(130rem) scale(1.5)";
        box8.style.transform = "translateY(10rem) scale(1)";
        box9.style.transform = "translateY(-24rem) scale(.1)";
      }
      if (window.scrollY > 2300 && window.scrollY < 2500) {
        box8.style.transform = "translateY(130rem) scale(1.5)";
        box9.style.transform = "translateY(10rem) scale(1)";
      }
      if (window.scrollY > 2500) {
        box9.style.transform = "translateY(130rem) scale(1.5)";
      }
    };
    window.addEventListener("scroll", addBackground);
  });
  return (
    <section className="section-home">
      <nav className="navigation">
        <img src="images/logo.png" alt="logo" className="navigation__logo" />
        <ul className="navigation__option-box">
          <li className="navigation__list">
            <Link to="/introduction">Article</Link>
          </li>
          <li className="navigation__list">People</li>
          <li className="navigation__list">Stories</li>
        </ul>
      </nav>

      <div className="container">
        <div ref={boxRef1} className="box main__post-box--color-1">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef2} className="box main__post-box--color-2">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef3} className="box main__post-box--color-3">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef4} className="box main__post-box--color-4">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef5} className="box main__post-box--color-5">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef6} className="box main__post-box--color-6">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef7} className="box main__post-box--color-7">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef8} className="box main__post-box--color-8">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
        <div ref={boxRef9} className="box main__post-box--color-9">
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
            <i
              onClick={reaction}
              className="bi bi-balloon-heart main__icon main__icon--color-1"
            ></i>
            <div className="emojis-box">
              <div className={`likes ${emojisUp.like}`}></div>
              <div className={`emojis smile ${emojisUp.emojis}`}>😄</div>
              <div className={`emojis wow ${emojisUp.emojis}`}>😯</div>
              <div className={`emojis heart ${emojisUp.emojis}`}>❤️️</div>
              <div className={`emojis fire ${emojisUp.emojis}`}>🔥</div>
              <div className={`emojis angry ${emojisUp.emojis}`}>😡</div>
            </div>
            <i className="bi bi-chat-left main__icon main__icon--color-1"></i>
            <i className="bi bi-share main__icon main__icon--color-1"></i>
          </div>
        </div>
      </div>
      <div className="boxes boxes--1">
        <h3 className="heading-tertiary">Categories</h3>
        <ul className="categories">
          <li>Entertainment</li>
          <li>Education</li>
          <li>Bussiness</li>
        </ul>
      </div>
      <div className="boxes boxes--2">
        <h3 className="heading-tertiary">Profile</h3>
        <div className="user-profile">
          <i className="bi bi-person-circle user-icon"></i>
          <p className="username">Username</p>
        </div>
        <ul className="user-details">
          <li>Detail1</li>
          <li>Detail2</li>
          <li>Detail3</li>
        </ul>
        <h3 className="heading-tertiary">Birthday</h3>
        <ul className="user-details">
          <li>DOB</li>
        </ul>
        <h3 className="heading-tertiary">Likes</h3>
        <ul className="user-details">
          <li>Detail</li>
        </ul>
      </div>
    </section>
  );
};

export default Homepage;
