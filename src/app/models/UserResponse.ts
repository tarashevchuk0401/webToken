export interface UserResponse {
    email: string,
    expiresIn: string,
    idToken: string
    kind: string,
    localId: string,
    refreshToken: string,
    displayName?: string,
    registere?: boolean,
}
