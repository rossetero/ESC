import styled, { createGlobalStyle } from 'styled-components';

// Глобальные стили (reset и общие стили)
export const GlobalStyle = createGlobalStyle`
  /*===================STYLE RESET===================*/
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }

  body {
      line-height: 1;
      font-family: 'Montserrat', sans-serif;
      font-size: var(--default-font-size);
      font-weight: 500;
  }

  ol, ul {
      list-style: none;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  :root {
      --text-red: #C00000;
      --secondary-color: #D9D9D9;
      --default-font-size: 1.5vw;
  }

  a {
      text-decoration: none;
      color: #000000;
  }

  .red_letter {
      color: var(--text-red);
  }
`;


export const MainWrapper = styled.main`
  margin: 0% 10%;
`;

// уникальные стили games
export const GamesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const GameBlock = styled.div`
  margin: 3% 3%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--secondary-color);
  border-radius: 21px;
`;

export const GameTitle = styled.h2`
  font-weight: 900;
  font-size: 48px;
  letter-spacing: 0.05em;
  color: #000;
`;

export const OneTimeBlock = styled(GameBlock)`
  background-color: #ffffff;
  border-style: solid;
  border-color: var(--secondary-color);
  border-width: 5px;
`;

export const FlexItem = styled.div`
  margin-bottom: 35px;
`;

export const Descr = styled.p`
  margin-bottom: 5%;
`;

export const GamesHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
      text-align: center;
      margin-bottom: 30px;
  }

  .logo {
      font-weight: 900;
      font-size: 96px;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;

      .red_letter {
          font-size: 96px;
          margin-left: 20px;
      }
  }
`;
