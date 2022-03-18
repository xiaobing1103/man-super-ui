const path = require('path')
module.exports = {
    base:'/super-ui/',
    title: 'Super UI',
    description: 'Inspiration from element-ui',
    head: [
      ['link', { rel: 'icon', href: '/app.ico' }]
    ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: '#' },
      ],
      sidebar: [
          {
              title: '开发指南',
              collapsable: true,
              children: [
                'views/guide/install.md',
                'views/guide/get-started.md'
              ]
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
                'views/components/other/'
              ]
            },
        ]
      },
    scss:{ //配置 scss 根目录
      includePaths: [path.join(__dirname, '../../style')]
    }
  }