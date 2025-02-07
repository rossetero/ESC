import React, { useState, useRef, useEffect } from "react";
import { StyledClientContactForm, ModalOverlay } from "./client-contact-form.styled";
import InputMask from "react-input-mask";
import { useAddRecordMutation } from "../../api"; // Импортируем RTK Query

interface ClientContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ClientContactForm: React.FC<ClientContactFormProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLFormElement>(null);

    const [name, setName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState("1");
    const [errorMessage, setErrorMessage] = useState("");

    const [addRecord, { isLoading }] = useAddRecordMutation(); // Используем RTK Query

    const validateTelegram = (telegram: string) => telegram.startsWith("@");

    // Закрываем модалку только если клик был на затемненную область (но НЕ на форму)
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (!nameRegex.test(name)) return setErrorMessage("Имя должно содержать только буквы и пробелы");
        if (phone.includes("_")) return setErrorMessage("Номер телефона должен быть полностью заполнен");
        if (phone.replace(/\D/g, "").length !== 11) return setErrorMessage("Номер телефона должен содержать только цифры");
        if (!validateTelegram(telegram)) return setErrorMessage("Ник в Телеграме должен начинаться с @");

        setErrorMessage("");

        try {
            await addRecord({
                name,
                telegram,
                phone,
                option: selectedOption,
                date: new Date().toISOString(),
            }).unwrap();

            setName("");
            setTelegram("");
            setPhone("");
            setSelectedOption("500 - один раз");
            setErrorMessage("Данные успешно отправлены!");
        } catch (error) {
            setErrorMessage("Не удалось отправить данные. Попробуйте ещё раз.");
        }
    };

    if (!isOpen) return null; // Если модалка закрыта, ничего не рендерим

    return (
        <ModalOverlay onClick={handleOverlayClick}>
            <StyledClientContactForm ref={modalRef} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h1>
                    <span>welcome</span>
                    <br />
                    в спикинг клаб!
                </h1>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input
                        className="input"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telegram">Ник в телеграме</label>
                    <input
                        className="input"
                        type="text"
                        id="telegram"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон</label>
                    <InputMask
                        className="input"
                        id="phone"
                        mask="+7 (999) 999-99-99"
                        maskPlaceholder=" "
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="selectOption">Я хочу..</label>
                    <select
                        className="input"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="1">500₽ - один раз</option>
                        <option value="2">900₽ - проходка на двоих</option>
                        <option value="3">2200₽ - абонемент на 5 встреч</option>
                        <option value="4">5000₽ - личный спикинг клаб</option>
                    </select>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Отправка..." : "Отправить"}
                </button>
            </StyledClientContactForm>
        </ModalOverlay>
    );
};

export default ClientContactForm;
