<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field
              type="email"
              v-model="email"
              name="email"
              label="Email"
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              name="password"
              label="Password"
              autocomlete="new-password"
            ></v-text-field>
            <div class="error" v-html="error"></div>
            <v-btn @click="register" dark class="cyan">Register</v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>
  .error {
    color: red;
  }
</style>
