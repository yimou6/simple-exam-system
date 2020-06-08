'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import {
  createProtocol,
  /* installVueDevtools */
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
import { exec } from 'child_process'
import './ipcMain/index.js'

// 保留窗口对象的全局引用，否则，当JavaScript对象被垃圾回收时，窗口将自动关闭。
let win

// 必须先注册计划，然后才能准备好应用程序
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      secure: true,
      standard: true
    }
  }
])

function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {

    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

// 关闭所有窗口后退出。
app.on('window-all-closed', () => {
  // 在macOS上，应用程序及其菜单栏通常保持活动状态，直到用户使用Cmd + Q明确退出为止。
  if (process.platform !== 'darwin') {
    exec(`pm2 stop serve`)
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，通常会在单击停靠图标且没有其他窗口打开时在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 当Electron完成初始化并准备创建浏览器窗口时，将调用此方法。
// 某些API仅在此事件发生后才能使用。
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }

  }
  createWindow()
})

// 在开发模式下，应父进程的要求完全退出。
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
