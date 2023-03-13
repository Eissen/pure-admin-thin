// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";
import { system, permission, frame, tabs } from "@/router/enums";
/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const systemRouter = {
  path: "/system",
  meta: {
    icon: "setting",
    title: "系统管理",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: "用户管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: "角色管理",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: "部门管理",
        roles: ["admin"]
      }
    }
  ]
};
const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};
const frameRouter = {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "外部页面",
    rank: frame
  },
  children: [
    {
      path: "/external",
      name: "https://yiming_chang.gitee.io/pure-admin-doc",
      meta: {
        title: "平台文档（外链）",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/pure",
      name: "FramePure",
      meta: {
        title: "平台文档（内嵌）",
        frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/ep",
      name: "FrameEp",
      meta: {
        title: "element文档（内嵌）",
        frameSrc: "https://element-plus.org/zh-CN/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue3",
      name: "FrameVue",
      meta: {
        title: "vue文档（内嵌）",
        frameSrc: "https://cn.vuejs.org/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vite",
      name: "FrameVite",
      meta: {
        title: "vite文档（内嵌）",
        frameSrc: "https://cn.vitejs.dev/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/pinia",
      name: "FramePinia",
      meta: {
        title: "pinia文档（内嵌）",
        frameSrc: "https://pinia.vuejs.org/zh/index.html",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/vue-router",
      name: "FrameRouter",
      meta: {
        title: "router文档（内嵌）",
        frameSrc: "https://router.vuejs.org/zh/",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/iframe/tailwindcss",
      name: "FrameTailwindcss",
      meta: {
        title: "tailwindcss文档（内嵌）",
        frameSrc: "https://tailwindcss.com/docs/installation",
        roles: ["admin", "common"]
      }
    }
  ]
};

const tabsRouter = {
  path: "/tabs",
  meta: {
    icon: "IF-pure-iconfont-tabs",
    title: "menus.hstabs",
    rank: tabs
  },
  children: [
    {
      path: "/tabs/index",
      name: "Tabs",
      meta: {
        title: "标签页操作",
        roles: ["admin", "common"]
      }
    },
    // query 传参模式
    {
      path: "/tabs/query-detail",
      name: "TabQueryDetail",
      meta: {
        // 不在menu菜单中显示
        showLink: false,
        roles: ["admin", "common"]
      }
    },
    // params 传参模式
    {
      path: "/tabs/params-detail/:id",
      component: "params-detail",
      name: "TabParamsDetail",
      meta: {
        // 不在menu菜单中显示
        showLink: false,
        roles: ["admin", "common"]
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter, frameRouter, tabsRouter, systemRouter]
      };
    }
  }
] as MockMethod[];
