var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmpty } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
export class CreateAcudienteDto {
    constructor(acu_codigo, acu_nombreCompleto, acu_telefono) {
        this.acu_codigo = acu_codigo;
        this.acu_nombreCompleto = acu_nombreCompleto;
        this.acu_telefono = acu_telefono;
    }
}
__decorate([
    Expose({ name: 'acu_codigo' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], CreateAcudienteDto.prototype, "acu_codigo", void 0);
__decorate([
    Expose({ name: 'acu_nombreCompleto' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateAcudienteDto.prototype, "acu_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'acu_telefono' }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value != "number")
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateAcudienteDto.prototype, "acu_telefono", void 0);
