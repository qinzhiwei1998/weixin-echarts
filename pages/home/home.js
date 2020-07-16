// pages/home/home.js
import * as echarts from '../../ec-canvas/echarts' 
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title:{
      text:'树高分别柱状图',
      top:10,
      left:10
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {    
              interval: 0,   
              rotate: 90,
      
             },
            data: ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m', '10m', '11m', '12m', '13m'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '50%',
            data: [10, 52, 200, 334, 390, 330, 220,35,48,84,354,486,482]
        }
    ]
  };
  
  chart.setOption(option);
  return chart;
  
}




function onitChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title:{
      text:'树种分别图',
      top:10,
      left:10
    },
    color:['#73C77C', '#C2F783', '#E26C68','#FBDD6D','#A5CE92','#75ABE7','#C2A7F8'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      right: 30,
      top:60,
      data: ['香谭', '水杉', '广玉兰', '银杏', '朴树','香松','其他类型']
  },
  series: [
      {
        right:130,
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '80%'],
          avoidLabelOverlap: false,
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 335, name: '香谭'},
              {value: 310, name: '水杉'},
              {value: 234, name: '广玉兰'},
              {value: 135, name: '银杏'},
              {value: 1548, name: '朴树'},
              {value: 555, name: '香松'},
              {value: 1000, name: '其他类型'}
          ]
      }
  ]
  };
  
  chart.setOption(option);
  return chart;
  
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    ec2: {
      onInit: onitChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})