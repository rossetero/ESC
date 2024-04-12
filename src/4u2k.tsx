import React from 'react';
import './styles/style.css'
//import {book} from './assets/4u2k'
const u2k = () => {
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
                    <li><a href="pricelist.html">prices</a></li>
                    <li><a href="#">4u2k</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">b2b</a></li>

                </ul>
            </nav>

        </header>


        <main className="main">
            <header className="u2kheader">
                <div>
                    <h1 className="logo"><span className="red_letter">4U2K</span> PAGE</h1>
                    <p>Разовая встреча на “попробовать”? <br/> Две проходки - себе и другу? <br/> По две каждому? <br/> А
                        может, абонемент
                        на пять встреч? <br/> Так много опций... <br/> <br/> Выбирай тот уровень участия, который по душе
                        именно тебе, <br/> и
                        присоединяйся к нашей дружной компании!</p>
                </div>
                <img width="523.4" height="412" src={require('./assets/4u2k/book.png')} alt="" />
            </header>

            <section className="content-section">
                <h2 className="section-title"> <span className="red_letter">VIDEO</span> SECTION</h2>
                <div className="content">
                    <img src="http://dummyimage.com/364x201.7/&text=video" alt="" />
                    <img src="http://dummyimage.com/364x201.7/&text=video" alt="" />
                    <img src="http://dummyimage.com/364x201.7/&text=video" alt="" />
                    <img src="http://dummyimage.com/364x201.7/&text=video" alt="" />

                </div>
            </section>

            <section className="content-section">
                <h2 className="section-title"> <span className="red_letter">PODCAST</span> SECTION</h2>
                <div className="content">
                    <img src="http://dummyimage.com/364x201.7&text=podcast" alt=""/>
                    <img src="http://dummyimage.com/364x201.7&text=podcast" alt=""/>
                    <img src="http://dummyimage.com/364x201.7&text=podcast" alt=""/>
                    <img src="http://dummyimage.com/364x201.7&text=podcast" alt=""/>

                </div>
            </section>

            <section className="content-section">
                <h2 className="section-title"> <span className="red_letter">ARTICLE</span> SECTION</h2>
                <div className="content">
                    <img src="http://dummyimage.com/364x201.7/&text=article" alt=""/>
                    <img src="http://dummyimage.com/364x201.7/&text=article" alt=""/>
                    <img src="http://dummyimage.com/364x201.7/&text=article" alt=""/>
                    <img src="http://dummyimage.com/364x201.7/&text=article" alt=""/>

                </div>
            </section>

        </main>



        <footer className="footer">
            <div>
                <div className="logo">
                    <span className="red_letter">e</span>sc
                </div>
                <p className="copyright">©ESC 2024 <br/> All rights reserved</p>
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
                <img width="40" height="40" src="../assets/footer/tg.png" alt="Контакт в Telegram"/>
            </div>

            <div>

                <ul className="nav-menu">
                    <li>Нет вопросов? Запишись.</li>
                    <li>Есть вопросы? Позвони.</li>
                    <li><img width="20" height="20" src="../assets/footer/phone.png" alt="Номер телефона" /> +7 (930) 71
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

export default u2k;