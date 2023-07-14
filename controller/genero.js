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
export class CreateGeneroDto {
    constructor(gen_id, gen_nombre, gen_abreviatura) {
        this.gen_id = gen_id;
        this.gen_nombre = gen_nombre;
        this.gen_abreviatura = gen_abreviatura;
    }
}
__decorate([
    Expose({ name: 'gen_id' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], CreateGeneroDto.prototype, "gen_id", void 0);
__decorate([
    Expose({ name: 'gen_nombre' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateGeneroDto.prototype, "gen_nombre", void 0);
__decorate([
    Expose({ name: 'gen_abreviatura' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateGeneroDto.prototype, "gen_abreviatura", void 0);
