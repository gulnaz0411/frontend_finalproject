const Officer = requires('../models/officer');

// получаем список всех сотрудников

const getAllOfficers = async ( req, res) => {
    try {
        const officers = await Officer.find(req.body);
        res.status(200).json(officers);
    } catch (err) {
        console.error(err);
            res.status(500).json({message: 'Ошибка сервера'});
        }
    };


 //добавление нового сотрудника
 const createOfficer = async (req, res) => {
    try {
        const officer = new Officer(req.body);
        await officer.save();
        res.status(200).json(officer);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка сервера'});
    }
 };

// информация по конкретному сотруднику

const getOfficerById = async (req, res) => {
    try {
        const officer = await Officer.findById(req.params.id);
        if (!officer) {
            return res.status(404).json({message: 'Сотрудник не найден'});
        }
        res.status(200).json(officer);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Ошибка сервера'});
    }
};

 //редактирование сотрудника по ID
const updateOfficerById = async (req, res) => {
    try {
        const officer = await Officer.findById(req.params.id);
        if (!officer) {
            return res.status(404).json({message: 'Сотрудник не найден'});
        }
        const allowedUpdates = ['name', 'approved'];
        const updates = Object.keys(req.body);
        const isValidUpdate = updates.every(update => allowedUpdates.includes(update));
        if (!isValidUpdate) {
            return res.status(400).json({message: 'Обновления не действительны'});
        }
        updates.forEach(update => officer[update] = req.body[update]);
        await officer.save();
        res.status(200).json(officer);
    }   catch (err) {
        console.error(err);
        res.status(500).json({message: 'Ошибка сервера'});
    }
};



//удаление сотрудника
const deleteOfficerById = async (req, res) => {
    try {
        const officer = await officer.findByIdAndDelete(req.params.id);
        if(!officer) {
            return res.status(404).json({message: 'Сотрудник не найден'});
           
        }
        res.status(200).json({message: 'Сотрудник удален'});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Ошибка сервера'});
    }
};

module.export = {getAllOfficers,createOfficer,getOfficerById ,updateOfficerById,deleteOfficerById };