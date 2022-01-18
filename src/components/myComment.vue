<template>
  <div id="account1">
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
              <dd><a type="button" @click="mycomment" class="list-active">我的评论</a></dd>
              <dd><a type="button" @click="mystore">我的商品</a></dd>
              <dd><a type="button" @click="mymessage" >我的消息</a></dd>
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
            <a class="sui-btn btn-block btn-xlarge btn-danger" style="width: 100px " @click="changertable1"
               href="javascript:void(0)">我的评论</a>
            <a class="sui-btn btn-block btn-xlarge btn-danger" style="width: 100px" @click="changertable2"
               href="javascript:void(0)">我收到的评论</a>
            <div class="order-detail">
              <div class="orders" v-show="change1">
                <!--comment1 我的评论-->
                <div class="choose-title">
                  <span style="margin-left: 130px"><b>评论商家</b></span>
                  <span style="margin-left: 280px"><b>评论内容</b></span>
                  <span style="margin-left: 160px"><b>评论时间</b></span>
                  <span style="margin-left: 100px"><b>操作</b></span>
                </div> <!--评论头-->
                <table class="sui-table table-bordered order-datatable" >
                  <tbody>
                  <tr v-for="(list,i) in mycom" :key="i" v-if="(((currentpage-1)*4 <= i)&&(i<currentpage*4))" style="height: 100px">

                    <td width="30%">
                      <div class="typographic"><img :src="'http://jiuyuan.natapp1.cc/'+list.seller_picture" class="pic"/>
                        <a href="#" class="block-text">{{list.seller_name}}</a>
                      </div>
                    </td>

                    <td width="40%" class="center">
                      <ul class="unstyled">
                        <li>{{list.com_content}}</li>
                      </ul>
                    </td>

                    <td width="10%" class="center">
                      <ul class="unstyled">
                        <li>{{list.com_time}}</li>
                      </ul>
                    </td>

                    <td width="20%" class="center">
                      <ul class="unstyled">
                        <li><a href="#" class="sui-btn btn-info" @click="deleteMessage1(i)">删除</a></li>
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
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
<!--              <hr class="hr" style=" height:1px;border:none;border-top:1px solid red;"/>  &lt;!&ndash;分割线&ndash;&gt;-->
              <div class="order-detail" >
                <div class="orders" v-show="change2">
                  <!--comment2 我收到的评论-->
                  <div class="choose-title">
                    <span style="margin-left: 130px" ><b>买家评论</b></span>
                    <span style="margin-left: 280px"><b>评论内容</b></span>
                    <span style="margin-left: 160px"><b>评论时间</b></span>
                    <span style="margin-left: 100px"><b>操作</b></span>
                  </div> <!--评论头-->
                  <table class="sui-table table-bordered order-datatable" >
                    <tbody>
                    <tr v-for="(list,i) in othercom" :key="i" v-if="(((currentpage2-1)*4 <= i)&&(i<currentpage2*4))" style="height: 100px">
                      <td width="30%">
                        <div class="typographic"><img :src="'http://jiuyuan.natapp1.cc/'+list.buyer_picture" class="pic"/>
                          <a href="#" class="block-text">{{list.buyer_name}}</a>
                        </div>
                      </td>

                      <td width="40%" class="center">
                        <ul class="unstyled">
                          <li>{{list.com_content}}</li>
                        </ul>
                      </td>

                      <td width="10%" class="center">
                        <ul class="unstyled">
                          <li>{{list.com_time}}</li>
                        </ul>
                      </td>

                      <td width="20%" class="center">
                        <ul class="unstyled">
                          <li><a href="#" class="sui-btn btn-info" @click="deleteMessage2(i)">删除</a></li>
                        </ul>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div class="choose-order">

                    <div class="sui-pagination pagination-large top-pages">
                      <ul>
                        <li :class="currentpage2<=1?'disabled':''" @click="prepage2"><a href="#">«上一页</a></li>
                        <li v-for="(v,i) in pagetotal2" :key="i" @click="changepage2(v)" :class="currentpage2===v?'active':''">
                          <a href="#" >{{v}}</a></li>
                        <li class="next" @click="nextpage2" :class="currentpage2>=pagetotal2?'disabled':''"><a href="#">下一页»</a></li>
                        <li><span>共{{pagetotal2}}页</span></li>
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
      <div class="footer" style="margin-top: 20px ; width: 100%">
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
  name: 'myComment',
  data () {
    return {
      change1: true,
      change2: false,
      pagetotal: '',
      currentpage: 1,
      total: '',
      pagetotal2: '',
      currentpage2: 1,
      total2: '',
      mycom: {
        seller_no: '',
        seller_name: '',
        buyer_no: '',
        buyer_name: '',
        bu_no: '',
        com_content: '',
        com_state: '',
        seller_picture: '',
        com_time: ''
      },
      othercom: {
        seller_no: '',
        seller_name: '',
        buyer_no: '',
        buyer_name: '',
        bu_no: '',
        com_content: '',
        com_state: '',
        seller_picture: '',
        com_time: ''
      }
    }
  },
  components: {VTop, VIndexfoot},
  methods: {
    changertable1 () {
      this.change1 = true
      this.change2 = false
    },
    changertable2 () {
      this.change1 = false
      this.change2 = true
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
    changepage2 (v) {
      this.currentpage2 = v
      // this.getmessage(v)
      console.log(v)
    },
    deleteMessage1 (i) {
      this.mycom[i].com_time = null
      axios.post('http://jiuyuan.natapp1.cc/user/deleteComment', this.mycom[i], {
        headers: {'Accept': 'application/json'}
      }).then(res => {
        if (res.data.state === true) {
          alert(res.data.msg)
        }
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getcomment()
        })
    },
    deleteMessage2 (i) {
      this.othercom[i].com_time = null
      axios.post('http://jiuyuan.natapp1.cc/user/deleteComment', this.othercom[i], {
        headers: {'Accept': 'application/json'}
      }).then(res => {
        if (res.data.state === true) {
          alert(res.data.msg)
        }
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getcomment()
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
    nextpage2 () {
      if ((this.currentpage2 >= 1) && (this.currentpage2 < this.pagetotal2)) {
        // this.getmessage(++this.currentpage)
        ++this.currentpage2
        console.log(this.currentpage2)
      }
    },
    prepage2 () {
      if ((this.currentpage2 <= this.pagetotal2) && (this.currentpage2 > 1)) {
        // this.getmessage(--this.currentpage)
        --this.currentpage2
        console.log(this.currentpage2)
      }
    },
    getcomment () {
      // this.currentpage = i || this.currentpage
      // var name1 = m.data().username
      var a = localStorage.getItem('token')
      console.log(a)
      // axios.defaults.headers.common['token'] = a
      axios({
        method: 'post',
        url: 'user/myComment',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.mycom = resp.data
        // console.log('rr' + resp.data)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.total = this.mycom.length
        this.pagetotal = Math.ceil(this.total / 4)
        // console.log(this.total)
        // console.log(this.pagetotal)
        //   var item = this.firstList[i]
        //   console.log(item)
        //   console.log(item.msg_state)
        // }
        for (var i = 0; i < resp.data.length; i++) {
          var dateee = new Date(resp.data[i].com_time).toJSON()
          this.mycom[i].com_time = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
          console.log(this.mycom[i].com_time)
        }
      })
        .catch(failResponse => {
        })
      axios({
        method: 'post',
        url: 'user/otherComment',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.othercom = resp.data
        console.log('tt' + resp.data)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.total2 = this.othercom.length
        this.pagetotal2 = Math.ceil(this.total2)
        console.log(this.total2)
        console.log(this.pagetotal2)
        //   var item = this.firstList[i]
        //   console.log(item)
        //   console.log(item.msg_state)
        console.log(resp.data[0].Com_time)
        // }
        for (var i = 0; i < resp.data.length; i++) {
          var dateee = new Date(resp.data[i].com_time).toJSON()
          this.othercom[i].com_time = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        }
      })
        .catch(failResponse => {
        })
    }
  },
  mounted () {
    this.getcomment()
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
  .pic {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css"></style>
