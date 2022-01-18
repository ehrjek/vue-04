<template>
  <div id="searchApp">
    <div id="nav-bottom">
      <VTop></VTop>
    </div>
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <div class="bread">
          <!--面包屑-->
          <ul class="fl sui-breadcrumb">
            <li><span>全部结果:</span></li>
            <li><a href="#">{{text}}</a></li>
<!--            <li><span>大三</span></li>-->
          </ul>
          <!--已选择过滤项-->
<!--          <ul class="tags-choose">-->
<!--            <li class="tag">-->
<!--              种类:<span style="color: red">专业课</span>-->
<!--              <i class="sui-icon icon-tb-close"></i>-->
<!--            </li>-->
<!--            <li class="tag">-->
<!--              成色:<span style="color: red">九成新</span>-->
<!--              <i class="sui-icon icon-tb-close"></i>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <div class="clearfix"></div>-->
        </div>
        <!--selector-->
        <!--details-->
        <div class="details">
          <!--排序及顶部分页-->
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li  v-for="(s,i) in sortList" :key="i">
                  <a href="#" >{{s.text}}</a>
                </li>
              </ul>
            </div>
          </div>
          <!--商品列表-->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="(list,i) in itemList" :key="i" v-if="(((currentpage-1)*5 <= i)&&(i<currentpage*5))" style="margin-bottom: 10px;width: 240px;height: 360px">
                <div class="list-wrap" @click="myitem(i)">
                  <div class="p-img" >
                    <a target="_blank"><img style="width: 180px;height: 252px;margin-left: 5px" :src="'http://jiuyuan.natapp1.cc/'+list.bu_picture"/></a>
                  </div>
                  <div class="price" style="margin-top: 35px">
                    <strong>
                      <em>¥</em>
                      <i>{{list.bu_price}}</i>
                    </strong>
                  </div>
                  <div class="attr" style="overflow: hidden">
                    <em v-html="list.bi_name"></em>
                  </div>
                  <div class="attr" style="overflow: hidden">
                    商家名：<em v-html="list.user_name"></em>
                  </div>
                  <div class="attr" style="overflow: hidden">
                    商家地址：<em v-html="list.user_address"></em>
                  </div>
                  <div class="attr" style="overflow: hidden">
                    商家信用分：<em v-html="list.user_credit"></em>
                  </div>
                  <div >
                    标签：<em v-html="list.label"></em>
                  </div>
                  <div class="commit">
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--底部分页-->
          <div class="fr">
            <div class="sui-pagination pagination-large">
              <ul style="width: 550px">
                <li :class="currentpage<=1?'disabled':''" @click="prepage">
                  <a href="#">«上一页</a>
                </li>
                <li v-for="(v,i) in pagetotal" :key="i" @click="changepage(v)" :class="currentpage===v?'active':''">
                  <a href="#" >{{v}}</a></li>
                <li class="next" @click="nextpage" :class="currentpage>=pagetotal?'disabled':''"><a href="#">下一页»</a></li>
                <li><span>共{{pagetotal}}页</span></li>
              </ul>
              <div>
                <span>共{{pagetotal}}页&nbsp;</span>
                <span>
        </span>
              </div>
            </div>
          </div>
        </div>
<!--        热卖商品-->
      </div>
    </div>
    <div class="footer" style="margin-top: 110px ; width: 100%">
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
  name: 'searchBook',
  components: {VIndexfoot, VTop},
  data () {
    return {
      type: '',
      text: '',
      pagetotal: '', // 分了多少页
      currentpage: 1, // 当前页
      totale: '', // 总条目数
      sortList: [ // 排序项列表
        {text: '综合', field: '', defaultDesc: true}
        // {text: '销量', field: 'sold', defaultDesc: true},
        // {text: '价格', field: 'prices', defaultDesc: false}
      ],
      itemList: {
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
      }
    }
  },
  // created () {
  //   this.getinfo2()
  // },
  methods: {
    getinfo2 () {
      this.text = this.$route.query.key
      console.log('sear' + this.text)
      this.search(this.text)
      // this.itemList = this.$route.query.array
      // console.log('search' + this.itemList)
      // console.log('search' + this.itemList[0].bi_price)
      // // for (var i = 0; i < this.firstList.length; i++) {
      // this.totale = this.itemList.length
      // this.pagetotal = Math.ceil(this.totale / 5)
      // console.log(this.totale)
      // console.log(this.pagetotal)
      // console.log(this.itemList)
    },
    search (text) {
      // window.location = '/search.html?key=' + this.key
      axios({
        method: 'POST',
        url: 'searchBook',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        params: {
          type: 1,
          text: text
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        console.log('search' + resp.data)
        this.itemList = resp.data
        this.totale = this.itemList.length
        this.pagetotal = Math.ceil(this.totale / 5)
        if (resp.data.length === 0) {
          alert('没有找到任何相关商品')
        }
        // console.log('1' + this.itemList[0].bi_price)
        // console.log(successResponse.data)
        // } else {
        //   this.msg = '没有找到任何相关商品'
        // }
      })
        .catch(failResponse => {
        })
    },
    myitem (i) {
      this.$router.push({
        name: 'item',
        params: {
          num: '2',
          id: '1',
          bu_no: this.itemList[i].bu_no
        }
      })
      // this.$router.replace({path: '/item'
      // params: {
      //   name: '2',
      //   id: '1'
      // }
      // })
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
    changepage (v) {
      this.currentpage = v
      // this.getmessage(v)
      console.log(v)
    }
  },
  mounted () {
    // this.getmessage()
    this.getinfo2()
  }
}
</script>

<style scoped>
  .showButton {
    width: 80px;
    line-height: 24px;
    font-size: 14px;
    border: 1px solid #999999;
    margin: 5px auto;
    border-radius: 2px;
  }

  .showButton:hover {
    color: #409eff;
    border: 1px solid #409eff;
    cursor: pointer
  }

  * {
    box-sizing: unset;
  }

  .btn-arrow, .btn-arrow:visited, .btn-arrow:link, .btn-arrow:active {
    width: 46px;
    height: 23px;
    border: 1px solid #DDD;
    background: #FFF;
    line-height: 23px;
    font-family: "\5b8b\4f53";
    text-align: center;
    font-size: 16px;
    color: #AAA;
    text-decoration: none;
    out-line: none
  }

  .btn-arrow:hover {
    background-color: #1299ec;
    color: whitesmoke;
  }

  .top-pagination {
    display: block;
    padding: 3px 15px;
    font-size: 11px;
    font-weight: 700;
    line-height: 18px;
    color: #999;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
    text-transform: uppercase;
    float: right;
    margin-top: 6px
  }

  .top-pagination span {
    margin-right: 10px;
  }

  /*    .logo-list li {
        padding: 8px;
      }

      .logo-list li:hover {
        background-color: #f3f3f3;
      }*/

  .type-list a:hover {
    color: #1299ec;
  }

  .skus {
    list-style: none;
  }

  .skus li {
    list-style: none;
    display: inline-block;
    float: left;
    margin-left: 2px;
    border: 2px solid #f3f3f3;
  }

  .skus li.selected {
    border: 2px solid #dd1144;
  }

  .skus img {
    width: 25px;
    height: 25px;
  }

  am {
    color: red;
  }

  .command em {
    height: 14px;
    line-height: 14px;
    padding: 0 3px;
    border: 1px solid #e23a3a;
    margin-right: 3px;
    overflow: hidden;
    text-align: center;
    font-style: normal;
    font-size: 12px;
    font-family: "Helvetica Neue", "Hiragino Sans GB", SimSun, serif;
    font-weight: bold;
    border-radius: 2px;
    color: #e23a3a;
  }
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-list.css"></style>
