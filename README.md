
# Marketplace



## Project installation: 
Test user: 
Email: nilson@email.com
Password: nilson

### Server installation:  
```bash
  git clone https://github.com/Risel/marketplace-react.git
  npm install
  cd fake-api-jwt-json-server
  npm run auth
```
### Client installation:  
```bash
  git clone https://github.com/Risel/marketplace-react.git
  npm install
  npm start
```
Node v16.14.0


## Tech Stack

**Client:** React, Redux-Toolkit, SCSS, React-hook-form, axiosl, React-router-dom

**Server:** jsonwebtoken, json-server


## Design References

 - [E-commerce project (Dark-UI)](https://www.figma.com/file/fmMQq5i1qEKI9YcmxUFFSJ/E-commerce-Application-by-Fively-%2F-Dark-version-(Copy)?node-id=28%3A9)
 - [Макет, на котором мне понравилось расположение блоков](https://www.figma.com/file/ZRT1lTxs8KQtlbvl33dMRb/alivio-landing-page-for-figma?node-id=0%3A1)



## Список реализованных функций

- Из-за проблем с CORS в Апи, указанной в задании, был сконфигурирован сервер, способный регистрировать пользователей, выдавать токены, получать информацию о продуктах для авторизованных пользователей
- Сделанный роутинг, учитывающий авторизацию пользователей
- Загрузка продуктов с АПИ 
- Регистрация и авторизация
- Плавные анимации

## Что хотелось бы реализовать

- Адаптивный дизайн
- Отдельные страницы для каждого товара 
- Настроить рефреш токены
- Возможность добавлять и изменять товары
- Переписать запросы на сервер через SWR(но с таким маленьким сервером смысла в этом мало)
- Сделать красивую главную страницу
## Summary

Получился ресурс, который можно доработать до более полноценного проекта, намеренно изменил пункт с логином, потому что подумал, что если делать свой сервер, то логика регистрации не будет лишней. 
