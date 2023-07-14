import { IsString, IsNumber, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateTipoDocDto {
    @Expose({name:'tipodoc_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el a dato no cumple los parametros`};},{toClassOnly: true})
        tipodoc_id:number;

    @Expose({name:'tipodoc_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el v dato no cumple los parametros`};},{toClassOnly:true})
        tipodoc_nombre: String;

    @Expose({name:'tipdoc_abreviatura'})
    @Transform(({value})=>{if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato ac no cumple los parametros`};},{toClassOnly:true})
        tipodoc_abreviatura: String;

    
    constructor(tipodoc_id:number,tipodoc_nombre:string,tipodoc_abreviatura:string){
        this.tipodoc_id=tipodoc_id;
        this.tipodoc_nombre=tipodoc_nombre;
        this.tipodoc_abreviatura=tipodoc_abreviatura;
    }
}