<template>
  <div class='home'>
    <el-row :gutter='20'>
      <el-col :xs='24' :sm='12' :md='6' :lg='6' :xl='6' v-for='(item,i) in imgs' :key='i'>
        <el-image :src='item'></el-image>
      </el-col>
      <el-col :span='24'>
        <div id='echart' style='width:100%;height:300px;'></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      imgs: [
        require('../assets/2.jpg'),
        require('../assets/3.jpg'),
        require('../assets/4.jpg'),
        require('../assets/5.jpg')
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var myChart = this.$echarts.init(document.getElementById('echart'))
      // 绘制图表
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>
