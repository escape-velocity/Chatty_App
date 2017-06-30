                -Chatty App-

A client-side SPA (single-page app) built with ReactJS

It contains a chat log displaying messages and notifications (like Slack)
and also an input field to change your name and an input field to send a message.

The client-side app communicates with a server via WebSockets for multi-user real-time updates.

No persistent database is involved; the focus is on the client-side experience

Stack:
ReactJS
Webpack with Babel
JSX
ES6 
Webpack dev server
WebSockets using Node package ws on the server-side 
Native WebSockets on client side
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.


```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
