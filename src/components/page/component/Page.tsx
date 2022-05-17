import React from 'react';
import '../view/page.css'
import avatar from "../../../assets/img/avatars/Avatar1.png"

function Page() {
  return (
    <div className="App">
    <div className="sidebar">
        <div className="avatar">
            <img src={avatar} alt="user avatar"/>
        </div>
        <div className="user-greetings"></div>
        <div className="menu"></div>
    </div>
    <div className="page-content">
        <header className="App-header">
            <h1>Would Rather game</h1>
        </header>
        <div className="main"></div>
    </div>

    </div>
  );
}

export default Page;
