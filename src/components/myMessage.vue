<template>
  <div id="account">
    <VTop></VTop>
<!--    <h1>我的消息</h1>-->
    <div class="py-container">
      <div class="yui3-g home" style="height: 620px">
        <!--左侧列表-->
        <div class="yui3-u-1-6 list" style="margin-bottom: 20px">
          <div class="person-info">
            <div class="person-account">
<!--              <span class="name">Michelle</span>-->
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
              <dd><a type="button" @click="mymessage" class="list-active">我的消息</a></dd>
            </dl>
            <dl>
              <dt><i>·</i> 设置</dt>
              <dd><a type="button" @click="mypage" >个人信息</a></dd>
<!--              <dd><a href="home-setting-address.html"  >地址管理</a></dd>-->
<!--              <dd><a href="home-setting-safe.html" >安全管理</a></dd>-->
            </dl>
          </div>
        </div>
        <!--右侧主内容-->
        <div class="yui3-u-5-6 order-pay">
          <div class="body">
            <div class="order-detail">
              <div class="orders">
                <div class="choose-title">
                  <span style="margin-left: 10px"><b>我的消息</b> </span>
                  <span style="margin-left: 260px"><b>消息状态</b></span>
                  <span style="margin-left: 260px"><b>操作</b></span>
                </div>
                <table class="sui-table table-bordered order-datatable" >
                  <tbody>
                  <tr v-for="(list,i) in firstList" :key="i" v-if="(((currentpage-1)*5 <= i)&&(i<currentpage*5))" style="height: 95px">
                    <td width="33%" >
<!--                      <div class="typographic"><img src="../img/goods.png" />&lt;!&ndash;list.sender_picture &ndash;&gt;-->
                        <a href="#" class="block-text">{{ list.msg_text}}</a>
<!--                      </div>  &lt;!&ndash;1&ndash;&gt;-->
                    </td>
                    <td width="33%">
                      <div class="state" @click="changeState(i)">
                        <ul v-if="list.msg_state === '0'">
                          <span type="button" style="color: red">消息未读</span>
                        </ul>
                        <ul v-else>
                          <span type="button" style="color: black">消息已读</span>
                        </ul>
                      </div>
                    </td>
                    <td width="33%" class="center">
                      <ul class="unstyled">
                        <li><a href="#" class="sui-btn btn-info" @click="deleteMessage(i)">删除</a></li>
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div class="choose-order">
                  <div class="sui-pagination pagination-large top-pages">
                    <ul>
                      <li :class="currentpage<=1?'disabled':''" @click="prepage"><a href="#">«上一页</a></li>
                      <li v-for="(v,i) in pagetotal" :key="i" @click="changepage(v)" :class="currentpage===v?'active':''">
                        <a href="#" >{{v}}</a></li>
                      <li class="next" @click="nextpage" :class="currentpage>=pagetotal?'disabled':''"><a href="#">下一页»</a></li>
                      <li><span>共{{pagetotal}}页</span></li>
                    </ul>
                  </div>
                </div>
                  <div class="clearfix"></div>
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
</template>

<script>
import VTop from './comment/top'
import VIndexfoot from './comment/indexfoot'
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'myMessage',
  data () {
    return {
      pagetotal: '', // 分了多少页
      currentpage: 1, // 当前页
      totale: '', // 总条目数
      firstList: {
        accepter_name: '',
        accepter_no: '',
        accepter_picture: '',
        msg_no: null,
        msg_state: '',
        msg_text: '',
        sender_name: '',
        sender_no: '',
        sender_picture: ''
      }
    }
  },
  components: {VIndexfoot, VTop},
  methods: {
    changeState (k) {
      console.log(this.firstList[k].msg_no)
      axios.post('http://jiuyuan.natapp1.cc/user/flagReadMessage?msg_no=' + this.firstList[k].msg_no, {
        headers: {'Accept': 'application/json'}
      }).then(res => {
        // alert(res.data)
      })
        .catch(() => alert('断开服务器'))
      this.firstList[k].msg_state = 1
      console.log(this.firstList[k].msg_state)
    },
    myorder () {
      this.$router.replace({path: '/myOrder'})
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
    changepage (v) {
      this.currentpage = v
      // this.getmessage(v)
      console.log(v)
    },
    deleteMessage (i) {
      var a = localStorage.getItem('token')
      axios.defaults.headers.common['token'] = a
      axios({
        method: 'post',
        url: 'user/deleteMessage',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp',
        params: {
          msg_no: this.firstList[i].msg_no
        }
      }).then(resp => {
        console.log(resp.data)
        if (resp.data.state === true) {
          alert(resp.data.msg)
        }
      }).then(() => {
        this.getmessage()
      })
    },
    nextpage () {
      if ((this.currentpage >= 1) && (this.currentpage < this.pagetotal)) {
        // this.getmessage(++this.currentpage)
        ++this.currentpage
        console.log(this.currentpage)
      }
    },
    prepage () {
      if ((this.currentpage <= this.pagetotal) && (this.currentpage > 1)) {
        // this.getmessage(--this.currentpage)
        --this.currentpage
        console.log(this.currentpage)
      }
    },
    getmessage () {
      var a = localStorage.getItem('token')
      axios.defaults.headers.common['token'] = a
      axios({
        method: 'post',
        url: 'user/myMessage',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.firstList = resp.data
        console.log('消息' + resp.data)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.totale = this.firstList.length
        this.pagetotal = Math.ceil(this.totale / 5)
        // console.log(this.totale)
        // console.log(this.pagetotal)
        //   var item = this.firstList[i]
        //   console.log(item)
        //   console.log(item.msg_state)
        // }
      })
        .catch(failResponse => {
        })
    }
  },
  mounted () {
    this.getmessage()
  }
}
</script>

<style scoped>
  .list-items dd{
    margin-top: 30px ;
  }
  .list-items{
    height: 90%;
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
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css"></style>
