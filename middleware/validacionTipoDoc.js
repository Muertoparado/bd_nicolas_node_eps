import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {tipodocumento} from '../routers/tipo_documento.ts'

const validacionTipoDoc = express();
validacionTipoDoc.use((req,res,next)=>{
    try {
        let data = plainToClass(tipodocumento, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
        
    }
})

export default validacionTipoDoc;