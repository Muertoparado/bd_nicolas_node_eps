import {Router} from 'express';
import validacionTipoDoc  from '../middleware/validacionTipoDoc.js';
import validacionGenero from '../middleware/validacionGenero.js';
import validacionUsuario from '../middleware/validacionUsuario.js';
import validacionacudiente from '../middleware/validacionAcudiente.js';


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

app2.post('/genero/add', validacionGenero, (req,res)=>{
    const {gen_id,gen_nombre,gen_abreviatura}=req.body
    const datos={gen_id,gen_nombre,gen_abreviatura};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO genero SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post genero");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});

app2.post('/usuario/add', validacionUsuario, (req,res)=>{
    const {usu_id,usu_nombre,usu_segdo_nombre,usu_telefono,usu_direccion,usu_email}=req.body
    const datos={usu_id,usu_nombre,usu_segdo_nombre,usu_telefono,usu_direccion,usu_email};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO usuario SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post usuario");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});

app2.post('/acudiente/add', validacionacudiente, (req,res)=>{
    const {acu_codigo,acu_nombreCompleto,acu_telefono}=req.body
    const datos={acu_codigo,acu_nombreCompleto,acu_telefono};
    console.log(datos);
    con.query(/*sql */ `INSERT INTO acudiente SET ?`,[datos], (err,data,fil)=>{
        if (err) {
            console.error("Error al ejecutar la consulta de inserción: ", err);
            res.status(500).send("Error al ejecutar la consulta de inserción");
            return;
        }

    console.log("post acudiente");
    res.send(JSON.stringify(data));
    console.log(data);
    })
    
});
export default app2;