import express from 'express';
import { adversaryCreate,deleteAdversary,allAdversary,getAdversary,updateAdversary } from '../controller/adversery.controller';
import { isAdmin } from '../middleware/checkAuth';
const adversaryRoute = express.Router();

adversaryRoute.post('/create',adversaryCreate);
adversaryRoute.put('/update/:id',updateAdversary);
adversaryRoute.get('/all',allAdversary)
adversaryRoute.get('/view/:id',getAdversary);
adversaryRoute.delete('/delete/:id',deleteAdversary);
adversaryRoute.get('/',(req,res)=>{
return res.send({
    message:"Adversary Route Works"})
});


export {adversaryRoute};