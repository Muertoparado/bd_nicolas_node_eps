import {Router} from 'express';
import validacionTipoDoc  from '../middleware/validacionTipoDoc.js';
import mysql from 'mysql2';

let con= undefined;
const app2 = Router();
app2.use((req, res, next)=>{
    let myConfig=JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig);
    next();
});

app2.post('/tipodoc/add', validacionTipoDoc, (req,res)=>{
    const {tipodoc_id,tipodoc_nombre,tipodoc_abreviatura}=req.body
    const datos={tipodoc_id,tipodoc_nombre,tipodoc_abreviatura};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO tipo_documento SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post tipo documento");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});

export default app2;