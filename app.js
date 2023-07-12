import express from 'express';
import app from './routers/tipo_documento.js';
const appExpress = express();

appExpress.use("/app", app);
const config ={
    hostname:"127.3.3.3",
    port: 5020
}

appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
});