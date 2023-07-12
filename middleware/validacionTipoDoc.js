import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {CreateTipoDocDto} from '../controller/tipo_documento.js'

const validacionTipoDoc = express();
validacionTipoDoc.use((req,res,next)=>{
    try {
        let data = plainToClass(CreateTipoDocDto, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
        
    }
})

export default validacionTipoDoc;