let io;
const { Server } = require('socket.io');


module.exports = {
    init: httpServer => {
        io = new Server(httpServer, {
            cors: {
                origin: ['http://localhost:3000', 'https://njslab23-fe.onrender.com'],
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