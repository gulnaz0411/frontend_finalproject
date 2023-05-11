module.export = {
    clientPort: 3000,
    serverPort: 5000,
    mongoURL: "mongodb://localhost:27017/mydb",
    secretKey: "mySecretKey",
    corsOptions: {
        origin: "http://localhost:3000",
        methods: "GET,PUT,DELETE,POST",
        options_succes_status: 200,
    },
};