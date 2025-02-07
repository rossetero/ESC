// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import russian from '../locales/russian.json';
// import slavic from '../locales/slavic.json';

// // Инициализация i18next
// i18n
//   .use(initReactI18next) // Подключение к React
//   .init({
//     resources: {
//       russian: {
//         translation: russian, // Подключение перевода из файла russian.json
//       },
//       slavic: {
//         translation: slavic, // Подключение перевода из файла slavic.json
//       },
//     },
//     lng: 'russian', // Язык по умолчанию
//     fallbackLng: 'russian', // Язык, если текущий не найден
//     keySeparator: false, // Ключи переводов не разделяются точкой
//     interpolation: {
//       escapeValue: false, // Отключаем экранирование HTML
//     },
//   });

// export default i18n;

import axios from 'axios'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const loadPath = () => `${__webpack_public_path__}locales/{{lng}}.json`

export const i18nextAxios = axios.create()

const request = async (opt, url, payload, callback) => {
  let overrides = {}

  const [_, lng] = /([a-z]{2,5}).json$/.exec(url)

  try {
    const resp = await fetch(
      `https://static.bro-js.ru/i18next-overrides/main/${lng}.json`,
    )

    overrides = await resp.json()
  } catch (error) {
    console.log(error)
  }
  const localesResponse = await i18nextAxios(url)

  const override = {
    ...localesResponse.data,
    ...overrides,
  }

  localesResponse.data = override
  callback(null, localesResponse)
}

const initConfig = {
  lng: localStorage.getItem('i18nextlng') || 'ru',
  fallbackLng: 'ru',
  load: 'currentOnly',
  supportedLngs: ['ru', 'en'],
  keySeparator: false,
  backend: {
    loadPath,
    request,
  },
  interpolation: {
    escapeValue: false,
  },
}

export const i18nextInitConfig = (i18next) =>
  i18next.use(HttpApi).use(LanguageDetector).init(initConfig)

export const i18nextReactInitConfig = (i18next) =>
  i18next
    .use(HttpApi)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(initConfig)
