import React from "react";
import '../reset.css';
import '../animate.css';
import '../index.css';
import { Link, Outlet } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav__content animated fadeInLeft">
                <div className="nav__icons">
                    <img src="../img/timetable_icon.svg" alt="timetable" className="nav__icon"></img>
                    <img src="../img/grades_icon.svg" alt="grades" className="nav__icon"></img>
                    <img src="../img/contacts_icon.svg" alt="contacts" className="nav__icon"></img>
                    <img src="../img/blog_icon.svg" alt="blog" className="nav__icon"></img>
                    <img src="../img/library_icon.svg" alt="library" className="nav__icon"></img>
                    <img src="../img/achievements_icon.svg" alt="achievements" className="nav__icon"></img>
                    <img src="../img/events_icon.svg" alt="events" className="nav__icon"></img>
                </div>
                <div className="nav__titles">
                    <Link to="/main" className="nav__title">Timetable</Link>
                    <Link to="" className="nav__title">Grades</Link>
                    <Link to="" className="nav__title">Contacts</Link>
                    <Link to="" className="nav__title">Blog</Link>
                    <Link to="" className="nav__title">Library</Link>
                    <Link to="" className="nav__title">Achievements</Link>
                    <Link to="/Events" className="nav__title">Events</Link>
                    <Outlet />
                </div>
            </div>
        </nav>
    );
}

export default Nav;