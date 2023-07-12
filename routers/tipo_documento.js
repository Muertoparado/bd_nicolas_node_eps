import {Router} from 'express';
import { CreatetipodocDto } from '../storage/tipo_documento.ts';
import { validationMiddleware } from '../middleware/validacionTipoDoc.js';
import mysql from 'mysql2';
let con= undefined;
const app = Router();


app.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app.get('/', validationMiddleware(CreatetipodocDto), (req,res)=>{
    console.log("GET POST");
    res.send(JSON.stringify(req.body));
});

export default app;