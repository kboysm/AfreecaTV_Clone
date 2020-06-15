<template>
  <div id="login">
    <form id="dataForm">Login</form>
  </div>
</template>
<style scoped>
#login {
  /* background: #e2e1e0; */
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#dataForm {
  background: #fff;
  border-radius: 5px;
  width: 500px;
  height: 75vh;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media screen and (max-width: 768px) {
  #dataForm {
    width: 500px;
    height: 75vh;
  }
}
</style>
