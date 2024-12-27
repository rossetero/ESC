
import React, { useState } from 'react';
import '../../styles/b2b-page-styles.css';
import { ClientContactForm } from '../client-contact-form';
import { ModalOverlay, StyledInviteButton } from './invite-button.styled';

export const InviteButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  };

  const closeModal = () => {
      setIsOpen(false);
  };

  const handleModalClick = (event) => {
      if (event.target === event.currentTarget) {
          setIsOpen(false);
      }
  };

  return (
      <>
          <StyledInviteButton onClick={openModal}>{children}</StyledInviteButton>
          {isOpen && (
              <ModalOverlay onClick={handleModalClick}>
                  <ClientContactForm isOpen={true} onClose={closeModal} />
              </ModalOverlay>
          )}
      </>
  );
};


