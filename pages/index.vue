<template>
  <UCard>
    <template #header>
      <p class="font-medium">
        {{ loggedIn ? `Welcome ${user.login}` : 'Welcome to Tweet Organizer' }}
      </p>

      <UDropdown
          v-if="loggedIn"
          class="ml-auto"
          :options="[
            { label: 'Logout', icon: 'i-heroicons-logout-20-solid' }
          ]"
      >
        <UButton
            color="white"
            trailing-icon="i-heroicons-chevron-down-20-solid"
        >
          <UAvatar
              :src="user.profileImage"
              :alt="user.name"
              size="3xs"
          />
          {{ user.name }}
        </UButton>
      </UDropdown>
    </template>


    <div v-if="loggedIn">
      <h1>Welcome {{ user.login }}!</h1>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <img :src="user.profileImage" alt="Profile Image" />
      <button @click="clear">Logout</button>
    </div>

    <div v-else>
      <p>
        An
        <a
            href="https://github.com/leszekkrol/nuxt-tweet-organizer"
            target="_blank"
            class="text-primary-500"
            rel="noopener"
        >open-source</a> tool for efficient management and filtering of Twitter (X) followers.
      </p>
      <UButton
          to="/auth/x"
          icon="i-simple-icons-x"
          label="Login with X"
          color="black"
          class="my-4"
          external
      />
      <hr class="dark:border-gray-700">
      <p class="text-sm text-gray-700 dark:text-gray-300 italic">
        No personal informations regarding your GitHub account are stored in database.
      </p>
    </div>
  </UCard>
</template>

<script setup>
const { loggedIn, user, session, clear } = useUserSession()
</script>