"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoonMerchantDescriptorDto = void 0;
var class_validator_1 = require("class-validator");
var NoonMerchantDescriptorDto = /** @class */ (function () {
    function NoonMerchantDescriptorDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "legalName", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "city", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(100),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "addressLine", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(3),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "country", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(13),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(20),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "stateProvince", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.MaxLength(10),
        class_validator_1.IsOptional()
    ], NoonMerchantDescriptorDto.prototype, "postCodeZip", void 0);
    return NoonMerchantDescriptorDto;
}());
exports.NoonMerchantDescriptorDto = NoonMerchantDescriptorDto;
