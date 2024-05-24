import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Main1 } from '../components/common';
import { MainIntro } from '../components/main-intro';
import { MainSchedule } from '../components/main-schedule';
import { MainWhoWeAre } from '../components/main-who-we-are';

const main_page = () => {
  return (
    <>
      <Header />

      <Main1>

        <MainIntro />

        <MainSchedule />

        <MainWhoWeAre />

      </Main1>

      <Footer noMargin = {true}/>
    </>
  );
};

export default main_page;