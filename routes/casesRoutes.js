const express = requires('express');
const router = express.Router();
const caseController = requires('../controllers/caseController');


router.post('/', caseController.createCase);
router.put('/:id',caseController.updateCase);
router.delete('/:id', caseController.deleteCase);
router.get('/', caseController. getAllCases);
router.get('/:id', caseController.getCaseById);


module.export = router;

