//import { IsString, IsNumber} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateTipoDocDto {
    @Expose({name:'tipdoc_id'})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        tipdoc_id:number;

    @Expose({name:'tipdoc_nombre'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tipdoc_nombre: String;

    @Expose({name:'tipdoc_abreviatura'})
    @Transform(({value})=>{if(/^[a-z A-Z].$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tipdoc_abreviatura: String;

    
    constructor(tipdoc_id:number,tipdoc_nombre:string,tipdoc_abreviatura:string){
        this.tipdoc_id=tipdoc_id;
        this.tipdoc_nombre=tipdoc_nombre;
        this.tipdoc_abreviatura=tipdoc_abreviatura;
    }
}