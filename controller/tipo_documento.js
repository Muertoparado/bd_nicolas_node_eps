var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { IsString, IsNumber} from 'class-validator';
import { Expose, Transform } from 'class-transformer';
export class CreateTipoDocDto {
    constructor(tipdoc_id, tipdoc_nombre, tipdoc_abreviatura) {
        this.tipdoc_id = tipdoc_id;
        this.tipdoc_nombre = tipdoc_nombre;
        this.tipdoc_abreviatura = tipdoc_abreviatura;
    }
}
__decorate([
    Expose({ name: 'tipdoc_id' }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], CreateTipoDocDto.prototype, "tipdoc_id", void 0);
__decorate([
    Expose({ name: 'tipdoc_nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateTipoDocDto.prototype, "tipdoc_nombre", void 0);
__decorate([
    Expose({ name: 'tipdoc_abreviatura' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateTipoDocDto.prototype, "tipdoc_abreviatura", void 0);
