                -Chatty App-

A client-side SPA (single-page app) built with ReactJS

It contains a chat log displaying messages and notifications (like Slack)
and also an input field to change your name and an input field to send a message.

The client-side app communicates with a server via WebSockets for multi-user real-time updates.

No persistent database is involved; the focus is on the client-side experience

``````

Stack:
ReactJS
Webpack with Babel
JSX
ES6 
Webpack dev server
WebSockets using Node package ws on the server-side 
Native WebSockets on client side

```

## ScreenShots

 !["This page shows two connected Chat clients.."](https://github.com/escape-velocity/Chatty_App/blob/master/images/Chatty%20App%20home%20screens.png)


 !["This shows the counter indicating # of connected Chat clients.."](https://github.com/escape-velocity/Chatty_App/blob/master/images/Counter%20showing%20users%20online.png)


```

Install the dependencies and start the server:
npm install --save
npm start
open http://localhost:3000 on several browsers to fully test 

```
### Dependencies
* React
* Webpack
* [babel-loader]  (https://github.com/babel/babel-loader)
* [webpack-dev-server]  (https://github.com/webpack/webpack-dev-server)
