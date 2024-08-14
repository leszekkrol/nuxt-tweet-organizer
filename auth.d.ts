declare module '#auth-utils' {
    interface User {
        x?: string
    }

    interface UserSession {
        extended?: any
        loggedInAt: number
    }
}

export {}