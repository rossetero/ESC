import React from 'react';
import './styles/style.css'
import './styles/b2b_page_styles.css'
import './styles/header_footer_styles.css'
const b2b_page = () => {
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

                <main className="main_b2b">
                    <section className="intro">
                        <div>
                            <img className="intro_img_left" src={require('./assets/main_page/left_hand.png')} alt="открытая рука для рукопожатия" />
                        </div>
                        <div>
                            <img className="intro_img_right" src={require('./assets/main_page/right_hand.png')} alt="открытая рука для рукопожатия" />
                        </div>

                        <div className="intro_div">
                            <h2 className="intro_div_h"><span className="red">B2B</span> PAGE</h2>
                            <p className="intro_div_p">Станьте партнёром English Speaking Club<br />и привлекайте новых клиентов!</p>
                        </div>
                    </section>

                    <section className="benefits">
                        <p className="benefits_p">English Speaking Club - встречи, где молодые люди собираются для того, чтобы улучшить
                            свои разговорные навыки на английском языке. Если вы владеете баром или библиотекой и хотите привлечь
                            больше посетителей, то стать партнером нашего клуба - отличная возможность для вас!<br /><br />Наш
                            разговорный клуб создан в концепции edutainment, от английских “education” - обучение и “entertainment”
                            - развлечение. Такой подход позволяет сочетать полезную информацию с развлекательными заданиями,
                            поддерживать знания на хорошем уровне без нудного заучивания теории и скучных учебников. Только хорошая
                            компания, интересные темы и много смеха!<br /><br />Что же вы получите, став партнёром English Speaking
                            Club’a?</p>
                        <p className="benefits_punkt">Во-первых, приток <span className="red">новых</span> посетителей, которые будут рады
                            посещать ваше заведение для проведения встреч.</p>
                        <p className="benefits_punkt pad_center">Во-вторых, <span className="red">увеличение</span> продаж, так как участники клуба
                            могут стать вашими постоянными клиентами.</p>
                        <p className="benefits_punkt pad_right">И, наконец, <span className="red">продвижение</span> вас как места, поддерживающего
                            образовательные и культурные инициативы.</p>
                        <img className="benefits_arrow down" src={require('./assets/main_page/arrow_down.png')} alt="стрелка к следующему пункту" />
                        <img className="benefits_arrow up" src={require('./assets/main_page/arrow_up.png')} alt="стрелка к следующему пункту" />
                    </section>

                    <section className="invite">
                        <div className="invite_div">
                            <p className="invite_p">Мы с радостью обсудим все детали сотрудничества и предложим вам индивидуальные
                                условия, которые будут выгодны всем сторонам.<br /><br />Не упустите шанс привлечь новую аудиторию и
                                поддержать наш образовательный проект!
                            </p>
                            <div>
                                <button className="invite_button">Пригласить</button>
                                <p className="invite_div_p">Заинтересовало предложение? Оставляйте заявку и мы с вами свяжемся!</p>
                            </div>
                        </div>
                        <h2 className="invite_h">COME <span className="red">WITH</span> US</h2>
                    </section >


                </main >

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

            </body >
        </>
    );
};

export default b2b_page;