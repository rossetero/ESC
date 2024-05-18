import styled from "@emotion/styled";

export const StyledGamesBlock = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 3%;
    margin-bottom: 3%;
`;

export const StyledGame = styled.div`
    margin: 3% 3%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #D9D9D9;
    border-radius: 21px;
`;

export const StyledOneTimeGame = styled.div`
    border-style: solid;
    border-color: #D9D9D9;
    border-width: 5px;
`;

export const StyledGameHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px; /* Добавляем отступ снизу */
`;

export const StyledLogo = styled.div`
    font-weight: 900;
    font-size: 44px; /* Или нужный размер */
    letter-spacing: 0.05em;
    color: #000; /* Цвет текста */
`;

export const StyledFlexItem = styled.div`
    margin-bottom: 35px;
`;

export const StyledDescription = styled.div`
    margin-bottom: 5%;
`;

export const StyledImage = styled.img`
    width: 20px; /* Устанавливаем ширину изображения равной ширине буквы */
    height: 20px; /* Устанавливаем высоту изображения равной высоте буквы */
`;
