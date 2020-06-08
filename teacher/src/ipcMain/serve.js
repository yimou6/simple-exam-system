import path from "path";
const { exec } = require('child_process')
const serve_file = require('../../project.config.json')
export default {
    async start() {
        // eslint-disable-next-line no-undef
        const url = path.join(__static, serve_file)
        exec(`pm2 start ${url} --name serve`)
    },
    async stop() {
        exec(`pm2 stop serve`)
    }
}
