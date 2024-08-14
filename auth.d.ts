declare module '#auth-utils' {
    interface User {
        twitterId?: string
        username?: string,
        name?: string,
        description?: string,
        profileImage?: string,
    }

    interface UserSession {
        extended?: any
        loggedInAt: number
    }
}

export {}