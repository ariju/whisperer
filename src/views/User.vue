<template>
  <div id="user">
    <div class="user-title">
      <div class="avatar" :style="'background-image: url('+user.photoURL+')'"></div>
      <div class="texts">
        <h1>{{user.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  data () {
    return {
      user: {}
    }
  },
  firestore () {
    return {
      user: db.collection('users').doc(this.$route.params.uid)
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-title
  display flex
  flex-wrap nowrap
  justify-content flex-start
  margin 10px 0
  .avatar
    width 50px
    height 50px
    border-radius 5px
    background-size cover
  .texts
    margin-left 10px
    h1
      font-size 1.5rem
      margin 0
    p
      font-size .8rem
      margin 0
</style>
