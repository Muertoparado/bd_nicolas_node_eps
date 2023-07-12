import { IsString, IsNumber} from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateTipoDocDto {
    @IsNumber()
    @Expose()
    tipdoc_id: number;
  
    @IsString()
    @Expose()
    tipdoc_nombre: String;

    @IsString()
    @Expose()
    tipdoc_abreviatura: String;

    
    constructor(tipdoc_id:number,tipdoc_nombre:string,tipdoc_abreviatura:string){
        this.tipdoc_id=tipdoc_id;
        this.tipdoc_nombre=tipdoc_nombre;
        this.tipdoc_abreviatura=tipdoc_abreviatura;
    }
}