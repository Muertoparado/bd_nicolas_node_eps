import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {CreateEspecialidadDto} from '../controller/especialidad.js';
import { validate } from 'class-validator';

const validacionespecialidad = express();
/* validacion.use(async (req,res,next)=>{
    try {
        let data = plainToClass(CreateEspecialidadDto, req.body, {excludeExtraneousValues: true});
        console.log(data);
        req.body = JSON.parse((data));
        await validate(data);
        next();
    } catch (error) {
        res.status(error.status).send(error);
        res.send();
    }
}) */
validacionespecialidad.use(async (req, res, next) => {
    try {
        let data = plainToClass(CreateEspecialidadDto, req.body, {excludeExtraneousValues: true});
        console.log(data);
        req.body = data;
        const errors = await validate(data);
        if (errors.length > 0) {
            // Return a 400 bad request with the validation errors.
            return res.status(400).json(errors);
        }
        next();
    } catch (error) {
        // Handle unexpected errors.
        return res.status(500).json(error);
    }
});

export default validacionespecialidad;