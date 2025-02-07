import React, { useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { StyledClientContactForm, ModalOverlay } from "./client-contact-form.styled"
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

  const onSubmit = async (data: FormData) => {
    // Проверяем, не превышено ли ограничение на отправки
    if (getSubmissionCount() >= 3) {
      alert("Вы превысили лимит отправок формы. Пожалуйста, попробуйте позже.")
      return
    }

    try {
      await addRecord({
        name: data.name,
        telegram: data.telegram,
        phone: data.phone,
        option: data.selectedOption,
        date: new Date().toISOString(),
      }).unwrap()

      // Увеличиваем счетчик отправок
      incrementSubmissionCount()

      // Очистка формы и показ сообщения об успехе
      reset()
      setSuccessMessage("Данные успешно отправлены!")

      // Убираем сообщение об успехе через 3 секунды
      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    } catch (error) {
      console.error("Ошибка отправки:", error)
      alert("Не удалось отправить данные. Попробуйте ещё раз.")
    }
  }

  if (!isOpen) return null // Если модалка закрыта, ничего не рендерим

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <StyledClientContactForm
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
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
        <div>
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
        <div>
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
        <div>
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
        <button type="submit" disabled={isLoading || getSubmissionCount() >= 3}>
          {isLoading ? "Отправка..." : "Отправить"}
        </button>
        {getSubmissionCount() >= 3 && (
          <div className="error-message">Вы превысили лимит отправок формы.</div>
        )}
      </StyledClientContactForm>
    </ModalOverlay>
  )
}

export default ClientContactForm