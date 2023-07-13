import {Router} from 'express';
import validacionTipoDoc  from '../middleware/validacionTipoDoc.js';
import mysql from 'mysql2';

let con= undefined;
const app = Router();


app.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app.get('/pacientes', validacionTipoDoc, (req,res)=>{
    con.query(/*sql */ `SELECT * FROM  usuario 
    ORDER BY usu_nombre`, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("GET PACIENTES");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});

app.get('/citas', validacionTipoDoc, (req,res)=>{
    con.query(/*sql */ `SELECT * FROM  cita 
    ORDER BY cit_codigo `, (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("GET citas");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});

export default app;