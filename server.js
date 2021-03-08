const express = require('express')

const app = express()
const server = require('http').Server(app)
// const io = require('socket.io')(server)
const io = require('socket.io')(server, {
      cors: {
          origin: '*',
          methods: ["GET", "POST"],
          credentials: true,
          transports: ['websocket']
      }
})

// const rooms = {
//       'rooms': [],
//       'messages': ['hello']
// }
const rooms = new Map()


app.get('/rooms', (req, res) => {
      res.json(rooms)
})

io.on('connection', socket => {
      console.log('user connected', socket.id)
})

server.listen(5000, (err) => {
      if (err) {
            throw Error(err)
      }
      console.log('server start')
})