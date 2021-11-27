const withLess = require('next-with-less')

const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = [
  lessToJS(
    fs.readFileSync(
      path.resolve(__dirname, './src/styles/antdstyles.less'),
      'utf8'
    )
  ),
]

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
    javascriptEnabled: true,
    lessOptions: {
      /* ... */
      modifyVars: themeVariables, // make your antd custom effective
    },
    env: {
      apiURL: 'http://localhost:3000',
    },
  },
})
