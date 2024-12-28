// import React, { useState } from 'react';
// import { StyledPriceCard, StyledTitle, StyledDescription, StyledPriceTag, ModalOverlay } from './price-card.styled'
// import { ClientContactForm } from '../client-contact-form';

// export const PriceCard = ({ title, description, price }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openModal = () => {
//         setIsOpen(true);
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//     };

//     const handleModalClick = (event) => {
//         event.stopPropagation();
//     };

//     return (
//         <>
//             <StyledPriceCard onClick={openModal}>
//                 <StyledTitle>{title}</StyledTitle>
//                 <StyledDescription>{description}</StyledDescription>
//                 <StyledPriceTag>{price + "₽"}</StyledPriceTag>
//             </StyledPriceCard>
//             {isOpen && (
//                 <ModalOverlay onClick={handleModalClick}>
//                     <ClientContactForm isOpen={true} onClose={closeModal} />
//                 </ModalOverlay>
//             )}
//         </>
//     );
// };

import React, { useState } from 'react';
import { StyledPriceCard, StyledTitle, StyledDescription, StyledPriceTag, ModalOverlay } from './price-card.styled';
import { ClientContactForm } from '../client-contact-form';

interface PriceCardProps {
  title: string;
  description: string;
  price: number;
}

export const PriceCard: React.FC<PriceCardProps> = ({ title, description, price }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <StyledPriceCard onClick={openModal}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledPriceTag>{price}₽</StyledPriceTag>
      </StyledPriceCard>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ClientContactForm isOpen={isOpen} onClose={closeModal} option={title} />
        </ModalOverlay>
      )}
    </>
  );
};