import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {CreateAcudienteDto} from '../controller/acudiente.js';

const validacionacudiente = express();
validacionacudiente.use(async (req,res,next)=>{
    try {
        let data = plainToClass(CreateAcudienteDto, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacionacudiente;