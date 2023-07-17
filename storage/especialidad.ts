import { IsString, IsEmpty, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateEspecialidadDto{
    @Expose({name:'esp_id'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio c`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no a  cumple los parametros`};},{toClassOnly: true})
        esp_id:number;
    
    @Expose({name:'esp_nombre'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje f es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        esp_nombre:string;

    constructor(esp_id:number,esp_nombre:string){
        this.esp_id=esp_id;
        this.esp_nombre=esp_nombre;
    }
}