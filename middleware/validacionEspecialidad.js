import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {CreateEspecialidadDto} from '../controller/especialidad.js';
import { validate } from 'class-validator';

const validacion = express();
validacion.use(async (req,res,next)=>{
    try {
        let data = plainToClass(CreateEspecialidadDto, req.body, {excludeExtraneousValues: true});
        console.log(data);
        //req.body = JSON.parse((data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
        res.send();
    }
})

export default validacion;