# Изучить материал
+ https://codeguida.com/post/601 
+ https://expressjs.com/ru/starter/basic-routing.html (можно почитать о обработчиках маршрутов на nodejs кому интерестно)
+ https://itchief.ru/lessons/javascript/ajax-asynchronous-requests-in-the-examples (в этой статье php-скрипт воспринемайте как nodejs - скрипт)

Практика:
* Создать форму с полями login, password и кнопку sign in. По нажатию на кнопку введенные данные с формы отправляются на сервер. 
* Сервер должен проверить в файле users.json существует ли такой юзер с отправленными данными(login, password).
Пример массива из файла users: 
`[{"login":"admin", "password": "admin", "id": 1}]`
* Сервер должен отправить на client id пользователя, и в запрос указать status 200. Если такого пользователя не существует то 'Not found' и status 401.