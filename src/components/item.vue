<template>
  <div id="itemApp">
    <div id="nav-bottom">
      <VTop></VTop>
    </div>
    <div class="py-container">
      <div id="item">
        <div class="crumb-wrap">
          <!--顶部-->
          <ul class="sui-breadcrumb">
<!--            <li v-for="c in categories" v-bind:key="c">-->
<!--              <a :href="'/category/' + c.id + '.html'" v-text="c.name"></a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a :href="'/brand/' + brand.id + '.html'" v-text="brand.name"></a>-->
<!--            </li>-->
<!--            <li class="active" v-text="name"></li>-->
          </ul>
        </div>
        <!--product-info-->
        <div class="product-info">
          <div class="fl preview-wrap">
            <!--放大镜效果-->
            <div class="zoom">
              <!--默认第一个预览-->
              <div id="preview" class="spec-preview">
                <span class="jqzoom">
                 <img :src="'http://jiuyuan.natapp1.cc/'+item.bu_picture" style="width: 286px ; height: 400px;margin-left: 50px">
                </span>
              </div>
            </div>
          </div>
          <!--商品信息-->
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
            </div>
            <tr>
            <div class="news" style="float: left"><span>商品详情信息见该页面下方</span></div><button class="sui-btn btn-info" style="margin-left: 450px" @click="Report(1,0)">举报该图书</button>
            </tr>
            <div class="summary">
              <div class="summary-wrap">
                <tr>
                <div class="fl title"><i style="font-size: 20px">商品名： </i></div>
                <div class="fl price" style="margin-top: -5px"> {{ item.bi_name }} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">商家名：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.user_name}} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">标签：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.label}} </div>
                </tr>
                <tr>
                <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">价格：</i></div> <!--价格 -->
                <div class="fl price"> {{ item.bu_price }} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">商家信用分：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.user_credit }} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">出版社：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.press }} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">作者：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.author }} </div>
                </tr>
                <tr>
                  <div class="fl title " style="margin-top: 5px"><i style="font-size: 20px">版次：</i></div> <!--价格 -->
                  <div class="fl price"> {{ item.version }} </div>
                </tr>
              </div>
            </div>
            <div class="support">
              <div class="summary-wrap">
                <tr>
                <div class="fl title">
                  <i>商家地址</i>
                </div>
                </tr>
                <tr>
                <div class="fl fix-width">
                  <em class="t-gray"><spn>{{ item.user_address}}</spn></em>
                </div>
                </tr>
                <tr>
                  <button class="sui-btn  btn-danger addshopcar" style="margin-top: 10px;height: 35px"  @click='addcart'>加入购物车</button>
                <button class="sui-btn  btn-danger addshopcar" style="width: 120px ;margin-left: 30px ; margin-top: 10px;height: 35px" @click="bookbuy">立即购买</button>
                </tr>
              </div>
            </div>
            </div>
          </div>
        </div>
        <!--product-detail-->
        <div class="clearfix product-detail">
          <!--侧边-->
          <div class="fl aside" style="border: 1px solid #E4E4E4">
              <li class="active" style="list-style: none;margin-left: 80px">
                <a data-toggle="tab">
                  <span>相关分类</span>
                </a>
              </li>
            <div class="tab-content tab-wraped">
<!--              <div id="index" class="tab-pane active">-->
<!--                <ul class="part-list unstyled">-->
<!--                  <li>手机</li>-->
<!--                  <li>手机壳</li>-->
<!--                  <li>内存卡</li>-->
<!--                  <li>Iphone配件</li>-->
<!--                  <li>贴膜</li>-->
<!--                  <li>手机耳机</li>-->
<!--                  <li>移动电源</li>-->
<!--                  <li>平板电脑</li>-->
<!--                </ul>-->
<!--              </div>-->
<!--              <div id="profile" class="tab-pane">-->
<!--                <p>推荐品牌</p>-->
<!--              </div>-->
            </div>
          </div>
          <div class="fr detail">
            <div class="tab-main intro">
              <!--导航-->
              <ul class="sui-nav nav-tabs tab-wraped">
<!--                <li :class="active1">-->
<!--                  <a href="#one" data-toggle="tab" @click="change1" >-->
<!--                    <span>商品介绍</span>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li :class="active2">-->
                <li :class="active1">
                  <a href="#three" data-toggle="tab"  >
                    <span>该商家收到的评价</span>
                  </a>
                </li>
              </ul>
              <div class="clearfix"></div>

              <div class="tab-content tab-wraped">
                <!--参数预览-->
<!--                <div id="one" class="tab-pane " :class="active1">-->
<!--                  <ul class="goods-intro-list unstyled" style="list-style: none;">-->
<!--                  </ul>-->
<!--                  </div>-->
                <div id="three" class="tab-pane" :class="active1">
                  <div class="choose-title">
                    <span style="margin-left: 10px"><b>评论人</b> </span>
                    <span style="margin-left: 280px"><b>评论内容</b></span>
                    <span style="margin-left: 270px"><b>操作</b></span>
                  </div>
                  <table class="sui-table table-bordered order-datatable" >
                    <tr v-for="(list,i) in comment" :key="i">
                      <td width="33%" height="50px">
                        <div class="typographic">
                          <a href="#" class="block-text">{{ list.buyer_name}}</a>
                        </div>  <!--1-->
                      </td>
                      <td width="33%">
                        <div class="state">
                          <a href="#">{{ list.com_content}}</a>
                        </div>
                      </td>
                      <td width="33%" class="center">
                        <ul class="unstyled">
                          <li><a href="#" class="sui-btn btn-info" @click="Report(2,i)">举报用户</a></li>
                        </ul>
                        <ul class="unstyled">
                          <li><a href="#" class="sui-btn btn-info" @click="Report(3,i)">举报评论</a></li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
<!--    <button @click="test">test</button>-->
        <!--like-->
    <div class="footer" style="margin-top: 10px ; width: 100%">
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
  name: 'item',
  components: {VTop, VIndexfoot},
  data () {
    return {
      active1: 'active',
      active2: '',
      item: {
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
        version: ''
      },
      comment: {
        bu_no: '',
        buyer_name: '',
        buyer_no: '',
        buyer_picture: '',
        com_content: '',
        com_state: '',
        seller_name: '',
        seller_no: '',
        seller_picture: ''
      },
      report: {
        various_no: '',
        report_type: '',
        report_text: '',
        user_no: ''
      },
      msg_add: '',
      msg_buy: '',
      msg_report: '',
      bu_noo: ''
    }
  },
  created () {
    this.getinfo()
  },
  methods: {
    test () {
      console.log('le' + this.item)
    },
    getinfo () {
      var pname = this.$route.params.num
      var pid = this.$route.params.id
      var t = this.$route.params.bi_no
      console.log('pname' + pname + 'pid' + pid)
      console.log('item' + t)
    },
    Report (k, i) {
      this.report.report_type = k
      this.report.user_no = this.item.user_no
      if (k === 2) {
        this.report.various_no = this.comment[i].buyer_no
        console.log(this.report.various_no)
      } else if (k === 3) {
        this.report.various_no = this.comment[i].buyer_no + '_' + this.comment[i].bu_no
        console.log(this.report.various_no)
      } else if (k === 1) {
        this.report.various_no = this.item.bu_no
        console.log(this.report.various_no)
      } else {
        this.report.various_no = ''
      }
      this.report.report_text = prompt('请输入举报理由?')
      console.log('ty' + this.report.report_text)
      if (this.report.report_text === null) {
      } else {
        axios.post('http://jiuyuan.natapp1.cc/user/report', this.report, {
          headers: {'Accept': 'application/json'}
        }).then(res => {
          if (res.data.state === true) {
            console.log(res.data)
            alert(res.data.msg)
          }
        })
          .catch(() => alert('断开服务器'))
      }
    },
    bookbuy () {
      var a = localStorage.getItem('token')
      console.log('length:' + this.item.length)
      // console.log(a)
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/buyBook', this.item, {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        alert(res.data.msg)
      })
        .catch(() => alert('断开服务器'))
    },
    addcart () {
      // console.log('uuu' + this.item)
      var a = localStorage.getItem('token')
      console.log(a)
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/addCart', this.item, {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        // if (res.data.state === true) {
        //   console.log(res.data)
        alert(res.data.msg)
        // }
      })
        .catch(() => alert('断开服务器'))
    },
    getmessage () {
      var b = localStorage.getItem('token')
      if (b === null) {
        alert('请先登录')
        this.$router.replace({path: '/user_login'})
      } else {
        this.getitemmessage()
      }
    },
    getitemmessage () {
      this.bu_noo = this.$route.params.bu_no
      var a = localStorage.getItem('token')
      // axios.defaults.headers.common['token'] = a
      axios.post('http://jiuyuan.natapp1.cc/user/bookDetail?bu_no=' + this.bu_noo, {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        this.item = res.data
        console.log('item1' + this.item)
      })
        .catch(() => alert('断开服务器')).then(() => {
          console.log('user_no' + this.item.user_no)
          axios.post('http://jiuyuan.natapp1.cc/user/findCommentBySeller?user_no=' + this.item.user_no, {
            headers: {'Accept': 'application/json'}
          }).then(res => {
            console.log('comment' + res.data)
            this.comment = res.data
          })
            .catch(() => alert('断开服务器'))
        })
    },
    change1 () {
      this.active1 = 'active'
      this.active2 = ''
    },
    change2 () {
      this.active1 = ''
      this.active2 = 'active'
    }
  },
  mounted () {
    this.getmessage()
  }
}
</script>

<style scoped>

</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css"></style>
<style src="../css/pages-item.css"/>
<style src="../css/pages-zoom.css"/>
<style src="../css/widget-cartPanelView.css"/>
