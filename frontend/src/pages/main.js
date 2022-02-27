import React from "react";
import '../reset.css';
import '../index.css';
import '../animate.css';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from "../components/footer";
import data from "../example.json";

function Main() {
  return (
    <div>
      <div className="wrapper">
        <Header></Header>
        <div className="container">
          <div>
            <Nav></Nav>
            <img src="../img/img1.svg" alt="Teacher illustration" className="main__illustration animated fadeInLeft"></img>
          </div>
          <div>
            <div className="schedule animated fadeInDown">
              <div className="schedule__block">
                <p className="schedule__title">Mon. 17 June</p>
              </div>
              <div className="schedule__block">
                <p className="schedule__title">Tue. 18 June</p>
              </div>
              <div className="schedule__block">
                <p className="schedule__title">Wed. 19 June</p>
              </div>
              <div className="schedule__block">
                <p className="schedule__title">Thu. 20 June</p>
              </div>
              <div className="schedule__block">
                <p className="schedule__title">Fri. 21 June</p>
              </div>
              <div className="schedule__block">
                <p className="schedule__title">Sat. 22 June</p>
              </div>
            </div>
            <div className="content animated fadeIn">
              {data.lessons.map((lesson) =>
                <div className="content__block">
                  <div className="content__left">
                    <div className="content__block__icon">
                      <img src="../img/content_english_icon.svg" alt="english_icon"></img>
                    </div>
                    <div className="content__block__left">
                      <h2 className="content__block__heading">{lesson.name}</h2>
                      <div className="content__block__first__line">
                        <p className="content__block__paragraph">{lesson.topic}</p>
                      </div>
                      <div className="content__block__second__line">
                        <p className="content__block__paragraph">{lesson.class}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content__right">
                    <div className="content__block__right">
                      <h2 className="content__block__heading">{lesson.Time}</h2>
                      <div className="content__block__second__line">
                        <img src="../img/distance_icon.svg" alt="distance_icon" className="content__block__line__icon"></img>
                        <p className="content__block__paragraph">{lesson.venue}</p>
                      </div>
                      <div className="content__block__third__line">
                        <img src="../img/add_icon.svg" alt="add_icon" className="content__block__line__icon"></img>
                        <p className="content__block__paragraph">Hometask</p>
                      </div>
                    </div>
                    <div className="content__block__test">
                      <img src="../img/test_icon.svg" alt="test_icon" className="content__block__test__icon"></img>
                      <p className="content__block__test__text">Test</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Main;