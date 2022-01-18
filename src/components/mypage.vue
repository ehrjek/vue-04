<template>
  <div class="page">
    <VTop></VTop>
  <div id="account">
    <div class="py-container">
      <div class="yui3-g home" style="height: 600px">
        <!--左侧列表-->
        <div class="yui3-u-1-6 list" style="margin-bottom: 20px">
          <div class="person-info">
            <div class="person-photo"><img :src="'http://jiuyuan.natapp1.cc/'+userpage.user_picture" alt="" class="pic"></div>
            <div class="person-account">
              <span class="safe">账户安全</span>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="list-items">
            <dl>
              <dt><i>·</i>商品管理</dt>
              <dd ><a type="button" @click="myorder">我的订单</a></dd>
              <dd><a type="button" @click="mycomment">我的评论</a></dd>
              <dd><a type="button" @click="mystore">我的商品</a></dd>
              <dd><a type="button" @click="mymessage" >我的消息</a></dd>
            </dl>
            <dl>
              <dt><i>·</i> 设置</dt>
              <dd><a type="button" @click="mypage" class="list-active">个人信息</a></dd>
            </dl>
          </div>
        </div>

        <!--右侧主内容-->
        <div class="yui3-u-5-6">
          <div class="body userInfo">
            <ul class="sui-nav nav-tabs nav-large nav-primary ">
              <li ><a @click="change1"  :class="active1" href="#one" data-toggle="tab">基本资料</a></li>
              <li><a @click="change2" :class="active2" href="#two" data-toggle="tab">头像照片</a></li>
              <input type="button" class="sui-btn btn-primary page1" value="申请成为商家" @click="applyforseller">
            </ul> <!--切换按钮-->
            <div class="tab-content ">
              <div id="one" class="tab-pane" :class="active1">
                <form id="form-msg" class="sui-form form-horizontal"> <!--个人资料-->
                  <table>
                  <div class="control-group">
                    <label  class="control-label">用户名：</label>
                    <div class="controls">
                      <input type="text" id="inputName" name="username" placeholder="用户名" v-model="userpage.user_name">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">邮箱：</label>
                    <div class="controls">
                      <input disabled="true" type="text" id="inputEmail" name="email" placeholder="邮箱" v-model="userpage.user_email">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">联系方式：</label>
                    <div class="controls">
                      <input type="text" id="inputPhone" name="phone" placeholder="手机号" v-model="userpage.user_tel">
                    </div>
                  </div>
                  <label style="margin-left: 50px">信用分：{{userpage.user_credit}}</label>
                  <br>
                    <label style="margin-left: 50px">院系：{{userpage.department_name}}</label>
                  <br>
                    <label style="margin-left: 50px">专业：{{userpage.major_name}}</label>
                  <br>
                  <div class="control-group">
                    <label class="control-label">地址：</label>
                    <div class="controls">
                      <input type="text" id="inputadress" name="adress" placeholder="地址" v-model="userpage.user_address">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label"></label>
                    <div class="controls">
                      <input type="button" class="sui-btn btn-primary" @click="modify" value="修改个人信息">
                    </div>
                  </div>

<!--                  <tr>-->
<!--                  <div >-->
<!--                    <td valign="middle" align="right">-->
<!--                      当前头像:-->
<!--                    </td>-->
<!--                    <td valign="middle" align="left">-->
<!--                      <img :src="'http://jiuyuan.natapp1.cc/'+userpage.user_picture" style="width: 74px; height: 74px; float:left; border-radius: 50%; border: 3px solid #eee; overflow: hidden;" alt="">-->
<!--                    </td>-->
<!--                  </div>-->
<!--                    <tr>-->
<!--                      <td valign="middle" align="right">-->
<!--                        photo:-->
<!--                      </td>-->
<!--                      <td valign="middle" align="left">-->
<!--                        <input type="file" ref="photo" />-->
<!--                      </td>-->
<!--                    </tr>-->
<!--                    <br>-->
                  </table>
<!--                    <input type="button" @click="upload" class="button" value="上传" />-->
                </form>
              </div>
              <div id="two" class="tab-pane " :class="active2">
                <form>
                  <table>
                <div class="new-photo">
                  <p>当前头像：</p>
                  <img :src="'http://jiuyuan.natapp1.cc/'+userpage.user_picture" style="width: 74px; height: 74px; float:left; border-radius: 50%; border: 3px solid #eee; overflow: hidden;" alt="">
                  <td valign="middle" align="right">
                    更新头像:
                  </td>
                  <td valign="middle" align="left">
                    <input type="file" ref="photo" />
                  </td>
                <br>
                </div>
                </table>
                <input type="button" @click="upload" class="button" value="上传头像" />
                </form>
                <form>
                  <table>
                    <div class="new-photo">
                      <p>当前二维码：</p>
                      <img :src="'http://jiuyuan.natapp1.cc/'+userpage.qr_code" style="width: 74px; height: 74px; float:left; border-radius: 50%; border: 3px solid #eee; overflow: hidden;" alt="">
                        <td valign="middle" align="right">
                          上传二维码:
                        </td>
                        <td valign="middle" align="left">
                          <input type="file" ref="photo1" />
                        </td>
                      <br>
                    </div>
                  </table>
                  <input type="button" @click="uploadQR" class="button" value="上传二维码" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer" style="margin-top: 20px ; width: 100%">
    <v-indexfoot></v-indexfoot>
  </div>
  </div>
  <!--页面底部END-->
</template>

<script>
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import VTop from './comment/top'
import VIndexfoot from './comment/indexfoot'
import '../js/plugins/birthday/birthday.js'
import '../js/plugins/upload/uploadPreview.js'
import axios from 'axios'
import Index from './index'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'mypage',
  components: {Index, VIndexfoot, VTop},
  inject: ['reload'],
  data () {
    return {
      active1: 'active',
      active2: '',
      userpage: {
        department_name: '',
        department_no: '',
        is_seller: '',
        major_name: '',
        major_no: '',
        start_year: '',
        suspend_time: null,
        user_address: '',
        user_credit: '',
        user_email: '',
        user_name: '',
        user_no: '',
        user_password: '',
        user_picture: '',
        user_sex: '',
        user_tel: '',
        qr_code: ''
      },
      userpage1: {
        is_seller: '',
        start_year: '',
        suspend_time: null,
        user_address: '',
        user_credit: '',
        user_email: '',
        user_name: '',
        user_no: '',
        user_password: '',
        user_picture: '',
        user_sex: '',
        user_tel: '',
        qr_code: '',
        major_no: ''
      },
      first_keywords: {
      }
    }
  },
  methods: {
    // if(window.location.href)
    // console.log(window.location.href)
    myorder () {
      this.$router.replace({path: '/myOrder'})
      this.reload()
    },
    mymessage () {
      this.$router.replace({path: '/myMessage'})
    },
    mystore () {
      this.$router.replace({path: '/myStore'})
    },
    mycomment () {
      this.$router.replace({path: '/myComment'})
    },
    mypage () {
      this.$router.replace({path: '/mypage'})
    },
    change1 () {
      this.active1 = 'active'
      this.active2 = ''
    },
    change2 () {
      this.active1 = ''
      this.active2 = 'active'
    },
    upload () { // 上传头像
      var formData = new FormData()
      formData.append('user_no', this.userpage.user_no)
      // formData.append('user_password', this.userpage.user_password)
      // formData.append('user_name', this.userpage.user_name)
      // formData.append('user_sex', this.userpage.user_sex)
      // formData.append('user_address', this.userpage.user_address)
      // formData.append('user_credit', this.userpage.user_credit)
      // formData.append('user_tel', this.userpage.user_tel)
      // formData.append('user_email', this.userpage.user_email)
      // formData.append('suspend_time', this.userpage.suspend_time)
      // formData.append('major_no', this.userpage.major_no)
      // formData.append('start_year', this.userpage.start_year)
      // formData.append('user_picture', this.userpage.user_picture)
      // formData.append('is_seller', this.userpage.is_seller)
      // formData.append('QR_code', '')
      formData.append('photo', this.$refs.photo.files[0])
      console.log(this.$refs.photo.files[0])
      console.log(this.$refs.photo.files)
      axios({
        method: 'post',
        url: 'user/saveUserPhoto',
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data'
        },
        data: formData,
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        alert(resp.data.msg)
      })
        .catch(failResponse => {
          alert('上传失败')
        }).then(() => {
          this.getpage()
        })
    },
    uploadQR () { // 上传二维码
      var formData = new FormData()
      formData.append('user_no', this.userpage.user_no)
      formData.append('photo', this.$refs.photo1.files[0])
      console.log(this.$refs.photo1.files[0])
      console.log(this.$refs.photo1.files)
      axios({
        method: 'post',
        url: 'user/saveQRcode',
        headers: {
          'Accept': 'application/json',
          'content-type': 'multipart/form-data'
        },
        data: formData,
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        alert('二维码上传成功')
      })
        .catch(failResponse => {
          alert('上传失败')
        })
    },
    applyforseller () { // 申请成为商家
      var a = localStorage.getItem('token')
      axios({
        method: 'post',
        url: 'user/applySeller',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        alert(resp.data.msg)
      })
        .catch(failResponse => {
          alert('断开服务器')
        })
    },
    modify () { // 修改信息
      this.userpage1.is_seller = this.userpage.is_seller
      this.userpage1.start_year = this.userpage.start_year
      this.userpage1.suspend_time = this.userpage.suspend_time
      this.userpage1.user_address = this.userpage.user_address
      this.userpage1.user_credit = this.userpage.user_credit
      this.userpage1.user_email = this.userpage.user_email
      this.userpage1.user_name = this.userpage.user_name
      this.userpage1.user_no = this.userpage.user_no
      this.userpage1.user_password = this.userpage.user_password
      this.userpage1.user_picture = this.userpage.user_picture
      this.userpage1.user_sex = this.userpage.user_sex
      this.userpage1.user_tel = this.userpage.user_tel
      this.userpage1.qr_code = this.userpage.qr_code
      this.userpage1.major_no = this.userpage.major_no
      console.log(this.userpage1)
      alert(this.userpage1.user_tel)
      alert('您确认要更改信息么')
      axios.post('http://jiuyuan.natapp1.cc/user/modifyInformation?', this.userpage1, {
        headers: {'Accept': 'application/json'}
      }).then(res => {
        if (res.data.state === true) {
          alert(res.data.msg)
          this.getpage()
        }
      })
        .catch(() => alert('断开服务器'))
      // axios({
      //   method: 'post',
      //   url: 'user/modifyInformation',
      //   headers: {
      //     'Accept': 'application/json'
      //   },
      //   params: {
      //     user_infoEntity: this.userpage1
      //   },
      //   CrossDomain: true,
      //   dataType: 'jsonp'
      // }).then(resp => {
      //   alert(resp.data.msg)
      // }).then(() => {
      //   this.getpage()
      // })
      //   .catch(failResponse => {
      //     alert('断开服务器')
      //   })
    },
    getpage2 () {
      var b = localStorage.getItem('token')
      if (b === null) {
        alert('请先登录')
        this.$router.replace({path: '/user_login'})
      } else {
        this.getpage()
      }
    },
    getpage () { // 主页信息
      var myDate = new Date()
      // console.log(myDate.toISOString())
      this.suspend_time = myDate.toISOString()
      // alert(localStorage.getItem('token'))// token
      var a = localStorage.getItem('token')
      axios.defaults.headers.common['token'] = a
      axios({
        method: 'post',
        url: 'user/userDetail',
        headers: {
          'Accept': 'application/json',
          'token': a
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.userpage = resp.data
        console.log(resp.data)
      })
        .catch(failResponse => {
        })
    },
    change_second_selectwords () {
      // 根据id找到两个下拉框对象
      var target1 = document.getElementById('department')
      var target2 = document.getElementById('major')
      console.log(target2)
      // 得到第一个下拉框的内容
      var selectedInitial = target1.options[target1.selectedIndex].innerHTML // 第一个下拉框的值
      // 清空第二个下拉框
      console.log(selectedInitial)
      while (target2.options.length) {
        target2.remove(0)
      }
      // 根据第一个下拉框的内容找到对应的列表
      var initialList = this.first_keywords[selectedInitial]
      if (initialList) {
        for (var i = 0; i < initialList.length; i++) {
          var item = new Option(initialList[i], i)
          // 将列表中的内容加入到第二个下拉框
          target2.options.add(item)
          console.log(item)
        }
      }
    }
  },
  mounted: function () {
    this.getpage2()
  }
}
$(function () {
  $.ms_DatePicker({
    YearSelector: '#select_year2',
    MonthSelector: '#select_month2',
    DaySelector: '#select_day2'
  })
})
window.addEventListener('storage', function (e) { // e只是一个传参
  // 获取被修改的键值
  if (e.key === 'mytoken') {
    // 获取将要被添加内容的元素
    // var output = document.getElementById('output')
    // // 将获取到的修改值在元素中输出
    // output.innerHTML = '原有值：' + e.oldValue
    // output.innerHTML += '<br />新值:' + e.newValue
    // 分别打印会发现内容一致
    // console.log(e.storageArea)
    // console.log(localStorage)
    // // //此行代码只在Chrome浏览器中有效
    // console.log(e.storageArea === localStorage)// 输出true
  }
}, false)
$(document).ready(function () {
  $('#TImgSrc').uploadPreview({
    Img: 'uploadImage', Width: 280, Height: 280, ImgType: ['gif', 'jpeg', 'jpg', 'bmp', 'png'], Callback: function () { }})
})
</script>

<style scoped>
  .page1 {
    width: 100px;
    margin-left: 600px;
  }
  input{
    width: 200px;
  }
  .list-items dd{
    margin-top: 30px ;
  }
  .list-items{
    height:90%
  }
  h1{
    background-image: -webkit-linear-gradient(left,red,orange 30%,orangered 60%,#ff0000 90%,red 100%);
    -webkit-text-fill-color: transparent;/* 将字体设置成透明色 */
    -webkit-background-clip: text;/* 裁剪背景图，使文字作为裁剪区域向外裁剪 */
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 4s linear infinite;
    font-size: 35px;
    margin: 30px;
    float: left;
  }
  @keyframes masked-animation {
    0% {
      background-position: 0  0;
    }
    100% {
      background-position: -100%  0;
    }
  }
  .pic {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
</style>
<style src="../css/webbase.css" />
<style src="../css/pages-seckillOrder.css" />
