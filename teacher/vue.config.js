const config = require('./project.config.json')
module.exports = {
    devServer: {
        port: 2062
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                appId: 'com.example.app',
                productName: config.name,
                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true
                }
            }
        }
    }
}
