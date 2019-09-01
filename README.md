# tdp2-tp0-backend

## Levantar la API de forma local
```sh
$ git clone https://github.com/christiangelone/tdp2-tp0-backend.git
$ cd tdp2-tp0-backend
$ npm install
$ npm start
```
La API se va a levantar en el puerto 3333 (http://localhost:3333/)

## Deploy en Heroku
```sh
$ heroku login
$ git add .
$ git commit -m "your commit message"
$ git push heroku master
```

## Correr pruebas
Hay que usar la herramienta Postman:

1.Importar la coleccion que se encuentra en el archivo:
```
tests_postman/TDP2-TP0.postman_collection.json
```

2.Importar los environments que se encuentran en los archivos:
```
tests_postman/Local.postman_environment.json
tests_postman/ServidorHeroku.postman_environment.json
```
El primero corresponde para hacer pruebas de forma local (la url apunta a http://localhost:3333/) y el segundo para probar el servidor en Heroku.

3.Ir a *Runner* (run collections)

4.Seleccionar la coleccion *"TDP2-TP0"* y el environment que corresponda segun lo que se quiera probar (Local o ServidorHeroku)

6.Hacer click en *"Run TDP2-TP0"*
