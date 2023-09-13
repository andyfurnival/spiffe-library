"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiffeStrategy = void 0;
const passport_http_bearer_1 = require("passport-http-bearer");
const common_1 = require("@nestjs/common");
const spiffe_auth_service_1 = require("./spiffe-auth.service");
const express_1 = require("express");
let SpiffeStrategy = exports.SpiffeStrategy = class SpiffeStrategy extends passport_http_bearer_1.Strategy {
    constructor(authService) {
        super(async (token, done) => {
            try {
                const roles = express_1.request.roles;
                const jwtSvid = await this.authService.validateToken(token, roles[0]);
                if (!jwtSvid) {
                    return done(null, false);
                }
                return done(null, jwtSvid);
            }
            catch (error) {
                return done(error, false);
            }
        });
        this.authService = authService;
    }
};
exports.SpiffeStrategy = SpiffeStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [spiffe_auth_service_1.SpiffeAuthService])
], SpiffeStrategy);
//# sourceMappingURL=spiffe.strategy.js.map