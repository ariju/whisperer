<template>
  <div class="home">
    <div class="list">
      <li
        v-for="whisper in orderBy(whispers, 'date', -1)"
        :key="whisper.id"
        class="item"
      >
        <div class="user-box">
          <div
            class="avatar"
            :style="'background-image: url(' + url + ')'"
          ></div>
          <p class="user-name">{{ whisper.uid }}</p>
        </div>
        <div class="content" v-html="whisper.content"></div>
      </li>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import Vue2Filters from "vue2-filters";

export default {
  name: "Home",
  data() {
    return {
      whispers: [],
    };
  },
  firestore() {
    return {
      whispers: db.collection("whispers"),
    };
  },
  components: {},
  mixins: [Vue2Filters.mixin],
};
</script>

<style lang="stylus" scoped>
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  &:first-child
    border none
  &:hover
    background rgba(0,0,0,.02)
  .user-box
    margin 10px 10px 10px 0
    .avatar
      height 50px
      width 50px
      border-radius 50%
      border 1px solid #eee
      background-size cover
    .user-name
      margin 5px 0 0 0
      text-align center
      font-size .7rem
      line-height .7rem
      width 50px
  .content
    padding 10px
</style>
