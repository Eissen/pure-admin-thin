
import { components } from "@/router/enums";

export default {
  path: "/components",
  redirect: "/components/video",
  meta: {
    icon: "menu",
    title: "组件",
    rank: components
  },
  children: [
    {
      path: "/components/draggable",
      name: "Draggable",
      component: () => import("@/views/components/draggable/index.vue"),
      meta: {
        title: '拖拽组件',
        transition: {
          enterTransition: "animate__zoomIn",
          leaveTransition: "animate__zoomOut"
        }
      }
    },
    {
      path: "/components/splitPane",
      name: "SplitPane",
      component: () => import("@/views/components/split-pane/index.vue"),
      meta: {
        title: '切割面板'
      }
    },
    {
      path: "/components/button",
      name: "Button",
      component: () => import("@/views/components/button/index.vue"),
      meta: {
        title: '按钮组件'
      }
    },
    {
      path: "/components/countTo",
      name: "CountTo",
      component: () => import("@/views/components/count-to/index.vue"),
      meta: {
        title: '数字动画'
      }
    },
    {
      path: "/components/seamlessScroll",
      name: "SeamlessScroll",
      component: () => import("@/views/components/seamless-scroll/index.vue"),
      meta: {
        title: '无缝滚动'
      }
    }
  ]
} as RouteConfigsTable;
