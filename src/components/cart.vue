<template>
<div class="cart">
  <div class="nav">
    <div class="warp1">
      <Navigate1></Navigate1>
    </div>
  </div>
  <!--导航结束-->
  <!--搜索框开始-->
  <div class="search">
    <div class="warp">
      <img src="../assets/2.jpg" style=" width: 400px;height: auto;max-width: 20%;max-height: 20%;" @click="gotoindex" title="返回主页"/>
      <div class="search_div" >
        <input type="text" v-model='key' class="search_text" style="height: 29px"/>
        <input type="button" value="搜索" @click="search" class="search_but" style="margin-top: -3px"/>
      </div>
    </div>
  </div>
  <!--搜索框结束-->
  <!--标题开始-->
  <div class="title warp">
    <h3>全部商品</h3>
  </div>
  <!--标题结束-->
  <!--显示菜单的开始-->
  <form>
  <div class="tips warp">
    <ul>
      <li>
        <input type="checkbox" id="allb" @click="allb22"/>
        全选
      </li>
      <li>商品</li>
      <li style="margin-left: 50px">卖家</li>
      <li style="margin-left: 25px">单价</li>
      <li style="margin-left: 20px">新度</li>
<!--      <li>小计</li>-->
      <li style="margin-left: 10px">操作</li>
    </ul>
  </div>
  <!--显示菜单的结束-->
  <!--商品详情展示开始-->
  <div class="info warp" v-for="(list,i) in mycart" :key="i" >
    <table class="table-one" >
      <tr >
        <td >
          <div>
            <input type="checkbox" name="item"  @click="getdif(i)"/>
          </div>
        </td>
        <td><img :src="'http://jiuyuan.natapp1.cc/'+list.bu_picture" width="80px"/><a>{{list.bi_name}}</a></td>
        <td><a>{{list.user_name}}</a>  </td>
        <td>{{list.bu_price}} </td>
        <td>{{list.new_degree}}</td>
<!--        <td>{{list.bu_price}} </td>-->
        <td><a type="button" @click="remove(i)">删除</a>  </td>
      </tr>
    </table>
  </div>
  <!--商品详情展示结束-->
  <!--结算开始-->
  <div class="balance warp">
    <ul class="balance_ul1">
      <li>
        <input type="checkbox" name="" id="allb2" value="" @click="allb11"/>
        全选
      </li>
    </ul>
    <ul class="balance_ul2">
      <li>已经选择<span>{{totalnum}}</span>件商品</li>
      <li>总价 <span >{{totalprice}}</span></li>
      <li>
        <input class="butt" @click="buyBookFromCart" value="结算" type="button">
      </li>
    </ul>
  </div>
  </form>
</div>
</template>

<script>
import Navigate1 from './comment/navigate'
import VFoot from './comment/foot'
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'cart',
  // inject: ['reload'],
  data () {
    return {
      username: '',
      key: '',
      totalprice: 0,
      itemss: {},
      totalnum: 0,
      list: {},
      t: 0, // 共多少条数据
      mycart: { // 把数据属性全部列在此 v-for 会在初始化将其作为i为21
        // author: '',
        // bi_name: '',
        // bi_no: '',
        // bi_picture: '',
        // bi_price: 0,
        // bu_no: '',
        // bu_picture: '',
        // bu_price: '',
        // category_no: '',
        // label: '',
        // new_degree: '',
        // press: '',
        // suspend_time: '',
        // user_address: '',
        // user_credit: '',
        // user_email: '',
        // user_name: '',
        // user_no: '',
        // user_picture: '',
        // user_tel: '',
        // version: ''
      },
      readybuy: []
    }
  },
  components: {VFoot, Navigate1},
  methods: {
    gotoindex () {
      this.$router.replace({path: '/index'})
    },
    search () {
      // console.log('top' + this.key)
      this.$router.push({
        path: '/searchBook',
        query: {
          key: this.key
        }
      })
      location.reload()
    },
    total () { // 总价
      this.totalprice = 0
      this.totalnum = 0
      for (var i = 0; i < this.t; i++) {
        if (this.itemss[i] === true) {
          ++this.totalnum
          this.totalprice += this.mycart[i].bu_price
        }
      }
    },
    remove (i) {
      var a = localStorage.getItem('token')
      axios.post('http://jiuyuan.natapp1.cc/user/removeFromCart', this.mycart[i], {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        if (res.data.state === true) {
          alert('该商品' + res.data.msg)
          if (this.totalprice === 0) {
          } else {
            this.totalprice = this.totalprice - this.mycart[i].bu_price
            this.totalnum = this.totalnum - 1
          }
        }
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.getmycart()
        })
    },
    getdif (i) { // 选择了一个商品
      var items = document.getElementsByName('item')
      this.itemss[i] = items[i].checked
      // console.log(this.itemss[i])
      this.total()
    },
    allb22 () { // 第一个全选
      var items = document.getElementsByName('item')
      var chall = document.getElementById('allb')
      var chall2 = document.getElementById('allb2')
      if (chall.checked === true) {
        for (var i = 0; i < this.t; i++) {
          this.itemss[i] = true
          items[i].checked = true
        }
        chall2.checked = true
      } else {
        for (i = 0; i < this.t; i++) {
          this.itemss[i] = false
          items[i].checked = false
        }
        chall2.checked = false
      }
      this.total()
    },
    allb11 () { // 第二个全选
      var items = document.getElementsByName('item')
      var chall = document.getElementById('allb')
      var chall2 = document.getElementById('allb2')
      if (chall2.checked === true) {
        for (var i = 0; i < this.t; i++) {
          this.itemss[i] = true
          items[i].checked = true
        }
        chall.checked = true
      } else {
        for (i = 0; i < this.t; i++) {
          this.itemss[i] = false
          items[i].checked = false
        }
        chall.checked = false
      }
      this.total()
    },
    start () {
      var items = document.getElementsByName('item')
      for (var i = 0; i < items.length; i++) {
        // console.log(i)
        this.list[i] = i
        // var b = true
        // items[i].addEventListener('click', function (i) { // 这里的i包含了整个页面的dom元素,此方法有封闭性
        //   // console.log(i.path[0].checked)
        //   console.log(i.path[3].cells[1].innerHTML)
        //   items[i.path[3].cells[1].innerHTML].checked = b
        //   // this.itemss[i.path[3].cells[1].innerHTML] = items[i.path[3].cells[1].innerHTML].checked
        //   b = !b
        // }// 方法中的i都为3,此中的i 正确， 而内部的i为3 因此在这里需将i传值过去
        // )
        this.itemss[i] = items[i].checked
      }
      this.t = i // 数据总量
      // 对每个item checked 进行监听 赋值到itemss中 关键在于页面的先后加载问题 mounted watch
      // 全选
    },
    getmycart () {
      var b = localStorage.getItem('token')
      if (b === null) {
        alert('请先登录')
        this.$router.replace({path: '/user_login'})
      } else {
        this.getmycart2()
      }
      // setTimeout(this.start, 1000)// 为处理数据异步问题，晚一秒加载
    },
    getmycart2 () {
      var a = localStorage.getItem('token')
      console.log(a)
      axios.get('http://jiuyuan.natapp1.cc/user/myCart', {
        headers: {'token': a, 'Accept': 'application/json'}
      }).then(res => {
        console.log('res.data' + res.data)// 无时为空
        if (res.data.length === 0) {
          alert('您的购物车为空')
        }
        console.log(res.data)
        this.mycart = res.data
      })
        .catch(() => alert('断开服务器')).then(() => {
          this.start()
        })
    },
    buyBookFromCart () {
      var k = 0
      console.log('总量' + this.t)
      for (var i = 0; i < this.t; i++) {
        if (this.itemss[i] === true) {
          // this.readybuy[k] =new Array()
          this.readybuy[k] = this.mycart[i]
          k++
        }
      }
      // console.log('已选' + k)
      // console.log(this.readybuy)
      // console.log('ttt1' + this.readybuy[0].author)
      this.nextbuy()
    },
    nextbuy () {
      if (this.totalnum === 0) {
        alert('请选择要购买的图书')
      } else {
        var a = localStorage.getItem('token')
        axios({
          method: 'post',
          url: 'user/buyBookFromCart',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'token': a,
            'Accept': 'application/json'
          },
          CrossDomain: true,
          dataType: 'jsonp',
          data: JSON.stringify(this.readybuy)
        }).then(res => {
          if (res.data.state === true) {
            alert(res.data.msg)
            this.totalnum = 0
            this.totalprice = 0
          }
        })
          .catch(() => alert('断开服务器')).then(() => {
            this.getmycart()
          })
      }
    }
  },
  mounted () {
    this.getmycart()
  }
}
</script>

<style scoped>
  .warp1 button{
    background-color: black;
  }
  .tips li:nth-child(1){margin-left: -92px ;width: 110px; border-top: 3px solid #c91623 ; text-align: center }

  .tips li:nth-child(2){width: 222px}

  .tips li:nth-child(3){width: 222px}

  .tips li:nth-child(4){width: 111px}

  .tips li:nth-child(5){width:  111px;}

  .tips li:nth-child(6){width:  111px;}

  .tips li:nth-child(7){width:  111px;}
</style>
<style src="../css/page-cart.css" />
<style src="../css/webbase.css"></style>
<style src="../css/pages-seckillOrder.css" />
