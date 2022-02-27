import React from "react";
import '../reset.css';
import '../index.css';
import '../animate.css';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from "../components/footer";
import data from '../event_example.json'

function Event() {
    return (
        <div>
            <div className="wrapper">
                <Header></Header>
                <div className="container">
                    <div>
                        <Nav></Nav>
                        <img src="../img/img2.svg" alt="illustration" className="event__illustration animated fadeInLeft"></img>
                    </div>
                    <div className="limitation animated fadeIn">
                        <div className="event__container">
                            <div>
                                <div className="event__Add">
                                    <img src="../img/event_add.svg" alt="add" className="event__add__icon"></img>
                                    <p className="event__add__text">Add an event</p>
                                </div>
                            </div>
                            {data.events.map((event) =>
                                <div className="event__block">
                                    <div className="event__block__container">
                                        <img src={event.photo} alt="illustration" className=""></img>
                                        <div className="event__block__container__elements">
                                            <h2 className="event__block__container__heading">{event.heading}</h2>
                                            <p className="event__block__container__paragraph">{event.paragraph}</p>
                                            <div className="event__block__container__footer">
                                                <div className="event__block__container__footer__button">
                                                    <img src="../img/bell.svg" alt="bell" className=""></img>
                                                    <p className="event__block__container__footer__button__text">Participating</p>
                                                </div>
                                                <div className="event__block__container__footer__management">
                                                    <img src="../img/thumb_up_off_alt.svg" alt="thumb_up" className=""></img>
                                                    <p className="event__block__container__footer__management__text">{event.likes}</p>
                                                    <img src="../img/thumb_down_off_alt.svg" alt="thumb_down" className=""></img>
                                                    <img src="../img/Reply.svg" alt="Reply" className="event__block__container__footer__management__margin"></img>
                                                </div>
                                            </div>
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

export default Event;