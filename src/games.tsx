import React from 'react';
import './styles/gamestyle.css';

const games: React.FC = () => {
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
            <h1 className="logo">OUR<span className="red_letter"> GAMES</span></h1>
            <p>Выбери, че хочешь поделать:</p>
          </div>
          <img width="400" height="412" src={require("../src/assets/games/games1.png")} alt="" />
        </header>

        <section className="prices">
          <div className="one_time">
            <h2 className="flex-item"><a href="abc.html" className="red_letter">ABC</a></h2>
            <p className="flex-item">Мой брат Колян сбацал про меня байку на англицком и несколько фишек кинул для шухера. Англицкий ты вроде знаешь, впряжешься за меня, а?</p>
          </div>

          <div>
            <h2 className="flex-item"><a href="douhearme.html" className="red_letter">Алё,</a><br />меня слышно?</h2>
            <p className="flex-item">Мой кент на мобилу текст записал с иностранкой. Понимаешь, о чём тут говорят?</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="logo">
            <span className="red_letter">e</span>sc
          </div>
          <p className="copyright">©ESC 2024<br />All rights reserved</p>
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

export default games;
