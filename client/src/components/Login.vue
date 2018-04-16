<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
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
            ></v-text-field>
            <div class="error" v-html="error"></div>
            <v-btn @click="login" dark class="cyan">Login</v-btn>
          </form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // redirect to home page
        this.$router.push({name: 'root'})
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
