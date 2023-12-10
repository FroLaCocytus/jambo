# Основа на официальном образе Node с нужной версией для сборки React-приложения
FROM node:18.12.1 as build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копирование файлов 'package.json' и 'package-lock.json'
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копирование исходного кода React-приложения в контейнер
COPY . .

 # Укажите аргумент, который вы будете использовать с переменной среды
ARG REACT_APP_API_URL

# Используйте этот аргумент для установки переменной среды, которая будет использоваться во время сборки
ENV REACT_APP_API_URL $REACT_APP_API_URL

# Сборка приложения для продакшена
RUN npm run build

# Установка Nginx для раздачи собранного React-приложения
FROM nginx:stable-alpine as production

# Копируем собранные файлы в папку nginx для статических файлов
COPY --from=build /app/build /usr/share/nginx/html

# Создаем и копируем файл конфигурации Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Открытие порта 3000 для HTTP соединений
EXPOSE 3000

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
