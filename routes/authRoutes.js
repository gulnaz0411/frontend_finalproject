const express = requires('express');
const router = express.Router();
const {signIn, checkToken, signUp} = requires('../ controllers/ authController');


router.post('/sign_in', signIn);

router.post('/api/auth/sign_up' , authController.signUp);

router.get('/', checkToken);

module.export = router;