# PersonalSite

<br>

### Содержание

### • [Начало работы](#начало-работы-с-create-react-app)

### • [Настройка файлов](#настройка-файлов-конфигурации-и-кода)

<br><br><br>

# Начало работы с Create React App

Этот проект был создан с помощью [Create React App](https://github.com/facebook/create-react-app).

## Доступные скрипты

В директории проекта вы можете выполнить следующие команды:

### `npm start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

Страница будет перезагружаться при внесении изменений.\
Вы также можете увидеть ошибки линтинга в консоли.

### `npm test`

Запускает тестовый раннер в интерактивном режиме наблюдения.\
См. раздел о [запуске тестов](https://facebook.github.io/create-react-app/docs/running-tests) для получения дополнительной информации.

### `npm run build`

Собирает приложение для продакшена в папку `build`.\
Оно правильно объединяет React в режиме продакшена и оптимизирует сборку для достижения наилучшей производительности.

Сборка минифицируется, и в имена файлов включаются хеши.\
Ваше приложение готово к развёртыванию!

См. раздел о [развёртывании](https://facebook.github.io/create-react-app/docs/deployment) для получения дополнительной информации.

### `npm run eject`

**Примечание: это односторонняя операция. После выполнения `eject` вы не сможете вернуться обратно!**

Если вам не устраивает инструмент сборки и выбранные настройки, вы можете выполнить `eject` в любой момент. Эта команда удалит зависимость от одной сборки из вашего проекта.

Вместо этого она скопирует все файлы конфигурации и транзитивные зависимости (webpack, Babel, ESLint и т. д.) прямо в ваш проект, так что вы сможете полностью контролировать их. Все команды, кроме `eject`, всё равно будут работать, но они будут ссылаться на скопированные скрипты, так что вы сможете их настраивать. На этом этапе вы остаётесь сам на сам с проектом.

Вам не обязательно использовать `eject`. Состав функций, которые предоставляются по умолчанию, подходит для небольших и средних развёртываний, и вы не должны чувствовать себя обязанными использовать эту функцию. Тем не менее, мы понимаем, что этот инструмент не будет полезен, если вы не сможете настроить его, когда будете готовы к этому.

### `npm run deploy`

**Сборка и развёртывание на GitHub Pages**

Этот скрипт предназначен для сборки вашего приложения и автоматической загрузки его в ветку `gh-pages` вашего репозитория на GitHub. Следуйте этой команде для быстрого развёртывания вашего сайта.

## Узнать больше

Вы можете узнать больше в [документации по Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

Чтобы узнать React, ознакомьтесь с [документацией React](https://reactjs.org/)

### Разделение кода

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Анализ размера пакета

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Создание прогрессивного веб-приложения

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Расширенная конфигурация

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Развёртывание

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Ошибка минификации при `npm run build`

Этот раздел переехал сюда: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<br><br><br>

# Настройка файлов конфигурации и кода

### `.htaccess`

Если вы предназначаете ваше приложение для размещения на страницах GitHub, а не на обычном хостинге, обязательно настройте файл `.htaccess` в корне проекта добавив следующие правила:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} !^443$
RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R,L]
```

Эти правила перенаправляют запросы на безопасное соединение (HTTPS), что важно для безопасности вашего сайта.

### `/src/App.tsx`

Перед запуском сборки приложения выберете необходимый вараинт сборки для вас:

**GitHub-pages**

```
import { HashRouter as Router, Route, Routes } from "react-router-dom";
```

**Hosting service**

```
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
```

### `/public/404.html`

Этот файл следует использовать только в том случае, если вы разворачиваете ваш сайт на GitHub Pages.
