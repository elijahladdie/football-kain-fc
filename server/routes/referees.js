import express from 'express';
import { allReferee, refereeCreate, updateReferee, deleteReferee, getReferee } from '../controller/referees.controller';
import { isAdmin } from '../middleware/checkAuth';
const refereeRoute = express.Router();

refereeRoute.post('/create',refereeCreate);
refereeRoute.put('/update/:id',updateReferee);
refereeRoute.get('/all',allReferee)
refereeRoute.get('/view/:id',getReferee);
refereeRoute.delete('/delete/:id',deleteReferee);
refereeRoute.get('/',(req,res)=>{
return res.send({
    message:"referee Route Works"})
});


export {refereeRoute};