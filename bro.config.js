const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'esc.main': '/esc',
    'esc.games': '/games',
    'esc.4u2k': '/4u2k',
    'esc.prices': '/prices',
    'esc.b2b':'/b2b',
    "esc.lang_switch_btn": "1",
    "esc.invite": "1",
    "esc.contact": "1"
  },
  features: {
    
    'esc': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "esc.api": "/api",
    "esc.backend": "https://escbackend.onrender.com/api/v1/",

  }
}
