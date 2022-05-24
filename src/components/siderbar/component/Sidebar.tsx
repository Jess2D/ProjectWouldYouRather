import React from 'react';
import '../view/page.css';
import avatar from "../../../assets/img/avatars/Avatar1.png";
import home from "../../../assets/icons/home.png";
import question from "../../../assets/icons/question.png";
import leader from "../../../assets/icons/leader.png";
import logout from "../../../assets/icons/logout.png";
import { Link } from 'react-router-dom';


function Sidebar () {
    return (
        <div className="sidebar">
            <div className="avatar">
                <img src={avatar} alt="user avatar"/>
            </div>
            <div className="user-greetings">Hello, Tyler McGinnes</div>
            <nav className="menu">
              <ul>
                <li className="item">
                  <div className="icon"> <img src={home} alt="home icon"/></div>
                  <div className="item-link"><Link to="/">Home</Link></div>
                </li>
                <li className="item">
                  <div className="icon"> <img src={question} alt="question icon"/></div>
                  <div className="item-link"><Link to="/new">New Question</Link></div>
                </li>
                <li className="item">
                  <div className="icon"><img src={leader} alt="leader ranking icon"/></div>
                  <div className="item-link">Leader Board</div>
                </li>
                <li className="item">
                  <div className="icon"><img src={logout} alt="logout icon"/></div>
                  <div className="item-link">Logout</div>
                </li>
              </ul>
            </nav>
        </div>
      );
}

export default Sidebar;