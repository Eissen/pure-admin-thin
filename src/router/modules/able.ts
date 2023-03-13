
import { able } from "@/router/enums";

export default {
  path: "/able",
  redirect: "/able/watermark",
  meta: {
    icon: "ubuntuFill",
    title: "功能",
    rank: able
  },
  children: [
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print.vue"),
      meta: {
        title: "打印"
      }
    },
    {
      path: "/able/download",
      name: "Download",
      component: () => import("@/views/able/download.vue"),
      meta: {
        title: "下载"
      }
    },
    {
      path: "/able/iconSelect",
      name: "IconSelect",
      component: () => import("@/views/able/icon-select.vue"),
      meta: {
        title: "图标选择器"
      }
    },
    {
      path: "/able/timeline",
      name: "TimeLine",
      component: () => import("@/views/able/timeline.vue"),
      meta: {
        title: "时间线"
      }
    },
    {
      path: "/able/menuTree",
      name: "MenuTree",
      component: () => import("@/views/able/menu-tree.vue"),
      meta: {
        title: "菜单树"
      }
    },
    {
      path: "/able/lineTree",
      name: "LineTree",
      component: () => import("@/views/able/line-tree.vue"),
      meta: {
        title: "树形连接线"
      }
    },
    {
      path: "/able/debounce",
      name: "Debounce",
      component: () => import("@/views/able/debounce.vue"),
      meta: {
        title: "防抖节流"
      }
    },
    {
      path: "/able/cascader",
      name: "Cascader",
      component: () => import("@/views/able/cascader.vue"),
      meta: {
        title: "区域级联选择器"
      }
    },
    {
      path: "/able/swiper",
      name: "Swiper",
      component: () => import("@/views/able/swiper.vue"),
      meta: {
        title: "swiper"
      }
    },
    {
      path: "/able/infiniteScroll",
      name: "InfiniteScroll",
      component: () => import("@/views/able/infinite-scroll.vue"),
      meta: {
        title: "表格无限滚动"
      }
    }
  ]
} as RouteConfigsTable;
