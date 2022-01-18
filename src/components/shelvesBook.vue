<template>
  <div class="shelvt" >
  <div id="shelvesBookApp" style="margin-bottom: 40px">
    <!--头部栏位-->
    <div id="nav-bottom">
      <v-top></v-top>
    </div>
    <div class="py-container" style="height: 950px"><!--使得页面元素不随页面的大小而被改变-->
    <!--商品上架主内容-->
<!--    <div class="sk-store">-->
      <div class="cube">
        <div class="box1">
          <img src="../img/复仇者/1.jpg">
        </div>
        <div class="box2">
          <img src="../img/复仇者/2.jpg">
        </div>
        <div class="box3">
          <img src="../img/复仇者/3.jpg">
        </div>
        <div class="box4">
          <img src="../img/复仇者/4.jpg">
        </div>
        <div class="box5">
          <img src="../img/复仇者/5.jpg">
        </div>
        <div class="box6">
          <img src="../img/复仇者/6.jpg">
        </div>

      </div>

      <div class="ms-one" >
        <div class="body userInfo">
        <div class="tab-content ">
          <div id="one" class="tab-pane active">

            <form id="form-msg" class=" sui-form form-horizontal" style="margin-top: 10px; height: 950px">
              <div class="control-group">
              <h1 style="text-align: center;margin-left: 50px">商品信息填写</h1>
              </div>
              <div class="control-group">
                <label  for="bi_no" class="control-label">图书编号：</label>
                <div class="controls">
                  <tr >
                  <input style="width: 200px" type="text" id="bi_no"  name="bi_no" placeholder="图书编号为13位的标准书码" v-model="cno" data-vv-as="图书编号" v-validate="'required|min:13|max:13'">
                    <span style="color: red;">{{ errors.first('bi_no') }}</span>
                  </tr>
                  <div>
                  <input type="button" class="sui-btn" value="查找该图书" @click="getbyno()">
                                    <ul v-if="i === 1">
                                        该图书已收录库中
                                      </ul>
                                      <ul v-else-if="i === 3">
                                        该图书未收录在库中
                                      </ul>
                  <ul v-else>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="control-group"  >
                <label  for="inputName" class="control-label" >书名：</label>
                <div class="controls">
                  <input type="text" id="inputName"  placeholder="书名" v-model="book.bi_name" >
                </div>
              </div>

              <div class="control-group" v-show="this.i !== 1 ">
                <label >选择图书类别:(您最多为该书选择9个标签)</label>

                <div style="float: left">
                <div v-for="(list1,i) in Category.category1" :key="i" >
                  <input type="checkbox" name="book" value="book">{{list1.category_name}}<br>
                </div>
                </div>

              <div style="float: left">
                <div v-for="(list2,j) in Category.category2" :key="j" >
                  <input type="checkbox" name="book1" value="book1">{{list2.category_name}}<br>
                </div>
              </div>

              <div style="float: left;margin-left: 20px">
                <div v-for="(list3,k) in Category.category3" :key="k" >
                  <input type="checkbox" name="book2" value="book2">{{list3.category_name}}<br>
                </div>
              </div>

              </div>
              <div class="control-group">
                <label  for="autor" class="control-label">作者：</label>
                <div class="controls">
                  <input type="text" id="autor"  placeholder="作者" v-model="book.author">
                </div>
              </div>
              <tr>
              </tr>
              <div class="control-group">
                <label  for="press" class="control-label">出版社：</label>
                <div class="controls">
                  <input type="text" id="press"  placeholder="出版社" v-model="book.press">
                </div>
              </div>
              <div class="control-group">
                <label  for="price" class="control-label">标价：</label>
                <div class="controls">
                  <input type="text" id="price1"  placeholder="标价" v-model="book.bi_price">
                </div>
              </div>
              <div class="control-group">
                <label  for="price" class="control-label">定价：</label>
                <div class="controls">
                  <input type="text" id="price"  placeholder="定价" v-model="bookused.bu_price">
                </div>
              </div>

              <div class="control-group">
                <label  for="price" class="control-label">新度：</label>
                <div class="controls">
                  <input type="text" id="degree"  placeholder="新度" v-model="bookused.new_degree">
                </div>
              </div>

              <div class="control-group">
                <label  for="price" class="control-label">标签：</label>
                <div class="controls">
                  <input type="text" id="label"  placeholder="标签" v-model="bookused.label">
                </div>
              </div>
              <div class="control-group">
                <table>
                  <div class="new-photo">
                    <td valign="middle" align="right">
                      上传图片:
                    </td>
                    <td valign="middle" align="left">
                      <input type="file" ref="photo" />
                    </td>
                    <br>
                  </div>
                </table>
              </div>
              <div class="control-group" style="margin: 0px 330px 0px 330px">
                <label class="control-label"></label>
                <div class="controls">
                  <table>
                    <tr>
                      <a href="#" class="sui-btn btn-primary" style="width: 100px; height: 30px;line-height: 22px" @click="postmessage">确认提交</a>
                      <button style="margin-left: 30px;width: 100px; height: 30px;line-height: 22px" type="reset" class="sui-btn btn-primary">重置信息</button>
                    </tr>
                  </table>

                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  </div>
<!--  </div>-->
    <!--底部-->
    <div class="clearfix footer" style="margin-top: 10px">
    <v-indexfoot></v-indexfoot>
  </div>
  </div>
</template>

<script>/* eslint-disable */
import Vue from 'vue'
import VTop from './comment/top'
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
        min: (field, args) => field + '长度应为' + args[0] + '位',
        max: (field, args) => field + '长度应为' + args[0] + '位',
      },
    }
  },
  locale: 'zh'
})
export default {
  name: 'shelvesBook',
  components: {VIndexfoot, VTop},
  data () {
    return {
      i: 0,
      book: {
        author: null,
        bi_name: null,
        bi_no: null,
        bi_picture: null,
        bi_price: 0.0,
        bi_state: null,
        category_no: '',
        press: null,
        version: null
      },
      bookused: {
        bi_no: null,
        user_no: null,
        bu_no: null,
        bu_picture: null,
        bu_price: null,
        bu_state: null,
        label: null,
        new_degree: null
      },
      Category: {
        category1: {
          category_no: '',
          category_name: ''
        },
        category2: {
          category_no: '',
          category_name: ''
        },
        category3: {
          category_no: '',
          category_name: ''
        }
      },
      username: '',
      cno: ''
    }
  },
  methods: {
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
    postmessage () {
          var items1 = document.getElementsByName('book')
          for (var i = 0; i < items1.length; i++) {
            // console.log('1' + items1[i].checked)
            // console.log('ii' + this.Category.category1[i].category_no)
            if (items1[i].checked === true) {
              console.log('ii' + this.Category.category1[i].category_no)
              this.book.category_no += this.Category.category1[i].category_no
            }
          }
          var items2 = document.getElementsByName('book1')
          for (var j = 0; j < items2.length; j++) {
            // console.log('2' + items2[j].checked)
            if (items2[j].checked === true) {
              this.book.category_no += this.Category.category2[j].category_no
            }
          }
          var items3 = document.getElementsByName('book2')
          for (var k = 0; k < items3.length; k++) {
            // console.log('3' + items3[k].checked)
            if (items3[k].checked === true) {
              this.book.category_no += this.Category.category3[k].category_no
            }
          }
          console.log('no:' + this.book.category_no)
          this.nextpost()
        },
    nextpost () {
      this.bookused.bi_no = this.cno
      this.getCookie()
      this.bookused.user_no = this.username
      this.bookused.bu_picture = this.$refs.photo.files[0]
      // console.log('rr ' + this.$refs.photo.files[0])
      // console.log('re' + this.bookused.user_no)
      var formData = new FormData()
      formData.append('user_no', this.username)
      formData.append('bi_no', this.cno)
      formData.append('bu_no', this.bookused.bu_no)
      formData.append('bu_price', this.bookused.bu_price)
      formData.append('label', this.bookused.label)
      formData.append('new_degree', this.bookused.new_degree)
      formData.append('bu_picture', '')
      formData.append('bu_state', '')
      formData.append('photo', this.$refs.photo.files[0])
      if (this.i === 1) { // 有
        axios({
          method: 'post',
          url: 'user/shelvesBook_used',
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
            alert('服务器已断开')
          })
      } else {
        var formData2 = new FormData()
        formData2.append('author', this.book.author)
        formData2.append('bi_name', this.book.bi_name)
        formData2.append('bi_picture', '')
        formData2.append('bi_price', this.book.bi_price)
        formData2.append('bi_state', '')
        formData2.append('category_no', this.book.category_no)
        formData2.append('press', this.book.press)
        formData2.append('version', '')
        formData2.append('bi_no', this.cno)
        axios({
          method: 'post',
          url: 'user/shelvesBook_info',
          headers: {
            'content-type': 'multipart/form-data',
            'Accept': 'application/json'
          },
          data: formData2,
          CrossDomain: true,
          dataType: 'jsonp'
        }).then(resp => {
        }).catch(() => {
        }).then(() => {
          axios({
            method: 'post',
            url: 'user/shelvesBook_used',
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
              alert('信息填写不完整，请完善信息')
            })
        })
      }
    },
    getbyno () {
      // 利用v-model双向绑定一个数据
      axios({
        method: 'post',
        url: 'user/findBook_info',
        headers: {
          'Accept': 'application/json'
        },
        params: {
          bi_no: this.cno
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        // console.log('leng' + resp.data.length)
        if (resp.data.length !== 0) {
          this.book = resp.data
          this.i = 1
        } else {
          this.i = 3
          this.book = ''
        }
        console.log(resp.data)
      }).catch(() => {
        alert('断开服务器')
      })
    },
    // tt () {
    //   var b = localStorage.getItem('token')
    //   if (b === null) {
    //     alert('请先登录')
    //     this.$router.replace({path: '/user_login'})
    //   } else {
    //     this.findAllCategory()
    //   }
    // },
    findAllCategory () {
      axios({
        method: 'post',
        url: 'findAllCategory',
        headers: {
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.Category = resp.data
        // console.log(resp.data)
        // console.log('yyy' + resp.data)
      }).catch(() => {
        alert('断开服务器')
      })
    }
  },
  mounted () {
    this.findAllCategory ()
  }
}
</script>

<style scoped>
  .sk-store{
    background-color: #ddd;
  }
  .cube {
    float: left;
    width: 200px;
    height: 200px;
    margin: 100px -250px;
    /*设置3d变形*/
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
    animation: rotate 20s infinite linear;
  }

  .cube > div {
    width: 200px;
    height: 200px;
    opacity: 0.7;
    position: absolute;
  }

  img {
    vertical-align: top;
  }

  .box1 {
    transform: rotateY(90deg) translateZ(100px); /*右*/
  }

  .box2 {
    transform: rotateY(-90deg) translateZ(100px); /*左*/
  }

  .box3 {
    transform: rotateX(90deg) translateZ(100px); /*上*/
  }

  .box4 {
    transform: rotateX(-90deg) translateZ(100px); /*下*/
  }

  .box5 {
    transform: translateZ(100px); /*前*/
  }

  .box6 {
    transform: rotateY(180deg) translateZ(100px); /*后*/
  }

  @keyframes rotate {
    form {
      transform: rotateX(0) rotateZ(0);
    }
    to {
      transform: rotateX(360deg) rotateZ(360deg);
    }
  }
  .ms-one{
    margin:0px 30px;
    background-color: white;
  }
  .sui-form{
    box-shadow:1px 2px 4px rgba(0, 0, 0, .5);
    font-size: 15px;
    height: 100%;
  }
  #one{
    /*width: 400px;*/
    height: 500px;
  }
  .control-group{
    margin: 0px 400px;
    /*height: 20%;*/
    padding-top: 10px;
  }
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-JD-index.css"></style>
<!--<style src="../css/widget-jquery.autocomplete.css"></style>-->
<style src="../css/widget-cartPanelView.css"></style>
