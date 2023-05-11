const Case = requires('../models/case');
const Officer = requires('../models/officer')

// создание нового сообщения
const createCase = async (req, res) => {
    const {
        licenseNumber,
        type,
        ownerFullName,
        clientId,
        color,
        date,
        description,
        resolution,
        responsbleOfficerId,

    } = req.body;
    try {
        const officer = await Officer.findById(responsbleOfficerId);
        if (!officer) {
            return res.status(400).json({message: "ID сотрудника не валиден"});

        }

        const newCase = new Case ({
            licenseNumber,
            type,
            ownerFullName,
            clientId,
            color,
            date,
            description,
            resolution,
            responsbleOfficerId
        });
        await newCase.save();
        res.status(200).json(newCase);
    } catch (error) {
        res.status(500).json({message: 'Ошибка сервера'});
    }
};
    
// редактирование сообщения 
const updateCase = async (req, res) => {
    try {
        const updatedCase = await Case.findByIdAndUpdate (
            reg.params.id,
            req.body,
            {new: true}
        );
        if (!updatedCase) {
            return res.status(400).json({ message: 'Случай не найден'});
        }
        res.status(200).json(updatedCase);

    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Ошибка сервера"});
    }

};

// удалениe  сообщения 

const deleteCase = async (req, res) => {
    try  {
        const deletedCase = await Case.findByIdAndDelete (req.params.id);
        if (!deletedCase) {
            return res.status(404).json({ message: 'Случай не найден'});

        }
         res.status(200).json({ message: 'случай удален'});

    } catch (error) {
        console (error);
        res.status(500).json({message: "Ошибка сервера"});
}
};
// получаем все сообщения 
const getAllCases = async ( req, res) => {
    try {
        const cases = await Case.find(req);
        res.status(200).json(cases);
    } catch (error) {
        console.error(error); 
        res.status(500).json({message: "Ошибка  сервера"});

    }

};


// получаем сообщения по по конкретному сообщению id

const getCaseById = async (req, res) => {
    try {
        const foundCase = await Case.findById(req.params.id);
        if(!foundCase) {
            return res.status(404).json({message: 'случай не найден'});
        }
        res.status(200).json(foundCase);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: " Ошибка сервера"});
    }
};

module.export = {createCase,editCase,deleteCase,getAllCases,getCaseById};