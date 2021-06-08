<template>

  <div class="metor-info">

    <el-card style="width: 650px;float:left;margin-right: 20px">
      <h2>防控领域本体</h2>
      <el-card style="width: 600px; height: 600px;">
        <div id="main-chart" style="width: 600px; height: 600px;"></div>
      </el-card>
    </el-card>

    <el-card style="width: 650px;">
      <h2>风险本体</h2>
      <el-card style="width: 600px; height: 600px;">
        <div id="main-chart2" style="width: 600px; height: 600px;"></div>
      </el-card>
    </el-card>
    <!-- 浮动会使元素脱标，在所有浮动元素后面加一个块状元素，并设置clear:both清除浮动造成的父元素高度撑不起来问题 -->
    <div class="clear"></div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts")
require("echarts/lib/chart/graph")
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.myChart = echarts.init(document.getElementById("main-chart"))
      this.myChart.setOption({
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph", // 关系图
            layout: "force", // 图布局类型为力导图
            symbolSize: 30, // 倘若该属性不在link里，则其表示节点的大小；否则即为线两端标记的大小
            roam: true, // 鼠标缩放功能
            categories: [
              {
                name: "0",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#DF4949"
                  }
                }
              }, {
                name: "1",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#293950"
                  }
                }
              }, {
                name: "2",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#A170DD"
                  }
                }
              },
              {
                name: "3",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#E8B842"
                  }
                }
              }
            ],
            edgeSymbol: ["circle", "arrow"], // 关系两边的展现形式，也即图中线两端的展现形式。arrow为箭头
            edgeSymbolSize: [4, 10],
            force: {
              repulsion: 200, // 斥力大小
              edgeLength: 50 // 边长度
            },
            draggable: true,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0.2
            },
            label: {
              normal: {
                position: "inside",
                show: true,
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                }
              }
            },
            // data: [{"name": "风险地图", "id": 0, "category": 0, "symbolSize": 80}, {"name": "疏散路线", "id": 1, "category": 1, "symbolSize": 60}, {"name": "应对措施", "id": 2, "category": 1, "symbolSize": 60}, {"name": "脆弱性区域", "id": 3, "category": 1, "symbolSize": 60}, {"name": "重要区域", "id": 4, "category": 1, "symbolSize": 60}, {"name": "安全场所", "id": 5, "category": 1, "symbolSize": 60}, {"name": "危险源", "id": 6, "category": 1, "symbolSize": 60}, {"name": "安全出口", "id": 7, "category": 2, "symbolSize": 60}, {"name": "灭火器位置", "id": 8, "category": 2, "symbolSize": 60}, {"name": "消防栓位置", "id": 9, "category": 2, "symbolSize": 60}, {"name": "疏散方向", "id": 10, "category": 2, "symbolSize": 60}, {"name": "看图者位置", "id": 11, "category": 2, "symbolSize": 60}, {"name": "消除危险源", "id": 12, "category": 2, "symbolSize": 60}, {"name": "规避风险", "id": 13, "category": 2, "symbolSize": 60}, {"name": "保留风险", "id": 14, "category": 2, "symbolSize": 60}, {"name": "分担风险", "id": 15, "category": 2, "symbolSize": 60}, {"name": "改变后果", "id": 16, "category": 2, "symbolSize": 60}, {"name": "老旧房区域", "id": 17, "category": 2, "symbolSize": 60}, {"name": "人口密集区域", "id": 18, "category": 2, "symbolSize": 60}, {"name": "积水区域", "id": 19, "category": 2, "symbolSize": 60}, {"name": "市场", "id": 20, "category": 2, "symbolSize": 60}, {"name": "污水处理厂", "id": 21, "category": 2, "symbolSize": 60}, {"name": "历史文化建筑", "id": 22, "category": 2, "symbolSize": 60}, {"name": "垃圾填埋场", "id": 23, "category": 2, "symbolSize": 60}, {"name": "学校", "id": 24, "category": 2, "symbolSize": 60}, {"name": "敬老院", "id": 25, "category": 2, "symbolSize": 60}, {"name": "水厂", "id": 26, "category": 2, "symbolSize": 60}, {"name": "电厂", "id": 27, "category": 2, "symbolSize": 60}, {"name": "市政厅", "id": 28, "category": 2, "symbolSize": 60}, {"name": "变电站", "id": 29, "category": 2, "symbolSize": 60}, {"name": "疏散集合点", "id": 30, "category": 2, "symbolSize": 60}, {"name": "公安/派出所", "id": 31, "category": 2, "symbolSize": 60}, {"name": "医院", "id": 32, "category": 2, "symbolSize": 60}, {"name": "消防站", "id": 33, "category": 2, "symbolSize": 60}, {"name": "交通易发地", "id": 34, "category": 2, "symbolSize": 60}, {"name": "加油站", "id": 35, "category": 2, "symbolSize": 60}, {"name": "施工工地", "id": 36, "category": 2, "symbolSize": 60}, {"name": "高压线", "id": 37, "category": 2, "symbolSize": 60}, {"name": "河道", "id": 38, "category": 2, "symbolSize": 60}, {"name": 5, "id": 39, "category": 3}, {"name": 7, "id": 40, "category": 3}, {"name": 6, "id": 41, "category": 3}, {"name": 4, "id": 42, "category": 3}, {"name": 8, "id": 43, "category": 3}, {"name": 20, "id": 44, "category": 3}, {"name": 21, "id": 45, "category": 3}, {"name": 22, "id": 46, "category": 3}, {"name": 18, "id": 47, "category": 3}, {"name": 25, "id": 48, "category": 3}, {"name": 13, "id": 49, "category": 3}, {"name": 18, "id": 50, "category": 3}, {"name": 20, "id": 51, "category": 3}, {"name": 16, "id": 52, "category": 3}, {"name": 20, "id": 53, "category": 3}, {"name": 5, "id": 54, "category": 3}, {"name": 4, "id": 55, "category": 3}, {"name": 6, "id": 56, "category": 3}, {"name": 3, "id": 57, "category": 3}, {"name": 7, "id": 58, "category": 3}, {"name": 3, "id": 59, "category": 3}, {"name": 5, "id": 60, "category": 3}, {"name": 4, "id": 61, "category": 3}, {"name": 5, "id": 62, "category": 3}, {"name": 6, "id": 63, "category": 3}, {"name": 10, "id": 64, "category": 3}, {"name": 9, "id": 65, "category": 3}, {"name": 6, "id": 66, "category": 3}, {"name": 11, "id": 67, "category": 3}, {"name": 8, "id": 68, "category": 3}, {"name": 9, "id": 69, "category": 3}, {"name": 7, "id": 70, "category": 3}, {"name": 11, "id": 71, "category": 3}, {"name": 5, "id": 72, "category": 3}, {"name": 6, "id": 73, "category": 3}, {"name": 7, "id": 74, "category": 3}, {"name": 11, "id": 75, "category": 3}, {"name": 13, "id": 76, "category": 3}, {"name": 7, "id": 77, "category": 3}, {"name": 9, "id": 78, "category": 3}, {"name": 8, "id": 79, "category": 3}, {"name": 13, "id": 80, "category": 3}, {"name": 7, "id": 81, "category": 3}, {"name": 9, "id": 82, "category": 3}, {"name": 10, "id": 83, "category": 3}, {"name": 10, "id": 84, "category": 3}, {"name": 12, "id": 85, "category": 3}, {"name": 13, "id": 86, "category": 3}, {"name": 11, "id": 87, "category": 3}, {"name": 9, "id": 88, "category": 3}, {"name": 15, "id": 89, "category": 3}, {"name": 14, "id": 90, "category": 3}, {"name": 12, "id": 91, "category": 3}, {"name": 16, "id": 92, "category": 3}, {"name": 13, "id": 93, "category": 3}, {"name": 20, "id": 94, "category": 3}, {"name": 22, "id": 95, "category": 3}, {"name": 25, "id": 96, "category": 3}, {"name": 19, "id": 97, "category": 3}, {"name": 16, "id": 98, "category": 3}, {"name": 0, "id": 99, "category": 3}, {"name": 3, "id": 100, "category": 3}, {"name": 2, "id": 101, "category": 3}, {"name": 2, "id": 102, "category": 3}, {"name": 4, "id": 103, "category": 3}, {"name": 5, "id": 104, "category": 3}, {"name": 3, "id": 105, "category": 3}, {"name": 3, "id": 106, "category": 3}, {"name": 5, "id": 107, "category": 3}, {"name": 4, "id": 108, "category": 3}, {"name": 0, "id": 109, "category": 3}, {"name": 3, "id": 110, "category": 3}, {"name": 4, "id": 111, "category": 3}, {"name": 6, "id": 112, "category": 3}, {"name": 5, "id": 113, "category": 3}, {"name": 7, "id": 114, "category": 3}, {"name": 9, "id": 115, "category": 3}, {"name": 8, "id": 116, "category": 3}, {"name": 10, "id": 117, "category": 3}, {"name": 13, "id": 118, "category": 3}, {"name": 14, "id": 119, "category": 3}, {"name": 13, "id": 120, "category": 3}, {"name": 15, "id": 121, "category": 3}, {"name": 14, "id": 122, "category": 3}, {"name": 17, "id": 123, "category": 3}, {"name": 20, "id": 124, "category": 3}, {"name": 24, "id": 125, "category": 3}, {"name": 19, "id": 126, "category": 3}, {"name": 17, "id": 127, "category": 3}, {"name": 22, "id": 128, "category": 3}, {"name": 14, "id": 129, "category": 3}, {"name": 18, "id": 130, "category": 3}, {"name": 15, "id": 131, "category": 3}, {"name": 20, "id": 132, "category": 3}, {"name": 17, "id": 133, "category": 3}, {"name": 7, "id": 134, "category": 3}, {"name": 3, "id": 135, "category": 3}, {"name": 8, "id": 136, "category": 3}, {"name": 13, "id": 137, "category": 3}, {"name": 7, "id": 138, "category": 3}, {"name": 2, "id": 139, "category": 3}, {"name": 5, "id": 140, "category": 3}, {"name": 4, "id": 141, "category": 3}, {"name": 2, "id": 142, "category": 3}, {"name": 1, "id": 143, "category": 3}, {"name": 7, "id": 144, "category": 3}, {"name": 8, "id": 145, "category": 3}, {"name": 10, "id": 146, "category": 3}, {"name": 8, "id": 147, "category": 3}, {"name": 9, "id": 148, "category": 3}, {"name": 16, "id": 149, "category": 3}, {"name": 17, "id": 150, "category": 3}, {"name": 19, "id": 151, "category": 3}, {"name": 21, "id": 152, "category": 3}, {"name": 17, "id": 153, "category": 3}, {"name": 25, "id": 154, "category": 3}, {"name": 22, "id": 155, "category": 3}, {"name": 27, "id": 156, "category": 3}, {"name": 24, "id": 157, "category": 3}, {"name": 28, "id": 158, "category": 3}, {"name": 15, "id": 159, "category": 3}, {"name": 19, "id": 160, "category": 3}, {"name": 17, "id": 161, "category": 3}, {"name": 12, "id": 162, "category": 3}, {"name": 18, "id": 163, "category": 3}, {"name": 21, "id": 164, "category": 3}, {"name": 19, "id": 165, "category": 3}, {"name": 20, "id": 166, "category": 3}, {"name": 22, "id": 167, "category": 3}, {"name": 30, "id": 168, "category": 3}, {"name": 12, "id": 169, "category": 3}, {"name": 10, "id": 170, "category": 3}, {"name": 13, "id": 171, "category": 3}, {"name": 15, "id": 172, "category": 3}, {"name": 19, "id": 173, "category": 3}, {"name": 0, "id": 174, "category": 3}, {"name": 5, "id": 175, "category": 3}, {"name": 3, "id": 176, "category": 3}, {"name": 8, "id": 177, "category": 3}, {"name": 10, "id": 178, "category": 3}, {"name": 20, "id": 179, "category": 3}, {"name": 24, "id": 180, "category": 3}, {"name": 25, "id": 181, "category": 3}, {"name": 21, "id": 182, "category": 3}, {"name": 27, "id": 183, "category": 3}, {"name": 16, "id": 184, "category": 3}, {"name": 19, "id": 185, "category": 3}, {"name": 14, "id": 186, "category": 3}, {"name": 18, "id": 187, "category": 3}, {"name": 20, "id": 188, "category": 3}, {"name": 37, "id": 189, "category": 3}, {"name": 33, "id": 190, "category": 3}, {"name": 35, "id": 191, "category": 3}, {"name": 38, "id": 192, "category": 3}, {"name": 40, "id": 193, "category": 3}, {"name": 7, "id": 194, "category": 3}, {"name": 7, "id": 195, "category": 3}, {"name": 4, "id": 196, "category": 3}, {"name": 2, "id": 197, "category": 3}, {"name": 2, "id": 198, "category": 3}],
            data: [{"name": "风险地图", "id": 0, "category": 0, "symbolSize": 60}, {"name": "疏散路线", "id": 1, "category": 1, "symbolSize": 50}, {"name": "应对措施", "id": 2, "category": 1, "symbolSize": 50}, {"name": "脆弱性区域", "id": 3, "category": 1, "symbolSize": 50}, {"name": "重要区域", "id": 4, "category": 1, "symbolSize": 50}, {"name": "安全场所", "id": 5, "category": 1, "symbolSize": 50}, {"name": "危险源", "id": 6, "category": 1, "symbolSize": 50}, {"name": "安全出口", "id": 7, "category": 2, "symbolSize": 50}, {"name": "灭火器位置", "id": 8, "category": 2, "symbolSize": 50}, {"name": "消防栓位置", "id": 9, "category": 2, "symbolSize": 40}, {"name": "疏散方向", "id": 10, "category": 2, "symbolSize": 40}, {"name": "看图者位置", "id": 11, "category": 2, "symbolSize": 40}, {"name": "消除危险源", "id": 12, "category": 2, "symbolSize": 40}, {"name": "规避风险", "id": 13, "category": 2, "symbolSize": 40}, {"name": "保留风险", "id": 14, "category": 2, "symbolSize": 40}, {"name": "分担风险", "id": 15, "category": 2, "symbolSize": 40}, {"name": "改变后果", "id": 16, "category": 2, "symbolSize": 40}, {"name": "老旧房区域", "id": 17, "category": 2, "symbolSize": 40}, {"name": "人口密集区域", "id": 18, "category": 2, "symbolSize": 40}, {"name": "积水区域", "id": 19, "category": 2, "symbolSize": 40}, {"name": "市场", "id": 20, "category": 2, "symbolSize": 40}, {"name": "污水处理厂", "id": 21, "category": 2, "symbolSize": 40}, {"name": "历史文化建筑", "id": 22, "category": 2, "symbolSize": 40}, {"name": "垃圾填埋场", "id": 23, "category": 2, "symbolSize": 40}, {"name": "学校", "id": 24, "category": 2, "symbolSize": 40}, {"name": "敬老院", "id": 25, "category": 2, "symbolSize": 40}, {"name": "水厂", "id": 26, "category": 2, "symbolSize": 40}, {"name": "电厂", "id": 27, "category": 2, "symbolSize": 40}, {"name": "市政厅", "id": 28, "category": 2, "symbolSize": 40}, {"name": "变电站", "id": 29, "category": 2, "symbolSize": 40}, {"name": "疏散集合点", "id": 30, "category": 2, "symbolSize": 40}, {"name": "公安/派出所", "id": 31, "category": 2, "symbolSize": 40}, {"name": "医院", "id": 32, "category": 2, "symbolSize": 40}, {"name": "消防站", "id": 33, "category": 2, "symbolSize": 40}, {"name": "交通易发地", "id": 34, "category": 2, "symbolSize": 40}, {"name": "加油站", "id": 35, "category": 2, "symbolSize": 40}, {"name": "施工工地", "id": 36, "category": 2, "symbolSize": 40}, {"name": "高压线", "id": 37, "category": 2, "symbolSize": 40}, {"name": "河道", "id": 38, "category": 2, "symbolSize": 40}],
            links: [{"source": 0, "target": 1, "value": ""}, {"source": 0, "target": 2, "value": ""}, {"source": 0, "target": 3, "value": ""}, {"source": 0, "target": 4, "value": ""}, {"source": 0, "target": 5, "value": ""}, {"source": 0, "target": 6, "value": ""}, {"source": 1, "target": 7, "value": ""}, {"source": 1, "target": 8, "value": ""}, {"source": 1, "target": 9, "value": ""}, {"source": 1, "target": 10, "value": ""}, {"source": 1, "target": 11, "value": ""}, {"source": 2, "target": 12, "value": ""}, {"source": 2, "target": 13, "value": ""}, {"source": 2, "target": 14, "value": ""}, {"source": 2, "target": 15, "value": ""}, {"source": 2, "target": 16, "value": ""}, {"source": 3, "target": 17, "value": ""}, {"source": 3, "target": 18, "value": ""}, {"source": 3, "target": 19, "value": ""}, {"source": 3, "target": 20, "value": ""}, {"source": 4, "target": 21, "value": ""}, {"source": 4, "target": 22, "value": ""}, {"source": 4, "target": 23, "value": ""}, {"source": 4, "target": 24, "value": ""}, {"source": 4, "target": 25, "value": ""}, {"source": 4, "target": 26, "value": ""}, {"source": 4, "target": 27, "value": ""}, {"source": 4, "target": 28, "value": ""}, {"source": 4, "target": 29, "value": ""}, {"source": 5, "target": 30, "value": ""}, {"source": 5, "target": 31, "value": ""}, {"source": 5, "target": 32, "value": ""}, {"source": 5, "target": 33, "value": ""}, {"source": 6, "target": 34, "value": ""}, {"source": 6, "target": 35, "value": ""}, {"source": 6, "target": 36, "value": ""}, {"source": 6, "target": 37, "value": ""}, {"source": 6, "target": 38, "value": ""}, {"source": 7, "target": 39, "value": ""}, {"source": 7, "target": 40, "value": ""}, {"source": 7, "target": 41, "value": ""}, {"source": 7, "target": 42, "value": ""}, {"source": 7, "target": 43, "value": ""}, {"source": 8, "target": 44, "value": ""}, {"source": 8, "target": 45, "value": ""}, {"source": 8, "target": 46, "value": ""}, {"source": 8, "target": 47, "value": ""}, {"source": 8, "target": 48, "value": ""}, {"source": 9, "target": 49, "value": ""}, {"source": 9, "target": 50, "value": ""}, {"source": 9, "target": 51, "value": ""}, {"source": 9, "target": 52, "value": ""}, {"source": 9, "target": 53, "value": ""}, {"source": 10, "target": 54, "value": ""}, {"source": 10, "target": 55, "value": ""}, {"source": 10, "target": 56, "value": ""}, {"source": 10, "target": 57, "value": ""}, {"source": 10, "target": 58, "value": ""}, {"source": 11, "target": 59, "value": ""}, {"source": 11, "target": 60, "value": ""}, {"source": 11, "target": 61, "value": ""}, {"source": 11, "target": 62, "value": ""}, {"source": 11, "target": 63, "value": ""}, {"source": 12, "target": 64, "value": ""}, {"source": 12, "target": 65, "value": ""}, {"source": 12, "target": 66, "value": ""}, {"source": 12, "target": 67, "value": ""}, {"source": 12, "target": 68, "value": ""}, {"source": 13, "target": 69, "value": ""}, {"source": 13, "target": 70, "value": ""}, {"source": 13, "target": 71, "value": ""}, {"source": 13, "target": 72, "value": ""}, {"source": 13, "target": 73, "value": ""}, {"source": 14, "target": 74, "value": ""}, {"source": 14, "target": 75, "value": ""}, {"source": 14, "target": 76, "value": ""}, {"source": 14, "target": 77, "value": ""}, {"source": 14, "target": 78, "value": ""}, {"source": 15, "target": 79, "value": ""}, {"source": 15, "target": 80, "value": ""}, {"source": 15, "target": 81, "value": ""}, {"source": 15, "target": 82, "value": ""}, {"source": 15, "target": 83, "value": ""}, {"source": 16, "target": 84, "value": ""}, {"source": 16, "target": 85, "value": ""}, {"source": 16, "target": 86, "value": ""}, {"source": 16, "target": 87, "value": ""}, {"source": 16, "target": 88, "value": ""}, {"source": 17, "target": 89, "value": ""}, {"source": 17, "target": 90, "value": ""}, {"source": 17, "target": 91, "value": ""}, {"source": 17, "target": 92, "value": ""}, {"source": 17, "target": 93, "value": ""}, {"source": 18, "target": 94, "value": ""}, {"source": 18, "target": 95, "value": ""}, {"source": 18, "target": 96, "value": ""}, {"source": 18, "target": 97, "value": ""}, {"source": 18, "target": 98, "value": ""}, {"source": 19, "target": 99, "value": ""}, {"source": 19, "target": 100, "value": ""}, {"source": 19, "target": 101, "value": ""}, {"source": 19, "target": 102, "value": ""}, {"source": 19, "target": 103, "value": ""}, {"source": 20, "target": 104, "value": ""}, {"source": 20, "target": 105, "value": ""}, {"source": 20, "target": 106, "value": ""}, {"source": 20, "target": 107, "value": ""}, {"source": 20, "target": 108, "value": ""}, {"source": 21, "target": 109, "value": ""}, {"source": 21, "target": 110, "value": ""}, {"source": 21, "target": 111, "value": ""}, {"source": 21, "target": 112, "value": ""}, {"source": 21, "target": 113, "value": ""}, {"source": 22, "target": 114, "value": ""}, {"source": 22, "target": 115, "value": ""}, {"source": 22, "target": 116, "value": ""}, {"source": 22, "target": 117, "value": ""}, {"source": 22, "target": 118, "value": ""}, {"source": 23, "target": 119, "value": ""}, {"source": 23, "target": 120, "value": ""}, {"source": 23, "target": 121, "value": ""}, {"source": 23, "target": 122, "value": ""}, {"source": 23, "target": 123, "value": ""}, {"source": 24, "target": 124, "value": ""}, {"source": 24, "target": 125, "value": ""}, {"source": 24, "target": 126, "value": ""}, {"source": 24, "target": 127, "value": ""}, {"source": 24, "target": 128, "value": ""}, {"source": 25, "target": 129, "value": ""}, {"source": 25, "target": 130, "value": ""}, {"source": 25, "target": 131, "value": ""}, {"source": 25, "target": 132, "value": ""}, {"source": 25, "target": 133, "value": ""}, {"source": 26, "target": 134, "value": ""}, {"source": 26, "target": 135, "value": ""}, {"source": 26, "target": 136, "value": ""}, {"source": 26, "target": 137, "value": ""}, {"source": 26, "target": 138, "value": ""}, {"source": 27, "target": 139, "value": ""}, {"source": 27, "target": 140, "value": ""}, {"source": 27, "target": 141, "value": ""}, {"source": 27, "target": 142, "value": ""}, {"source": 27, "target": 143, "value": ""}, {"source": 28, "target": 144, "value": ""}, {"source": 28, "target": 145, "value": ""}, {"source": 28, "target": 146, "value": ""}, {"source": 28, "target": 147, "value": ""}, {"source": 28, "target": 148, "value": ""}, {"source": 29, "target": 149, "value": ""}, {"source": 29, "target": 150, "value": ""}, {"source": 29, "target": 151, "value": ""}, {"source": 29, "target": 152, "value": ""}, {"source": 29, "target": 153, "value": ""}, {"source": 30, "target": 154, "value": ""}, {"source": 30, "target": 155, "value": ""}, {"source": 30, "target": 156, "value": ""}, {"source": 30, "target": 157, "value": ""}, {"source": 30, "target": 158, "value": ""}, {"source": 31, "target": 159, "value": ""}, {"source": 31, "target": 160, "value": ""}, {"source": 31, "target": 161, "value": ""}, {"source": 31, "target": 162, "value": ""}, {"source": 31, "target": 163, "value": ""}, {"source": 32, "target": 164, "value": ""}, {"source": 32, "target": 165, "value": ""}, {"source": 32, "target": 166, "value": ""}, {"source": 32, "target": 167, "value": ""}, {"source": 32, "target": 168, "value": ""}, {"source": 33, "target": 169, "value": ""}, {"source": 33, "target": 170, "value": ""}, {"source": 33, "target": 171, "value": ""}, {"source": 33, "target": 172, "value": ""}, {"source": 33, "target": 173, "value": ""}, {"source": 34, "target": 174, "value": ""}, {"source": 34, "target": 175, "value": ""}, {"source": 34, "target": 176, "value": ""}, {"source": 34, "target": 177, "value": ""}, {"source": 34, "target": 178, "value": ""}, {"source": 35, "target": 179, "value": ""}, {"source": 35, "target": 180, "value": ""}, {"source": 35, "target": 181, "value": ""}, {"source": 35, "target": 182, "value": ""}, {"source": 35, "target": 183, "value": ""}, {"source": 36, "target": 184, "value": ""}, {"source": 36, "target": 185, "value": ""}, {"source": 36, "target": 186, "value": ""}, {"source": 36, "target": 187, "value": ""}, {"source": 36, "target": 188, "value": ""}, {"source": 37, "target": 189, "value": ""}, {"source": 37, "target": 190, "value": ""}, {"source": 37, "target": 191, "value": ""}, {"source": 37, "target": 192, "value": ""}, {"source": 37, "target": 193, "value": ""}, {"source": 38, "target": 194, "value": ""}, {"source": 38, "target": 195, "value": ""}, {"source": 38, "target": 196, "value": ""}, {"source": 38, "target": 197, "value": ""}, {"source": 38, "target": 198, "value": ""}]
            // data: [{
            //   "id": "0",
            //   "name": "Myriel",
            //   "symbolSize": 19.12381,
            //   "x": -266.82776,
            //   "y": 299.6904,
            //   "value": 28.685715,
            //   "category": 0
            // },
            // {
            //   "id": "1",
            //   "name": "Napoleon",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -418.08344,
            //   "y": 446.8853,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "2",
            //   "name": "MlleBaptistine",
            //   "symbolSize": 6.323809333333333,
            //   "x": -212.76357,
            //   "y": 245.29176,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "3",
            //   "name": "MmeMagloire",
            //   "symbolSize": 6.323809333333333,
            //   "x": -242.82404,
            //   "y": 235.26283,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "4",
            //   "name": "CountessDeLo",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -379.30386,
            //   "y": 429.06424,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "5",
            //   "name": "Geborand",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -417.26337,
            //   "y": 406.03506,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "6",
            //   "name": "Champtercier",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -332.6012,
            //   "y": 485.16974,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "7",
            //   "name": "Cravatte",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -382.69568,
            //   "y": 475.09113,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "8",
            //   "name": "Count",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -320.384,
            //   "y": 387.17325,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "9",
            //   "name": "OldMan",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -344.39832,
            //   "y": 451.16772,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "10",
            //   "name": "Labarre",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -89.34107,
            //   "y": 234.56128,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "11",
            //   "name": "Valjean",
            //   "symbolSize": 66.66666666666667,
            //   "x": -87.93029,
            //   "y": -6.8120565,
            //   "value": 100,
            //   "category": 1
            // },
            // {
            //   "id": "12",
            //   "name": "Marguerite",
            //   "symbolSize": 4.495239333333333,
            //   "x": -339.77908,
            //   "y": -184.69139,
            //   "value": 6.742859,
            //   "category": 1
            // },
            // {
            //   "id": "13",
            //   "name": "MmeDeR",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -194.31313,
            //   "y": 178.55301,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "14",
            //   "name": "Isabeau",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -158.05168,
            //   "y": 201.99768,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "15",
            //   "name": "Gervais",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -127.701546,
            //   "y": 242.55057,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "16",
            //   "name": "Tholomyes",
            //   "symbolSize": 17.295237333333333,
            //   "x": -385.2226,
            //   "y": -393.5572,
            //   "value": 25.942856,
            //   "category": 2
            // },
            // {
            //   "id": "17",
            //   "name": "Listolier",
            //   "symbolSize": 13.638097333333334,
            //   "x": -516.55884,
            //   "y": -393.98975,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "18",
            //   "name": "Fameuil",
            //   "symbolSize": 13.638097333333334,
            //   "x": -464.79382,
            //   "y": -493.57944,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "19",
            //   "name": "Blacheville",
            //   "symbolSize": 13.638097333333334,
            //   "x": -515.1624,
            //   "y": -456.9891,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "20",
            //   "name": "Favourite",
            //   "symbolSize": 13.638097333333334,
            //   "x": -408.12122,
            //   "y": -464.5048,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "21",
            //   "name": "Dahlia",
            //   "symbolSize": 13.638097333333334,
            //   "x": -456.44113,
            //   "y": -425.13303,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "22",
            //   "name": "Zephine",
            //   "symbolSize": 13.638097333333334,
            //   "x": -459.1107,
            //   "y": -362.5133,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "23",
            //   "name": "Fantine",
            //   "symbolSize": 28.266666666666666,
            //   "x": -313.42786,
            //   "y": -289.44803,
            //   "value": 42.4,
            //   "category": 2
            // },
            // {
            //   "id": "24",
            //   "name": "MmeThenardier",
            //   "symbolSize": 20.95238266666667,
            //   "x": 4.6313396,
            //   "y": -273.8517,
            //   "value": 31.428574,
            //   "category": 7
            // },
            // {
            //   "id": "25",
            //   "name": "Thenardier",
            //   "symbolSize": 30.095235333333335,
            //   "x": 82.80825,
            //   "y": -203.1144,
            //   "value": 45.142853,
            //   "category": 7
            // },
            // {
            //   "id": "26",
            //   "name": "Cosette",
            //   "symbolSize": 20.95238266666667,
            //   "x": 78.64646,
            //   "y": -31.512747,
            //   "value": 31.428574,
            //   "category": 6
            // },
            // {
            //   "id": "27",
            //   "name": "Javert",
            //   "symbolSize": 31.923806666666668,
            //   "x": -81.46074,
            //   "y": -204.20204,
            //   "value": 47.88571,
            //   "category": 7
            // },
            // {
            //   "id": "28",
            //   "name": "Fauchelevent",
            //   "symbolSize": 8.152382000000001,
            //   "x": -225.73984,
            //   "y": 82.41631,
            //   "value": 12.228573,
            //   "category": 4
            // },
            // {
            //   "id": "29",
            //   "name": "Bamatabois",
            //   "symbolSize": 15.466666666666667,
            //   "x": -385.6842,
            //   "y": -20.206686,
            //   "value": 23.2,
            //   "category": 3
            // },
            // {
            //   "id": "30",
            //   "name": "Perpetue",
            //   "symbolSize": 4.495239333333333,
            //   "x": -403.92447,
            //   "y": -197.69823,
            //   "value": 6.742859,
            //   "category": 2
            // },
            // {
            //   "id": "31",
            //   "name": "Simplice",
            //   "symbolSize": 8.152382000000001,
            //   "x": -281.4253,
            //   "y": -158.45137,
            //   "value": 12.228573,
            //   "category": 2
            // },
            // {
            //   "id": "32",
            //   "name": "Scaufflaire",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -122.41348,
            //   "y": 210.37503,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "33",
            //   "name": "Woman1",
            //   "symbolSize": 4.495239333333333,
            //   "x": -234.6001,
            //   "y": -113.15067,
            //   "value": 6.742859,
            //   "category": 1
            // },
            // {
            //   "id": "34",
            //   "name": "Judge",
            //   "symbolSize": 11.809524666666666,
            //   "x": -387.84915,
            //   "y": 58.7059,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "35",
            //   "name": "Champmathieu",
            //   "symbolSize": 11.809524666666666,
            //   "x": -338.2307,
            //   "y": 87.48405,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "36",
            //   "name": "Brevet",
            //   "symbolSize": 11.809524666666666,
            //   "x": -453.26874,
            //   "y": 58.94648,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "37",
            //   "name": "Chenildieu",
            //   "symbolSize": 11.809524666666666,
            //   "x": -386.44904,
            //   "y": 140.05937,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "38",
            //   "name": "Cochepaille",
            //   "symbolSize": 11.809524666666666,
            //   "x": -446.7876,
            //   "y": 123.38005,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "39",
            //   "name": "Pontmercy",
            //   "symbolSize": 6.323809333333333,
            //   "x": 336.49738,
            //   "y": -269.55914,
            //   "value": 9.485714,
            //   "category": 6
            // },
            // {
            //   "id": "40",
            //   "name": "Boulatruelle",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 29.187843,
            //   "y": -460.13132,
            //   "value": 4,
            //   "category": 7
            // },
            // {
            //   "id": "41",
            //   "name": "Eponine",
            //   "symbolSize": 20.95238266666667,
            //   "x": 238.36697,
            //   "y": -210.00926,
            //   "value": 31.428574,
            //   "category": 7
            // },
            // {
            //   "id": "42",
            //   "name": "Anzelma",
            //   "symbolSize": 6.323809333333333,
            //   "x": 189.69513,
            //   "y": -346.50662,
            //   "value": 9.485714,
            //   "category": 7
            // },
            // {
            //   "id": "43",
            //   "name": "Woman2",
            //   "symbolSize": 6.323809333333333,
            //   "x": -187.00418,
            //   "y": -145.02663,
            //   "value": 9.485714,
            //   "category": 6
            // },
            // {
            //   "id": "44",
            //   "name": "MotherInnocent",
            //   "symbolSize": 4.495239333333333,
            //   "x": -252.99521,
            //   "y": 129.87549,
            //   "value": 6.742859,
            //   "category": 4
            // },
            // {
            //   "id": "45",
            //   "name": "Gribier",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -296.07935,
            //   "y": 163.11964,
            //   "value": 4,
            //   "category": 4
            // },
            // {
            //   "id": "46",
            //   "name": "Jondrette",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 550.3201,
            //   "y": 522.4031,
            //   "value": 4,
            //   "category": 5
            // },
            // {
            //   "id": "47",
            //   "name": "MmeBurgon",
            //   "symbolSize": 4.495239333333333,
            //   "x": 488.13535,
            //   "y": 356.8573,
            //   "value": 6.742859,
            //   "category": 5
            // },
            // {
            //   "id": "48",
            //   "name": "Gavroche",
            //   "symbolSize": 41.06667066666667,
            //   "x": 387.89572,
            //   "y": 110.462326,
            //   "value": 61.600006,
            //   "category": 8
            // },
            // {
            //   "id": "49",
            //   "name": "Gillenormand",
            //   "symbolSize": 13.638097333333334,
            //   "x": 126.4831,
            //   "y": 68.10622,
            //   "value": 20.457146,
            //   "category": 6
            // },
            // {
            //   "id": "50",
            //   "name": "Magnon",
            //   "symbolSize": 4.495239333333333,
            //   "x": 127.07365,
            //   "y": -113.05923,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "51",
            //   "name": "MlleGillenormand",
            //   "symbolSize": 13.638097333333334,
            //   "x": 162.63559,
            //   "y": 117.6565,
            //   "value": 20.457146,
            //   "category": 6
            // },
            // {
            //   "id": "52",
            //   "name": "MmePontmercy",
            //   "symbolSize": 4.495239333333333,
            //   "x": 353.66415,
            //   "y": -205.89165,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "53",
            //   "name": "MlleVaubois",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 165.43939,
            //   "y": 339.7736,
            //   "value": 4,
            //   "category": 6
            // },
            // {
            //   "id": "54",
            //   "name": "LtGillenormand",
            //   "symbolSize": 8.152382000000001,
            //   "x": 137.69348,
            //   "y": 196.1069,
            //   "value": 12.228573,
            //   "category": 6
            // },
            // {
            //   "id": "55",
            //   "name": "Marius",
            //   "symbolSize": 35.58095333333333,
            //   "x": 206.44687,
            //   "y": -13.805411,
            //   "value": 53.37143,
            //   "category": 6
            // },
            // {
            //   "id": "56",
            //   "name": "BaronessT",
            //   "symbolSize": 4.495239333333333,
            //   "x": 194.82993,
            //   "y": 224.78036,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "57",
            //   "name": "Mabeuf",
            //   "symbolSize": 20.95238266666667,
            //   "x": 597.6618,
            //   "y": 135.18481,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "58",
            //   "name": "Enjolras",
            //   "symbolSize": 28.266666666666666,
            //   "x": 355.78366,
            //   "y": -74.882454,
            //   "value": 42.4,
            //   "category": 8
            // },
            // {
            //   "id": "59",
            //   "name": "Combeferre",
            //   "symbolSize": 20.95238266666667,
            //   "x": 515.2961,
            //   "y": -46.167564,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "60",
            //   "name": "Prouvaire",
            //   "symbolSize": 17.295237333333333,
            //   "x": 614.29285,
            //   "y": -69.3104,
            //   "value": 25.942856,
            //   "category": 8
            // },
            // {
            //   "id": "61",
            //   "name": "Feuilly",
            //   "symbolSize": 20.95238266666667,
            //   "x": 550.1917,
            //   "y": -128.17537,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "62",
            //   "name": "Courfeyrac",
            //   "symbolSize": 24.609526666666667,
            //   "x": 436.17184,
            //   "y": -12.7286825,
            //   "value": 36.91429,
            //   "category": 8
            // },
            // {
            //   "id": "63",
            //   "name": "Bahorel",
            //   "symbolSize": 22.780953333333333,
            //   "x": 602.55225,
            //   "y": 16.421427,
            //   "value": 34.17143,
            //   "category": 8
            // },
            // {
            //   "id": "64",
            //   "name": "Bossuet",
            //   "symbolSize": 24.609526666666667,
            //   "x": 455.81955,
            //   "y": -115.45826,
            //   "value": 36.91429,
            //   "category": 8
            // },
            // {
            //   "id": "65",
            //   "name": "Joly",
            //   "symbolSize": 22.780953333333333,
            //   "x": 516.40784,
            //   "y": 47.242233,
            //   "value": 34.17143,
            //   "category": 8
            // },
            // {
            //   "id": "66",
            //   "name": "Grantaire",
            //   "symbolSize": 19.12381,
            //   "x": 646.4313,
            //   "y": -151.06331,
            //   "value": 28.685715,
            //   "category": 8
            // },
            // {
            //   "id": "67",
            //   "name": "MotherPlutarch",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 668.9568,
            //   "y": 204.65488,
            //   "value": 4,
            //   "category": 8
            // },
            // {
            //   "id": "68",
            //   "name": "Gueulemer",
            //   "symbolSize": 19.12381,
            //   "x": 78.4799,
            //   "y": -347.15146,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "69",
            //   "name": "Babet",
            //   "symbolSize": 19.12381,
            //   "x": 150.35959,
            //   "y": -298.50797,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "70",
            //   "name": "Claquesous",
            //   "symbolSize": 19.12381,
            //   "x": 137.3717,
            //   "y": -410.2809,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "71",
            //   "name": "Montparnasse",
            //   "symbolSize": 17.295237333333333,
            //   "x": 234.87747,
            //   "y": -400.85983,
            //   "value": 25.942856,
            //   "category": 7
            // },
            // {
            //   "id": "72",
            //   "name": "Toussaint",
            //   "symbolSize": 6.323809333333333,
            //   "x": 40.942253,
            //   "y": 113.78272,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "73",
            //   "name": "Child1",
            //   "symbolSize": 4.495239333333333,
            //   "x": 437.939,
            //   "y": 291.58234,
            //   "value": 6.742859,
            //   "category": 8
            // },
            // {
            //   "id": "74",
            //   "name": "Child2",
            //   "symbolSize": 4.495239333333333,
            //   "x": 466.04922,
            //   "y": 283.3606,
            //   "value": 6.742859,
            //   "category": 8
            // },
            // {
            //   "id": "75",
            //   "name": "Brujon",
            //   "symbolSize": 13.638097333333334,
            //   "x": 238.79364,
            //   "y": -314.06345,
            //   "value": 20.457146,
            //   "category": 7
            // },
            // {
            //   "id": "76",
            //   "name": "MmeHucheloup",
            //   "symbolSize": 13.638097333333334,
            //   "x": 712.18353,
            //   "y": 4.8131495,
            //   "value": 20.457146,
            //   "category": 8
            // }],
            // links: [
            //   {
            //     "source": "1",
            //     "target": "0"
            //   },
            //   {
            //     "source": "2",
            //     "target": "0"
            //   },
            //   {
            //     "source": "3",
            //     "target": "0"
            //   },
            //   {
            //     "source": "3",
            //     "target": "2"
            //   },
            //   {
            //     "source": "4",
            //     "target": "0"
            //   },
            //   {
            //     "source": "5",
            //     "target": "0"
            //   },
            //   {
            //     "source": "6",
            //     "target": "0"
            //   },
            //   {
            //     "source": "7",
            //     "target": "0"
            //   },
            //   {
            //     "source": "8",
            //     "target": "0"
            //   },
            //   {
            //     "source": "9",
            //     "target": "0"
            //   },
            //   {
            //     "source": "11",
            //     "target": "0"
            //   },
            //   {
            //     "source": "11",
            //     "target": "2"
            //   },
            //   {
            //     "source": "11",
            //     "target": "3"
            //   },
            //   {
            //     "source": "11",
            //     "target": "10"
            //   },
            //   {
            //     "source": "12",
            //     "target": "11"
            //   },
            //   {
            //     "source": "13",
            //     "target": "11"
            //   },
            //   {
            //     "source": "14",
            //     "target": "11"
            //   },
            //   {
            //     "source": "15",
            //     "target": "11"
            //   },
            //   {
            //     "source": "17",
            //     "target": "16"
            //   },
            //   {
            //     "source": "18",
            //     "target": "16"
            //   },
            //   {
            //     "source": "18",
            //     "target": "17"
            //   },
            //   {
            //     "source": "19",
            //     "target": "16"
            //   },
            //   {
            //     "source": "19",
            //     "target": "17"
            //   },
            //   {
            //     "source": "19",
            //     "target": "18"
            //   },
            //   {
            //     "source": "20",
            //     "target": "16"
            //   },
            //   {
            //     "source": "20",
            //     "target": "17"
            //   },
            //   {
            //     "source": "20",
            //     "target": "18"
            //   },
            //   {
            //     "source": "20",
            //     "target": "19"
            //   },
            //   {
            //     "source": "21",
            //     "target": "16"
            //   },
            //   {
            //     "source": "21",
            //     "target": "17"
            //   },
            //   {
            //     "source": "21",
            //     "target": "18"
            //   },
            //   {
            //     "source": "21",
            //     "target": "19"
            //   },
            //   {
            //     "source": "21",
            //     "target": "20"
            //   },
            //   {
            //     "source": "22",
            //     "target": "16"
            //   },
            //   {
            //     "source": "22",
            //     "target": "17"
            //   },
            //   {
            //     "source": "22",
            //     "target": "18"
            //   },
            //   {
            //     "source": "22",
            //     "target": "19"
            //   },
            //   {
            //     "source": "22",
            //     "target": "20"
            //   },
            //   {
            //     "source": "22",
            //     "target": "21"
            //   },
            //   {
            //     "source": "23",
            //     "target": "11"
            //   },
            //   {
            //     "source": "23",
            //     "target": "12"
            //   },
            //   {
            //     "source": "23",
            //     "target": "16"
            //   },
            //   {
            //     "source": "23",
            //     "target": "17"
            //   },
            //   {
            //     "source": "23",
            //     "target": "18"
            //   },
            //   {
            //     "source": "23",
            //     "target": "19"
            //   },
            //   {
            //     "source": "23",
            //     "target": "20"
            //   },
            //   {
            //     "source": "23",
            //     "target": "21"
            //   },
            //   {
            //     "source": "23",
            //     "target": "22"
            //   },
            //   {
            //     "source": "24",
            //     "target": "11"
            //   },
            //   {
            //     "source": "24",
            //     "target": "23"
            //   },
            //   {
            //     "source": "25",
            //     "target": "11"
            //   },
            //   {
            //     "source": "25",
            //     "target": "23"
            //   },
            //   {
            //     "source": "25",
            //     "target": "24"
            //   },
            //   {
            //     "source": "26",
            //     "target": "11"
            //   },
            //   {
            //     "source": "26",
            //     "target": "16"
            //   },
            //   {
            //     "source": "26",
            //     "target": "24"
            //   },
            //   {
            //     "source": "26",
            //     "target": "25"
            //   },
            //   {
            //     "source": "27",
            //     "target": "11"
            //   },
            //   {
            //     "source": "27",
            //     "target": "23"
            //   },
            //   {
            //     "source": "27",
            //     "target": "24"
            //   },
            //   {
            //     "source": "27",
            //     "target": "25"
            //   },
            //   {
            //     "source": "27",
            //     "target": "26"
            //   },
            //   {
            //     "source": "28",
            //     "target": "11"
            //   },
            //   {
            //     "source": "28",
            //     "target": "27"
            //   },
            //   {
            //     "source": "29",
            //     "target": "11"
            //   },
            //   {
            //     "source": "29",
            //     "target": "23"
            //   },
            //   {
            //     "source": "29",
            //     "target": "27"
            //   },
            //   {
            //     "source": "30",
            //     "target": "23"
            //   },
            //   {
            //     "source": "31",
            //     "target": "11"
            //   },
            //   {
            //     "source": "31",
            //     "target": "23"
            //   },
            //   {
            //     "source": "31",
            //     "target": "27"
            //   },
            //   {
            //     "source": "31",
            //     "target": "30"
            //   },
            //   {
            //     "source": "32",
            //     "target": "11"
            //   },
            //   {
            //     "source": "33",
            //     "target": "11"
            //   },
            //   {
            //     "source": "33",
            //     "target": "27"
            //   },
            //   {
            //     "source": "34",
            //     "target": "11"
            //   },
            //   {
            //     "source": "34",
            //     "target": "29"
            //   },
            //   {
            //     "source": "35",
            //     "target": "11"
            //   },
            //   {
            //     "source": "35",
            //     "target": "29"
            //   },
            //   {
            //     "source": "35",
            //     "target": "34"
            //   },
            //   {
            //     "source": "36",
            //     "target": "11"
            //   },
            //   {
            //     "source": "36",
            //     "target": "29"
            //   },
            //   {
            //     "source": "36",
            //     "target": "34"
            //   },
            //   {
            //     "source": "36",
            //     "target": "35"
            //   },
            //   {
            //     "source": "37",
            //     "target": "11"
            //   },
            //   {
            //     "source": "37",
            //     "target": "29"
            //   },
            //   {
            //     "source": "37",
            //     "target": "34"
            //   },
            //   {
            //     "source": "37",
            //     "target": "35"
            //   },
            //   {
            //     "source": "37",
            //     "target": "36"
            //   },
            //   {
            //     "source": "38",
            //     "target": "11"
            //   },
            //   {
            //     "source": "38",
            //     "target": "29"
            //   },
            //   {
            //     "source": "38",
            //     "target": "34"
            //   },
            //   {
            //     "source": "38",
            //     "target": "35"
            //   },
            //   {
            //     "source": "38",
            //     "target": "36"
            //   },
            //   {
            //     "source": "38",
            //     "target": "37"
            //   },
            //   {
            //     "source": "39",
            //     "target": "25"
            //   },
            //   {
            //     "source": "40",
            //     "target": "25"
            //   },
            //   {
            //     "source": "41",
            //     "target": "24"
            //   },
            //   {
            //     "source": "41",
            //     "target": "25"
            //   },
            //   {
            //     "source": "42",
            //     "target": "24"
            //   },
            //   {
            //     "source": "42",
            //     "target": "25"
            //   },
            //   {
            //     "source": "42",
            //     "target": "41"
            //   },
            //   {
            //     "source": "43",
            //     "target": "11"
            //   },
            //   {
            //     "source": "43",
            //     "target": "26"
            //   },
            //   {
            //     "source": "43",
            //     "target": "27"
            //   },
            //   {
            //     "source": "44",
            //     "target": "11"
            //   },
            //   {
            //     "source": "44",
            //     "target": "28"
            //   },
            //   {
            //     "source": "45",
            //     "target": "28"
            //   },
            //   {
            //     "source": "47",
            //     "target": "46"
            //   },
            //   {
            //     "source": "48",
            //     "target": "11"
            //   },
            //   {
            //     "source": "48",
            //     "target": "25"
            //   },
            //   {
            //     "source": "48",
            //     "target": "27"
            //   },
            //   {
            //     "source": "48",
            //     "target": "47"
            //   },
            //   {
            //     "source": "49",
            //     "target": "11"
            //   },
            //   {
            //     "source": "49",
            //     "target": "26"
            //   },
            //   {
            //     "source": "50",
            //     "target": "24"
            //   },
            //   {
            //     "source": "50",
            //     "target": "49"
            //   },
            //   {
            //     "source": "51",
            //     "target": "11"
            //   },
            //   {
            //     "source": "51",
            //     "target": "26"
            //   },
            //   {
            //     "source": "51",
            //     "target": "49"
            //   },
            //   {
            //     "source": "52",
            //     "target": "39"
            //   },
            //   {
            //     "source": "52",
            //     "target": "51"
            //   },
            //   {
            //     "source": "53",
            //     "target": "51"
            //   },
            //   {
            //     "source": "54",
            //     "target": "26"
            //   },
            //   {
            //     "source": "54",
            //     "target": "49"
            //   },
            //   {
            //     "source": "54",
            //     "target": "51"
            //   },
            //   {
            //     "source": "55",
            //     "target": "11"
            //   },
            //   {
            //     "source": "55",
            //     "target": "16"
            //   },
            //   {
            //     "source": "55",
            //     "target": "25"
            //   },
            //   {
            //     "source": "55",
            //     "target": "26"
            //   },
            //   {
            //     "source": "55",
            //     "target": "39"
            //   },
            //   {
            //     "source": "55",
            //     "target": "41"
            //   },
            //   {
            //     "source": "55",
            //     "target": "48"
            //   },
            //   {
            //     "source": "55",
            //     "target": "49"
            //   },
            //   {
            //     "source": "55",
            //     "target": "51"
            //   },
            //   {
            //     "source": "55",
            //     "target": "54"
            //   },
            //   {
            //     "source": "56",
            //     "target": "49"
            //   },
            //   {
            //     "source": "56",
            //     "target": "55"
            //   },
            //   {
            //     "source": "57",
            //     "target": "41"
            //   },
            //   {
            //     "source": "57",
            //     "target": "48"
            //   },
            //   {
            //     "source": "57",
            //     "target": "55"
            //   },
            //   {
            //     "source": "58",
            //     "target": "11"
            //   },
            //   {
            //     "source": "58",
            //     "target": "27"
            //   },
            //   {
            //     "source": "58",
            //     "target": "48"
            //   },
            //   {
            //     "source": "58",
            //     "target": "55"
            //   },
            //   {
            //     "source": "58",
            //     "target": "57"
            //   },
            //   {
            //     "source": "59",
            //     "target": "48"
            //   },
            //   {
            //     "source": "59",
            //     "target": "55"
            //   },
            //   {
            //     "source": "59",
            //     "target": "57"
            //   },
            //   {
            //     "source": "59",
            //     "target": "58"
            //   },
            //   {
            //     "source": "60",
            //     "target": "48"
            //   },
            //   {
            //     "source": "60",
            //     "target": "58"
            //   },
            //   {
            //     "source": "60",
            //     "target": "59"
            //   },
            //   {
            //     "source": "61",
            //     "target": "48"
            //   },
            //   {
            //     "source": "61",
            //     "target": "55"
            //   },
            //   {
            //     "source": "61",
            //     "target": "57"
            //   },
            //   {
            //     "source": "61",
            //     "target": "58"
            //   },
            //   {
            //     "source": "61",
            //     "target": "59"
            //   },
            //   {
            //     "source": "61",
            //     "target": "60"
            //   },
            //   {
            //     "source": "62",
            //     "target": "41"
            //   },
            //   {
            //     "source": "62",
            //     "target": "48"
            //   },
            //   {
            //     "source": "62",
            //     "target": "55"
            //   },
            //   {
            //     "source": "62",
            //     "target": "57"
            //   },
            //   {
            //     "source": "62",
            //     "target": "58"
            //   },
            //   {
            //     "source": "62",
            //     "target": "59"
            //   },
            //   {
            //     "source": "62",
            //     "target": "60"
            //   },
            //   {
            //     "source": "62",
            //     "target": "61"
            //   },
            //   {
            //     "source": "63",
            //     "target": "48"
            //   },
            //   {
            //     "source": "63",
            //     "target": "55"
            //   },
            //   {
            //     "source": "63",
            //     "target": "57"
            //   },
            //   {
            //     "source": "63",
            //     "target": "58"
            //   },
            //   {
            //     "source": "63",
            //     "target": "59"
            //   },
            //   {
            //     "source": "63",
            //     "target": "60"
            //   },
            //   {
            //     "source": "63",
            //     "target": "61"
            //   },
            //   {
            //     "source": "63",
            //     "target": "62"
            //   },
            //   {
            //     "source": "64",
            //     "target": "11"
            //   },
            //   {
            //     "source": "64",
            //     "target": "48"
            //   },
            //   {
            //     "source": "64",
            //     "target": "55"
            //   },
            //   {
            //     "source": "64",
            //     "target": "57"
            //   },
            //   {
            //     "source": "64",
            //     "target": "58"
            //   },
            //   {
            //     "source": "64",
            //     "target": "59"
            //   },
            //   {
            //     "source": "64",
            //     "target": "60"
            //   },
            //   {
            //     "source": "64",
            //     "target": "61"
            //   },
            //   {
            //     "source": "64",
            //     "target": "62"
            //   },
            //   {
            //     "source": "64",
            //     "target": "63"
            //   },
            //   {
            //     "source": "65",
            //     "target": "48"
            //   },
            //   {
            //     "source": "65",
            //     "target": "55"
            //   },
            //   {
            //     "source": "65",
            //     "target": "57"
            //   },
            //   {
            //     "source": "65",
            //     "target": "58"
            //   },
            //   {
            //     "source": "65",
            //     "target": "59"
            //   },
            //   {
            //     "source": "65",
            //     "target": "60"
            //   },
            //   {
            //     "source": "65",
            //     "target": "61"
            //   },
            //   {
            //     "source": "65",
            //     "target": "62"
            //   },
            //   {
            //     "source": "65",
            //     "target": "63"
            //   },
            //   {
            //     "source": "65",
            //     "target": "64"
            //   },
            //   {
            //     "source": "66",
            //     "target": "48"
            //   },
            //   {
            //     "source": "66",
            //     "target": "58"
            //   },
            //   {
            //     "source": "66",
            //     "target": "59"
            //   },
            //   {
            //     "source": "66",
            //     "target": "60"
            //   },
            //   {
            //     "source": "66",
            //     "target": "61"
            //   },
            //   {
            //     "source": "66",
            //     "target": "62"
            //   },
            //   {
            //     "source": "66",
            //     "target": "63"
            //   },
            //   {
            //     "source": "66",
            //     "target": "64"
            //   },
            //   {
            //     "source": "66",
            //     "target": "65"
            //   },
            //   {
            //     "source": "67",
            //     "target": "57"
            //   },
            //   {
            //     "source": "68",
            //     "target": "11"
            //   },
            //   {
            //     "source": "68",
            //     "target": "24"
            //   },
            //   {
            //     "source": "68",
            //     "target": "25"
            //   },
            //   {
            //     "source": "68",
            //     "target": "27"
            //   },
            //   {
            //     "source": "68",
            //     "target": "41"
            //   },
            //   {
            //     "source": "68",
            //     "target": "48"
            //   },
            //   {
            //     "source": "69",
            //     "target": "11"
            //   },
            //   {
            //     "source": "69",
            //     "target": "24"
            //   },
            //   {
            //     "source": "69",
            //     "target": "25"
            //   },
            //   {
            //     "source": "69",
            //     "target": "27"
            //   },
            //   {
            //     "source": "69",
            //     "target": "41"
            //   },
            //   {
            //     "source": "69",
            //     "target": "48"
            //   },
            //   {
            //     "source": "69",
            //     "target": "68"
            //   },
            //   {
            //     "source": "70",
            //     "target": "11"
            //   },
            //   {
            //     "source": "70",
            //     "target": "24"
            //   },
            //   {
            //     "source": "70",
            //     "target": "25"
            //   },
            //   {
            //     "source": "70",
            //     "target": "27"
            //   },
            //   {
            //     "source": "70",
            //     "target": "41"
            //   },
            //   {
            //     "source": "70",
            //     "target": "58"
            //   },
            //   {
            //     "source": "70",
            //     "target": "68"
            //   },
            //   {
            //     "source": "70",
            //     "target": "69"
            //   },
            //   {
            //     "source": "71",
            //     "target": "11"
            //   },
            //   {
            //     "source": "71",
            //     "target": "25"
            //   },
            //   {
            //     "source": "71",
            //     "target": "27"
            //   },
            //   {
            //     "source": "71",
            //     "target": "41"
            //   },
            //   {
            //     "source": "71",
            //     "target": "48"
            //   },
            //   {
            //     "source": "71",
            //     "target": "68"
            //   },
            //   {
            //     "source": "71",
            //     "target": "69"
            //   },
            //   {
            //     "source": "71",
            //     "target": "70"
            //   },
            //   {
            //     "source": "72",
            //     "target": "11"
            //   },
            //   {
            //     "source": "72",
            //     "target": "26"
            //   },
            //   {
            //     "source": "72",
            //     "target": "27"
            //   },
            //   {
            //     "source": "73",
            //     "target": "48"
            //   },
            //   {
            //     "source": "74",
            //     "target": "48"
            //   },
            //   {
            //     "source": "74",
            //     "target": "73"
            //   },
            //   {
            //     "source": "75",
            //     "target": "25"
            //   },
            //   {
            //     "source": "75",
            //     "target": "41"
            //   },
            //   {
            //     "source": "75",
            //     "target": "48"
            //   },
            //   {
            //     "source": "75",
            //     "target": "68"
            //   },
            //   {
            //     "source": "75",
            //     "target": "69"
            //   },
            //   {
            //     "source": "75",
            //     "target": "70"
            //   },
            //   {
            //     "source": "75",
            //     "target": "71"
            //   },
            //   {
            //     "source": "76",
            //     "target": "48"
            //   },
            //   {
            //     "source": "76",
            //     "target": "58"
            //   },
            //   {
            //     "source": "76",
            //     "target": "62"
            //   },
            //   {
            //     "source": "76",
            //     "target": "63"
            //   },
            //   {
            //     "source": "76",
            //     "target": "64"
            //   },
            //   {
            //     "source": "76",
            //     "target": "65"
            //   },
            //   {
            //     "source": "76",
            //     "target": "66"
            //   }
            // ]

          }]
      })

      this.myChart2 = echarts.init(document.getElementById("main-chart2"))
      this.myChart2.setOption({
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph", // 关系图
            layout: "force", // 图布局类型为力导图
            symbolSize: 30, // 倘若该属性不在link里，则其表示节点的大小；否则即为线两端标记的大小
            roam: true, // 鼠标缩放功能
            categories: [
              {
                name: "0",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#DF4949"
                  }
                }
              }, {
                name: "1",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#293950"
                  }
                }
              }, {
                name: "2",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#A170DD"
                  }
                }
              },
              {
                name: "3",
                itemStyle: { // 可配置颜色
                  normal: {
                    color: "#E8B842"
                  }
                }
              }
            ],
            edgeSymbol: ["circle", "arrow"], // 关系两边的展现形式，也即图中线两端的展现形式。arrow为箭头
            edgeSymbolSize: [4, 10],
            force: {
              repulsion: 200, // 斥力大小
              edgeLength: 50 // 边长度
            },
            draggable: true,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0.2
            },
            label: {
              normal: {
                position: "inside",
                show: true,
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                }
              }
            },
            // data: [{"name": "风险地图", "id": 0, "category": 0, "symbolSize": 80}, {"name": "疏散路线", "id": 1, "category": 1, "symbolSize": 60}, {"name": "应对措施", "id": 2, "category": 1, "symbolSize": 60}, {"name": "脆弱性区域", "id": 3, "category": 1, "symbolSize": 60}, {"name": "重要区域", "id": 4, "category": 1, "symbolSize": 60}, {"name": "安全场所", "id": 5, "category": 1, "symbolSize": 60}, {"name": "危险源", "id": 6, "category": 1, "symbolSize": 60}, {"name": "安全出口", "id": 7, "category": 2, "symbolSize": 60}, {"name": "灭火器位置", "id": 8, "category": 2, "symbolSize": 60}, {"name": "消防栓位置", "id": 9, "category": 2, "symbolSize": 60}, {"name": "疏散方向", "id": 10, "category": 2, "symbolSize": 60}, {"name": "看图者位置", "id": 11, "category": 2, "symbolSize": 60}, {"name": "消除危险源", "id": 12, "category": 2, "symbolSize": 60}, {"name": "规避风险", "id": 13, "category": 2, "symbolSize": 60}, {"name": "保留风险", "id": 14, "category": 2, "symbolSize": 60}, {"name": "分担风险", "id": 15, "category": 2, "symbolSize": 60}, {"name": "改变后果", "id": 16, "category": 2, "symbolSize": 60}, {"name": "老旧房区域", "id": 17, "category": 2, "symbolSize": 60}, {"name": "人口密集区域", "id": 18, "category": 2, "symbolSize": 60}, {"name": "积水区域", "id": 19, "category": 2, "symbolSize": 60}, {"name": "市场", "id": 20, "category": 2, "symbolSize": 60}, {"name": "污水处理厂", "id": 21, "category": 2, "symbolSize": 60}, {"name": "历史文化建筑", "id": 22, "category": 2, "symbolSize": 60}, {"name": "垃圾填埋场", "id": 23, "category": 2, "symbolSize": 60}, {"name": "学校", "id": 24, "category": 2, "symbolSize": 60}, {"name": "敬老院", "id": 25, "category": 2, "symbolSize": 60}, {"name": "水厂", "id": 26, "category": 2, "symbolSize": 60}, {"name": "电厂", "id": 27, "category": 2, "symbolSize": 60}, {"name": "市政厅", "id": 28, "category": 2, "symbolSize": 60}, {"name": "变电站", "id": 29, "category": 2, "symbolSize": 60}, {"name": "疏散集合点", "id": 30, "category": 2, "symbolSize": 60}, {"name": "公安/派出所", "id": 31, "category": 2, "symbolSize": 60}, {"name": "医院", "id": 32, "category": 2, "symbolSize": 60}, {"name": "消防站", "id": 33, "category": 2, "symbolSize": 60}, {"name": "交通易发地", "id": 34, "category": 2, "symbolSize": 60}, {"name": "加油站", "id": 35, "category": 2, "symbolSize": 60}, {"name": "施工工地", "id": 36, "category": 2, "symbolSize": 60}, {"name": "高压线", "id": 37, "category": 2, "symbolSize": 60}, {"name": "河道", "id": 38, "category": 2, "symbolSize": 60}, {"name": 5, "id": 39, "category": 3}, {"name": 7, "id": 40, "category": 3}, {"name": 6, "id": 41, "category": 3}, {"name": 4, "id": 42, "category": 3}, {"name": 8, "id": 43, "category": 3}, {"name": 20, "id": 44, "category": 3}, {"name": 21, "id": 45, "category": 3}, {"name": 22, "id": 46, "category": 3}, {"name": 18, "id": 47, "category": 3}, {"name": 25, "id": 48, "category": 3}, {"name": 13, "id": 49, "category": 3}, {"name": 18, "id": 50, "category": 3}, {"name": 20, "id": 51, "category": 3}, {"name": 16, "id": 52, "category": 3}, {"name": 20, "id": 53, "category": 3}, {"name": 5, "id": 54, "category": 3}, {"name": 4, "id": 55, "category": 3}, {"name": 6, "id": 56, "category": 3}, {"name": 3, "id": 57, "category": 3}, {"name": 7, "id": 58, "category": 3}, {"name": 3, "id": 59, "category": 3}, {"name": 5, "id": 60, "category": 3}, {"name": 4, "id": 61, "category": 3}, {"name": 5, "id": 62, "category": 3}, {"name": 6, "id": 63, "category": 3}, {"name": 10, "id": 64, "category": 3}, {"name": 9, "id": 65, "category": 3}, {"name": 6, "id": 66, "category": 3}, {"name": 11, "id": 67, "category": 3}, {"name": 8, "id": 68, "category": 3}, {"name": 9, "id": 69, "category": 3}, {"name": 7, "id": 70, "category": 3}, {"name": 11, "id": 71, "category": 3}, {"name": 5, "id": 72, "category": 3}, {"name": 6, "id": 73, "category": 3}, {"name": 7, "id": 74, "category": 3}, {"name": 11, "id": 75, "category": 3}, {"name": 13, "id": 76, "category": 3}, {"name": 7, "id": 77, "category": 3}, {"name": 9, "id": 78, "category": 3}, {"name": 8, "id": 79, "category": 3}, {"name": 13, "id": 80, "category": 3}, {"name": 7, "id": 81, "category": 3}, {"name": 9, "id": 82, "category": 3}, {"name": 10, "id": 83, "category": 3}, {"name": 10, "id": 84, "category": 3}, {"name": 12, "id": 85, "category": 3}, {"name": 13, "id": 86, "category": 3}, {"name": 11, "id": 87, "category": 3}, {"name": 9, "id": 88, "category": 3}, {"name": 15, "id": 89, "category": 3}, {"name": 14, "id": 90, "category": 3}, {"name": 12, "id": 91, "category": 3}, {"name": 16, "id": 92, "category": 3}, {"name": 13, "id": 93, "category": 3}, {"name": 20, "id": 94, "category": 3}, {"name": 22, "id": 95, "category": 3}, {"name": 25, "id": 96, "category": 3}, {"name": 19, "id": 97, "category": 3}, {"name": 16, "id": 98, "category": 3}, {"name": 0, "id": 99, "category": 3}, {"name": 3, "id": 100, "category": 3}, {"name": 2, "id": 101, "category": 3}, {"name": 2, "id": 102, "category": 3}, {"name": 4, "id": 103, "category": 3}, {"name": 5, "id": 104, "category": 3}, {"name": 3, "id": 105, "category": 3}, {"name": 3, "id": 106, "category": 3}, {"name": 5, "id": 107, "category": 3}, {"name": 4, "id": 108, "category": 3}, {"name": 0, "id": 109, "category": 3}, {"name": 3, "id": 110, "category": 3}, {"name": 4, "id": 111, "category": 3}, {"name": 6, "id": 112, "category": 3}, {"name": 5, "id": 113, "category": 3}, {"name": 7, "id": 114, "category": 3}, {"name": 9, "id": 115, "category": 3}, {"name": 8, "id": 116, "category": 3}, {"name": 10, "id": 117, "category": 3}, {"name": 13, "id": 118, "category": 3}, {"name": 14, "id": 119, "category": 3}, {"name": 13, "id": 120, "category": 3}, {"name": 15, "id": 121, "category": 3}, {"name": 14, "id": 122, "category": 3}, {"name": 17, "id": 123, "category": 3}, {"name": 20, "id": 124, "category": 3}, {"name": 24, "id": 125, "category": 3}, {"name": 19, "id": 126, "category": 3}, {"name": 17, "id": 127, "category": 3}, {"name": 22, "id": 128, "category": 3}, {"name": 14, "id": 129, "category": 3}, {"name": 18, "id": 130, "category": 3}, {"name": 15, "id": 131, "category": 3}, {"name": 20, "id": 132, "category": 3}, {"name": 17, "id": 133, "category": 3}, {"name": 7, "id": 134, "category": 3}, {"name": 3, "id": 135, "category": 3}, {"name": 8, "id": 136, "category": 3}, {"name": 13, "id": 137, "category": 3}, {"name": 7, "id": 138, "category": 3}, {"name": 2, "id": 139, "category": 3}, {"name": 5, "id": 140, "category": 3}, {"name": 4, "id": 141, "category": 3}, {"name": 2, "id": 142, "category": 3}, {"name": 1, "id": 143, "category": 3}, {"name": 7, "id": 144, "category": 3}, {"name": 8, "id": 145, "category": 3}, {"name": 10, "id": 146, "category": 3}, {"name": 8, "id": 147, "category": 3}, {"name": 9, "id": 148, "category": 3}, {"name": 16, "id": 149, "category": 3}, {"name": 17, "id": 150, "category": 3}, {"name": 19, "id": 151, "category": 3}, {"name": 21, "id": 152, "category": 3}, {"name": 17, "id": 153, "category": 3}, {"name": 25, "id": 154, "category": 3}, {"name": 22, "id": 155, "category": 3}, {"name": 27, "id": 156, "category": 3}, {"name": 24, "id": 157, "category": 3}, {"name": 28, "id": 158, "category": 3}, {"name": 15, "id": 159, "category": 3}, {"name": 19, "id": 160, "category": 3}, {"name": 17, "id": 161, "category": 3}, {"name": 12, "id": 162, "category": 3}, {"name": 18, "id": 163, "category": 3}, {"name": 21, "id": 164, "category": 3}, {"name": 19, "id": 165, "category": 3}, {"name": 20, "id": 166, "category": 3}, {"name": 22, "id": 167, "category": 3}, {"name": 30, "id": 168, "category": 3}, {"name": 12, "id": 169, "category": 3}, {"name": 10, "id": 170, "category": 3}, {"name": 13, "id": 171, "category": 3}, {"name": 15, "id": 172, "category": 3}, {"name": 19, "id": 173, "category": 3}, {"name": 0, "id": 174, "category": 3}, {"name": 5, "id": 175, "category": 3}, {"name": 3, "id": 176, "category": 3}, {"name": 8, "id": 177, "category": 3}, {"name": 10, "id": 178, "category": 3}, {"name": 20, "id": 179, "category": 3}, {"name": 24, "id": 180, "category": 3}, {"name": 25, "id": 181, "category": 3}, {"name": 21, "id": 182, "category": 3}, {"name": 27, "id": 183, "category": 3}, {"name": 16, "id": 184, "category": 3}, {"name": 19, "id": 185, "category": 3}, {"name": 14, "id": 186, "category": 3}, {"name": 18, "id": 187, "category": 3}, {"name": 20, "id": 188, "category": 3}, {"name": 37, "id": 189, "category": 3}, {"name": 33, "id": 190, "category": 3}, {"name": 35, "id": 191, "category": 3}, {"name": 38, "id": 192, "category": 3}, {"name": 40, "id": 193, "category": 3}, {"name": 7, "id": 194, "category": 3}, {"name": 7, "id": 195, "category": 3}, {"name": 4, "id": 196, "category": 3}, {"name": 2, "id": 197, "category": 3}, {"name": 2, "id": 198, "category": 3}],
            data: [{"name": "风险地图", "id": 0, "category": 0, "symbolSize": 60}, {"name": "疏散路线", "id": 1, "category": 1, "symbolSize": 50}, {"name": "应对措施", "id": 2, "category": 1, "symbolSize": 50}, {"name": "脆弱性区域", "id": 3, "category": 1, "symbolSize": 50}, {"name": "重要区域", "id": 4, "category": 1, "symbolSize": 50}, {"name": "安全场所", "id": 5, "category": 1, "symbolSize": 50}, {"name": "危险源", "id": 6, "category": 1, "symbolSize": 50}, {"name": "安全出口", "id": 7, "category": 2, "symbolSize": 50}, {"name": "灭火器位置", "id": 8, "category": 2, "symbolSize": 50}, {"name": "消防栓位置", "id": 9, "category": 2, "symbolSize": 40}, {"name": "疏散方向", "id": 10, "category": 2, "symbolSize": 40}, {"name": "看图者位置", "id": 11, "category": 2, "symbolSize": 40}, {"name": "消除危险源", "id": 12, "category": 2, "symbolSize": 40}, {"name": "规避风险", "id": 13, "category": 2, "symbolSize": 40}, {"name": "保留风险", "id": 14, "category": 2, "symbolSize": 40}, {"name": "分担风险", "id": 15, "category": 2, "symbolSize": 40}, {"name": "改变后果", "id": 16, "category": 2, "symbolSize": 40}, {"name": "老旧房区域", "id": 17, "category": 2, "symbolSize": 40}, {"name": "人口密集区域", "id": 18, "category": 2, "symbolSize": 40}, {"name": "积水区域", "id": 19, "category": 2, "symbolSize": 40}, {"name": "市场", "id": 20, "category": 2, "symbolSize": 40}, {"name": "污水处理厂", "id": 21, "category": 2, "symbolSize": 40}, {"name": "历史文化建筑", "id": 22, "category": 2, "symbolSize": 40}, {"name": "垃圾填埋场", "id": 23, "category": 2, "symbolSize": 40}, {"name": "学校", "id": 24, "category": 2, "symbolSize": 40}, {"name": "敬老院", "id": 25, "category": 2, "symbolSize": 40}, {"name": "水厂", "id": 26, "category": 2, "symbolSize": 40}, {"name": "电厂", "id": 27, "category": 2, "symbolSize": 40}, {"name": "市政厅", "id": 28, "category": 2, "symbolSize": 40}, {"name": "变电站", "id": 29, "category": 2, "symbolSize": 40}, {"name": "疏散集合点", "id": 30, "category": 2, "symbolSize": 40}, {"name": "公安/派出所", "id": 31, "category": 2, "symbolSize": 40}, {"name": "医院", "id": 32, "category": 2, "symbolSize": 40}, {"name": "消防站", "id": 33, "category": 2, "symbolSize": 40}, {"name": "交通易发地", "id": 34, "category": 2, "symbolSize": 40}, {"name": "加油站", "id": 35, "category": 2, "symbolSize": 40}, {"name": "施工工地", "id": 36, "category": 2, "symbolSize": 40}, {"name": "高压线", "id": 37, "category": 2, "symbolSize": 40}, {"name": "河道", "id": 38, "category": 2, "symbolSize": 40}],
            links: [{"source": 0, "target": 1, "value": ""}, {"source": 0, "target": 2, "value": ""}, {"source": 0, "target": 3, "value": ""}, {"source": 0, "target": 4, "value": ""}, {"source": 0, "target": 5, "value": ""}, {"source": 0, "target": 6, "value": ""}, {"source": 1, "target": 7, "value": ""}, {"source": 1, "target": 8, "value": ""}, {"source": 1, "target": 9, "value": ""}, {"source": 1, "target": 10, "value": ""}, {"source": 1, "target": 11, "value": ""}, {"source": 2, "target": 12, "value": ""}, {"source": 2, "target": 13, "value": ""}, {"source": 2, "target": 14, "value": ""}, {"source": 2, "target": 15, "value": ""}, {"source": 2, "target": 16, "value": ""}, {"source": 3, "target": 17, "value": ""}, {"source": 3, "target": 18, "value": ""}, {"source": 3, "target": 19, "value": ""}, {"source": 3, "target": 20, "value": ""}, {"source": 4, "target": 21, "value": ""}, {"source": 4, "target": 22, "value": ""}, {"source": 4, "target": 23, "value": ""}, {"source": 4, "target": 24, "value": ""}, {"source": 4, "target": 25, "value": ""}, {"source": 4, "target": 26, "value": ""}, {"source": 4, "target": 27, "value": ""}, {"source": 4, "target": 28, "value": ""}, {"source": 4, "target": 29, "value": ""}, {"source": 5, "target": 30, "value": ""}, {"source": 5, "target": 31, "value": ""}, {"source": 5, "target": 32, "value": ""}, {"source": 5, "target": 33, "value": ""}, {"source": 6, "target": 34, "value": ""}, {"source": 6, "target": 35, "value": ""}, {"source": 6, "target": 36, "value": ""}, {"source": 6, "target": 37, "value": ""}, {"source": 6, "target": 38, "value": ""}, {"source": 7, "target": 39, "value": ""}, {"source": 7, "target": 40, "value": ""}, {"source": 7, "target": 41, "value": ""}, {"source": 7, "target": 42, "value": ""}, {"source": 7, "target": 43, "value": ""}, {"source": 8, "target": 44, "value": ""}, {"source": 8, "target": 45, "value": ""}, {"source": 8, "target": 46, "value": ""}, {"source": 8, "target": 47, "value": ""}, {"source": 8, "target": 48, "value": ""}, {"source": 9, "target": 49, "value": ""}, {"source": 9, "target": 50, "value": ""}, {"source": 9, "target": 51, "value": ""}, {"source": 9, "target": 52, "value": ""}, {"source": 9, "target": 53, "value": ""}, {"source": 10, "target": 54, "value": ""}, {"source": 10, "target": 55, "value": ""}, {"source": 10, "target": 56, "value": ""}, {"source": 10, "target": 57, "value": ""}, {"source": 10, "target": 58, "value": ""}, {"source": 11, "target": 59, "value": ""}, {"source": 11, "target": 60, "value": ""}, {"source": 11, "target": 61, "value": ""}, {"source": 11, "target": 62, "value": ""}, {"source": 11, "target": 63, "value": ""}, {"source": 12, "target": 64, "value": ""}, {"source": 12, "target": 65, "value": ""}, {"source": 12, "target": 66, "value": ""}, {"source": 12, "target": 67, "value": ""}, {"source": 12, "target": 68, "value": ""}, {"source": 13, "target": 69, "value": ""}, {"source": 13, "target": 70, "value": ""}, {"source": 13, "target": 71, "value": ""}, {"source": 13, "target": 72, "value": ""}, {"source": 13, "target": 73, "value": ""}, {"source": 14, "target": 74, "value": ""}, {"source": 14, "target": 75, "value": ""}, {"source": 14, "target": 76, "value": ""}, {"source": 14, "target": 77, "value": ""}, {"source": 14, "target": 78, "value": ""}, {"source": 15, "target": 79, "value": ""}, {"source": 15, "target": 80, "value": ""}, {"source": 15, "target": 81, "value": ""}, {"source": 15, "target": 82, "value": ""}, {"source": 15, "target": 83, "value": ""}, {"source": 16, "target": 84, "value": ""}, {"source": 16, "target": 85, "value": ""}, {"source": 16, "target": 86, "value": ""}, {"source": 16, "target": 87, "value": ""}, {"source": 16, "target": 88, "value": ""}, {"source": 17, "target": 89, "value": ""}, {"source": 17, "target": 90, "value": ""}, {"source": 17, "target": 91, "value": ""}, {"source": 17, "target": 92, "value": ""}, {"source": 17, "target": 93, "value": ""}, {"source": 18, "target": 94, "value": ""}, {"source": 18, "target": 95, "value": ""}, {"source": 18, "target": 96, "value": ""}, {"source": 18, "target": 97, "value": ""}, {"source": 18, "target": 98, "value": ""}, {"source": 19, "target": 99, "value": ""}, {"source": 19, "target": 100, "value": ""}, {"source": 19, "target": 101, "value": ""}, {"source": 19, "target": 102, "value": ""}, {"source": 19, "target": 103, "value": ""}, {"source": 20, "target": 104, "value": ""}, {"source": 20, "target": 105, "value": ""}, {"source": 20, "target": 106, "value": ""}, {"source": 20, "target": 107, "value": ""}, {"source": 20, "target": 108, "value": ""}, {"source": 21, "target": 109, "value": ""}, {"source": 21, "target": 110, "value": ""}, {"source": 21, "target": 111, "value": ""}, {"source": 21, "target": 112, "value": ""}, {"source": 21, "target": 113, "value": ""}, {"source": 22, "target": 114, "value": ""}, {"source": 22, "target": 115, "value": ""}, {"source": 22, "target": 116, "value": ""}, {"source": 22, "target": 117, "value": ""}, {"source": 22, "target": 118, "value": ""}, {"source": 23, "target": 119, "value": ""}, {"source": 23, "target": 120, "value": ""}, {"source": 23, "target": 121, "value": ""}, {"source": 23, "target": 122, "value": ""}, {"source": 23, "target": 123, "value": ""}, {"source": 24, "target": 124, "value": ""}, {"source": 24, "target": 125, "value": ""}, {"source": 24, "target": 126, "value": ""}, {"source": 24, "target": 127, "value": ""}, {"source": 24, "target": 128, "value": ""}, {"source": 25, "target": 129, "value": ""}, {"source": 25, "target": 130, "value": ""}, {"source": 25, "target": 131, "value": ""}, {"source": 25, "target": 132, "value": ""}, {"source": 25, "target": 133, "value": ""}, {"source": 26, "target": 134, "value": ""}, {"source": 26, "target": 135, "value": ""}, {"source": 26, "target": 136, "value": ""}, {"source": 26, "target": 137, "value": ""}, {"source": 26, "target": 138, "value": ""}, {"source": 27, "target": 139, "value": ""}, {"source": 27, "target": 140, "value": ""}, {"source": 27, "target": 141, "value": ""}, {"source": 27, "target": 142, "value": ""}, {"source": 27, "target": 143, "value": ""}, {"source": 28, "target": 144, "value": ""}, {"source": 28, "target": 145, "value": ""}, {"source": 28, "target": 146, "value": ""}, {"source": 28, "target": 147, "value": ""}, {"source": 28, "target": 148, "value": ""}, {"source": 29, "target": 149, "value": ""}, {"source": 29, "target": 150, "value": ""}, {"source": 29, "target": 151, "value": ""}, {"source": 29, "target": 152, "value": ""}, {"source": 29, "target": 153, "value": ""}, {"source": 30, "target": 154, "value": ""}, {"source": 30, "target": 155, "value": ""}, {"source": 30, "target": 156, "value": ""}, {"source": 30, "target": 157, "value": ""}, {"source": 30, "target": 158, "value": ""}, {"source": 31, "target": 159, "value": ""}, {"source": 31, "target": 160, "value": ""}, {"source": 31, "target": 161, "value": ""}, {"source": 31, "target": 162, "value": ""}, {"source": 31, "target": 163, "value": ""}, {"source": 32, "target": 164, "value": ""}, {"source": 32, "target": 165, "value": ""}, {"source": 32, "target": 166, "value": ""}, {"source": 32, "target": 167, "value": ""}, {"source": 32, "target": 168, "value": ""}, {"source": 33, "target": 169, "value": ""}, {"source": 33, "target": 170, "value": ""}, {"source": 33, "target": 171, "value": ""}, {"source": 33, "target": 172, "value": ""}, {"source": 33, "target": 173, "value": ""}, {"source": 34, "target": 174, "value": ""}, {"source": 34, "target": 175, "value": ""}, {"source": 34, "target": 176, "value": ""}, {"source": 34, "target": 177, "value": ""}, {"source": 34, "target": 178, "value": ""}, {"source": 35, "target": 179, "value": ""}, {"source": 35, "target": 180, "value": ""}, {"source": 35, "target": 181, "value": ""}, {"source": 35, "target": 182, "value": ""}, {"source": 35, "target": 183, "value": ""}, {"source": 36, "target": 184, "value": ""}, {"source": 36, "target": 185, "value": ""}, {"source": 36, "target": 186, "value": ""}, {"source": 36, "target": 187, "value": ""}, {"source": 36, "target": 188, "value": ""}, {"source": 37, "target": 189, "value": ""}, {"source": 37, "target": 190, "value": ""}, {"source": 37, "target": 191, "value": ""}, {"source": 37, "target": 192, "value": ""}, {"source": 37, "target": 193, "value": ""}, {"source": 38, "target": 194, "value": ""}, {"source": 38, "target": 195, "value": ""}, {"source": 38, "target": 196, "value": ""}, {"source": 38, "target": 197, "value": ""}, {"source": 38, "target": 198, "value": ""}]
            // data: [{
            //   "id": "0",
            //   "name": "Myriel",
            //   "symbolSize": 19.12381,
            //   "x": -266.82776,
            //   "y": 299.6904,
            //   "value": 28.685715,
            //   "category": 0
            // },
            // {
            //   "id": "1",
            //   "name": "Napoleon",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -418.08344,
            //   "y": 446.8853,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "2",
            //   "name": "MlleBaptistine",
            //   "symbolSize": 6.323809333333333,
            //   "x": -212.76357,
            //   "y": 245.29176,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "3",
            //   "name": "MmeMagloire",
            //   "symbolSize": 6.323809333333333,
            //   "x": -242.82404,
            //   "y": 235.26283,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "4",
            //   "name": "CountessDeLo",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -379.30386,
            //   "y": 429.06424,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "5",
            //   "name": "Geborand",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -417.26337,
            //   "y": 406.03506,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "6",
            //   "name": "Champtercier",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -332.6012,
            //   "y": 485.16974,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "7",
            //   "name": "Cravatte",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -382.69568,
            //   "y": 475.09113,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "8",
            //   "name": "Count",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -320.384,
            //   "y": 387.17325,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "9",
            //   "name": "OldMan",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -344.39832,
            //   "y": 451.16772,
            //   "value": 4,
            //   "category": 0
            // },
            // {
            //   "id": "10",
            //   "name": "Labarre",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -89.34107,
            //   "y": 234.56128,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "11",
            //   "name": "Valjean",
            //   "symbolSize": 66.66666666666667,
            //   "x": -87.93029,
            //   "y": -6.8120565,
            //   "value": 100,
            //   "category": 1
            // },
            // {
            //   "id": "12",
            //   "name": "Marguerite",
            //   "symbolSize": 4.495239333333333,
            //   "x": -339.77908,
            //   "y": -184.69139,
            //   "value": 6.742859,
            //   "category": 1
            // },
            // {
            //   "id": "13",
            //   "name": "MmeDeR",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -194.31313,
            //   "y": 178.55301,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "14",
            //   "name": "Isabeau",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -158.05168,
            //   "y": 201.99768,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "15",
            //   "name": "Gervais",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -127.701546,
            //   "y": 242.55057,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "16",
            //   "name": "Tholomyes",
            //   "symbolSize": 17.295237333333333,
            //   "x": -385.2226,
            //   "y": -393.5572,
            //   "value": 25.942856,
            //   "category": 2
            // },
            // {
            //   "id": "17",
            //   "name": "Listolier",
            //   "symbolSize": 13.638097333333334,
            //   "x": -516.55884,
            //   "y": -393.98975,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "18",
            //   "name": "Fameuil",
            //   "symbolSize": 13.638097333333334,
            //   "x": -464.79382,
            //   "y": -493.57944,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "19",
            //   "name": "Blacheville",
            //   "symbolSize": 13.638097333333334,
            //   "x": -515.1624,
            //   "y": -456.9891,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "20",
            //   "name": "Favourite",
            //   "symbolSize": 13.638097333333334,
            //   "x": -408.12122,
            //   "y": -464.5048,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "21",
            //   "name": "Dahlia",
            //   "symbolSize": 13.638097333333334,
            //   "x": -456.44113,
            //   "y": -425.13303,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "22",
            //   "name": "Zephine",
            //   "symbolSize": 13.638097333333334,
            //   "x": -459.1107,
            //   "y": -362.5133,
            //   "value": 20.457146,
            //   "category": 2
            // },
            // {
            //   "id": "23",
            //   "name": "Fantine",
            //   "symbolSize": 28.266666666666666,
            //   "x": -313.42786,
            //   "y": -289.44803,
            //   "value": 42.4,
            //   "category": 2
            // },
            // {
            //   "id": "24",
            //   "name": "MmeThenardier",
            //   "symbolSize": 20.95238266666667,
            //   "x": 4.6313396,
            //   "y": -273.8517,
            //   "value": 31.428574,
            //   "category": 7
            // },
            // {
            //   "id": "25",
            //   "name": "Thenardier",
            //   "symbolSize": 30.095235333333335,
            //   "x": 82.80825,
            //   "y": -203.1144,
            //   "value": 45.142853,
            //   "category": 7
            // },
            // {
            //   "id": "26",
            //   "name": "Cosette",
            //   "symbolSize": 20.95238266666667,
            //   "x": 78.64646,
            //   "y": -31.512747,
            //   "value": 31.428574,
            //   "category": 6
            // },
            // {
            //   "id": "27",
            //   "name": "Javert",
            //   "symbolSize": 31.923806666666668,
            //   "x": -81.46074,
            //   "y": -204.20204,
            //   "value": 47.88571,
            //   "category": 7
            // },
            // {
            //   "id": "28",
            //   "name": "Fauchelevent",
            //   "symbolSize": 8.152382000000001,
            //   "x": -225.73984,
            //   "y": 82.41631,
            //   "value": 12.228573,
            //   "category": 4
            // },
            // {
            //   "id": "29",
            //   "name": "Bamatabois",
            //   "symbolSize": 15.466666666666667,
            //   "x": -385.6842,
            //   "y": -20.206686,
            //   "value": 23.2,
            //   "category": 3
            // },
            // {
            //   "id": "30",
            //   "name": "Perpetue",
            //   "symbolSize": 4.495239333333333,
            //   "x": -403.92447,
            //   "y": -197.69823,
            //   "value": 6.742859,
            //   "category": 2
            // },
            // {
            //   "id": "31",
            //   "name": "Simplice",
            //   "symbolSize": 8.152382000000001,
            //   "x": -281.4253,
            //   "y": -158.45137,
            //   "value": 12.228573,
            //   "category": 2
            // },
            // {
            //   "id": "32",
            //   "name": "Scaufflaire",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -122.41348,
            //   "y": 210.37503,
            //   "value": 4,
            //   "category": 1
            // },
            // {
            //   "id": "33",
            //   "name": "Woman1",
            //   "symbolSize": 4.495239333333333,
            //   "x": -234.6001,
            //   "y": -113.15067,
            //   "value": 6.742859,
            //   "category": 1
            // },
            // {
            //   "id": "34",
            //   "name": "Judge",
            //   "symbolSize": 11.809524666666666,
            //   "x": -387.84915,
            //   "y": 58.7059,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "35",
            //   "name": "Champmathieu",
            //   "symbolSize": 11.809524666666666,
            //   "x": -338.2307,
            //   "y": 87.48405,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "36",
            //   "name": "Brevet",
            //   "symbolSize": 11.809524666666666,
            //   "x": -453.26874,
            //   "y": 58.94648,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "37",
            //   "name": "Chenildieu",
            //   "symbolSize": 11.809524666666666,
            //   "x": -386.44904,
            //   "y": 140.05937,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "38",
            //   "name": "Cochepaille",
            //   "symbolSize": 11.809524666666666,
            //   "x": -446.7876,
            //   "y": 123.38005,
            //   "value": 17.714287,
            //   "category": 3
            // },
            // {
            //   "id": "39",
            //   "name": "Pontmercy",
            //   "symbolSize": 6.323809333333333,
            //   "x": 336.49738,
            //   "y": -269.55914,
            //   "value": 9.485714,
            //   "category": 6
            // },
            // {
            //   "id": "40",
            //   "name": "Boulatruelle",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 29.187843,
            //   "y": -460.13132,
            //   "value": 4,
            //   "category": 7
            // },
            // {
            //   "id": "41",
            //   "name": "Eponine",
            //   "symbolSize": 20.95238266666667,
            //   "x": 238.36697,
            //   "y": -210.00926,
            //   "value": 31.428574,
            //   "category": 7
            // },
            // {
            //   "id": "42",
            //   "name": "Anzelma",
            //   "symbolSize": 6.323809333333333,
            //   "x": 189.69513,
            //   "y": -346.50662,
            //   "value": 9.485714,
            //   "category": 7
            // },
            // {
            //   "id": "43",
            //   "name": "Woman2",
            //   "symbolSize": 6.323809333333333,
            //   "x": -187.00418,
            //   "y": -145.02663,
            //   "value": 9.485714,
            //   "category": 6
            // },
            // {
            //   "id": "44",
            //   "name": "MotherInnocent",
            //   "symbolSize": 4.495239333333333,
            //   "x": -252.99521,
            //   "y": 129.87549,
            //   "value": 6.742859,
            //   "category": 4
            // },
            // {
            //   "id": "45",
            //   "name": "Gribier",
            //   "symbolSize": 2.6666666666666665,
            //   "x": -296.07935,
            //   "y": 163.11964,
            //   "value": 4,
            //   "category": 4
            // },
            // {
            //   "id": "46",
            //   "name": "Jondrette",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 550.3201,
            //   "y": 522.4031,
            //   "value": 4,
            //   "category": 5
            // },
            // {
            //   "id": "47",
            //   "name": "MmeBurgon",
            //   "symbolSize": 4.495239333333333,
            //   "x": 488.13535,
            //   "y": 356.8573,
            //   "value": 6.742859,
            //   "category": 5
            // },
            // {
            //   "id": "48",
            //   "name": "Gavroche",
            //   "symbolSize": 41.06667066666667,
            //   "x": 387.89572,
            //   "y": 110.462326,
            //   "value": 61.600006,
            //   "category": 8
            // },
            // {
            //   "id": "49",
            //   "name": "Gillenormand",
            //   "symbolSize": 13.638097333333334,
            //   "x": 126.4831,
            //   "y": 68.10622,
            //   "value": 20.457146,
            //   "category": 6
            // },
            // {
            //   "id": "50",
            //   "name": "Magnon",
            //   "symbolSize": 4.495239333333333,
            //   "x": 127.07365,
            //   "y": -113.05923,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "51",
            //   "name": "MlleGillenormand",
            //   "symbolSize": 13.638097333333334,
            //   "x": 162.63559,
            //   "y": 117.6565,
            //   "value": 20.457146,
            //   "category": 6
            // },
            // {
            //   "id": "52",
            //   "name": "MmePontmercy",
            //   "symbolSize": 4.495239333333333,
            //   "x": 353.66415,
            //   "y": -205.89165,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "53",
            //   "name": "MlleVaubois",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 165.43939,
            //   "y": 339.7736,
            //   "value": 4,
            //   "category": 6
            // },
            // {
            //   "id": "54",
            //   "name": "LtGillenormand",
            //   "symbolSize": 8.152382000000001,
            //   "x": 137.69348,
            //   "y": 196.1069,
            //   "value": 12.228573,
            //   "category": 6
            // },
            // {
            //   "id": "55",
            //   "name": "Marius",
            //   "symbolSize": 35.58095333333333,
            //   "x": 206.44687,
            //   "y": -13.805411,
            //   "value": 53.37143,
            //   "category": 6
            // },
            // {
            //   "id": "56",
            //   "name": "BaronessT",
            //   "symbolSize": 4.495239333333333,
            //   "x": 194.82993,
            //   "y": 224.78036,
            //   "value": 6.742859,
            //   "category": 6
            // },
            // {
            //   "id": "57",
            //   "name": "Mabeuf",
            //   "symbolSize": 20.95238266666667,
            //   "x": 597.6618,
            //   "y": 135.18481,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "58",
            //   "name": "Enjolras",
            //   "symbolSize": 28.266666666666666,
            //   "x": 355.78366,
            //   "y": -74.882454,
            //   "value": 42.4,
            //   "category": 8
            // },
            // {
            //   "id": "59",
            //   "name": "Combeferre",
            //   "symbolSize": 20.95238266666667,
            //   "x": 515.2961,
            //   "y": -46.167564,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "60",
            //   "name": "Prouvaire",
            //   "symbolSize": 17.295237333333333,
            //   "x": 614.29285,
            //   "y": -69.3104,
            //   "value": 25.942856,
            //   "category": 8
            // },
            // {
            //   "id": "61",
            //   "name": "Feuilly",
            //   "symbolSize": 20.95238266666667,
            //   "x": 550.1917,
            //   "y": -128.17537,
            //   "value": 31.428574,
            //   "category": 8
            // },
            // {
            //   "id": "62",
            //   "name": "Courfeyrac",
            //   "symbolSize": 24.609526666666667,
            //   "x": 436.17184,
            //   "y": -12.7286825,
            //   "value": 36.91429,
            //   "category": 8
            // },
            // {
            //   "id": "63",
            //   "name": "Bahorel",
            //   "symbolSize": 22.780953333333333,
            //   "x": 602.55225,
            //   "y": 16.421427,
            //   "value": 34.17143,
            //   "category": 8
            // },
            // {
            //   "id": "64",
            //   "name": "Bossuet",
            //   "symbolSize": 24.609526666666667,
            //   "x": 455.81955,
            //   "y": -115.45826,
            //   "value": 36.91429,
            //   "category": 8
            // },
            // {
            //   "id": "65",
            //   "name": "Joly",
            //   "symbolSize": 22.780953333333333,
            //   "x": 516.40784,
            //   "y": 47.242233,
            //   "value": 34.17143,
            //   "category": 8
            // },
            // {
            //   "id": "66",
            //   "name": "Grantaire",
            //   "symbolSize": 19.12381,
            //   "x": 646.4313,
            //   "y": -151.06331,
            //   "value": 28.685715,
            //   "category": 8
            // },
            // {
            //   "id": "67",
            //   "name": "MotherPlutarch",
            //   "symbolSize": 2.6666666666666665,
            //   "x": 668.9568,
            //   "y": 204.65488,
            //   "value": 4,
            //   "category": 8
            // },
            // {
            //   "id": "68",
            //   "name": "Gueulemer",
            //   "symbolSize": 19.12381,
            //   "x": 78.4799,
            //   "y": -347.15146,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "69",
            //   "name": "Babet",
            //   "symbolSize": 19.12381,
            //   "x": 150.35959,
            //   "y": -298.50797,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "70",
            //   "name": "Claquesous",
            //   "symbolSize": 19.12381,
            //   "x": 137.3717,
            //   "y": -410.2809,
            //   "value": 28.685715,
            //   "category": 7
            // },
            // {
            //   "id": "71",
            //   "name": "Montparnasse",
            //   "symbolSize": 17.295237333333333,
            //   "x": 234.87747,
            //   "y": -400.85983,
            //   "value": 25.942856,
            //   "category": 7
            // },
            // {
            //   "id": "72",
            //   "name": "Toussaint",
            //   "symbolSize": 6.323809333333333,
            //   "x": 40.942253,
            //   "y": 113.78272,
            //   "value": 9.485714,
            //   "category": 1
            // },
            // {
            //   "id": "73",
            //   "name": "Child1",
            //   "symbolSize": 4.495239333333333,
            //   "x": 437.939,
            //   "y": 291.58234,
            //   "value": 6.742859,
            //   "category": 8
            // },
            // {
            //   "id": "74",
            //   "name": "Child2",
            //   "symbolSize": 4.495239333333333,
            //   "x": 466.04922,
            //   "y": 283.3606,
            //   "value": 6.742859,
            //   "category": 8
            // },
            // {
            //   "id": "75",
            //   "name": "Brujon",
            //   "symbolSize": 13.638097333333334,
            //   "x": 238.79364,
            //   "y": -314.06345,
            //   "value": 20.457146,
            //   "category": 7
            // },
            // {
            //   "id": "76",
            //   "name": "MmeHucheloup",
            //   "symbolSize": 13.638097333333334,
            //   "x": 712.18353,
            //   "y": 4.8131495,
            //   "value": 20.457146,
            //   "category": 8
            // }],
            // links: [
            //   {
            //     "source": "1",
            //     "target": "0"
            //   },
            //   {
            //     "source": "2",
            //     "target": "0"
            //   },
            //   {
            //     "source": "3",
            //     "target": "0"
            //   },
            //   {
            //     "source": "3",
            //     "target": "2"
            //   },
            //   {
            //     "source": "4",
            //     "target": "0"
            //   },
            //   {
            //     "source": "5",
            //     "target": "0"
            //   },
            //   {
            //     "source": "6",
            //     "target": "0"
            //   },
            //   {
            //     "source": "7",
            //     "target": "0"
            //   },
            //   {
            //     "source": "8",
            //     "target": "0"
            //   },
            //   {
            //     "source": "9",
            //     "target": "0"
            //   },
            //   {
            //     "source": "11",
            //     "target": "0"
            //   },
            //   {
            //     "source": "11",
            //     "target": "2"
            //   },
            //   {
            //     "source": "11",
            //     "target": "3"
            //   },
            //   {
            //     "source": "11",
            //     "target": "10"
            //   },
            //   {
            //     "source": "12",
            //     "target": "11"
            //   },
            //   {
            //     "source": "13",
            //     "target": "11"
            //   },
            //   {
            //     "source": "14",
            //     "target": "11"
            //   },
            //   {
            //     "source": "15",
            //     "target": "11"
            //   },
            //   {
            //     "source": "17",
            //     "target": "16"
            //   },
            //   {
            //     "source": "18",
            //     "target": "16"
            //   },
            //   {
            //     "source": "18",
            //     "target": "17"
            //   },
            //   {
            //     "source": "19",
            //     "target": "16"
            //   },
            //   {
            //     "source": "19",
            //     "target": "17"
            //   },
            //   {
            //     "source": "19",
            //     "target": "18"
            //   },
            //   {
            //     "source": "20",
            //     "target": "16"
            //   },
            //   {
            //     "source": "20",
            //     "target": "17"
            //   },
            //   {
            //     "source": "20",
            //     "target": "18"
            //   },
            //   {
            //     "source": "20",
            //     "target": "19"
            //   },
            //   {
            //     "source": "21",
            //     "target": "16"
            //   },
            //   {
            //     "source": "21",
            //     "target": "17"
            //   },
            //   {
            //     "source": "21",
            //     "target": "18"
            //   },
            //   {
            //     "source": "21",
            //     "target": "19"
            //   },
            //   {
            //     "source": "21",
            //     "target": "20"
            //   },
            //   {
            //     "source": "22",
            //     "target": "16"
            //   },
            //   {
            //     "source": "22",
            //     "target": "17"
            //   },
            //   {
            //     "source": "22",
            //     "target": "18"
            //   },
            //   {
            //     "source": "22",
            //     "target": "19"
            //   },
            //   {
            //     "source": "22",
            //     "target": "20"
            //   },
            //   {
            //     "source": "22",
            //     "target": "21"
            //   },
            //   {
            //     "source": "23",
            //     "target": "11"
            //   },
            //   {
            //     "source": "23",
            //     "target": "12"
            //   },
            //   {
            //     "source": "23",
            //     "target": "16"
            //   },
            //   {
            //     "source": "23",
            //     "target": "17"
            //   },
            //   {
            //     "source": "23",
            //     "target": "18"
            //   },
            //   {
            //     "source": "23",
            //     "target": "19"
            //   },
            //   {
            //     "source": "23",
            //     "target": "20"
            //   },
            //   {
            //     "source": "23",
            //     "target": "21"
            //   },
            //   {
            //     "source": "23",
            //     "target": "22"
            //   },
            //   {
            //     "source": "24",
            //     "target": "11"
            //   },
            //   {
            //     "source": "24",
            //     "target": "23"
            //   },
            //   {
            //     "source": "25",
            //     "target": "11"
            //   },
            //   {
            //     "source": "25",
            //     "target": "23"
            //   },
            //   {
            //     "source": "25",
            //     "target": "24"
            //   },
            //   {
            //     "source": "26",
            //     "target": "11"
            //   },
            //   {
            //     "source": "26",
            //     "target": "16"
            //   },
            //   {
            //     "source": "26",
            //     "target": "24"
            //   },
            //   {
            //     "source": "26",
            //     "target": "25"
            //   },
            //   {
            //     "source": "27",
            //     "target": "11"
            //   },
            //   {
            //     "source": "27",
            //     "target": "23"
            //   },
            //   {
            //     "source": "27",
            //     "target": "24"
            //   },
            //   {
            //     "source": "27",
            //     "target": "25"
            //   },
            //   {
            //     "source": "27",
            //     "target": "26"
            //   },
            //   {
            //     "source": "28",
            //     "target": "11"
            //   },
            //   {
            //     "source": "28",
            //     "target": "27"
            //   },
            //   {
            //     "source": "29",
            //     "target": "11"
            //   },
            //   {
            //     "source": "29",
            //     "target": "23"
            //   },
            //   {
            //     "source": "29",
            //     "target": "27"
            //   },
            //   {
            //     "source": "30",
            //     "target": "23"
            //   },
            //   {
            //     "source": "31",
            //     "target": "11"
            //   },
            //   {
            //     "source": "31",
            //     "target": "23"
            //   },
            //   {
            //     "source": "31",
            //     "target": "27"
            //   },
            //   {
            //     "source": "31",
            //     "target": "30"
            //   },
            //   {
            //     "source": "32",
            //     "target": "11"
            //   },
            //   {
            //     "source": "33",
            //     "target": "11"
            //   },
            //   {
            //     "source": "33",
            //     "target": "27"
            //   },
            //   {
            //     "source": "34",
            //     "target": "11"
            //   },
            //   {
            //     "source": "34",
            //     "target": "29"
            //   },
            //   {
            //     "source": "35",
            //     "target": "11"
            //   },
            //   {
            //     "source": "35",
            //     "target": "29"
            //   },
            //   {
            //     "source": "35",
            //     "target": "34"
            //   },
            //   {
            //     "source": "36",
            //     "target": "11"
            //   },
            //   {
            //     "source": "36",
            //     "target": "29"
            //   },
            //   {
            //     "source": "36",
            //     "target": "34"
            //   },
            //   {
            //     "source": "36",
            //     "target": "35"
            //   },
            //   {
            //     "source": "37",
            //     "target": "11"
            //   },
            //   {
            //     "source": "37",
            //     "target": "29"
            //   },
            //   {
            //     "source": "37",
            //     "target": "34"
            //   },
            //   {
            //     "source": "37",
            //     "target": "35"
            //   },
            //   {
            //     "source": "37",
            //     "target": "36"
            //   },
            //   {
            //     "source": "38",
            //     "target": "11"
            //   },
            //   {
            //     "source": "38",
            //     "target": "29"
            //   },
            //   {
            //     "source": "38",
            //     "target": "34"
            //   },
            //   {
            //     "source": "38",
            //     "target": "35"
            //   },
            //   {
            //     "source": "38",
            //     "target": "36"
            //   },
            //   {
            //     "source": "38",
            //     "target": "37"
            //   },
            //   {
            //     "source": "39",
            //     "target": "25"
            //   },
            //   {
            //     "source": "40",
            //     "target": "25"
            //   },
            //   {
            //     "source": "41",
            //     "target": "24"
            //   },
            //   {
            //     "source": "41",
            //     "target": "25"
            //   },
            //   {
            //     "source": "42",
            //     "target": "24"
            //   },
            //   {
            //     "source": "42",
            //     "target": "25"
            //   },
            //   {
            //     "source": "42",
            //     "target": "41"
            //   },
            //   {
            //     "source": "43",
            //     "target": "11"
            //   },
            //   {
            //     "source": "43",
            //     "target": "26"
            //   },
            //   {
            //     "source": "43",
            //     "target": "27"
            //   },
            //   {
            //     "source": "44",
            //     "target": "11"
            //   },
            //   {
            //     "source": "44",
            //     "target": "28"
            //   },
            //   {
            //     "source": "45",
            //     "target": "28"
            //   },
            //   {
            //     "source": "47",
            //     "target": "46"
            //   },
            //   {
            //     "source": "48",
            //     "target": "11"
            //   },
            //   {
            //     "source": "48",
            //     "target": "25"
            //   },
            //   {
            //     "source": "48",
            //     "target": "27"
            //   },
            //   {
            //     "source": "48",
            //     "target": "47"
            //   },
            //   {
            //     "source": "49",
            //     "target": "11"
            //   },
            //   {
            //     "source": "49",
            //     "target": "26"
            //   },
            //   {
            //     "source": "50",
            //     "target": "24"
            //   },
            //   {
            //     "source": "50",
            //     "target": "49"
            //   },
            //   {
            //     "source": "51",
            //     "target": "11"
            //   },
            //   {
            //     "source": "51",
            //     "target": "26"
            //   },
            //   {
            //     "source": "51",
            //     "target": "49"
            //   },
            //   {
            //     "source": "52",
            //     "target": "39"
            //   },
            //   {
            //     "source": "52",
            //     "target": "51"
            //   },
            //   {
            //     "source": "53",
            //     "target": "51"
            //   },
            //   {
            //     "source": "54",
            //     "target": "26"
            //   },
            //   {
            //     "source": "54",
            //     "target": "49"
            //   },
            //   {
            //     "source": "54",
            //     "target": "51"
            //   },
            //   {
            //     "source": "55",
            //     "target": "11"
            //   },
            //   {
            //     "source": "55",
            //     "target": "16"
            //   },
            //   {
            //     "source": "55",
            //     "target": "25"
            //   },
            //   {
            //     "source": "55",
            //     "target": "26"
            //   },
            //   {
            //     "source": "55",
            //     "target": "39"
            //   },
            //   {
            //     "source": "55",
            //     "target": "41"
            //   },
            //   {
            //     "source": "55",
            //     "target": "48"
            //   },
            //   {
            //     "source": "55",
            //     "target": "49"
            //   },
            //   {
            //     "source": "55",
            //     "target": "51"
            //   },
            //   {
            //     "source": "55",
            //     "target": "54"
            //   },
            //   {
            //     "source": "56",
            //     "target": "49"
            //   },
            //   {
            //     "source": "56",
            //     "target": "55"
            //   },
            //   {
            //     "source": "57",
            //     "target": "41"
            //   },
            //   {
            //     "source": "57",
            //     "target": "48"
            //   },
            //   {
            //     "source": "57",
            //     "target": "55"
            //   },
            //   {
            //     "source": "58",
            //     "target": "11"
            //   },
            //   {
            //     "source": "58",
            //     "target": "27"
            //   },
            //   {
            //     "source": "58",
            //     "target": "48"
            //   },
            //   {
            //     "source": "58",
            //     "target": "55"
            //   },
            //   {
            //     "source": "58",
            //     "target": "57"
            //   },
            //   {
            //     "source": "59",
            //     "target": "48"
            //   },
            //   {
            //     "source": "59",
            //     "target": "55"
            //   },
            //   {
            //     "source": "59",
            //     "target": "57"
            //   },
            //   {
            //     "source": "59",
            //     "target": "58"
            //   },
            //   {
            //     "source": "60",
            //     "target": "48"
            //   },
            //   {
            //     "source": "60",
            //     "target": "58"
            //   },
            //   {
            //     "source": "60",
            //     "target": "59"
            //   },
            //   {
            //     "source": "61",
            //     "target": "48"
            //   },
            //   {
            //     "source": "61",
            //     "target": "55"
            //   },
            //   {
            //     "source": "61",
            //     "target": "57"
            //   },
            //   {
            //     "source": "61",
            //     "target": "58"
            //   },
            //   {
            //     "source": "61",
            //     "target": "59"
            //   },
            //   {
            //     "source": "61",
            //     "target": "60"
            //   },
            //   {
            //     "source": "62",
            //     "target": "41"
            //   },
            //   {
            //     "source": "62",
            //     "target": "48"
            //   },
            //   {
            //     "source": "62",
            //     "target": "55"
            //   },
            //   {
            //     "source": "62",
            //     "target": "57"
            //   },
            //   {
            //     "source": "62",
            //     "target": "58"
            //   },
            //   {
            //     "source": "62",
            //     "target": "59"
            //   },
            //   {
            //     "source": "62",
            //     "target": "60"
            //   },
            //   {
            //     "source": "62",
            //     "target": "61"
            //   },
            //   {
            //     "source": "63",
            //     "target": "48"
            //   },
            //   {
            //     "source": "63",
            //     "target": "55"
            //   },
            //   {
            //     "source": "63",
            //     "target": "57"
            //   },
            //   {
            //     "source": "63",
            //     "target": "58"
            //   },
            //   {
            //     "source": "63",
            //     "target": "59"
            //   },
            //   {
            //     "source": "63",
            //     "target": "60"
            //   },
            //   {
            //     "source": "63",
            //     "target": "61"
            //   },
            //   {
            //     "source": "63",
            //     "target": "62"
            //   },
            //   {
            //     "source": "64",
            //     "target": "11"
            //   },
            //   {
            //     "source": "64",
            //     "target": "48"
            //   },
            //   {
            //     "source": "64",
            //     "target": "55"
            //   },
            //   {
            //     "source": "64",
            //     "target": "57"
            //   },
            //   {
            //     "source": "64",
            //     "target": "58"
            //   },
            //   {
            //     "source": "64",
            //     "target": "59"
            //   },
            //   {
            //     "source": "64",
            //     "target": "60"
            //   },
            //   {
            //     "source": "64",
            //     "target": "61"
            //   },
            //   {
            //     "source": "64",
            //     "target": "62"
            //   },
            //   {
            //     "source": "64",
            //     "target": "63"
            //   },
            //   {
            //     "source": "65",
            //     "target": "48"
            //   },
            //   {
            //     "source": "65",
            //     "target": "55"
            //   },
            //   {
            //     "source": "65",
            //     "target": "57"
            //   },
            //   {
            //     "source": "65",
            //     "target": "58"
            //   },
            //   {
            //     "source": "65",
            //     "target": "59"
            //   },
            //   {
            //     "source": "65",
            //     "target": "60"
            //   },
            //   {
            //     "source": "65",
            //     "target": "61"
            //   },
            //   {
            //     "source": "65",
            //     "target": "62"
            //   },
            //   {
            //     "source": "65",
            //     "target": "63"
            //   },
            //   {
            //     "source": "65",
            //     "target": "64"
            //   },
            //   {
            //     "source": "66",
            //     "target": "48"
            //   },
            //   {
            //     "source": "66",
            //     "target": "58"
            //   },
            //   {
            //     "source": "66",
            //     "target": "59"
            //   },
            //   {
            //     "source": "66",
            //     "target": "60"
            //   },
            //   {
            //     "source": "66",
            //     "target": "61"
            //   },
            //   {
            //     "source": "66",
            //     "target": "62"
            //   },
            //   {
            //     "source": "66",
            //     "target": "63"
            //   },
            //   {
            //     "source": "66",
            //     "target": "64"
            //   },
            //   {
            //     "source": "66",
            //     "target": "65"
            //   },
            //   {
            //     "source": "67",
            //     "target": "57"
            //   },
            //   {
            //     "source": "68",
            //     "target": "11"
            //   },
            //   {
            //     "source": "68",
            //     "target": "24"
            //   },
            //   {
            //     "source": "68",
            //     "target": "25"
            //   },
            //   {
            //     "source": "68",
            //     "target": "27"
            //   },
            //   {
            //     "source": "68",
            //     "target": "41"
            //   },
            //   {
            //     "source": "68",
            //     "target": "48"
            //   },
            //   {
            //     "source": "69",
            //     "target": "11"
            //   },
            //   {
            //     "source": "69",
            //     "target": "24"
            //   },
            //   {
            //     "source": "69",
            //     "target": "25"
            //   },
            //   {
            //     "source": "69",
            //     "target": "27"
            //   },
            //   {
            //     "source": "69",
            //     "target": "41"
            //   },
            //   {
            //     "source": "69",
            //     "target": "48"
            //   },
            //   {
            //     "source": "69",
            //     "target": "68"
            //   },
            //   {
            //     "source": "70",
            //     "target": "11"
            //   },
            //   {
            //     "source": "70",
            //     "target": "24"
            //   },
            //   {
            //     "source": "70",
            //     "target": "25"
            //   },
            //   {
            //     "source": "70",
            //     "target": "27"
            //   },
            //   {
            //     "source": "70",
            //     "target": "41"
            //   },
            //   {
            //     "source": "70",
            //     "target": "58"
            //   },
            //   {
            //     "source": "70",
            //     "target": "68"
            //   },
            //   {
            //     "source": "70",
            //     "target": "69"
            //   },
            //   {
            //     "source": "71",
            //     "target": "11"
            //   },
            //   {
            //     "source": "71",
            //     "target": "25"
            //   },
            //   {
            //     "source": "71",
            //     "target": "27"
            //   },
            //   {
            //     "source": "71",
            //     "target": "41"
            //   },
            //   {
            //     "source": "71",
            //     "target": "48"
            //   },
            //   {
            //     "source": "71",
            //     "target": "68"
            //   },
            //   {
            //     "source": "71",
            //     "target": "69"
            //   },
            //   {
            //     "source": "71",
            //     "target": "70"
            //   },
            //   {
            //     "source": "72",
            //     "target": "11"
            //   },
            //   {
            //     "source": "72",
            //     "target": "26"
            //   },
            //   {
            //     "source": "72",
            //     "target": "27"
            //   },
            //   {
            //     "source": "73",
            //     "target": "48"
            //   },
            //   {
            //     "source": "74",
            //     "target": "48"
            //   },
            //   {
            //     "source": "74",
            //     "target": "73"
            //   },
            //   {
            //     "source": "75",
            //     "target": "25"
            //   },
            //   {
            //     "source": "75",
            //     "target": "41"
            //   },
            //   {
            //     "source": "75",
            //     "target": "48"
            //   },
            //   {
            //     "source": "75",
            //     "target": "68"
            //   },
            //   {
            //     "source": "75",
            //     "target": "69"
            //   },
            //   {
            //     "source": "75",
            //     "target": "70"
            //   },
            //   {
            //     "source": "75",
            //     "target": "71"
            //   },
            //   {
            //     "source": "76",
            //     "target": "48"
            //   },
            //   {
            //     "source": "76",
            //     "target": "58"
            //   },
            //   {
            //     "source": "76",
            //     "target": "62"
            //   },
            //   {
            //     "source": "76",
            //     "target": "63"
            //   },
            //   {
            //     "source": "76",
            //     "target": "64"
            //   },
            //   {
            //     "source": "76",
            //     "target": "65"
            //   },
            //   {
            //     "source": "76",
            //     "target": "66"
            //   }
            // ]

          }]
      })
    }
  }
}

</script>

<style scoped>
* {
  padding: 0;
  color: #303133;
}
p, span {
  font-size: 20px;
  padding: 10px 0;
}
h1 {
  padding-bottom: 5px;
}
.graph-chart {
  width: 1200px;
  height: 750px;
  /*border-radius: 20px;*/
}
.clear {
  clear: both;
}
</style>
