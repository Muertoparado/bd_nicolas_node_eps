import { IsString, IsEmpty, IsDefined} from 'class-validator';
import { Expose, Type, Transform } from 'class-transformer';

export class CreateGeneroDto{
    @Expose({name:'gen_id'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        gen_id:number;
    
    @Expose({name:'gen_nombre'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        gen_nombre:string;

    @Expose({name:'gen_abreviatura'})
    @IsEmpty({message: ()=>{throw{status:401, message:`el mensaje es obligatorio`}}})
    @Transform(({value}) => {if(/^[a-z A-Z]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        gen_abreviatura:string;

    constructor(gen_id:number,gen_nombre:string,gen_abreviatura:string){
        this.gen_id=gen_id;
        this.gen_nombre=gen_nombre;
        this.gen_abreviatura=gen_abreviatura;
}
}