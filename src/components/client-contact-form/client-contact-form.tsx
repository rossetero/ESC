import React, { useRef } from "react"
import axios from "axios"
import { useForm, Controller } from "react-hook-form"
import { 
  StyledClientContactForm, 
  ModalOverlay,
  StyledButton, 
} from "./client-contact-form.styled"
import InputMask from "react-input-mask"
import { useAddRecordMutation } from "../../api" // Импортируем RTK Query

interface ClientContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  telegram: string;
  phone: string;
  selectedOption: string;
}

export const ClientContactForm: React.FC<ClientContactFormProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLFormElement>(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      telegram: "",
      phone: "",
      selectedOption: "1",
    },
  })

  const [addRecord, { isLoading }] = useAddRecordMutation() // Используем RTK Query
  const [successMessage, setSuccessMessage] = React.useState("")

  // Получаем текущее количество отправок из localStorage
  const getSubmissionCount = () => {
    const count = localStorage.getItem("submissionCount")
    return count ? parseInt(count, 10) : 0
  }

  // Увеличиваем количество отправок
  const incrementSubmissionCount = () => {
    const count = getSubmissionCount() + 1
    localStorage.setItem("submissionCount", count.toString())
    return count
  }

  // Закрываем модалку только если клик был на затемненную область (но НЕ на форму)
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  const BOT_TOKEN = "6614524564:AAE27PNrRDhzXmJeyZnE0xi7l8lk3jcqStI"
  const CHAT_ID = "969675758"
  const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

  const onSubmit = async (data: FormData) => {
    // Проверяем, не превышено ли ограничение на отправки
    if (getSubmissionCount() >= 3) {
      alert("Вы превысили лимит отправок формы. Пожалуйста, попробуйте позже.")
      return
    }

    const message = `
🚀 Новая заявка из Speaking Club:
👤 Имя: ${data.name}
💬 Telegram: ${data.telegram}
📞 Телефон: ${data.phone}
📦 Выбранный вариант: ${data.selectedOption}
  `

    try {
      await axios.post(TELEGRAM_API, {chat_id: CHAT_ID, text: message})
      incrementSubmissionCount()
      reset()
      setSuccessMessage("Данные успешно отправлены!")
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error)
      alert("Не удалось отправить данные. Попробуйте ещё раз.")
    }
  }

  if (!isOpen) return null // Если модалка закрыта, ничего не рендерим

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <StyledClientContactForm
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}>
      
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h1>
          <span>welcome</span> в спикинг клаб! <br/>
        </h1>
        <div className="input-wrapper">
          <label htmlFor="name"><br/>Имя</label>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Имя обязательно",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: "Имя должно содержать только буквы и пробелы",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                className="input"
                type="text"
                id="name"
              />
            )}
          />
          {errors.name && <div className="error-message">{errors.name.message}</div>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="telegram">Ник в телеграме</label>
          <Controller
            name="telegram"
            control={control}
            rules={{
              required: "Ник в Телеграме обязателен",
              validate: (value) =>
                value.startsWith("@") || "Ник должен начинаться с @",
            }}
            render={({ field }) => (
              <input
                {...field}
                className="input"
                type="text"
                id="telegram"
              />
            )}
          />
          {errors.telegram && <div className="error-message">{errors.telegram.message}</div>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Телефон</label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Телефон обязателен",
              validate: (value) =>
                !value.includes("_") && value.replace(/\D/g, "").length === 11,
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                className="input"
                id="phone"
                mask="+7 (999) 999-99-99"
                maskPlaceholder=" "
                placeholder="+7 (___) ___-__-__"
              />
            )}
          />
          {errors.phone && <div className="error-message">{errors.phone.message}</div>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="selectOption">Я хочу..</label>
          <Controller
            name="selectedOption"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="input"
                id="selectOption"
              >
                <option value="1">500₽ - один раз</option>
                <option value="2">900₽ - проходка на двоих</option>
                <option value="3">2200₽ - абонемент на 5 встреч</option>
                <option value="4">5000₽ - личный спикинг клаб</option>
              </select>
            )}
          />
        </div>
        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="button-wrapper">
          <StyledButton type="submit" disabled={isLoading || getSubmissionCount() >= 3}>
            {isLoading ? "Отправка..." : "Отправить"}
          </StyledButton>
        </div>
        {getSubmissionCount() >= 3 && (
          <div className="error-message">Вы превысили лимит отправок формы.</div>
        )}
      </StyledClientContactForm>
    </ModalOverlay>
  )
}

export default ClientContactForm