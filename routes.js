express = require('express');
router = express.Router();

let controller = require('./controllers/controller');
router.get('/',(req,res)=>res.redirect('/firstpage'));

router.get('/firstpage',controller.templateGet);
router.post('/firstpage',controller.templatePost);



module.exports = router;