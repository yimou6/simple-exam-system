import { ipcMain } from 'electron'
import checkEnv from './checkEnv'
import serve from './serve'

// 检查电脑环境配置：node、pm2
ipcMain.handle('check-env', checkEnv)

// 启动后端服务
ipcMain.handle('start-serve', serve.start)

// 关闭后端服务
ipcMain.handle('start-stop', serve.stop)
