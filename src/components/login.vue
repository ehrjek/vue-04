<template>
  <div class="login-box">
    <!--头部logo-->
    <div class="py-container logoArea" style="margin-left: 10px">
      <a href="" class="logo" @click='gotoindex'></a>
    </div>
    <!--登录主体部分-->
    <div class="loginArea" id="loginApp" >
      <div class="py-container login">
        <div class="loginform">
          <ul class="sui-nav nav-tabs tab-wraped">
            <a id="yu" tehref="#login" data-toggle="tab" >
              <h3>账户登录</h3>
            </a>
          </ul> <!--登录头部-->
          <div class="tab-content tab-wraped">
            <div id="profile" class="tab-pane  active">
              <span v-text="msg"></span>  <!-- 登录提示信息-->
              <form class="sui-form" enctype="application/x-www-form-urlencoded">
                <div class="input-prepend" ><span class="add-on loginname"></span>
                  <input id="username" type="text" style="height: 33px; width: 280px" placeholder="请输入账号" class="span2 input-xfat"
                         v-model="form.username">
                </div><!--账户行-->
                <div class="input-prepend"><span class="add-on loginpwd"></span>
                  <input id="password" type="password" style="height: 33px; width: 280px" placeholder="请输入密码" class="span2 input-xfat"
                         v-model="form.password">
                </div><!--密码行-->
                <div class="setting">
                  <label class="checkbox inline">
                    <input name="m1" type="checkbox" id="remember" value="2" checked="" >
                    记住密码
                  </label>
                  <span class="forget">忘记密码？</span>
                </div><!--附加功能-->
                <div class="logined">
                  <a class="sui-btn btn-block btn-xlarge btn-danger" @click="login"
                     href="javascript:void(0)">登&nbsp;&nbsp;录</a>
                </div><!--登录按钮-->
              </form>
              <div class="otherlogin">
                <div class="types">
                  <ul>
                    <li><img src="../img/qq.png" width="35px" height="35px"/></li>
                    <li><img src="../img/sina.png"/></li>
                    <li><img src="../img/ali.png"/></li>
                    <li><img src="../img/weixin.png"/></li>
                  </ul>
                </div>
<!--                <span class="register"><a href="register.html" target="_blank">立即注册</a></span>-->
                <span class="register"><button style="background-color: #ffffff;border: none" @click="register">立即注册</button></span>
              </div> <!--其他登录方式-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-foot></v-foot>
  </div>
</template>

<script>
// import $ from 'jquery'
import '../js/plugins/jquery/jquery.min.js'
import '../js/plugins/jquery.easing/jquery.easing.min.js'
// import '../js/plugins/sui/sui.min'
import '../js/plugins/jquery-placeholder/jquery.placeholder.min'
import '../js/pages/login.js'
import axios from 'axios'
import VFoot from './comment/foot'
export default {
  name: 'user_login',
  components: {VFoot},
  data () {
    return {
      labelPosition: 'left',
      form: {
        username: '',
        password: ''
      },
      msg: ''
    }
  },
  methods: {
    gotoindex () {
      this.$router.replace({path: '/index'})
    },
    login () {
      var name = this.form.username
      var pass = this.form.password
      axios({
        method: 'POST',
        url: 'login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        params: {
          password: this.form.password,
          no: this.form.username
        }
      }).then(successResponse => {
        // console.log(successResponse.data.token)
        localStorage.setItem('token', successResponse.data.token)
        if (successResponse.data.state === true) {
          alert(successResponse.data.msg)
          var t = document.getElementById('remember')
          // console.log('t' + t.checked)
          if (t.checked === true) {
            this.setCookie(name, pass, 7)
          } else {
            this.setCookie(name, pass, 1)
          }
          this.$router.replace({path: '/index'})
          location.reload()
          // console.log(successResponse.data)
        } else {
          alert(successResponse.data.msg)
        }
      })
        .catch(failResponse => {
        })
    },
    setCookie (name, pwd, exdays) {
      var exdate = new Date()// 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)// 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'username' + '=' + name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'password' + '=' + pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    getCookie: function () {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ') // 显示格式切割
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=')// 再次切割
          // 判断查找相对应的值
          if (arr2[0] === 'username') {
            this.form.username = arr2[1]// 保存
            // console.log(arr2[1])
          } else if (arr2[0] === 'password') {
            this.form.password = arr2[1]
            // console.log(arr2[1])
          }
        }
      }
    },
    register () {
      this.$router.replace({path: '/register'})
    }
  },
  mounted () {
    this.getCookie()
  }
}
</script>

<style scoped>
  #yu{
    width: 100%;
    text-align: center;
  }
  .register a:hover{
    color: red;
  }
  .register a:active, .register button:active{
    color: blue;
  }
</style>

<style src="../css/webbase.css"></style>
<style src="../css/pages-login.css"></style>
