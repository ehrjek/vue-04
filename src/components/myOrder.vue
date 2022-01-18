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
              <dd ><a type="button" @click="myorder" class="list-active">我的订单</a></dd>
              <dd><a type="button" @click="mycomment">我的评论</a></dd>
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
               href="javascript:void(0)">我的购买订单</a>
            <a class="sui-btn btn-block btn-xlarge btn-danger" style="width: 100px" @click="changertable2"
               href="javascript:void(0)">我的出售订单</a>
            <div class="table-title">
              <table class="sui-table  order-table">
                <tr>
                  <th width="35%">宝贝</th>
                  <th width="5%">单价</th>
                  <th width="5%">数量</th>
                  <th width="10%">实应付款</th>
                  <th width="10%">交易操作</th>
                </tr>
              </table>
            </div>
            <div class="order-detail" v-show="change1">
              <div class="orders">
                <!--order-->
                <div class="choose-title">
                  <label>
                    2021.7/4 (详情请点击商品图片进行查看)
                  </label>
                </div>
                <table class="sui-table table-bordered order-datatable">
                  <tbody>
                  <tr v-for="(list,i) in myorder1" :key="i" v-if="(((currentpage-1)*4 <= i)&&(i<currentpage*4))" style="height: 95px">
                    <td width="35%">
                      <div class="typographic"><img type="button" title="商品详情" style="width: 100px; height: 90px" @click="detail" :src="'http://jiuyuan.natapp1.cc/'+list.bu_picture"/>
                        <div id="con">
                            <div style="margin-left: 650px;margin-top: 30px;height: 20px">
                              <label type="button" @click="guanbi" >❌</label>
                            </div>
                            <hr>
                            <form class="inner" style="margin-left: 200px;margin-top: 50px">
                              <label  >商品名：{{list.bi_name}}</label>
                              <br>
                              <label >作者：{{list.author}}</label>
                              <br>
                              <label >图书编号：{{list.bi_no}}</label>
                              <br>
                              <label >新度：{{list.new_degree}}</label>
                              <br>
                              <label >出版社：{{list.press}}</label>
                              <br>
                              <label >商家名：{{list.user_name}}</label>
                              <br>
                            </form>
                        </div>
                        <div id="all_light"></div>
                        <a href="#" class="block-text"></a>
                        <span class="guige">{{list.bi_name}}</span>
<!--                        <span class="guige">(详情请点击商品图片查看)</span>-->
                      </div>
                    </td>
                    <td width="5%" class="center">
                      <ul class="unstyled">
                        <li>¥{{list.bu_price}}</li>
                      </ul>
                    </td>
                    <td width="5%" class="center">1</td>
                    <td width="10%" class="center" >
                      <ul class="unstyled">
                        <li>¥{{list.bu_price}}</li>
                        <li>（含运费：￥0.00）</li>
                      </ul>
                    </td>
                    <td width="10%" class="center">
                      <ul class="unstyled" v-if="list.order_state === '1'">
                        <li class="sui-btn btn-info" @click="deleteorder(i,2)">取消订单</li>
                        <li class="sui-btn btn-info" @click="pay(i,3)">立即付款</li>
<!--                        <form>-->
<!--                        <div id="con">-->
<!--                          <div style="width: 500px;height: 20px">-->
<!--                            <div style="margin-left: 650px;margin-top: 30px;height: 20px">-->
<!--                              <h name='stop' @click="guanbi" >❌</h>-->
<!--                            </div>-->
<!--                            <hr>-->
<!--                              <table>-->
<!--                                <div class="new-photo">-->
<!--                                  <td valign="middle" align="right">-->
<!--                                    上传图片:-->
<!--                                  </td>-->
<!--                                  <td valign="middle" align="left">-->
<!--                                    <input type="file" ref="photo" />-->
<!--                                  </td>-->
<!--                                  <br>-->
<!--                                </div>-->
<!--                              </table>-->
<!--                              <input type="button" value="上传凭证" @click="pingzheng">-->
<!--                            <img  :src="'http://jiuyuan.natapp1.cc/'+list.qr_code">-->
<!--                          </div>-->
<!--                        </div>-->
<!--                        </form>-->
<!--                        <div id="all_light"></div>-->
                      </ul>
                      <ul v-else-if="list.order_state === '2'">
                        已取消订单
                      </ul>
                      <ul v-else-if="list.order_state === '3'">
                        已付款
                        <li class="sui-btn btn-info"  @click="applyreturngoods(i,4)">申请退货</li>
                        <li class="sui-btn btn-info"  @click="confirmReceipt(i,8)">确认收货</li>
                      </ul>
                      <ul v-else-if="list.order_state === '4'">
                        已申请退货，请等待
                      </ul>
                      <ul v-else-if="list.order_state === '5'">
                        已退货
                      </ul>
                      <ul v-else-if="list.order_state === '6'">
                        卖家已拒绝付款
                      </ul>
                      <ul v-else-if="list.order_state === '7'">
                        <div>已发货</div>
                        <li class="sui-btn btn-info"  style="margin-bottom: 3px" @click="applyreturngoods(i,4)">申请退货</li>
                        <li class="sui-btn btn-info"  @click="confirmReceipt(i,8)">确认收货</li>
                      </ul>
                      <ul v-else-if="list.order_state === '8'">
                        订单已完成
                        <li class="sui-btn btn-info"  @click="commentbook(i,8)">图书评论</li>
                      </ul>
                      <ul v-else-if="list.order_state === '9'">
                        交易已完成
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
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
            </div> <!--我的订单-->
            <div class="order-detail" v-show="change2">
              <div class="orders">
                <!--order-->
                <div class="choose-title">
                  <label >
                    <span>2021.7/4 (详情请点击商品图片进行查看)</span>
                  </label>
                </div>
                <table class="sui-table table-bordered order-datatable">
                  <tbody>
                  <tr v-for="(list,i) in myorder2" :key="i" v-if="(((currentpage2-1)*4 <= i)&&(i<currentpage2*4))" style="height: 95px">
                    <td width="35%">
                      <div class="typographic"><img @click="detail1" type="button" title="商品详情" style="width: 100px; height: 90px" :src="'http://jiuyuan.natapp1.cc/'+list.bu_picture"/>
                        <div id="con1">
                          <div style="width: 500px;height: 20px">
                            <div style="margin-left: 650px;margin-top: 30px;height: 20px">
                              <label type="button" @click="guanbi1" >❌</label>
                            </div>
                            <hr>
                            <form class="inner" style="margin-left: 200px;margin-top: 50px">
                              <label >商品名：{{list.bi_name}}</label>
                              <br>
                              <label >作者：{{list.author}}</label>
                              <br>
                              <label >图书编号：{{list.bi_no}}</label>
                              <br>
                              <label >新度：{{list.new_degree}}</label>
                              <br>
                              <label >出版社：{{list.press}}</label>
                              <br>
                              <label >商家名：{{list.user_name}}</label>
                              <br>
                            </form>
                          </div>
                        </div>
                        <div id="all_light1"></div>
                        <a href="#" class="block-text"></a>
                        <span class="guige">{{list.bi_name}}</span>
                      </div>
                    </td>
                    <td width="5%" class="center">
                      <ul class="unstyled">
<!--                        <li class="o-price">¥299.00</li>-->
                        <li>¥{{list.bu_price}}</li>
                      </ul>
                    </td>
                    <td width="5%" class="center">1</td>
<!--                    <td width="8%" class="center"> </td>-->
                    <td width="10%" class="center" >
                      <ul class="unstyled">
                        <li>¥{{list.bu_price}}</li>
                        <li>（含费：￥0.00）</li>
                      </ul>
                    </td>
<!--                    <td width="10%" class="center">-->
<!--                      <ul class="unstyled">-->
<!--                        <li>等待买家付款</li>-->
<!--                        <li><a href="home-orderDetail.html" class="btn">订单详情 </a></li>-->
<!--                      </ul>-->
<!--                    </td>-->
                    <td width="10%" class="center">
                      <ul class="unstyled" v-if="list.order_state === '1'">
                        等待付款
                      </ul>
                      <ul v-else-if="list.order_state === '2'">
                        订单已取消
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '3'">
                        买家已付款
                        <li class="sui-btn btn-info" @click="returngoods(i,7)">发货</li>
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '4'">
                        <li class="sui-btn btn-info" @click="agreereturngoods(i,5)" style="width: 90px;margin-bottom: 10px">同意退货</li>
                        <li class="sui-btn btn-info" @click="dagreereturngoods(i,6)">不同意退货</li>
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '5'">
                        已退货
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '6'">
                        已拒绝退货
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '7'">
                        正在发货
                      </ul>
                      <ul class="unstyled" v-if="list.order_state === '8'">
                        订单已完成
                      </ul>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="choose-order">
                <div class="sui-pagination pagination-large top-pages">
                  <ul>
                    <li :class="currentpage2<=1?'disabled':''" @click="prepage2"><a href="#">«上一页</a></li>
                    <li v-for="(v,i) in pagetotal2" :key="i" @click="changepage2(v)" :class="currentpage2===v?'active':''">
                      <a href="#" >{{v}}</a></li>
                    <li class="next" @click="nextpage2" :class="currentpage2>=pagetotal2?'disabled':''"><a href="#">下一页»</a></li>
                    <li><span>共{{pagetotal2}}页</span></li>
                  </ul>
                </div>
              </div>
              <div class="clearfix"></div>
            </div> <!--我出售的订单-->
          </div>
        </div>
      </div>
    </div>
<!--        <input type="button" value="test" @click="add"> &lt;!&ndash; 弹窗页面测试 &ndash;&gt;-->
    <div class="clearfix footer" style="margin-top: 20px ; width:100% ">
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
  name: 'myOrder',
  components: {VTop, VIndexfoot},
  data () {
    return {
      pagetotal: '', // 分了多少页
      currentpage: 1, // 当前页
      totale: '', // 总条目数
      pagetotal2: '', // 分了多少页
      currentpage2: 1, // 当前页
      totale2: '', // 总条目数
      change1: true,
      change2: false,
      myorder1: {
        author: '',
        bi_name: '',
        bi_no: '',
        bi_price: '',
        bu_no: '',
        bu_picture: '',
        bu_price: '',
        buyer: '',
        category_no: '',
        new_degree: '',
        order_no: '',
        order_state: '',
        order_time: '',
        press: '',
        user_address: '',
        user_name: '',
        user_no: '',
        user_picture: '',
        version: '',
        qr_code: '', // 二维码
        pm_voucher: '' // 支付凭证
      },
      myorder2: {
      },
      mycom: {
        com_buyer: '',
        bu_no: '',
        com_content: '',
        com_state: '',
        com_time: ''
      }
    }
  },
  methods: {
    commentbook (k, index) {
      this.mycom.com_buyer = this.myorder1[k].buyer
      this.mycom.bu_no = this.myorder1[k].bu_no
      // this.mycom.com_buyer = null
      // this.mycom.com_buyer = null
      this.mycom.com_content = prompt('请输入评论内容')
      // console.log('yy' + this.mycom.com_buyer)
      // console.log('tt' + this.mycom.com_content)
      axios.post('http://jiuyuan.natapp1.cc/user/commentBook?', this.mycom, {
        headers: {'Accept': 'application/json'}
      }).then(res => {
        alert(res.data.msg)
      })
        .catch(() => alert('断开服务器'))
      if (index === 8) {
        this.ty(k)
      }
    },
    ty (k) {
      var a = localStorage.getItem('token')
      console.log(k)
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + 9, this.myorder1[k], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    guanbi () {
      document.getElementById('con').style.display = 'none'
      document.getElementById('all_light').style.display = 'none'
    },
    guanbi1 () {
      document.getElementById('con1').style.display = 'none'
      document.getElementById('all_light1').style.display = 'none'
    },
    // add () {
    //   document.getElementById('all_light').style.display = 'block'
    //   document.getElementById('con').style.display = 'block'
    // },
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
    changertable1 () {
      this.change1 = true
      this.change2 = false
    },
    changertable2 () {
      this.change1 = false
      this.change2 = true
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
    detail () {
      document.getElementById('all_light').style.display = 'block'
      document.getElementById('con').style.display = 'block'
    },
    detail1 () {
      document.getElementById('all_light1').style.display = 'block'
      document.getElementById('con1').style.display = 'block'
    },
    applyreturngoods (i, k) { // 申请退货
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder1[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        // console.log(res)
        // if (res.data.state === true) {
        //   alert(res.data.msg)
        // }
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    dagreereturngoods (i, k) {
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder2[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    agreereturngoods (i, k) { // 同意退货
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder2[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    returngoods (i, k) { // 发货
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder2[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    pay (i, k) { // 立即付款
      // document.getElementById('all_light').style.display = 'block'
      // document.getElementById('con').style.display = 'block'
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder1[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        console.log(this.myorder1[i].qr_code)
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    deleteorder (i, k) { // 取消订单
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder1[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    confirmReceipt (i, k) { // 确认收获
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/Orderprocessing?type=' + k, this.myorder1[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmessage()
        })
    },
    // deleteMessage (i) {
    //   var msg_n = i
    //   var a = localStorage.getItem('token')
    //   axios.defaults.headers.common['token'] = a
    //   axios({
    //     method: 'post',
    //     url: 'user/deleteMessage',
    //     headers: {
    //       'token': a,
    //       'Accept': 'application/json'
    //     },
    //     CrossDomain: true,
    //     dataType: 'jsonp',
    //     params: {
    //       i: msg_n
    //     }
    //   }).then(resp => {
    //     if (resp.data.state === true) {
    //       alert(resp.data.msg)
    //     }
    //   })
    //   console.log(msg_n)
    // },
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
    getmessage2 () {
      var b = localStorage.getItem('token')
      if (b === null) {
        alert('请先登录')
        this.$router.replace({path: '/user_login'})
      } else {
        this.getmessage()
      }
    },
    getmessage () {
      // this.currentpage = i || this.currentpage
      // var name1 = m.data().username
      var a = localStorage.getItem('token')
      if (a === null) {
        alert('请先登录')
        this.$router.replace({path: '/user_login'})
      }
      // axios.defaults.headers.common['token'] = a
      console.log('tt')
      axios({
        method: 'post',
        url: 'user/myShopOrder',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        console.log(resp.data)
        this.myorder1 = resp.data
        // console.log('qr' + this.myorder1[3].qr_code)
        console.log('购买订单' + resp.data)
        // console.log('userno' + this.myorder1[0].user_no)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.totale = this.myorder1.length
        this.pagetotal = Math.ceil(this.totale / 4)
        // console.log(this.totale)
        // console.log(this.pagetotal)
        console.log('r' + this.myorder1)
      })
        .catch(failResponse => {
        })
      axios({
        method: 'post',
        url: 'user/mySoldOrder',
        headers: {
          'token': a,
          'Accept': 'application/json'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.myorder2 = resp.data
        console.log('出售订单' + resp.data)
        // for (var i = 0; i < this.firstList.length; i++) {
        this.totale2 = this.myorder2.length
        this.pagetotal2 = Math.ceil(this.totale2 / 4)
        // console.log(this.totale2)
        // console.log(this.pagetotal2)
      })
        .catch(failResponse => {
        })
    }
  },
  mounted () {
    this.getmessage2()
  }
}
</script>

<style scoped>
  .inner label {
    margin-left: 20px;
    font-size: 20px;
    width: 300px;
    margin-top: 35px;
  }
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
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
  #all_light { /*整个弹窗的页面*/
    opacity: 0.3; /*透明度*/
    width: 100%; /*宽度*/
    height: 2300px; /*高度，不能百分百*/
    background: #000000; /*背景色*/
    position: absolute;
    top: 0;
    left: 0; /*定位*/
    display: none; /*隐藏*/
    z-index: 9999; /*覆盖*/
  }
  #con { /* 弹框的页面*/
    box-shadow:8px 2px 4px rgba(0, 0, 0, .5);
    margin: 40px 160px; /*上下 左右 */
    width: 700px; /*宽度*/
    height: 700px; /*高度*/
    background: #fff; /*背景色*/
    display: none; /*隐藏*/
    z-index: 10000; /*覆盖*/
    position: absolute;
    top: 100px;
    left: 400px; /* 定位*/
    border-radius: 20px;
    border:1px solid;
  }
  #all_light1 { /*整个弹窗的页面*/
    opacity: 0.3; /*透明度*/
    width: 100%; /*宽度*/
    height: 2300px; /*高度，不能百分百*/
    background: #000000; /*背景色*/
    position: absolute;
    top: 0;
    left: 0; /*定位*/
    display: none; /*隐藏*/
    z-index: 9999; /*覆盖*/
  }
  #con1 { /* 弹框的页面*/
    box-shadow:8px 2px 4px rgba(0, 0, 0, .5);
    margin: 40px 160px; /*上下 左右 */
    width: 700px; /*宽度*/
    height: 700px; /*高度*/
    background: #fff; /*背景色*/
    display: none; /*隐藏*/
    z-index: 10000; /*覆盖*/
    position: absolute;
    top: 100px;
    left: 400px; /* 定位*/
    border-radius: 20px;
    border:1px solid;
  }
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css"></style>
