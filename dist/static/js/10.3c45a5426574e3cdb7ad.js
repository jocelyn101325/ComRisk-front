(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ITS2:function(e,t,a){"use strict";a.r(t);var l={name:"filterTable",data:function(){return{tableData5:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",tag:"家"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",tag:"公司"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",tag:"家"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",tag:"公司"}]}},methods:{handleEdit:function(e,t){console.log(e,t),this.$message({showClose:!0,message:e,row:t,type:"success"})},handleDelete:function(e,t){console.log(e,t),this.$message({showClose:!0,message:e,row:t,type:"success"})},filterHandler:function(e,t,a){return t[a.property]===e},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e}}},n=a("KHd+"),r=Object(n.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("筛选")]),e._v(" "),a("p",[e._v("对表格进行筛选，可快速查找到自己想看的数据。")]),e._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData5}},[a("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180",filters:[{text:"2016-05-01",value:"2016-05-01"},{text:"2016-05-02",value:"2016-05-02"},{text:"2016-05-03",value:"2016-05-03"},{text:"2016-05-04",value:"2016-05-04"}],"filter-method":e.filterHandler}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址",formatter:e.formatter}}),e._v(" "),a("el-table-column",{attrs:{prop:"tag",label:"标签",width:"100",filters:[{text:"家",value:"家"},{text:"公司",value:"公司"}],"filter-method":e.filterTag,"filter-placement":"bottom-end"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:"家"===t.row.tag?"primary":"success","disable-transitions":""}},[e._v(e._s(t.row.tag))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)]],2)}),[],!1,null,"c4e1c19e",null);t.default=r.exports}}]);
//# sourceMappingURL=10.3c45a5426574e3cdb7ad.js.map