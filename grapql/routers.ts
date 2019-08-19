export default [
    {
      "name": "首页",
      "path": "index"
    },
    {
      "name": "组件",
      "path": "components",
      "children": [
        {
          "name": "倒计时",
          "path": "count-down"
        },
        {
          "name": "表格",
          "path": "table"
        },
        {
          "name": "播放器",
          "path": "video-player"
        }
      ]
    },
    {
      "name": "权限",
      "path": "auth",
      "children": [
        {
          "name": "权限配置",
          "path": "auth-config"
        },
        {
          "name": "游客权限",
          "path": "auth-visitor"
        },
        {
          "name": "管理权限",
          "path": "admin-visitor"
        }
      ]
    }
  ]