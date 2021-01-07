module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://192.168.43.217:1337/',
        queryLimit: 200, // Defaults to 100
        contentTypes: ['project', 'journal'],
      },
    },
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  templates: {
    StrapiProject: '/projects/:id',
    StrapiJournal: '/journals/:id',
  },
}
