"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoonContactDto = void 0;
var class_validator_1 = require("class-validator");
var NoonContactDto = /** @class */ (function () {
    function NoonContactDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(25)
    ], NoonContactDto.prototype, "firstName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(25)
    ], NoonContactDto.prototype, "lastName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(15)
    ], NoonContactDto.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(15)
    ], NoonContactDto.prototype, "mobilePhone", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsEmail(),
        class_validator_1.IsOptional()
    ], NoonContactDto.prototype, "email", void 0);
    return NoonContactDto;
}());
exports.NoonContactDto = NoonContactDto;
