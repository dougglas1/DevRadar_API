const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://douglas:douglas123@cluster0-mdv2w.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
//app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json()); // Utilizar JSON
app.use(routes);

server.listen(3333);