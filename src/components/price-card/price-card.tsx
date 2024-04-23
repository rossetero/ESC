import React, { useState } from 'react';
import { StyledPriceCard, StyledTitle, StyledDescription, StyledPriceTag } from './price-card.styled'
import { ClientContactForm } from '../client-contact-form';

export const PriceCard = ({ title, description, price }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (

        <StyledPriceCard onClick={openModal}>
            <ClientContactForm isOpen={isOpen} onClose={closeModal} />
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
            <StyledPriceTag>{price + "₽"}</StyledPriceTag>
        </StyledPriceCard >
    );
}