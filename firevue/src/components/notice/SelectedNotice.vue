<template>
  <div class="container">
    <div id="selectedNotice">
      <h2>{{selectedNotice.title}}</h2>
      <pre>

작성자 {{selectedNotice.writer}}   조회수 {{selectedNotice.views}}   {{new Date(selectedNotice.createdAt).toLocaleDateString(undefined,this.options)}}</pre>
      <br />
      <hr />
      <div class="content">
        <br />
        {{selectedNotice.content}}
        <br />
        <br />
        <hr />
      </div>
      <br />
      <div id="comments">
        <h3>덧글목록</h3>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>점검을 너무 자주하시는거 아닌가요? 장사하기 싫어요?</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <div>
          <form>
            <label>{{$store.state.user.id }}:</label>
            <input style="border:1px solid black; border-radius:5px;" type="text" />
            <input type="submit" value="작성" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: "",
      _id: "",
      selectedNotice: {},
      options: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    };
  },
  created() {
    this._id = this.$route.params.selectedNotice;
    this.$axios
      .get("/api/notice/".concat(this._id))
      .then(r => {
        this.selectedNotice = r.data;
      })
      .catch(e => {
        console.error(e);
      });
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
}
#selectedNotice {
  background: #fff;
  border-radius: 5px;
  width: 65vw;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  opacity: 0.8;
  padding: 24px;
  .options button {
    border: 1px;
    color: red;
  }
}
</style>