<template>
    <div class="container" v-loading="loading">

        <div class="page-login">
            <div class="larger-title">{{ config.name }}</div>
            <div class="login-box">
                <div class="login-title">登录</div>
                <input v-model="form.examNo" type="text" placeholder="考场号" class="e-input kch"/>
                <input v-model="form.pwd" type="password" placeholder="监考码" class="e-input jkm"/>
                <button class="button login-button" @click="submit">登录</button>
            </div>
        </div>

    </div>
</template>

<script>
    import { ipcRenderer } from 'electron'
    export default {
        name: 'Login',
        data() {
            return {
                loading: false,
                form: {
                    examNo: '',
                    pwd: ''
                }
            }
        },
        methods: {
            submit() {
                this.loading = true
                // 检查电脑环境配置：node、pm2
                ipcRenderer.invoke('check-env', []).then(res => {
                    console.log(res)
                    if (res.node.code === 0 && res.pm2.code === 0) {
                        // login api...
                        this.http.post('/v1/exam-login', this.form).then(result => {
                            console.log(result)
                        })
                        this.loading = false
                    } else {
                        this.loading = false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .page-login {
        height: 40%;
        width: 100%;
        background-color: #7CA0DC;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .larger-title {
        text-align: center;
        font-size: 3rem;
        color: #FFFFFF;
        font-weight: bold;
        text-shadow: 0.1rem 0.1rem 0.1rem #000000;
    }
    .login-box {
        background-color: #FFFFFF;
        padding: 1rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.6rem #b3b3b3;
        width: 18rem;
        height: 14rem;
        margin-top: 3rem;
        position: absolute;
        top: 52%;
        left: calc(50% - 9rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    .login-title {
        font-size: 1.2rem;
        color: #333333;
        display: inline-block;
        margin: 0 auto 1rem auto;
        border-bottom: 0.3rem solid #7BC1DB;
    }
    .kch, .jkm {
        margin-top: 1rem;
    }
    .login-button {
        margin-top: 1rem;
        width: 100%;
        background-color: #7BC1DB;
        color: #FFFFFF;
    }
</style>
