<template>
  <div>
    <h2>Selected Notice</h2>
    <!-- <h2>{{$router.params.selectedNotice}}</h2> -->
    {{ _id}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      _id: ""
    };
  },
  created() {
    this._id = this.$route.params.selectedNotice;
  }
};
</script>