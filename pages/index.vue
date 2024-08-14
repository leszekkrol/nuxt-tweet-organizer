<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.login }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <img :src="user.profileImage" alt="Profile Image" />
    <button @click="clear">Logout</button>
  </div>
  <div v-else>
    <h1>Not logged in</h1>
    <a href="/auth/x">Login with Twitter</a>
  </div>
</template>

<script setup>
const { loggedIn, user, session, clear } = useUserSession()
</script>
