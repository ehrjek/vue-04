<template>
  <div class='py-container' >
    <div style="width: 1928px;background-color: #F1F1F1;height: 30px;position: relative;left: -400px"></div>
    <div class='shortcut' style="margin-top: -30px">
      <ul class='fl'>
        <li class='f-item'>九源欢迎您！</li>
        <li class='f-item' v-if='username'>
          尊敬的客户，<span style='color: red;'>{{ username }}</span>
          |
          <a href="javascript:void(0)" @click="loginout">退出登录</a>
        </li>
        <li  class='f-item' v-else>
          请<a href='javascript:void(0)' @click="gotologin">登录</a>
          <span><a @click="gotoregister" target='_blank'>免费注册</a></span>
        </li>
      </ul>
      <ul class='fr'>

        <li class='f-item' ><button @click="gotoorder" style="background-color:#F1F1F1;border:none;color:#68BAED;" >我的订单</button></li>
        <li class='f-item space'></li>
        <li class='f-item'><button @click="gotopage" style="background-color:#F1F1F1;color: red;border:none" target='_blank'>我的九源</button></li>
        <li class='f-item space'></li>
        <li class='f-item'><button @click="gotobuy" style="background-color:#F1F1F1;border:none;color: #68BAED;" >商品上架</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'v-navigate',
  inject: ['reload'],
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    setCookie (name, pwd, exdays) {
      var exdate = new Date()// 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)// 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'username' + '=' + name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'password' + '=' + pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    getCookie: function () {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ')
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=')
          // 判断查找相对应的值
          if (arr2[0] === 'username') {
            // this.$nextTick(function () {
            this.username = arr2[1]
            console.log(this.username)
            // }, 0)
          } else if (arr2[0] === 'password') {
            this.password = arr2[1]
            console.log(this.password)
          }
        }
      }
    },
    gotobuy () {
      var a = localStorage.getItem('token')
      axios({
        method: 'post',
        url: 'isSeller',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        if (resp.data.state === true) {
          this.$router.replace({path: '/shelvesBook'})
          location.reload()
        } else {
          alert(resp.data.msg + ',请到主页进行申请')
        }
      })
        .catch(failResponse => {
          alert('服务器已断开')
        })
    },
    gotoorder () {
      this.$router.push({path: '/myOrder'})
      location.reload()
    },
    loginout: function () {
      localStorage.removeItem('token')
      this.$router.replace({path: '/user_login'})
      location.reload()
      this.setCookie('username', 'password', -1)
    },
    gotologin () {
      this.$router.replace({path: '/user_login'})
      location.reload()
    },
    gotoregister () {
      this.$router.replace({path: '/register'})
      location.reload()
    },
    gotopage () {
      this.$router.replace({path: '/mypage'})
      location.reload()
    }
  },
  mounted () {
    this.getCookie()
  },
  watch: {
    username: function (curVal, oldVal) {
      console.log(curVal)
    }
  }
}
</script>

<style scoped>
.f-item button:hover{
  text-decoration:underline
}
</style>
