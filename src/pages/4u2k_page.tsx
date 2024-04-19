import React from 'react';
import '../styles/price_4u2k_styles.css'
import '../styles/main'
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const u2k = () => {
    return (
        <>
            <body>


                <Header />


                <main className="main">
                    <header className="u2kheader">
                        <div>
                            <h1 className="logo"><span className="red_letter">4U2K</span> PAGE</h1>
                            <p>Разовая встреча на “попробовать”? <br /> Две проходки - себе и другу? <br /> По две каждому? <br /> А
                                может, абонемент
                                на пять встреч? <br /> Так много опций... <br /> <br /> Выбирай тот уровень участия, который по душе
                                именно тебе, <br /> и
                                присоединяйся к нашей дружной компании!</p>
                        </div>
                        <img width="523.4" height="412" src={require('../assets/4u2k/book.png')} alt="" />
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
                            <img src="http://dummyimage.com/364x201.7&text=podcast" alt="" />
                            <img src="http://dummyimage.com/364x201.7&text=podcast" alt="" />
                            <img src="http://dummyimage.com/364x201.7&text=podcast" alt="" />
                            <img src="http://dummyimage.com/364x201.7&text=podcast" alt="" />

                        </div>
                    </section>

                    <section className="content-section">
                        <h2 className="section-title"> <span className="red_letter">ARTICLE</span> SECTION</h2>
                        <div className="content">
                            <img src="http://dummyimage.com/364x201.7/&text=article" alt="" />
                            <img src="http://dummyimage.com/364x201.7/&text=article" alt="" />
                            <img src="http://dummyimage.com/364x201.7/&text=article" alt="" />
                            <img src="http://dummyimage.com/364x201.7/&text=article" alt="" />

                        </div>
                    </section>

                </main>



                <Footer />

            </body>



        </>
    );
};

export default u2k;