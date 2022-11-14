<template>
    <view class="page">
        <!-- 导航栏 -->
        <safeheader>
            <u-navbar title="登录" :autoBack="true" :fixed="false" :safeAreaInsetTop="false">
                <view class="enter" slot="right">
                    <u--text text="注册" @click="enterClick">
                    </u--text>
                </view>
            </u-navbar>
        </safeheader>
        <!-- 注册界面 -->
        <view class="mainContent">
            <!-- 			<view class="inputBox">
				<u--input placeholder="手机号" border="surround" prefixIcon="phone" clearable v-model.trim="phone"
					@input="inputphone">
				</u--input>
				<view v-show="!isPhoneAvailable">{{Phonetip}}</view>
			</view> -->
            <view class="inputBox">
                <u--input placeholder="用户名" border="surround" prefixIcon="phone" clearable v-model.trim="username"
                    @input="inputUsername">
                </u--input>
                <view v-show="!isUsernameAvailable">{{Usernametip}}</view>
            </view>

            <view class="inputBox">
                <!-- 密码 -->
                <u--input placeholder="密码" password border="surround" prefixIcon="lock" clearable
                    v-model.trim="password" @input="inputPassword"></u--input>
                <view v-show="!isPasswordAvailable">{{Passwordtip}}</view>
            </view>
            <view class="inputBox">
                <u-row customStyle="margin-bottom: 10px">
                    <u-col span="6" customStyle="margin-right:10px">
                        <!-- 验证码 -->
                        <u--input placeholder="验证码" border="surround" prefixIcon="info-circle" clearable maxlength="6"
                            v-model.trim="captcha"></u--input>
                        <view v-show="isValidate">请填写验证码</view>
                    </u-col>
                    <u-col span="6">
                        <canvas style="width:130px;height:50px;" canvas-id="canvas" @click="getNewCaptcha"></canvas>
                    </u-col>
                </u-row>
            </view>
            <view class=" inputBox">
                <!-- 点击登录 -->
                <u-button text="点击登录" size="normal" type="info" color="#88dfbf" @click="submit"></u-button>
            </view>
            <view class="inputBox">
                <view class="divideLine">
                    <u-divider text="社交帐号直接登录"></u-divider>
                </view>
                <view class="jumpLink">
                    <u-row customStyle="margin-bottom: 20px" justify="space-between">
                        <u-col span="5">
                            <u-icon name="weixin-circle-fill" color="#53C21D" size="50"></u-icon>
                        </u-col>
                        <u-col span="5">
                            <u-icon name="qq-circle-fill" color="#3C9CFF" size="50"></u-icon>
                        </u-col>
                        <u-col span="5">
                            <u-icon name="weibo-circle-fill" color="#E45656" size="50"></u-icon>
                        </u-col>
                    </u-row>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import Register from '../component/register'
    import {
        Mcaptcha
    } from '@/utils/mcaptcha'
    // 定义防抖函数
    function debounce(fn, delay = 300) {
        var timer = null
        return function() {
            if (timer) {
                clearTimeout(timer)
            }
            // 这里取到的this是vue实例
            timer = setTimeout(fn.bind(this), delay)
        }
    }

    export default {
        data() {
            return {
                captcha: '',
                phone: "",
                username: "",
                password: "",
                confirm: "",
                captchaSvg: "",
                isPhoneAvailable: false,
                isUsernameAvailable: false,
                isPasswordAvailable: false,
                isConfirmAvailable: false,
                isValidate: false,
                Phonetip: "",
                Usernametip: "",
                Passwordtip: "",
                Confirmtip: "",
                mcaptcha: ''
            }
        },
        methods: {
            navigateBack() {
                uni.navigateBack({
                    delta: 1
                })
            },
            getNewCaptcha() {
                this.mcaptcha.refresh()
            },
            // 验证电话
            inputphone: debounce(function() {
                if (!this.phone) {
                    this.isPhoneAvailable = false
                    this.Phonetip = ""
                } else if (this.phone.length > 12) {
                    this.isPhoneAvailable = false
                    this.Phonetip = "电话号码位数超过11位"
                } else if (!/^1[0-9]{10}$/.test(this.phone)) {
                    this.isPhoneAvailable = false
                    this.Phonetip = "电话号码不符合要求"
                } else {
                    // 此处发送请求,验证邮箱是否存在
                    Register.testExist({
                        key: 'phone',
                        value: this.phone
                    }).then(res => {
                        if (res.data.msg == 'ok') {
                            this.isPhoneAvailable = false
                            this.Phonetip = ""
                        } else {
                            this.isPhoneAvailable = true
                            this.Phonetip = "手机号不存在"
                        }
                    })
                }
            }),

            inputUsername: debounce(function() {
                if (!this.username) {
                    this.isUsernameAvailable = false
                    this.Usernametip = ""
                } else if (this.username.length < 2 || this.username.length > 10) {
                    this.isUsernameAvailable = false
                    this.Usernametip = "用户名长度过小或过大"
                } else if (/\s/.test(this.username)) {
                    this.isUsernameAvailable = false
                } else {
                    this.isUsernameAvailable = true
                }
            }),

            // 验证密码
            inputPassword() {
                if (!this.password) {
                    this.isPasswordAvailable = false
                    this.Passwordtip = ""
                } else if (this.password.length < 6 || this.password.length > 12) {
                    this.isPasswordAvailable = false
                    this.Passwordtip = "密码长度太小或太大"
                } else if (/\s/.test(this.password)) {
                    this.isPasswordAvailable = false
                    this.Passwordtip = "密码不合法"
                } else {
                    this.isPasswordAvailable = true
                    this.Passwordtip = ""
                }
                // 每次修改密码，都要重新验证confirm
                this.inputConfirm()
            },

            // 验证再次输入的密码
            inputConfirm() {
                if (!this.confirm && this.isPasswordAvailable) {
                    this.isConfirmAvailable = false
                    this.Confirmtip = "密码不能为空"
                } else if (this.password == this.confirm) {
                    this.isConfirmAvailable = true
                    this.Confirmtip = ""
                } else {
                    this.isConfirmAvailable = false
                    this.Confirmtip = "密码输入错误"
                }
            },

            // 提交注册数据
            submit() {
                this.isValidate = !this.mcaptcha.validate(this.captcha)
                if (!this.username || !this.password || this.isValidate) {
                    return
                }
                let userObj = {
                    username: this.username,
                    password: this.password
                }
                this.$axios.login.login(userObj)
                    .then(res => {
                        if (res.data.code === 200) {
                            uni.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 2000
                            });
                            uni.setStorage({
                                key: 'token',
                                data: res.data.token
                            })
                            uni.navigateTo({
                                url: "../discover/discover"
                            })
                        } else {
                            uni.showToast({
                                title: res.data.msg,
                                icon: 'none',
                                duration: 2000
                            });
                        }
                        // if (res.data.msg == 'ok') {
                        // 	this.isCaptchaWrong = false
                        // 	localStorage.setItem('token', "Bearer " + res.data.token)
                        // 	this.$store.commit('setUser', res.data.user)
                        // 	uni.navigateTo({
                        // 		url: "../discover/discover"
                        // 	})
                        // }
                    })
            },
            enterClick() {
                uni.navigateTo({
                    url: "../register/register"
                })
            }
        },
        onReady() {
            this.mcaptcha = new Mcaptcha({
                el: 'canvas',
                width: 130,
                height: 50,
                createCodeImg: ""
            });
            this.getNewCaptcha()
        },
        created: function() {

        },
    }
</script>

<style lang="scss">
    .page {
        padding: 0;
        flex: 1;
        background-color: white;
    }

    .mainContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        width: 80%;
        margin: 10vw 10vw;
    }

    .inputBox {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .jumpLink {
        margin-top: 10px;
    }

    .divideLine {
        font-size: 50rpx;
    }

    .captcha {}

    .remember {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

    }
</style>
