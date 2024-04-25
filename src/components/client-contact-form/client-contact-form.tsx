import React, { useState } from "react";
import { StyledClientContactForm } from './client-contact-form.styled'
import InputMask from 'react-input-mask';
import { Caption } from "../caption";
export const ClientContactForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [phone, setPhone] = useState('');


    // Обработчики изменений полей ввода
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleTelegramChange = (event) => {
        setTelegram(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('');

    // Обработчик изменения выбранного значения
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Обработчик отправки формы
    const handleSubmit = (event) => {
        event.preventDefault();
        // Действия при отправке формы, например, отправка данных на сервер
        console.log('Submitted:', { name, telegram, phone });
    };

    return (
        <StyledClientContactForm onSubmit={handleSubmit}>
            <span className="close" onClick={onClose}>&times;</span>
            <h1><span>welcome</span><br />
                в спикинг клаб!</h1>
            <div>
                <label htmlFor="name">Имя (а как к вам обращаться?)</label>
                <input className="input"
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="telegram">Ник в телеграме (а как вам написать?)</label>
                <input className="input"
                    type="text"
                    id="telegram"
                    value={telegram}
                    onChange={handleTelegramChange}

                />
            </div>
            <div>
                <label htmlFor="phone">Телефон (а если не свяжемся в тг?)</label>
                <InputMask className="input"
                    id="phone"
                    mask="+7 (999) 999-99-99"
                    maskPlaceholder=" "
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="selectOption">Я хочу.. (выбери одну из опций)</label>
                <select className="input" value={selectedOption} onChange={handleSelectChange}>
                    <option value="1">500₽ - один раз</option>
                    <option value="2">900₽ - проходка на двоих</option>
                    <option value="3">2200₽ - абонемент на 5 встреч</option>
                    <option value="4">5000₽ - личный спикинг клаб</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </StyledClientContactForm>
    );
};

export default ClientContactForm;