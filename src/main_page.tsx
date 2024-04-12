import React from 'react';
import './styles/style.css'
import './styles/header_footer_styles.css'
import './styles/main_page_styles.css'
const main_page = () => {
    return (
        <>
            <body>
                <header className="header">
                    <h1 className="logo">
                        <span className="red_letter">e</span>sc
                    </h1>
                    <nav>
                        <ul className="header-nav-menu">
                            <li><a href="main_page.html">home</a></li>
                            <li><a href="price_page.html">prices</a></li>
                            <li><a href="4u2k_page.html">4u2k</a></li>
                            <li><a href="games_page.html">games</a></li>
                            <li><a href="b2b_page.html">b2b</a></li>
                        </ul>
                    </nav>
                </header>

                <main className="main">
                    <section className="introduction top_margin">
                        <h1 className="introduction_header"><span className="red">ENGLISH<br /></span>SPEAKING<br />CLUB</h1>
                        <p className="introduction_p">Место, где молодёжь собирается для общения на английском, веселых встреч и новых
                            друзей.<br /><br />Лучший способ практики языка!<br />(с) основатель стартапа</p>
                        <div className="introduction_img">
                            <img src={require('./assets/main_page/koza.jpg')} alt="рисунок для главной страницы" />
                        </div>
                    </section>

                    <section className="schedule top_margin">
                        <div className="schedule_div">
                            <h2 className="schedule_header"><span className="red">NEXT</span> MEETING</h2>
                            <p className="schedule_info">ул. Спартаковская, д. 2</p>
                            <div className="schedule_div_gap">
                                <span className="schedule_info">23.03</span>
                                <span className="schedule_info">12:10</span>
                            </div>
                        </div>
                        <img className="schedule_img" src={require('./assets/main_page/podnos.jpg')} alt="рука официанта с подносом" />
                        <div className="schedule_btnsection">
                            <p className="schedule_p">Для участия достаточно записаться через удобный мессенджер! Оставь контакты в
                                форме внизу и хост свяжется с тобой.</p>
                            <button className="schedule_button" onClick="console.log(22)">Записаться</button>
                        </div>
                    </section>

                    <section className="whoweare">
                        <h2 className="whoweare_header">WHO <span className="red">WE</span> ARE</h2>
                        <p className="whoweare_info">English Speaking Club - это место, где молодые люди собираются каждую неделю, чтобы
                            практиковать английский язык в дружеской и непринужденной обстановке. Мы организуем встречи в барах,
                            библиотеках и других уютных местах, где каждый может свободно общаться на английском, делиться
                            историями, смеяться и проводить время с единомышленниками.<br /><br />Наша цель - создать комфортную
                            среду для изучения языка,
                            где каждый может чувствовать себя как дома.
                        </p>
                        <div className="whoweare_div">
                            <img className="whoweare_img" src={require('./assets/main_page/heart.png')}
                                alt="рука показывающая сердце большим и указательным пальцами" />
                            <div className="whoweare_div_div">
                                <div className="whoweare_div_div_p">
                                    <h2 className="whoweare_div_div_number">1</h2>
                                    <p className="whoweare_div_div_info">Мы создаем пространство, где каждый чувствует себя <span
                                        className="red">комфортно</span> и готов общаться.</p>
                                </div>
                                <div className="whoweare_div_div_p">
                                    <h2 className="whoweare_div_div_number">2</h2>
                                    <p className="whoweare_div_div_info">Мы проводим встречи в разных местах, чтобы каждый мог выбрать
                                        то, что ему больше <span className="red">нравится.</span></p>
                                </div>
                                <div className="whoweare_div_div_p">
                                    <h2 className="whoweare_div_div_number">3</h2>
                                    <p className="whoweare_div_div_info">Наши встречи ориентированы на <span className="red">практику </span>
                                         английского языка, а не занудную теорию.</p>
                                </div>
                                <div className="whoweare_div_div_p">
                                    <h2 className="whoweare_div_div_number">4</h2>
                                    <p className="whoweare_div_div_info">Здесь ты найдешь тех самых <span className="red">интересных </span>
                                        людей с которыми так здорово проводить время вместе.</p>
                                </div>
                                <h2 className="whoweare_div_div_header"><span className="red">HEY,</span> LET'S GO</h2>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="footer">
                    <div>
                        <div className="logo">
                            <span className="red_letter">e</span>sc
                        </div>
                        <p className="copyright">©ESC 2024 <br /> All rights reserved</p>
                    </div>

                    <nav>
                        <ul className="footer-nav-menu">
                            <li><a href="second.html">home</a></li>
                            <li><a href="#">prices</a></li>
                            <li><a href="#">4u2k</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className="footer-nav-menu">
                            <li><a href="#">games</a></li>
                            <li><a href="#">b2b</a></li>
                        </ul>
                    </nav>

                    <div>
                        <p>follow us</p>
                        <img width="40" height="40" src={require('./assets/footer/tg.png')} alt="Контакт в Telegram" />
                    </div>

                    <div>
                        <ul className="nav-menu">
                            <li>Нет вопросов? Запишись.</li>
                            <li>Есть вопросы? Позвони.</li>
                            <li><img width="20" height="20" src={require('./assets/footer/phone.png')} alt="Номер телефона" /> +7 (930) 71
                                61
                                910
                            </li>
                        </ul>
                    </div>
                </footer>
            </body>
        </>
    );
};

export default main_page;