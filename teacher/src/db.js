import { app } from 'electron'
const dataStore = require('nedb')

const db = {}
// 考生信息
db.student = new dataStore({
    filename: app.getPath('userData') + 'store/stu.d',
    autoload: true
})
// 试卷
db.paper = new dataStore({
    filename: app.getPath('userData') + 'store/paper.d',
    autoload: true
})
// 考场信息
db.system = new dataStore({
    filename: app.getPath('userData') + 'store/sys.d',
    autoload: true
})

export default db
