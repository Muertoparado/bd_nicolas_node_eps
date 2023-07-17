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
export class CreateEspecialidadDto {
    constructor(esp_id, esp_nombre) {
        this.esp_id = esp_id;
        this.esp_nombre = esp_nombre;
    }
}
__decorate([
    Expose({ name: 'esp_id' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje es obligatorio c` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no a  cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], CreateEspecialidadDto.prototype, "esp_id", void 0);
__decorate([
    Expose({ name: 'esp_nombre' }),
    IsEmpty({ message: () => { throw { status: 401, message: `el mensaje f es obligatorio` }; } }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], CreateEspecialidadDto.prototype, "esp_nombre", void 0);
