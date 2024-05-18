import React from 'react';
// import '../styles/style.css'
// import '../styles/main-page-styles.css'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InviteButton } from '../components/invite-button';
import { WhoWeAreDiv } from '../components/who-we-are-div';
import { ScheduleInfo } from '../components/schedule-info';

const main_page = () => {
  return (
    <>
      <Header />

      <main className="main">
        <section className="introduction top_margin">
          <h1 className="introduction_header"><span className="red">ENGLISH<br /></span>SPEAKING<br />CLUB</h1>
          <p className="introduction_p">Место, где молодёжь собирается для общения на английском, веселых встреч и новых
            друзей.<br /><br />Лучший способ практики языка!<br />(с) основатель стартапа</p>
          <div className="introduction_img">
            <img src={require('../assets/main_page/koza.jpg')} alt="рисунок для главной страницы" />
          </div>
        </section>

        <section className="schedule top_margin">
          <ScheduleInfo />
          <img className="schedule_img" src={require('../assets/main_page/podnos.jpg')} alt="рука официанта с подносом" />
          <div className="schedule_btnsection">
            <p className="schedule_p">Для участия достаточно записаться через удобный мессенджер! Оставь контакты в
              форме внизу и хост свяжется с тобой.</p>
            <InviteButton>Записаться</InviteButton>
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
            <img className="whoweare_img" src={require('../assets/main_page/heart.png')}
              alt="рука показывающая сердце большим и указательным пальцами" />
            <WhoWeAreDiv />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default main_page;