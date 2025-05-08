let io;
const { Server } = require('socket.io');


module.exports = {
    init: httpServer => {
        io = new Server(httpServer, {
            cors: {
                origin: '*', // or use 'http://localhost:3000' if you want to restrict
                methods: ['GET', 'POST'],
                allowedHeaders: ['Content-Type', 'Authorization'],
                credentials: true
            }
        });
        return io;
    },

    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized');
        }
        return io;
    }
}