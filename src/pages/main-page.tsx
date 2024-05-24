import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { InviteButton } from '../components/invite-button';
import { WhoWeAreDiv } from '../components/who-we-are-div';
import { ScheduleInfo } from '../components/schedule-info';
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

      <Footer noMargin/>
    </>
  );
};

export default main_page;