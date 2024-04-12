import React from 'react';
import './styles/gamestyle.css';

const douhearme: React.FC = () => {
  return (
    <div>
      <header className="header">

        <h1 className="logo">
          <span className="red_letter">e</span>sc
        </h1>
        <nav>
          <ul className="nav-menu">
            <li><a href="main_page.html">home</a></li>
            <li><a href="pricelist.html">prices</a></li>
            <li><a href="4u2k.html">4u2k</a></li>
            <li><a href="games.html">games</a></li>
            <li><a href="b2b_page.html">b2b</a></li>
          </ul>
        </nav>

      </header>

      <main className="main">
        <header className="gamesheader">
          <div>
            <h1 className="logo">Алё,<span className="red_letter"> меня слышно?</span></h1>
          </div>
          <img width="400" height="412" src={require("../src/assets/games/games1.png")} alt="" />
        </header>

        <div style={{ padding: '250px' }}>
          <p> </p>
        </div>
      </main>

      <footer className="footer">
        <div>
          <div className="logo">
            <span className="red_letter">e</span>sc
          </div>
          <p className="copyright">©ESC 2024 <br /> All rights reserved</p>
        </div>

        <nav>
          <ul className="nav-menu">
            <li><a href="main_page.html">home</a></li>
            <li><a href="pricelist.html">prices</a></li>
            <li><a href="4u2k.html">4u2k</a></li>
          </ul>
        </nav>

        <nav>
          <ul className="nav-menu">
            <li><a href="games.html">games</a></li>
            <li><a href="b2b_page.html">b2b</a></li>
          </ul>
        </nav>

        <div>
          <p>follow us</p>
          <img width="40" height="40" src="../src/assets/footer/tg.png" alt="Контакт в Telegram" />
        </div>

        <div>
          <ul className="nav-menu">
            <li>Нет вопросов? Запишись.</li>
            <li>Есть вопросы? Позвони.</li>
            <li><img width="20" height="20" src="../src/assets/footer/phone.png" alt="Номер телефона" /> +7 (930) 71 61 910</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default douhearme;
