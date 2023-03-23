const path = require('path')
module.exports = {
  base: '/man-super-ui/',
  title: 'Super UI',
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': './assets',
      },
    },
  },
  description: 'Inspiration from element-ui',
  head: [['link', { rel: 'icon', href: '/app.ico' }]],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '支持', link: 'support.md' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: true,
        children: ['views/guide/install.md', 'views/guide/get-started.md'],
      },
      // {
      //   title: '设计',
      //   collapsable: true,
      //   children: [
      //     'views/design/color/',
      //   ]
      // },
      {
        title: '组件',
        collapsable: true,
        children: [
          'views/components/basic/',
          'views/components/form/',
          'views/components/navigation/',
          'views/components/notice/',
          'views/components/other/',
        ],
      },
    ],
  },
  scss: {
    //配置 scss 根目录
    includePaths: [path.join(__dirname, '../../style')],
  },
}
