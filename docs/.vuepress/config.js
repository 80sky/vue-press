module.exports = {
  title: "SunnyLi",
  description: "sunny",
  port: "8888",
  head: [["link", { rel: "icon", href: `/avatar.png` }]],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "博文", link: "/web/" },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://github.com/80sky" }
    ],
    sidebar: {
      "/web/": [
        {
          title: "工具类",
          collapsable: true,
          children: [
            "",
            "json-tree",
            "heightlight",
            "date-format",
            "util",
            "split-file-name",
            "array-move"
          ]
        },
        {
          title: "VUE",
          collapsable: true,
          children: ["keep-alive", "axios", "vux-load-more", "table"]
        },
        {
          title: "CANVAS",
          children: ["rain", "particle"]
        },
        {
          title: "JQuery",
          children: ["ztree", "fullCalendar", "stock"]
        }
      ],
      "/about/": [
        {
          title: "SunnyLi",
          collapsable: false,
          children: [""]
        }
      ]
    },
    sidebarDepth: 2
    // lastUpdated: 'Last Updated',
  }
};
