<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-btn>あほ</v-btn>
    <AccountFront />
    {{$isLogin}}
  </div>
</template>

<script>
import {AccountFront} from 'vue-firebaseauthui-fe'
export default {
  name: 'Home',
  components: {
    AccountFront
  },
  mounted(){
    console.log(AccountFront)
  }
};
</script>
