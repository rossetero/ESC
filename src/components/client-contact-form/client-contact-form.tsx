import axios from 'axios';
import React, { useState, useRef, useEffect } from "react";
import { StyledClientContactForm } from './client-contact-form.styled'
import InputMask from 'react-input-mask';
interface ClientContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ClientContactForm: React.FC<ClientContactFormProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    const [name, setName] = useState('');
    const [telegram, setTelegram] = useState('');
    const [phone, setPhone] = useState('');

    // Обработчики изменений полей ввода
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleTelegramChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelegram(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const [selectedOption, setSelectedOption] = useState('');

    // Обработчик изменения выбранного значения
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    // Обработчик отправки формы
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     // Ваши действия с данными формы здесь
    //     console.log('Submitted:', { name, telegram, phone, selectedOption });
    // };

    const botToken = '6614524564:AAE27PNrRDhzXmJeyZnE0xi7l8lk3jcqStI';
    const chatId = '969675758';

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const message = `
Имя: ${name}
Ник в телеграме: @${telegram}
Телефон: ${phone}
Выбранная опция: ${selectedOption}
        `;

        try {
            console.log('Message to send:', message);
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: message,
            });
            console.log('sent successfully.');
        } catch (error) {
            console.error('sendind error:', error);
        }
    };

    return (
        <StyledClientContactForm ref={modalRef} onSubmit={handleSubmit as any}>
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
                    <option value="разовое посещение">500₽ - один раз</option>
                    <option value="на двоих">900₽ - проходка на двоих</option>
                    <option value="абонемент на 5">2200₽ - абонемент на 5 встреч</option>
                    <option value="privat esc">5000₽ - личный спикинг клаб</option>
                    <option value="инвайт">бесценно - пригласть esc к вам</option>
                    <option value="вопрос">мне только спросить!</option>
                </select>
            </div>
            <button>Отправить</button>
        </StyledClientContactForm>
    );
};

export default ClientContactForm;
