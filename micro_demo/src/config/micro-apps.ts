export default [
    {
      name: 'micro-app-demo4',
      entry: {
        development: '//localhost:6664',
        staging: '/micro-app-demo4',
        production: '/micro-app-demo4',
      },
      container: '#micro-app-container',
      activeRule: '#/micro-app/micro-app-demo4',
    },
    {
      name: 'micro-app-demo2',
      entry: {
        development: '//localhost:6662',
        staging: '/micro-app-demo2',
        production: '/micro-app-demo2',
      },
      container: '#micro-app-container',
      activeRule: '#/micro-app/micro-app-demo2',
    },
]
  