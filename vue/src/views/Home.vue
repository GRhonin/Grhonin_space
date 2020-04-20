<template>
  <div class="content">
    <Header></Header>
    <div class="empty"></div>
    <!--两个轮播图-->
    <swiper :options="swiperOption"
            v-for="item in groups"
            :key="item.id">
      <swiper-slide v-for="item2 in getItems(item)"
                    :key="item2.id">
        <img class="swiperImg"
             :src="item2.avatar"
             alt="暂无相关图片">
      </swiper-slide>
    </swiper>
    <!--下面宣传列表-->
    <!--<button @click="test1" class="btn">test1</button>-->
    <div class="detail"
         v-for="i in list2"
         :key="i.id">
      <h2 v-text="i.h2"></h2>
      <div class="title"
           v-text="i.h1"></div>
      <div class="line"></div>
      <div class="version"
           v-text="i.h3"></div>
      <img :src="i.avatar"
           alt="暂无相关图片">
      <div class="other-info">
        <i class="el-icon-star-off"></i>
        <p v-text="i.num_support"></p>
        <i class="el-icon-share"></i>
        <p>分享</p>
      </div>
    </div>
    <div class="more"><a href="#">More ></a></div>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import { createNamespacedHelpers } from 'vuex';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
let { mapState } = createNamespacedHelpers('home');
export default {
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  },
  computed: {
    ...mapState(['list', 'list2']),
    getDetails () {
      return list2;
    },
    groups () {
      let arr = [];
      this.list.forEach(item => {
        if (!arr.find(item2 => item2 === item.bannerBelong))
          arr.push(item.bannerBelong);
      });
      return arr;
    },
    getItems () {
      return bannerBelong => this.list.filter(item => item.bannerBelong === bannerBelong);
    },
    swiper () {
      return this.$refs.mySwiper.swiper;
    }
  },
  components: { Header, Footer },
  created () {
    this.$store.dispatch('home/init');
    this.$store.dispatch('home/init2');
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.btn
  width 100px
  height 40px
  margin-top 20rem
.content
  height 200px
  width 100%
  .detail
    height 25rem
    background-color rgb(31, 34, 41)
    color #cccccc
    padding-top 2.6rem
    border-bottom thin solid #999999
    h2
      font-size 1.5rem
      margin-left 1rem
    .title
      font-size 1.8rem
      margin-left 1rem
      margin-bottom 0.8rem
    .line
      border-bottom thin solid #999999
      margin-left 1rem
      margin-bottom 1.2rem
    .version
      font-size 0.8rem
      margin-left 1rem
      margin-bottom 1.2rem
    img
      width 90%
      font-weight 100
      margin-left 5%
    .other-info
      margin-top 0.2rem
      width 8rem
      display flex
      margin-left calc(100% - 9rem)
      justify-content space-around
      align-items center
      font-size 1.1rem
      .el-icon-share
        color rgb(240, 80, 80)
.empty
  height 3rem
  width 100%
.swiperImg
  width 100%
.more
  width 100%
  height 5.5rem
  background-color rgb(14, 15, 19)
  text-align center
  padding-top 2rem
  a
    color white
    font-size 1.4rem
</style>