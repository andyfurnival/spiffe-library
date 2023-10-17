// roles.decorator.ts

import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { RolesGuard } from "./roles-guard.service";

export function Roles(...permissions: string[]) {
  return applyDecorators(SetMetadata("roles", permissions), UseGuards(RolesGuard));
}