<template>
  <div class="d-flex justify-center pt-14">
    <v-card width="40%">
      <v-card-title> Welcome To My Site EUY</v-card-title>
      <v-card-text>
        <span>Username</span>
        <v-text-field
          v-model="username"
          placeholder="Enter your username"
        ></v-text-field>
        <span>Password</span>
        <v-text-field
          v-model="password"
          placeholder="Enter your password"
          type="password"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" @click="loginAction"> Login </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    loginAction() {
      if (this.username == "rifqi" && this.password == "rifqi") {
        alert("Login sukses ey");
        this.$router.push("/");
      } else {
        alert("Login gagal ey");
      }
    },
  },
};
</script>
