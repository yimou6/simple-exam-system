<template>
    <div>
        <button @click="startServer">启动后端服务</button>
        <button @click="stopServer">关闭后端服务</button>
        <button @click="initServer">初始化服务</button>
    </div>
</template>

<script>
    import { ipcRenderer } from 'electron'
    export default {
        name: "Admin",
        methods: {
            startServer() {
                ipcRenderer.invoke('start-server', [process.env.BASE_URL]).then(res => {
                    console.log(res)
                })
            },
            stopServer() {
                ipcRenderer.invoke('stop-server', [process.env.BASE_URL]).then(res => {
                    console.log(res)
                })
            },
            initServer() {
            }
        }
    }
</script>

<style scoped>

</style>
