import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {CreateUsuarioDto} from '../controller/genero.js';

const validacion = express();
validacion.use(async (req,res,next)=>{
    try {
        let data = plainToClass(CreateUsuarioDto, req.body, {excludeExtraneousValues: true});
        req.body = JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default validacion;