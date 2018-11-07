module.exports = {
  title: 'SunnyLi',
  description: 'sunny',
  port:'8888',
  head: [
    ['link', { rel: 'icon', href: `/avatar.png` }]   
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '博文', link: '/web/'},
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/80sky' },
    ],
    sidebar: {
      '/web/': [
        '',
      ],
      '/about/':[
        ''
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
}