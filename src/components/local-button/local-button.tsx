import React from "react";
import { useTranslation } from "react-i18next";
import { StyledButton } from "./local-button.styled";

export const LocalButton = () => {
    const { i18n, t } = useTranslation();

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
        // i18n.changeLanguage(newLanguage);

        i18n.changeLanguage(newLanguage).catch((err) =>
            console.error('Error changing language:', err)
          );
    };

    return (
        <StyledButton onClick={handleLanguageChange}>
            {t('footer.button')}
        </StyledButton>
    );
};