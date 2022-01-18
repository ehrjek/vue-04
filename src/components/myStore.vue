<template>
  <div id="account">
      <VTop></VTop>
    <div class="py-container">
      <div class="yui3-g home" style="height: 620px">
        <!--左侧列表-->
        <div class="yui3-u-1-6 list" style="margin-bottom: 20px">

          <div class="person-info">
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
              <dd><a type="button" @click="mystore" class="list-active">我的商品</a></dd>
              <dd><a type="button" @click="mymessage">我的消息</a></dd>
            </dl>
            <dl>
              <dt><i>·</i> 设置</dt>
              <dd><a type="button" @click="mypage" >个人信息</a></dd>
            </dl>
          </div>
        </div>
        <!--右侧主内容-->
        <div class="yui3-u-5-6 order-pay">
          <div class="body">
            <div class="order-detail">
              <div class="orders">
                <div class="choose-title">
                  <span style="margin-left: 160px"><b>我的商品</b> </span>
                  <span style="margin-left: 230px"><b>商品售价</b> </span>
                  <span style="margin-left: 140px"><b>商品标签</b> </span>
                  <span style="margin-left: 150px"><b>操作</b></span>
                </div>
                <table class="sui-table table-bordered order-datatable">
                  <tbody>
                  <tr v-for="(list,i) in mystore1" :key="i" v-if="(((currentpage-1)*5 <= i)&&(i<currentpage*5))" style="height: 95px">
                    <td width="20%" >
                      <div class="typographic"><img style="width: 100px; height: 90px" :src="'http://jiuyuan.natapp1.cc/'+list.bu_picture"/>
<!--                        <a href="#" class="block-text">{{list.author}}</a>-->
                      </div>
                    </td>
                    <td width="20%" class="center">
                      <ul class="unstyled">
                        <li>{{list.bi_name}}</li>
                      </ul>
                    </td>
                    <td width="20%" class="center">
                      <ul class="unstyled">
                        <li>{{list.bu_price}}</li>
                      </ul>
                    </td>
                    <td width="20%" class="center">
                      <ul class="unstyled">
                        <li>{{list.label}}</li>
                      </ul>
                    </td>
                    <td width="20%" class="center">
                      <ul class="unstyled" v-if="list.bu_state === '1' ">
                        <li><a href="#" class="sui-btn btn-info" @click="deleteMessage(i)" >商品下架</a></li>
                      </ul>
                      <ul class="unstyled" v-if="list.bu_state === '2' ">
                        <li>商品正在交易或交易已完成</li>
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
                  </div> <!--翻页-->
                </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="clearfix footer" style="margin-top: 20px ; width: 100%">
    <v-indexfoot></v-indexfoot>
  </div>
  </div>
</template>

<script>
import VIndexfoot from './comment/indexfoot'
import VTop from './comment/top'
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'myStore',
  data () {
    return {
      pagetotal: '', // 分了多少页
      currentpage: 1, // 当前页
      totale: '', // 总条目数
      mystore1: {
        author: '',
        bi_name: '',
        bi_no: '',
        bi_picture: '',
        bi_price: '',
        bu_no: '',
        bu_picture: '',
        bu_price: '',
        category_no: '',
        label: '',
        new_degree: '',
        press: '',
        suspend_time: '',
        user_address: '',
        user_credit: '',
        user_email: '',
        user_name: '',
        user_no: '',
        user_picture: '',
        user_tel: '',
        version: '',
        bu_state: ''
      }
    }
  },
  components: {VIndexfoot, VTop},
  methods: {
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
      var msg_n = i
      var a = localStorage.getItem('token')
      axios.defaults.headers.common['token'] = a
      console.log(this.mystore1[i].bu_no)
      axios({
        method: 'post',
        url: 'user/removeStore',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp',
        params: {
          no: this.mystore1[i].bu_no
        }
      }).then(resp => {
        if (resp.data.state === true) {
          alert(resp.data.msg)
        }
      }).catch(() => {
        alert('断开服务器')
      }).then(() => {
        this.getstore()
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
    getstore () {
      // this.currentpage = i || this.currentpage
      // var name1 = m.data().username
      var a = localStorage.getItem('token')
      axios.defaults.headers.common['token'] = a
      axios({
        method: 'post',
        url: 'user/myStore',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.mystore1 = resp.data
        console.log(resp.data)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.totale = this.mystore1.length
        this.pagetotal = Math.ceil(this.totale / 5)
        console.log(this.totale)
        console.log(this.pagetotal)
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
    this.getstore()
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
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css"></style>
