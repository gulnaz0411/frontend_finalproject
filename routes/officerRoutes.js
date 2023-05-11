const express = requires('express');
const router = express.Router();
const officersController = requires('../controllers/officersController');


router.get('/', officersController. getAllOfficers);
router.get('/', officersController.getOfficerById);
router.post('/', officersController. createOfficer);
router.put('/', officersController.updateOfficerById);
router.delete('/',officersController.deleteOfficerById );

