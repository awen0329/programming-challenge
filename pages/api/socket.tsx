import { Server } from 'socket.io'

import {
  SOCKET_BROADCAST_ADD_COMMENT_EVENT,
  SOCKET_INITIALIZING,
  SOCKET_LISTEN_TO_COMMENT,
  SOCKET_RUNNING,
} from '@constants'

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log(SOCKET_RUNNING)
  } else {
    console.log(SOCKET_INITIALIZING)

    const io = new Server(res.socket.server)

    res.socket.server.io = io

    io.on('connection', (socket) => {
      socket.on(SOCKET_LISTEN_TO_COMMENT, (msg) => {
        socket.broadcast.emit(SOCKET_BROADCAST_ADD_COMMENT_EVENT, msg)
      })
    })
  }

  res.end()
}

export default SocketHandler
