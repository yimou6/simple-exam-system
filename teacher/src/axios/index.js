import axios from 'axios'
const config = require('../../project.config.json')


const httpHelper = axios.create({
  baseURL: config.manger_api
})

export default httpHelper
