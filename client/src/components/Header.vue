<template>
  <v-toolbar class="cyan" fixed dark>
    <v-toolbar-title class="mr-4">
      <span class="home-link" @click="navigateTo({name: 'root'})">TabTracker</span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        @click="navigateTo({name: 'songs'})">
          Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name: 'login' })">
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name: 'register' })">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // TODO: redirect to Home page
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
  .home-link {
    cursor: pointer;
  }
  .home-link:hover {
      color: #e9e;
  }
</style>
