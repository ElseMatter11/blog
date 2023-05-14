# API для блога
Добрый день, команда WelbeX! Меня зовут Олег, и я выполнил тестовое задание (отталкиваясь от своих возможностей).

## Реализованно
1. Регистрация и авторизация пользователя по jwt + его проверка при добавлении записей на страницу
2. Пангинация на странице с записями
3. Возможность редактировать и удалять записи
4. Написана базовая документация

## API Documentstion

### Create a new blog post:

URL: /api/post
Method: POST
Request body:
text (string): Content of the blog post
author (string): Author of the blog post
picture (optional) : Picture for post
Response:
Status code: 201 (Created)
Body: JSON object representing the created blog post

### Get all blog posts with pagination:

URL: /api/post
Method: GET
Query parameters:
page : Page number for pagination
Response:
Status code: 200 (OK)
Body: JSON object containing an array of blog posts and total number of pages

### Get a specific blog post:

URL: /api/post/:id
Method: GET
Path parameter:
id (string): ID of the blog post
Response:
Status code: 200 (OK)
Body: JSON object representing the blog post

### Update a blog post:

URL: /api/post/:id
Method: PATCH
Path parameter:
id (string): ID of the blog post
Request body:
title (string): Updated title of the blog post
body (string): Updated content of the blog post
author (string): Updated author of the blog post
Response:
Status code: 200 (OK)
Body: JSON object representing the updated blog post

### Delete a blog post:

URL: /api/blog-posts/:id
Method: DELETE
Path parameter:
id (string): ID of the blog post
Response:
Status code: 200 (OK)
Body: JSON object with a message indicating the success of deletion

### Create a new user:

URL: /api/auth/registration
Method: POST
Request body:
email (string): Email adress
password (string): Password for your account,min length 5
name (string) : Your login
Response:
Status code: 201 (Created)
Body: JSON object representing the created blog post

### Authorization :

URL: /api/auth/login
Method: POST
Request body:
email (string): Email adress
password (string): Password of your account,min length 5
Response:
Status code: 200 (ok)
Body: JSON object representing the created blog post

# More about me

Как я сказал выше, меня зовут Олег. Учусь в МИЭТе на 2 курсе. Прграммированием увлекаюсь 5 лет, освоение web-разработки начал где-то год назад. Стартовал с курсов html-academy, затем перешел на самостоятельное изучение React,Node js, чем занимаюсь и по сей день. Но это все не так интересно, ведь многое познается на практике. Так что оставим нудную часть моего рассказа.

Гораздо интереснее то, чем я увлекаюсь помимо создания кода. Моей главной страстью является музыка. Есть в ней схожесть с программированием: бездонный простор для творчества, однако подчиняющийся своим правилам. Я играю в различных колективах с 16 лет, участвовал в порядка 20 концертах. Кроме музыки люблю спорт, особенно баскетбол. Когда-то даже выигрывал турниры в составе школьной команды. Ну, и куда же без игроцкой части? Правильно, никуда! Я, как и все, играю в компьютерные игры, отдавая предпочтение стратегиям и автобатлерам: 'Herose of Might and Magic 3' и 'Team Fight Tactics' соответственно.
