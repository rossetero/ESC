import { css } from '@emotion/react';
import styled from "@emotion/styled";

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
