<template>
  <div class="card">
    <img src="http://localhost:3000/images/4.jpg" art="testImages" />
    <p>ProductName</p>
    <p>test productDescription</p>
    <p style="font-size:5px; color:red;">category : prog</p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card {
  margin: 0 0 12px 12px;
  width: 250px;
  height: 250px;
  border: 1px solid black;
  border-radius: 5px;
}
.card img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  width: 250px;
  height: 200px;
  opacity: 0.9;
}
</style>