import en from "../i18n/lang/en"
import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login/index"
import Layout from "@/views/layout/layout"
import HomeMain from "@/views/index/mainIndex"

// 不是必须加载的组件使用懒加载
const Icon = () => import("@/views/icon/index")
const Ontology = () => import("@/views/comRisk/Ontology")
const Search = () => import("@/views/comRisk/Search")
const DataTable = () => import("@/views/table/dataTables")
const FilterTable = () => import("@/views/table/filterTable")
const DragTable = () => import("@/views/table/dragTabe")
const NotFound = () => import("@/views/page404")
const NavClassify = () => import("@/views/syssetting/navClassify")
const pagePermissions = () => import("@/views/permissions/pagePermissions")

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
let routeName = en.routeName
let defaultRouter = [
  { path: "/",
    redirect: "/index",
    hidden: true,
    children: []
  },
  {
    path: "/login",
    component: Login,
    name: "",
    hidden: true,
    children: []
  },
  {
    path: "/index",
    iconCls: "fa fa-dashboard", // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/index",
        iconCls: "fa fa-dashboard", // 图标样式class
        name: "主页",
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: "/404",
    component: NotFound,
    name: "404",
    hidden: true,
    children: []
  }
]

let addRouter = [
  // 多级菜单
  {
    path: "/",
    iconCls: "fa fa-server",
    name: routeName.multiDirectory,
    component: Layout,
    children: [
      {
        path: "/Ontology",
        iconCls: "fa fa-server",
        name: routeName["menu2-1"],
        component: Ontology,
        children: []
      },
      {
        path: "/Search",
        iconCls: "fa fa-server",
        name: routeName["menu2-2"],
        component: Search,
        children: []
      }
    ]
  },
  // {
  //   path: "/",
  //   iconCls: "fa fa-paw", // 图标样式class
  //   name: routeName.icon,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/icon",
  //       iconCls: "fa fa-life-ring", // 图标样式class
  //       name: routeName.builtInIcon,
  //       component: Icon,
  //       children: []
  //     }
  //   ]
  // },
  // {
  //   path: "/",
  //   iconCls: "fa fa-universal-access", // 图标样式class
  //   name: routeName.permissions,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/pagePermissions",
  //       iconCls: "fa fa-expeditedssl", // 图标样式class
  //       name: routeName.pageControl,
  //       component: pagePermissions,
  //       children: []
  //     }
  //   ]
  // },
  // {
  //   path: "/",
  //   iconCls: "fa fa-newspaper-o", // 图标样式class
  //   name: routeName.table,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/dataTable",
  //       iconCls: "fa fa-sliders", // 图标样式class
  //       name: routeName.multiDataTable,
  //       component: DataTable,
  //       children: []
  //     },
  //     {
  //       path: "/filterTable",
  //       iconCls: "fa fa-sort-amount-asc", // 图标样式class
  //       name: routeName.filterTable,
  //       component: FilterTable,
  //       children: []
  //     },
  //     {
  //       path: "/dragTabe",
  //       iconCls: "fa fa-hand-stop-o", // 图标样式class
  //       name: routeName.dragSort,
  //       component: DragTable,
  //       children: []
  //     }
  //   ]
  // },
  // {
  //   path: "/",
  //   iconCls: "el-icon-setting", // 图标样式class
  //   name: routeName.systemSettings,
  //   component: Layout,
  //   meta: {role: ["superAdmin"]},
  //   children: [
  //     {
  //       path: "/navClassifies",
  //       iconCls: "el-icon-menu", // 图标样式class
  //       name: routeName.navMenu,
  //       component: NavClassify,
  //       children: []
  //     }
  //   ]
  // },
  { path: "*",
    redirect: "/404",
    hidden: true,
    children: []
  }

]
export default new Router({
  routes: defaultRouter,
  mode: "history"
})
export {defaultRouter, addRouter}
