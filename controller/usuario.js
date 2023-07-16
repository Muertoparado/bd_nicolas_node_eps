var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEmpty, IsDefined } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
export class CreateUsuarioDto {
    constructor(usu_id, usu_nombre, usu_segdo_nombre, usu_telefono, usu_direccion, usu_email) {
        this.usu_id = usu_id;
        this.usu_nombre = usu_nombre;
        this.usu_segdo_nombre = usu_segdo_nombre;
        this.usu_telefono = usu_telefono;
        this.usu_direccion = usu_direccion;
        this.usu_email = usu_email;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], CreateUsuarioDto.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value) && typeof value != "number")
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z 0-9 # -]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    Transform(({ value }) => {
        if (/^[@. a-z A-Z 0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "usu_email", void 0);
