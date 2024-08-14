export default oauthXEventHandler({
    async onSuccess(event, { user }) {
        await setUserSession(event, {
            user: {
                twitterId: user.id,
                username: user.username,
                name: user.name,
                description: user.description,
                profileImage: user.profile_image_url,
            },
            loggedInAt: Date.now(),
        })
        return sendRedirect(event, '/')
    },
    onError(event, error) {
        console.error('Twitter OAuth error:', error)
        return sendRedirect(event, '/')
    }
})