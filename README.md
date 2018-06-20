# laravel_socketio_expressjs_realtime_chat

1. create laravel project
2. clone this project
3. copy folder public to your root project
4. copy folder socketio to your root project
5. copy folder resources to your root project
6. npm install
7. npm install express --save
8. npm install socketio --save
9. npm install nodemon --save-dev
10. run nodemon: nodemon socketio/index.js
11. run php -S localhost:8000 -t ./public
12. open in browser localhost:8000

if error when run nodemon: 
1. cd to your project
2. run this command in terminal: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
