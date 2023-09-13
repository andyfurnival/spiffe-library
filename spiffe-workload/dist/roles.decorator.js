"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const roles_guard_service_1 = require("./roles-guard.service");
function Roles(...permissions) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)("roles", permissions), (0, common_1.UseGuards)(roles_guard_service_1.RolesGuard));
}
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map