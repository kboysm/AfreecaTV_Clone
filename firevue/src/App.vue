<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">회원가입</router-link>|
      <router-link to="/login">로그인</router-link>|
      <router-link to="/mypage">마이페이지</router-link>
    </div>
    <!-- <img :src="require('@/assets/insect.jpg')" /> -->
    <transition name="custom-classes-transition" leave-active-class="animated bounceOutRight">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backInsect: ""
    };
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("assets/insect.jpg") no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  /* background-size: 150px; */
}
body {
  margin: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
