export interface JwtPayload {
    sub: string;
    aud: string;
    exp: number;
    iss: string;
}
