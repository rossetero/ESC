import React, { useState } from 'react';
import '../../styles/b2b-page-styles.css';
import { ClientContactForm } from '../client-contact-form';
import { StyledInviteButton } from './invite-button.styled';

export const InviteButton = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

  return (
    <>
        <StyledInviteButton onClick={openModal}>{children}</StyledInviteButton>
        {/* <ClientContactForm isOpen={isOpen} onClose={closeModal} /> */}
    </>
  );
};
