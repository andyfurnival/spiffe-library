import { LoginGuard } from "./auth.guard";

describe('LoginGuard', () => {
  it('should be defined', () => {
    expect(new LoginGuard()).toBeDefined();
  });
});
