# Entregable: Nginx & PM2
## Alumno: Juan Manuel Rodriguez Van Oyen

Desafío: Servidores - Nginx & PM2

Para probar la aplicación crear el archivo .env en base al .env_example

Configurar opcionalmente un puerto: 

```
app.js --port=8080
```

Configuración de ejemplo servidor Nginx: Ver config. (https://github.com/vanoyen-teco/nginx/nginx_example/nginx.conf)

Comandos para ejecución de pruebas: 

```
node app.js --port PORT_NUMBER --mode fork
node app.js --port PORT_NUMBER --mode cluster

pm2 start app.js --name="SERVER_NAME" --watch -- PORT_NUMBER

pm2 start app.js --name="SERVER_NAME" --watch -i max -- PORT_NUMBER
```