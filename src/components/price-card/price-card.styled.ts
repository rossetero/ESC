import styled from "@emotion/styled";

export const StyledPriceCard = styled.div`
    margin: 3% 3%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 21px;
    background-color: var(--secondary-color);
    border-style: solid;
    border-color: var(--secondary-color);
    border-width: 5px;

    &:hover {
        background-color: white;
    }
`;

export const StyledTitle = styled.h2`
    font-weight: 900;
    font-size: 3vw;
    letter-spacing: 0.05em;
    color: var(--text-red);
    margin-bottom: 35px;

    @media (max-width: 768px) {
        font-size: 4vw;
    }
`;

export const StyledDescription = styled.p`
    margin-bottom: 35px;
    font-size: 1.5vw;

    @media (max-width: 768px) {
        font-size: 3vw;
        line-height: 1.2;
    }
`;

export const StyledPriceTag = styled.p`
    font-weight: 500;
    font-size: 2vw;
    letter-spacing: 0.05em;
    color: #000;

    @media (max-width: 768px) {
        font-size: 3vw;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); // Прозрачное затемнение фона
    z-index: 1000; // Помещаем поверх других элементов
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: white; // Цвет фона модального окна
    padding: 20px;
    border-radius: 10px;
    z-index: 1001; // Помещаем поверх затемнения фона
`;


