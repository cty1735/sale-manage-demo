<template>
 <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in items" :key="item" >
       <el-image  :src='item' :fit="contain" ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'AppManage',
  data () {
    return {
      items: [require('../assets/2.jpg'), require('../assets/3.jpg'), require('../assets/4.jpg'), require('../assets/5.jpg'), require('../assets/8.jpg')]
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>
