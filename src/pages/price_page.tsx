import React from "react"
import './styles/price_4u2k_styles'
const pricelist = () => {
    return (
        <>
            <body>



                <header className="header">

                    <h1 className="logo">
                        <span className="red_letter">e</span>sc
                    </h1>
                    <nav>
                        <ul className="nav-menu">
                            <li><a href="#">home</a></li>
                            <li><a href="#">prices</a></li>
                            <li><a href="4u2k.html">4u2k</a></li>
                            <li><a href="#">games</a></li>
                            <li><a href="#">b2b</a></li>

                        </ul>
                    </nav>

                </header>




                <main className="main">

                    <header className="pheader">
                        <img width="606" height="472" src={require("./assets/prices/handmoney.png")} alt="" />
                        <div>
                            <h1 className="logo">OUR<span className="red_letter"> PRICES</span></h1>
                            <p>Разовая встреча на “попробовать”? <br /> Две проходки - себе и другу? <br /> По две каждому? <br /> А
                                может, абонемент
                                на пять встреч? <br /> Так много опций... <br />
                                <br /> Выбирай тот уровень участия, который по душе
                                именно тебе, <br /> и
                                присоединяйся к нашей дружной компании!
                            </p>
                        </div>
                    </header>

                    <section className="prices">
                        <div className="one_time">
                            <h2 className="flex-item"> <span className="red_letter"> один раз </span> <br /> не спикинг клаб</h2>
                            <p className="flex-item">Мне только спросить! Ой, попробовать. В общем, я пока только на один раз. Но обещаю
                                вернуться!</p>
                            <p className="price_tag">500₽</p>

                        </div>
                        <div>
                            <h2 className="flex-item"> за себя <br /> и за <span className="red_letter"> сашку </span></h2>
                            <p className="flex-item">Нас двое и мы хотим говорить. На английском, много и весело. Плачу за себя и того
                                парня (он со мной
                                просто).</p>
                            <p className="price_tag">900₽</p>
                        </div>

                        <div>
                            <h2 className="flex-item"> мне всего <br /> и <span className="red_letter"> пять </span> штук</h2>
                            <p>Пакет встреч со скидкой 12% для истинных фанатов клуба. Поздравляю, вы теперь старожил спикинга.</p>
                            <p className="price_tag">2200₽</p>

                        </div>
                        <div>
                            <h2 className="flex-item"> девочка, <br /> английского<span className="red_letter"> нам </span></h2>
                            <p className="flex-item">Приватный спикинг клаб только для вашей компании? Без проблем! Выберем дату-время и
                                тему встречи.</p>
                            <p className="price_tag">5000₽</p>
                        </div>

                    </section>

                    <section className="descr">
                        <p>
                            Всё предельно просто! Выбери тариф, который придётся по душе и оставь контакты в форме. Для
                            подтверждения записи хост напишет тебе лично! Заодно сможешь задать все интересующие вопросы.
                            <br />
                            <br />
                            Словом, действуй. See ya!
                        </p>

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
                        <ul className="nav-menu">
                            <li><a href="second.html">home</a></li>
                            <li><a href="#">prices</a></li>
                            <li><a href="#">4u2k</a></li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className="nav-menu">
                            <li><a href="#">games</a></li>
                            <li><a href="#">b2b</a></li>
                        </ul>
                    </nav>

                    <div>
                        <p>follow us</p>
                        <img width="40" height="40" src={require("./assets/footer/tg.png")} alt="Контакт в Telegram" />
                    </div>

                    <div>

                        <ul className="nav-menu">
                            <li>Нет вопросов? Запишись.</li>
                            <li>Есть вопросы? Позвони.</li>
                            <li><img width="20" height="20" src={require("./assets/footer/phone.png")} alt="Номер телефона" /> +7 (930) 71 61
                                910
                            </li>


                        </ul>

                    </div>

                </footer>


            </body>
        </>
    );
};

export default pricelist