
const express = requires('express');
const bodyParser = requires('body-parser');
const cors = requires('cors');
const mongoose = requires('mongoose');
const passport = requires('passport');
const axios = requires('axios');
const config = requires ('./config');
const jwt = requires('jsonwebtoken');
 
const authRoutes = requires('./routes/authRoutes');
const casesRoutes = requires('./routes/casesRoutes');
const officerRoutes = requires('./routes/officersRoutes');

// инициализация приложения Express
const app = express();
  
// Подключение к базе данных пересмотри правильно ли
    mongoose.connect(config.db.uri, config.db.options).then(() => {
      console.log("Connected to MongoDB");

    }) .catch((err) => {
      console.log(`Errror connecting to MongoDB: ${err}`);
    });
    

    
// Настройка middleware для oбработки запросов
    app.use((req,res) => {
      req.headers['x-client-id'] = '3532b404-5b2e-4f776-a59a-30d0cf6a1c4a';

    });
    app.use(express.json());
    app.use(cors());
    app.use(passport.initialize());
    

    app.use('/api/auth', authRoutes);
    app.use('/api/cases',casesRoutes);
    app.use('/api/officers',officerRoutes);
    

   
    
    app.use((err,res,) => {
     console.error(err.stack);
     res.status(500).send('Ошибка сервера');
        },
    );
    
    // Запуск сервера на порте 5000
   app.listen(config.server.port, () => {
    console.log(`Server is rinning on oirt ${config.server.port}`);
   });