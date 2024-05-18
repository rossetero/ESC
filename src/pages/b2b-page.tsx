import React from 'react';
// import '../styles/style.css'
// import '../styles/b2b-page-styles.css'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InviteButton } from '../components/invite-button';

const b2b_page = () => {
  return (
    <>
      <Header />

      <main className="main_b2b">
        <section className="intro">
          <div>
            <img className="intro_img_left" src={require('../assets/main_page/left_hand.png')} alt="открытая рука для рукопожатия" />
          </div>
          <div>
            <img className="intro_img_right" src={require('../assets/main_page/right_hand.png')} alt="открытая рука для рукопожатия" />
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
          <img className="benefits_arrow down" src={require('../assets/main_page/arrow_down.png')} alt="стрелка к следующему пункту" />
          <img className="benefits_arrow up" src={require('../assets/main_page/arrow_up.png')} alt="стрелка к следующему пункту" />
        </section>

        <section className="invite">
          <div className="invite_div">
            <p className="invite_p">Мы с радостью обсудим все детали сотрудничества и предложим вам индивидуальные
              условия, которые будут выгодны всем сторонам.<br /><br />Не упустите шанс привлечь новую аудиторию и
              поддержать наш образовательный проект!
            </p>
            <div>
              <InviteButton>Пригласить</InviteButton>
              <p className="invite_div_p">Заинтересовало предложение? Оставляйте заявку и мы с вами свяжемся!</p>
            </div>
          </div>
          <h2 className="invite_h">COME <span className="red">WITH</span> US</h2>
        </section >


      </main >

      <Footer />
    </>
  );
};

export default b2b_page;