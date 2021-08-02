"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoonOrderDto = void 0;
var class_validator_1 = require("class-validator");
var dtos_1 = require("..");
var NoonOrderDto = /** @class */ (function () {
    function NoonOrderDto() {
    }
    __decorate([
        class_validator_1.IsString()
    ], NoonOrderDto.prototype, "status", void 0);
    __decorate([
        class_validator_1.Allow()
    ], NoonOrderDto.prototype, "creationTime", void 0);
    __decorate([
        class_validator_1.IsPositive()
    ], NoonOrderDto.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsString()
    ], NoonOrderDto.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty()
    ], NoonOrderDto.prototype, "amount", void 0);
    __decorate([
        class_validator_1.IsNotEmpty()
    ], NoonOrderDto.prototype, "currency", void 0);
    __decorate([
        class_validator_1.IsNotEmpty()
    ], NoonOrderDto.prototype, "channel", void 0);
    __decorate([
        class_validator_1.IsNotEmpty()
    ], NoonOrderDto.prototype, "category", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(50)
    ], NoonOrderDto.prototype, "reference", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        class_validator_1.MaxLength(300)
    ], NoonOrderDto.prototype, "description", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], NoonOrderDto.prototype, "ipAddress", void 0);
    __decorate([
        class_validator_1.IsOptional()
    ], NoonOrderDto.prototype, "nvp", void 0);
    __decorate([
        class_validator_1.IsOptional()
    ], NoonOrderDto.prototype, "items", void 0);
    return NoonOrderDto;
}());
exports.NoonOrderDto = NoonOrderDto;
