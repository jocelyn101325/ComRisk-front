<template>

  <div class="metor-info">

    <div id="search-hd" class="search-hd">
      <el-input type="text" placeholder="请输入人员名称" @input="update($event)" class="search-input" v-model="searchByStr">
<!--      <span class="s1 pholder">请输入人员名称</span>-->
      <el-button slot="append" icon="el-icon-search" @click="onSubmit"></el-button>
      </el-input>
    </div>
    <el-card style="height: 600px;width: 300px;margin-top: 30px;float:left">
      <div>
        {{Nodedetails}}
      </div>
    </el-card>
    <el-card style="height: 600px;width: 600px;margin-top: 30px;float:left">
      <div id="main-chart" style="width:600px;height: 600px;">
        暂无信息
      </div>
    </el-card>


    <!-- 浮动会使元素脱标，在所有浮动元素后面加一个块状元素，并设置clear:both清除浮动造成的父元素高度撑不起来问题 -->
    <div class="clear"></div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts")
require("echarts/lib/chart/graph")
export default {
  name: "Search",
  data () {
    return {
      mentorId: "",
      mentorDetail: [],
      searchByStr: "",
      Nodedetails: "暂无信息"
    }
  },
  updated () {
    this.initChart()
  },
  mounted () {
    // this.getDetails()
    // this.getGraph()
  },
  methods: {
    update (e) {
      this.$forceUpdate()
      console.log("input内容：" + e)
    },
    onSubmit: function () {
      console.log("点击搜索：" + this.searchByStr)
      const searchByStr = this.searchByStr
      // this.searchByName(searchName)
      // if(searchSex)
      this.searchByCondition(searchByStr)
      this.initChart()
    },
    searchByCondition (searchStr){
      this.str = searchStr
      this.axios.get("http://159.75.27.46:7086/scholar/scholarnetwork/findbyid?personid=" + this.str).then(res => {
        this.graphData = res.data
        this.Nodedetails = res.data.nodes.value
        console.log("str检索" + this.str)
        this.myChart.setOption({
          series: [{
            data: this.graphData.nodes,
            links: this.graphData.links
          }]
        })
      })
    },

    initChart: function () {
      this.myChart = echarts.init(document.getElementById("main-chart"))
      console.log("graph画" + this.searchByStr)
      this.myChart.setOption({
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        legend: {
          show: true,
          data: [
            {
              name: "0"
            },
            {
              name: "1"
            },
            {
              name: "2"
            }
          ]
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 30, // 倘若该属性不在link里，则其表示节点的大小；否则即为线两端标记的大小
            roam: true, // 鼠标缩放功能
            // label: {
            //   show: true, //是否显示标签
            // },
            // focusNodeAdjacency: true, //鼠标移到节点上时突出显示结点以及邻节点和边
            categories: [
              {
                name: "0",
                itemStyle: { // 可配置颜色
                  normal: {
                    // borderColor: '#fff',
                    // borderWidth: 1,
                    // shadowBlur: 10,
                    color: "#DF4949"
                  }
                },
                symbolSize: [45, 45]
              }, {
                name: "1",
                itemStyle: { // 可配置颜色
                  normal: {
                    // borderColor: '#fff',
                    // borderWidth: 1,
                    // shadowBlur: 10,
                    color: "#293950"
                  }
                },
                symbolSize: [35, 35]
              }, {
                name: "2",
                itemStyle: { // 可配置颜色
                  normal: {
                    // borderColor: '#fff',
                    // borderWidth: 1,
                    // shadowBlur: 10,
                    color: "#E8B842"
                  }
                },
                symbolSize: [35, 35]
              }
            ],
            edgeSymbol: ["circle", "arrow"], // 关系两边的展现形式，也即图中线两端的展现形式。arrow为箭头
            edgeSymbolSize: [4, 10],
            draggable: true,
            edgeLabel: {
              show: false,
              normal: {
                show: true,
                position: "middle",
                textStyle: {
                  fontSize: 12
                },
                formatter: "{c}"
              }
            },
            label: {
              normal: {
                position: "inside",
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: 12
                }
              }
            },
            force: {
              repulsion: 400,
              edgeLength: 100
              // layoutAnimation : false
            },
            data: [],
            links: [],
            itemStyle: {
            },
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0.1
            }
          }
        ]
      })
      this.axios.get("http://159.75.27.46:7086/scholar/scholarnetwork/findbyid?personid=" + this.searchByStr).then(res => {
        this.graph = res.data
        console.log(this.graph)
        this.Nodedetails = res.data.nodes.value
        this.myChart.setOption({
          series: [{
            data: this.graph.nodes,
            links: this.graph.links
          }]
        })
      }).catch(function (error) { // 请求失败处理
        console.log("查无此人")
        console.log(error)
      })
    }
  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
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
.search-input {
  width: 250px;
  background-color: #fff;
}
/*.search-bd{height: 25px;}*/
/*.search-bd li{*/
/*  font-size:15px;*/
/*  width:100px;*/
/*  height: 25px;*/
/*  line-height: 25px;*/
/*  text-align:center;*/
/*  float: left;*/
/*  cursor: pointer;*/
/*  background-color: #eee;*/
/*  color: #666;*/
/*}*/
/*.search-hd{*/
/*  height:35px;*/
/*  width: 800px;*/
/*  background-color: #1a3961;*/
/*  padding: 3px;*/
/*  position: relative;*/
/*}*/
/*.search-input{*/
/*  width: 490px;*/
/*  height: 30px;*/
/*  line-height: 22px;*/
/*  padding: 5px 0;*/
/*  background: none;*/
/*  text-indent: 15px;*/
/*  border: 0;*/
/*  outline: none;*/
/*  position: relative;*/
/*  left: 3px;*/
/*  top: 0;*/
/*  z-index: 5;*/
/*  margin-left:-10px;*/
/*}*/
/*.btn-search{*/
/*  width: 30px;*/
/*  height: 34px;*/
/*  line-height:34px;*/
/*  position: absolute;*/
/*  right: 30px;*/
/*  top: 3px;*/
/*  border: 0;*/
/*  z-index: 6;*/
/*  cursor: pointer;*/
/*  font-size: 15px;*/
/*  color: #fff;*/
/*  font-weight: 700;*/
/*  background: none;*/
/*  outline: none;*/
/*}*/
.pholder{
  display: inline-block;
  padding: 2px 0;
  font-size: 15px;
  color: #999;
  position: absolute;
  left: 13px;
  top: 11px;
  z-index: 4;
  padding-left:25px;
  top:11px;
}
.search-hd .s2,.search-hd #s2{
  display: none;
}
.clear {
  clear: both;
}
</style>
