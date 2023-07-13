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

app.get('/mesp/:especialidad', validacionTipoDoc, (req,res)=>{
    const { especialidad } = req.params;
    console.log(especialidad);
con.query(/*sql */ `SELECT med_nombreCompleto FROM  medico WHERE med_especialidad =? 
`,[especialidad], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET mesp");
res.send(JSON.stringify(data));
console.log(data);
})

    
});



app.get('/citaproxima/:id', validacionTipoDoc, (req,res)=>{
    const { id } = req.params;
con.query(/*sql */ `SELECT cit_fecha FROM  cita WHERE cit_datosUsuario =? 
`,[id], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET citas prox");
res.send(JSON.stringify(data));
console.log(data);
})
});


app.get('/pacientes/med/:med', validacionTipoDoc, (req,res)=>{
    const { med } = req.params;
con.query(/*sql */ `SELECT * FROM  cita WHERE cit_medico =? 
`,[med], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET pacientes cita");
res.send(JSON.stringify(data));
console.log(data);
})  
});

app.get('/pacientes/:id', validacionTipoDoc, (req,res)=>{
    const { id } = req.params;
con.query(/*sql */ `SELECT * FROM  cita WHERE cit_datosUsuario =? 
`,[id], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET pacientes cita");
res.send(JSON.stringify(data));
console.log(data);
})  
});

app.get('/citas/:fecha', validacionTipoDoc, (req,res)=>{
    const { fecha } = req.params;
con.query(/*sql */ `SELECT * FROM  cita WHERE cit_fecha =? 
`,[fecha], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET pacientes cita fecha");
res.send(JSON.stringify(data));
console.log(data);
})  
});

app.get('/med/consultorios', validacionTipoDoc, (req,res)=>{
    const { body } = req.params;
con.query(/*sql */ `SELECT m.med_nombreCompleto, m.med_consultorio  FROM  medico AS m 
`,[body], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }

console.log("GET medicos y consultorios");
res.send(JSON.stringify(data));
console.log(data);
})  
});

app.get('/med/:id/:fecha', validacionTipoDoc, (req,res)=>{
    const { id,fecha } = req.params;
con.query(/*sql */ `SELECT COUNT(*) AS contador_citas FROM  cita  WHERE cit_medico=? AND cit_fecha=?
`,[id,fecha], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }
    const contadorCitas = data[0].contador_citas;
console.log("GET contador citas med fecha");
res.send(JSON.stringify(data));
console.log({contadorCitas});
})  
});

app.get('/consultorios/:id', validacionTipoDoc, (req,res)=>{
    const { id } = req.params;
con.query(/*sql */ `SELECT cita.cit_codigo, cita.cit_fecha, cita.cit_estadoCita, medico.med_consultorio
FROM cita
INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional
WHERE cita.cit_datosUsuario = ?
`,[id], (err,data,fil)=>{
    if (err) {
        console.error("Error al ejecutar la consulta de inserción: ", err);
        res.status(500).send("Error al ejecutar la consulta de inserción");
        return;
    }
   
console.log("GET consultorios id paciente");
res.send(JSON.stringify(data));
console.log(data);
})  
});







export default app;