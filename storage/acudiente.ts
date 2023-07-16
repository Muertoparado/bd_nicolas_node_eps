import { IsString, IsEmpty, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateAcudienteDto{
    @Expose({name:'acu_codigo'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        acu_codigo:number;
    
    @Expose({name:'acu_nombreCompleto'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        acu_nombreCompleto:string;

    @Expose({name:'acu_telefono'})
    @Transform(({value}) => {if(/^[0-9]+$/.test(value)&& typeof value != "number") return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        acu_telefono:string;

    constructor(acu_codigo:number,acu_nombreCompleto:string,acu_telefono:string){
        this.acu_codigo=acu_codigo;
        this.acu_nombreCompleto=acu_nombreCompleto;
        this.acu_telefono=acu_telefono;
    }
}