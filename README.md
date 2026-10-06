# РЯДОМ

Демонстрационный сайт современной городской кофейни. Одностраничный коммерческий концепт с выразительной типографикой, утверждённой фотосерией и интерактивным меню. Работает без сборки и сервера приложений.

**Live Demo:** https://robdiezz.github.io/ryadom-cafe/

## Stack

HTML5 · CSS3 · Vanilla JavaScript. Без сторонних библиотек, внешних шрифтов, API, cookies и localStorage.

## Features

- Responsive layout с отдельной мобильной композицией.
- Interactive menu: пять категорий, мышь, стрелки, Home и End.
- Mobile navigation: aria-expanded, Escape, закрытие после выбора ссылки.
- Editorial gallery с асимметричным ритмом фотографий.
- Accessible interactions: семантическая разметка, skip link, focus-visible, live status, reduced motion.
- Optimized responsive images: WebP, srcset, sizes, размеры изображений, lazy loading ниже первого экрана.

## Project structure

```text
ryadom-cafe/
├── index.html
├── css/style.css
├── js/main.js
├── assets/
│   ├── favicon.svg
│   └── images/       # PNG-исходники и WebP 480/960; hero/interior также 1680
└── README.md
```

## Локальный запуск

Откройте index.html в браузере. Для проверки через HTTP из папки проекта можно запустить `python -m http.server 8000` и открыть `http://localhost:8000`.

## GitHub Pages

Сайт опубликован через GitHub Pages из ветки `main`, `/ (root)`. Все пути относительные, поэтому проект работает в подпапке GitHub Pages без переделки. В `index.html` настроены canonical URL и абсолютный `og:url` для опубликованного адреса.

## Demo notice

Бренд, меню, цены и локация используются исключительно для демонстрационного проекта. Реальная организация, адрес, контакты и карта не подключены. Кнопка карты показывает доступное встроенное сообщение. Отзывы, рейтинги, доставка, покупки и бронирование отсутствуют. Фотографии предоставлены для этого проекта; исходники сохранены рядом с оптимизированными версиями.
