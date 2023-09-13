export interface JwtPayload {
  sub: string; // User ID or a unique identifier
  aud: string; // Audience field
  exp: number;        // Expiration Time (Unix timestamp)
  iss: string;        // Issuer

}