<template>
  <div class="home">
    <Product-card />
    <Product-card />
    <Product-card />
    <Product-card />
  </div>
</template>

<script>
import ProductCard from "@/components/product/Product.vue";
// @ is an alias to /src
export default {
  components: {
    ProductCard
  }
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
