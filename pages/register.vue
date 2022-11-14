<template>
    <view class="page">
        <!-- 导航栏 -->
        <safeheader>
            <u-navbar title="注册" :safeAreaInsetTop="false" :fixed="false" border :autoBack="true">
                <view class="enter" slot="right">
                    <u--text text="登录" @click="enterClick">
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
                <!-- 手机号 -->
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
                <!-- 密码 -->
                <u--input placeholder="确认密码" password border="surround" prefixIcon="lock" clearable
                    v-model.trim="confirm" @input="inputConfirm" @keyup.enter="register"></u--input>
                <view v-show="!isConfirmAvailable">{{Confirmtip}}</view>
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
                        <!-- <div class="captcha" v-html="captchaSvg" @click="getNewCaptcha" title="点击切换验证码"></div> -->
                        <canvas style="width:130px;height:50px;" canvas-id="canvas" @click="getNewCaptcha"></canvas>
                    </u-col>
                </u-row>
            </view>
            <!-- 选择服务条款 -->
            <view class="inputBox">
                <view class="remember">
                    <u-radio-group>
                        <u-radio :customStyle="{marginBottom: '8px'}" label="我已阅读并同意相关" @change="remembernChange"
                            activeColor="#88dfbf" placement="row" shape="squre">
                        </u-radio>
                    </u-radio-group>
                    <u-link href="https://uviewui.com/" text="《用户协议》" color="#88dfbf">
                    </u-link>
                </view>
            </view>
            <view class="inputBox">
                <!-- 点击注册 -->
                <u-button text="点击注册" size="normal" type="info" color="#88dfbf" @click="submit"></u-button>
            </view>
            <view class="inputBox">
                <view class="divideLine">
                    <u-divider text="社交帐号直接登录"></u-divider>
                </view>
                <view class="jumpLink">
                    <u-row customStyle="margin-bottom: 20px" justify="space-between">
                        <u-col span="5">
                            <u-icon name="weixin-circle-fill" color="#53C21D" size="50" @click="onclick1"></u-icon>
                        </u-col>
                        <u-col span="5">
                            <u-icon name="qq-circle-fill" color="#3C9CFF" size="50" @click="onclick2"></u-icon>
                        </u-col>
                        <u-col span="5">
                            <u-icon name="weibo-circle-fill" color="#E45656" size="50" @click="onclick3"></u-icon>
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
            inputphone: function() {
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
                    // Register.testExist({
                    // 	key: 'phone',
                    // 	value: this.phone
                    // }).then(res => {
                    // 	if (res.data.msg == 'ok') {
                    // 		this.isPhoneAvailable = false
                    // 		this.Phonetip = "手机号已经存在"
                    // 	} else {
                    // 		this.isPhoneAvailable = true
                    // 		this.Phonetip = ""
                    // 	}
                    // })
                }
            },

            //验证昵称
            inputUsername: function() {
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
            },

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
                if (this.isUsernameAvailable && this.isPasswordAvailable && this.isConfirmAvailable && !this
                    .isValidate) {
                    let registerData = {
                        username: this.username,
                        password: this.password
                    }
                    uni.setStorage({
                        key: 'token',
                        data: ''
                    })
                    Register.register(registerData).then(res => {
                        if (res.data.code === 200) {
                            console.log(res.data)
                            uni.navigateTo({
                                url: "../enter/enter"
                            })
                        }
                    })
                }
                // if (this.isPhoneAvailable && this.isUsernameAvailable && this.isPasswordAvailable && this
                // 	.isConfirmAvailable) {
                // 	// 注册
                // 	Register.register(this.phone, this.username, this.password, this.captcha)
                // 		.then(res => {
                // 			if (res.data.msg == 'captcha wrong') {
                // 				// 验证码错误
                // 				this.isCaptchaWrong = true
                // 				this.captcha = ''
                // 			} else if (res.data.msg == 'ok') {
                // 				this.isCaptchaWrong = false
                // 				localStorage.setItem('token', "Bearer " + res.data.token)
                // 				// 返回用户数据，保存到vuex中
                // 				this.$store.commit('setUser', res.data.user)
                // 				uni.navigateTo({
                // 					url:"../personSetting/personSetting"
                // 				})
                // 			} else {
                // 				this.isCaptchaWrong = false
                // 				// 服务端验证失败
                // 				this.refresh()
                // 			}
                // 		})
                // }
            },

            // 清空所有用户输入的数据
            refresh() {
                this.phone = ""
                this.username = ""
                this.password = ""
                this.confirm = ""
                this.captcha = ""
            },
            enterClick() {
                uni.navigateTo({
                    url: "../enter/enter"
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
