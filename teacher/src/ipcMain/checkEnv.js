const { exec } = require('child_process')
// 检查电脑环境配置：node、pm2
export default async function (event, arg) {
    let res = {}
    // 查看node版本
    try {
        let { stdout } = await nodeVersion()
        res['node'] = { code: 0, version: stdout, msg: '查询成功！' }
    } catch (e) {
        res['node'] = { code: 1, version: '未知', msg: '未找到node命令，请检查是否安装了node并配置好环境变量。' }
    }
    // 查看pm2版本
    try {
        let { stdout } = await pm2Version()
        res['pm2'] = { code: 0, version: stdout, msg: '查询成功！' }
    } catch (e) {
        res['pm2'] = { code: 1, version: '未知', msg: '请先安装pm2: npm install -g pm2' }
    }
    return res
}

function nodeVersion() {
    return new Promise((resolve, reject) => {
        exec('node -v', {}, function (error, stdout, stderr) {
            if (error) {
                reject(error)
            }
            resolve({ stdout, stderr })
        })
    })
}

function pm2Version() {
    return new Promise((resolve, reject) => {
        exec('pm2 -v', {}, function (error, stdout, stderr) {
            if (error) {
                reject(error)
            }
            resolve({ stdout, stderr })
        })
    })
}
