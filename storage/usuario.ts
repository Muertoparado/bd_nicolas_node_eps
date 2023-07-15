import { IsString, IsEmpty, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateUserDto{
    @Expose({name:'usu_id'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        usu_id:number;
    
    @Expose({name:'usu_nombre'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        usu_nombre:string;

    @Expose({name:'usu_segdo_nombre'})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        usu_segdo_nombre:string;

    @Expose({name:'usu_telefono'})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        usu_telefono:string;
    
        @Expose({name:'usu_direccion'})
    @Transform(({value}) => {if(/^[a-z A-Z 0-9 #]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        usu_direccion:string;

        @Expose({name:'usu_email'})
    @Transform(({value}) => {if(/^[@.]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        usu_email:string;

    constructor(usu_id:number,usu_nombre:string,usu_segdo_nombre:string,usu_telefono:string,usu_direccion:string,usu_email:string){
        this.usu_id=usu_id;
        this.usu_nombre=usu_nombre;
        this.usu_segdo_nombre=usu_segdo_nombre;
        this.usu_telefono=usu_telefono;
        this.usu_direccion=usu_direccion;
        this.usu_email=usu_email;
}
}