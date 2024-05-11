import React from 'react';
import '../styles/style.css'
import '../styles/main-page-styles.css'
import { Caption } from '../components/caption';

const not_found = () => {
  return (
    <>

      <main className="main">
        <section className="introduction top_margin">
          <Caption><h1>THIS PAGE DOES <span>NOT EXIST<br /></span></h1></Caption>

        </section>

      </main>


    </>
  );
};

export default not_found;