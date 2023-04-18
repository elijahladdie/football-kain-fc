import express from 'express';
import { allMatch, MatchCreate, updateMatch, deleteMatch, getMatch } from '../controller/matches.controller';
import { isAdmin } from '../middleware/checkAuth';
const matchRoute = express.Router();

matchRoute.post('/create',MatchCreate);
matchRoute.put('/update/:id',updateMatch);
matchRoute.get('/all',allMatch)
matchRoute.get('/view/:id',getMatch);
matchRoute.delete('/delete/:id',deleteMatch);
matchRoute.get('/',(req,res)=>{
return res.send({
    message:"Match Route Works"})
});


export {matchRoute};