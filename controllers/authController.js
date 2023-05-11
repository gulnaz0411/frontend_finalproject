const User = requires('./models/user');
const jwt = requires('jsonwebtoken');

// Функция для генерации токена

function generateToken(user) {
    const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {exiresIn: '7d'});
    return token;
}

// обработчик на авторизацию
async function signIn(req, res) {
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email}).select('+password');
        if (!user || ! (await user.coorectPassword(password,user.password))) {
            return res.status(401).json({message: 'Неправильный email или пароль'});
        }


        const token = generateToken(user);
        res.status(200).json({token});
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Ошибка при авторизации'});
    }
}

//Обработчик запроса на проверку действительности токена

async function checkToken(req, res) {
    try {
        const token = req.headers.authorization.replace('Bearer', '');
        if (!token) {
            return res.status(401).json({message:'Необходима авторизация'});
        }


//Проверка токена
 const decoded = jwt.verify(token, process.env.JWT_SECRET);
 const user = await User.findById(decoded.id);
 if (!user) {
    return res.status(401).json({message: 'Пользователь не найден'});
 }  
 
 res.status(200).json({message: 'Токен действителен'});
    } catch (err) {
        console.error(err);
        res.status(401).json({message: 'Токен недействителен'});
    }
}







// здесь метод регистрации нового пользователя
async function signUp (req, res) {
    try {
        const { email,password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'Пользователь с таким email уже существует'});
        }
        const user = new User({email, password});
        await user.save();
        res.status(201).json({message: 'Пользователь успешно зарегистрирован', user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Ошибка сервера'});
    }
}
   



module.export = { signIn, signUp,checkToken};
  