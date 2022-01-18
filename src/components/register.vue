<template>
  <div class="register py-container ">
    <!--注册头-->
    <div class="logoArea">
      <a href="" ><img src="../assets/2.jpg"></a>
    </div>
    <!--注册主体部分-->
    <div class="registerArea" id="registerApp">
      <h3>注册新用户<span class="go">我有账号，去<a href='javascript:void(0)' @click="login">登录</a></span></h3>
      <div class="info" style="width: 650px">
        <form class="sui-form form-horizontal">
          <div class="control-group">
            <label class="control-label">昵称：</label>
            <div class="controls">
              <input type="text" placeholder="请输入你的昵称" class="input-xfat input-xlarge"
                     v-model.lazy="user.user_name" name="username" data-vv-as="昵称"
                     v-validate="'required|min:4|max:30'">
            </div>
            <span style="color: red;">{{ errors.first('username') }}</span>
          </div>
          <div class="control-group">
            <label class="control-label">登录密码：</label>
            <div class="controls">
              <input type="password" placeholder="设置登录密码" class="input-xfat input-xlarge"
                     v-model="user.user_password" name="password" data-vv-as="密码" id="password"
                     v-validate="'required|alpha_dash|min:4|max:30'">
            </div>
            <span style="color: red;">{{ errors.first('password') }}</span>
          </div>
          <div class="control-group">
            <label class="control-label">确认密码：</label>
            <div class="controls">
              <input type="password" placeholder="再次确认密码" class="input-xfat input-xlarge"
                     v-model="confirmPassword" name="confirmPass" data-vv-as="确认密码" id="confirmPassword"
                     v-validate="{required:true,confirm:user.user_password}">
            </div>
            <span style="color: red;">{{ errors.first('confirmPass') }}</span>
          </div>

          <div class="control-group">
            <label class="control-label">院系：</label>
            <div class="controls">
              <select id="department"  @click="change_second_selectwords">
                <option value="">---</option>
                <option  v-for="(list,i) in department" :key="i">{{list.department_name}}</option>  <!--v-for的使用-->
<!--                <option value="A">信息工程学院</option>-->
<!--                <option value="B"></option>-->
<!--                <option value="C"></option>-->
              </select>
              专业：<select v-model="user.major_no" id="major"></select>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">入学年份：</label>
            <div class="controls">
              <select id="Time"  v-model="user.start_year">
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">收件地址：</label>
            <div class="controls">
              <input type="text" placeholder="请输入你的收件地址，非必填" class="input-xfat input-xlarge"
                     v-model="user.user_address" name="adress" data-vv-as="地址"
                     v-validate="'min:4|max:30'">
            </div>
            <span style="color: red;">{{ errors.first('adress') }}</span>
          </div>

          <div class="control-group">
            <label class="control-label">邮箱：</label>
            <div class="controls">
              <input type="text" placeholder="请输入你的邮箱" class="input-xfat input-xlarge"
                     v-model="user.user_email" name="emile" data-vv-as="邮箱"
                     v-validate="'required:true|email:user.user_email'">
            </div>
            <span style="color: red;">{{ errors.first('emile') }}</span>
          </div>
          <div class="control-group">
            <label class="control-label">邮箱验证码：</label>
            <div class="controls">
              <input type="text" placeholder="邮箱验证码" class="input-xfat input-xlarge" style="width: 120px;"
                     v-model="code" name="code" v-validate="'required'" data-vv-as="验证码">
              <button  type="button" class="code-span" id='code'  @click="createVerifyCode">
                               获取验证码
              </button>
            </div>
            <span style="color: red;">{{ errors.first('code') }}</span>
          </div>

          <div class="control-group">
            <label class="control-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div class="controls">
              <input name="m1" type="checkbox" value="2" checked=""><span>同意协议并注册《九源用户协议》</span>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label"></label>
            <div class="controls btn-reg">
              <a class="sui-btn btn-block btn-xlarge btn-danger" href="javascript:void(0)" target="_blank"
                 @click.prevent="submit"
              >完成注册</a>
            </div>
<!--            <h @click="code1"> 8765432</h>-->
          </div>
        </form>
        <div class="clearfix"></div>
      </div>
    </div>
    <v-indexfoot></v-indexfoot>
  </div>
</template>

<script>/* eslint-disable */
import Vue from 'vue'
import VIndexfoot from './comment/indexfoot'
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
import VeeValidate,{ Validator }from 'vee-validate'
Vue.use(VeeValidate, {
  events: 'blur',
  dictionary: {
    zh: {
      messages: { // 创建的规则
        required: (field) => field + '不能为空！',
        min: (field, args) => field + '长度不能小于' + args[0],
        max: (field, args) => field + '长度不能大于' + args[0],
        // alpha_dash: (field) => field + '只能包含数字、字母或下划线',//alpha_dash
        // chs_dash: (field) => field + '包含汉字',//alpha_dash
        email: (field) =>  '请输入有效的电子邮件地址',
        // is: (field) => field + '两次密码不一',
      },
    }
  },
  locale: 'zh'
})
// console.log(this.user.user_email)
export default {
  inject: ['reload'],
  data () {
    return {
      t: '',
      code: null,
      confirmPassword: null,
      department: {
        department_no: null,
        department_name: null
      },
      major: {
        major_no: null,
        major_name: null,
        department_no: null
      },
      user: {
        user_no: null,
        user_name: null,
        user_password: null,
        user_sex: null,
        user_tel: null,
        suspend_time: null,
        major_no: null,
        start_year: null,
        user_picture: null,
        is_seller: null,
        user_credit: null,
        user_address: null,
        user_email: null,
      },
      dnum: null,//院系数量
      first_keywords:
        [
          []
          // department_no: null,
          // major_name: null,
          // major_no: null}
        ],
      first_keywords2:
        [
          []
      ]
    }
  },
  created () {
    //   this.$nextTick(function () {
    //     this.$validator.addMethod('confirm',function (value,element,params) {
    //       console.log(value)
    //       if(value === this.password){
    //         return true;
    //       }
    //     }, "两次密码不一致")
    //   })
    // },
    this.$validator.extend('confirm', {
      getMessage () {
        return "两次密码不一致"
      },
      validate (val, args) {
        // console.log(val)
        // console.log(args[0])
        // console.log(this.user.password)
        return val === args[0]  //写入的数据与args[0]比较
      }
    })
  },
  name: 'register',
  components: {VIndexfoot},
  methods: {
    login () {
      this.$router.replace({path: '/user_login'})
      location.reload()
      // this.reload()
    },
    change_second_selectwords () {
      // 根据id找到两个下拉框对象
      var target1 = document.getElementById('department')
      var target2 = document.getElementById('major')
      // console.log(target2)
      // 得到第一个下拉框的内容
      var selected_initial = target1.options[target1.selectedIndex].innerHTML
      // 清空第二个下拉框
      console.log(selected_initial)
      while (target2.options.length) {
        target2.remove(0)
      }
      // 根据第一个下拉框的内容找到对应的列表
      var initial_list = this.first_keywords[selected_initial]
      var initial_list2 = this.first_keywords2[selected_initial]
      console.log('yy' + initial_list)
      console.log('tt' + initial_list2)
      this.major = initial_list2
      if (initial_list) {
        for (var i = 0; i < initial_list.length; i++) {
          var item = new Option(initial_list[i], i)
          // 将列表中的内容加入到第二个下拉框
          target2.options.add(item)
          // console.log(item)
        }
      }
    },
    createVerifyCode () {
      // console.log(this.user.user_email)
      axios({
        method: 'post',
        url: 'sendEmail',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        params: {
          email: this.user.user_email, //请求发送emile
        }
      }).then(resp => {
        this.t=resp.data.state
        // if (resp.data.state === true) {
        alert(resp.data.msg)
        // }
      }).catch(()=>{
        alert('服务器已断开')
      }).then(resp => {
        this.nextcr()
      })
    },
    nextcr(){
      if(this.t === false) {
      } else {
        var waitTime = 60
        // document.getElementById('code').onclick  = function () {
        //   time(this)
        // }
        var ele=document.getElementById('code')
        time(ele)
        function time (ele) {
          if (waitTime == 0) {
            ele.disabled = false;
            ele.innerHTML = " 获取验证码";
            waitTime = 60;// 恢复计时
          } else {
            ele.disabled = true;
            ele.innerHTML = waitTime + "秒后可以重新发送";
            waitTime--;
            setTimeout(function () {
              time(ele)// 关键处-定时循环调用
            }, 1000)
          }
        }
      }
    },
    findDepartment() {
      axios.post("http://jiuyuan.natapp1.cc/findAllDepartment", {
        headers: {'Accept': 'application/json'},
        CrossDomain: true,
        dataType: 'jsonp',
      }).then(res=>{
        // console.log(res)
        // console.log(res.data.length)
        // console.log(res.data[1].department_name)
        this.department = res.data
        this.dnum = res.data.length
        // console.log(this.dnum)
        // for(var i=0;i<res.data.length;i++){
        //   console.log(res.data[i].department_name)
        // }
        // console.log('555'+this.major[1].major_name)
      }).catch(() => alert("获取失败")).then( res=>{
        this.nextmajor()
      })
    },
    nextmajor(){
      for(var i=0;i<this.dnum;i++){
        this.findMajor(this.department[i].department_no,i)
      }
    },
    findMajor(dno,i){
      axios.post("http://jiuyuan.natapp1.cc/findMajorByDno?Dno="+dno).then(res=> {
        this.major= res.data
        // console.log('22'+res.data.major_name)
        this.first_keywords[this.department[i].department_name] =new Array()
        this.first_keywords2[this.department[i].department_name] =new Array()
        for(var j=0;j<res.data.length;j++){
          this.first_keywords[this.department[i].department_name][j] = this.major[j].major_name,
          this.first_keywords2[this.department[i].department_name][j] = this.major[j].major_no
        }
        // console.log(this.first_keywords['医学院'].array[1].major_name)
      }).catch(() => console.log("服务器已断开"))
    },
    submit () {
      console.log(this.user.start_year)
      // console.log('??' + this.user.major_no)
      var t =this.user.major_no
      this.user.major_no = this.major[t]
      console.log('no' + this.user.major_no)
      // console.log(this.major[t].major_name)
      // console.log('uu' + this.major[0].major_no)
      this.$validator.validateAll().then(d => {
        if (d) {
          axios.post("http://jiuyuan.natapp1.cc/register?code=" + this.code, this.user).then(res => {
            console.log(res.data)
            // if (res.data.state === true) {
              alert(res.data.msg + '你的账号是:' + res.data.user_no)
              this.$router.replace({path: '/user_login'})
            // }
          })
            .catch(() => alert('验证码错误或服务器已断开,注册失败'))
        }
        else{
          alert('信息填写错误或填写不完整')
        }
      })
    }
  },
  mounted () {
    this.findDepartment()
  }
}
</script>

<style scoped>
  .code-span {
    display: inline-block;
    border: 1px solid #999;
    text-align: center;
    line-height: 35px;
    width: 125px;
    height: 35px;
    float: right;
    margin-left: 10px
  }
  .code-span:hover{
    background-color: #c0ccda;
  }
  /*.control-group {*/
  /*  background-color: blue;*/
  /*}*/
</style>
<style src="../css/pages-register.css"></style>
<style src="../css/webbase.css"></style>
