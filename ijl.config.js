const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'esc.main': '/esc',
    'esc.games': 'esc/games',
    'esc.4u2k': 'esc/4u2k'
  },
  features: {
    'esc': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'esc.api': '/api'
  }
}
