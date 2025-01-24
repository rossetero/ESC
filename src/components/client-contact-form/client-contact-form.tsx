import React, { useState, useRef, useEffect } from "react";
import { StyledClientContactForm } from "./client-contact-form.styled";
import InputMask from "react-input-mask";

interface ClientContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ClientContactForm: React.FC<ClientContactFormProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLFormElement>(null);

    const [submittedData, setSubmittedData] = useState<{
        name: string;
        telegram: string;
        phone: string;
        selectedOption: string;
    } | null>(null);

    const [name, setName] = useState("");
    const [telegram, setTelegram] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedOption, setSelectedOption] = useState("1");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateTelegram = (telegram: string) => {
        return telegram.startsWith("@");
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (event.button === 0 && modalRef.current && !modalRef.current.contains(event.target as Node)) {
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

    const handleFormClick = (event: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        event.stopPropagation();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Проверка имени (только буквы, минимум одна)
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (!nameRegex.test(name)) {
            setErrorMessage("Имя должно содержать только буквы и пробелы");
            return;
        }

        // Проверка телефона (полностью заполненный номер)
        if (phone.includes("_")) {
            setErrorMessage("Номер телефона должен быть полностью заполнен");
            return;
        }

        // Проверка, что номер телефона содержит только цифры (после маски)
        const phoneDigits = phone.replace(/\D/g, ""); // Удаляем все нецифровые символы
        if (phoneDigits.length !== 11) {
            setErrorMessage("Номер телефона должен содержать только цифры");
            return;
        }

        // Проверка Telegram (должен начинаться с @)
        if (!validateTelegram(telegram)) {
            setErrorMessage("Ник в Телеграме должен начинаться с @");
            return;
        }

        // Убираем сообщение об ошибке, если все проверки прошли
        setErrorMessage("");

        const newData = { name, telegram, phone, selectedOption, date: new Date().toISOString() };

        // Проверка на дублирование отправленных данных
        if (submittedData && JSON.stringify(submittedData) === JSON.stringify(newData)) {
            setErrorMessage("Вы уже отправляли эти данные");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("https://escbackend.onrender.com/api/v1/records/addRecord", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    telegram,
                    phone,
                    option: selectedOption,
                    date: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.message || "Ошибка при отправке данных на сервер");
            }

            const result = await response.json();
            console.log("Ответ сервера:", result);

            setSubmittedData(newData);
            // Очистка формы и сообщение об успешной отправке
            setName("");
            setTelegram("");
            setPhone("");
            setSelectedOption("1");
            setErrorMessage("Данные успешно отправлены!");
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            setErrorMessage("Не удалось отправить данные. Попробуйте ещё раз.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <StyledClientContactForm ref={modalRef} onSubmit={handleSubmit} onClick={handleFormClick}>
            <span className="close" onClick={onClose}>
                &times;
            </span>
            <h1>
                <span>welcome</span>
                <br />
                в спикинг клаб!
            </h1>
            <div>
                <label htmlFor="name">Имя (а как к вам обращаться?)</label>
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
                <label htmlFor="telegram">Ник в телеграме (а как вам написать?)</label>
                <input
                    className="input"
                    type="text"
                    id="telegram"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Телефон (а если не свяжемся в тг?)</label>
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
                <label htmlFor="selectOption">Я хочу.. (выбери одну из опций)</label>
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
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить"}
            </button>
        </StyledClientContactForm>
    );
};

export default ClientContactForm;
