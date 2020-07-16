import * as echarts from '../../ec-canvas/echarts' 
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ['#3398DB','#90EE90'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
    title:{
      text:'温湿度曲线',
      top:10,
      left:10
    },
    xAxis: {
      type: 'category',
      axisLabel: {    
        interval: 0,   
        rotate: 90,
       },
      data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时']
  },
  yAxis: [
      {
        type:'value',
        
      },
      {
        type:'value',
        
        // inverse:true
      }
  ],
  series: [
    {
      name: '温度',
      data: [40,50,48,42,54,61,48,52,68,54,57,52,59],
      type: 'line',
      yAxisIndex: 0,
      smooth: true
  },
  {
    name: '湿度',
    data:[40,52,75,85,42,15,55,58,65,22,55,88],
    type:'line',
    yAxisIndex: 1,
    smooth: true
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
    color: ['#3398DB'],
    title:{
      text:'空气质量曲线',
      top:10,
      left:10
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
    xAxis: {
      type: 'category',
      axisLabel: {    
        interval: 0,   
        rotate: 90,

       },
      alignWithLabel: true,
      data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      name:'质量指数',
      data: [20, 25, 24, 25, 29, 22, 25,24,28,19,24,25,22,26,28],
      type: 'line',
      smooth: true,
      
      
  }]
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
    },
    
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