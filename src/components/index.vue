<template>
  <div id="indexApp">
    <!-- 头部栏位 -->
    <div id="nav-bottom">
      <VTop></VTop>
    </div>
    <!--分类列表-->
    <div>
      <div class="sort">
        <div class="py-container">
          <div class="yui3-g SortList ">
            <!--左侧分类导航栏-->
            <div class="yui3-u Left all-sort-list">
              <div class="all-sort-list2">
                <div class="item bo">
                  <h3><a href="">理工</a></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore2">
                        <dt><a href="">理工科</a></dt>
                        <dd ><em v-for="(list2,i2) in Category.category1" :key="i2"><a @click="next(list2.category_name)">{{list2.category_name}}</a></em></dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h3><a href="">文学</a></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore2">
                        <dt><a href="">文学类</a></dt>
                        <dd ><em v-for="(list2,i2) in Category.category2" :key="i2"><a @click="next(list2.category_name)">{{list2.category_name}}</a></em></dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h3><a href="">教课辅助</a></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore2">
                        <dt><a href="">教课辅助</a></dt>
                        <dd ><em v-for="(list2,i2) in Category.category3" :key="i2"><a @click="next(list2.category_name)">{{list2.category_name}}</a></em></dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <h3><a href="">电子书</a></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore1">
                        <dt><a href="">电子书</a></dt>
                        <dd><em><a href="#">免费</a></em><em><a href="#">小说</a></em><em><a href="#">励志与成功</a></em><em><a
                          href="#">婚恋/两性</a></em><em><a href="#">文学</a></em><em><a href="#">经管</a></em><em><a
                          href="#">畅读VIP</a></em></dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--轮播图-->
            <div class="yui3-u Center banerArea">
              <!--banner轮播图-->
              <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide" style="border: 1px solid #E4E4E4;height: 460px">
                <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1" ></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class='item' name="r" v-for="(list,i) in recommend1" :key="i" >
                    <a  @click="search(list.bi_name)" >
                      <img style="margin-left: 200px;width: 300px;height: 400px;margin-top: 20px" :src="'http://jiuyuan.natapp1.cc/'+ list.bi_picture" >
<!--                      <img src="../assets/logo.png">-->
                    </a>
                  </div>
                </div>
                <a  class="carousel-control left" style="opacity: 0.1">‹
                </a><a class="carousel-control right" style="opacity: 0.1">›</a>
              </div>
            </div>
            <!--右侧九源快报-->
            <div class="cube" style="right: -80px;position: relative;top:100px">
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
          </div>
        </div>
      </div>
    </div>
    <!--推荐-->
    <div class="show" style="margin-top: 15px">
      <div class="py-container" style="border: 1px solid #E4E4E4;background-color: #EAEAEA">
        <ul class="yui3-g Recommend" style="height: 200px">
          <li class="yui3-u-1-6  clock" style="height: 100%">
            <div class="time" >
              <img  src="../img/clock.png"/>
              <h3>今日推荐</h3>
            </div>
          </li>
          <li class="yui3-u-5-24" v-for="(list,i) in recommend2" :key="i" style="margin-left: 10px;height: 200px;width: 170px" >
            <div><a @click="search(list.bi_name)" target="_blank" ><img  style="width: 115px;height: 161px;" :src="'http://jiuyuan.natapp1.cc/'+list.bi_picture" alt="" class="pic"></a></div>
            <span >{{list.bi_name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer" style="margin-top: 10px ; width: 100%">
    <v-indexfoot></v-indexfoot>
    </div>
  </div>
</template>

<script>
// import './js/plugins/sui/sui.min'
import $ from 'jquery'
import '../js/czFunction'
import '../js/pages/index'
import VTop from './comment/top'
// import '../js/plugins/sui/sui.min'
import VIndexfoot from './comment/indexfoot'
import axios from 'axios'
axios.defaults.baseURL = 'http://jiuyuan.natapp1.cc'
axios.defaults.timeout = 5000
export default {
  name: 'index',
  components: {VTop, VIndexfoot},
  data () {
    return {
      t: 0,
      user_no: null,
      recommend2: {
        author: '',
        bi_name: '',
        bi_no: '',
        bi_picture: '',
        bi_price: '',
        bi_state: '',
        category_no: '',
        press: '',
        version: ''
      },
      recommend1: {
        author: '',
        bi_name: '',
        bi_no: '',
        bi_picture: '',
        bi_price: '',
        bi_state: '',
        category_no: '',
        press: '',
        version: ''
      },
      Category: {
        category1: {
          category_id: '',
          category_name: ''
        },
        category2: {
          category_id: '',
          category_name: ''
        },
        category3: {
          category_id: '',
          category_name: ''
        }
      }
    }
  },
  methods: {
    left (index) {
      console.log(index)
      alert(index)
      // var z = document.getElementsByName('r')
      // for (var i = 0; i < 6; i++) {
      //   z[i].className = 'item'
      // }
      // z[index - 1].className = 'item active'
    },
    right (index) {
      alert(index)
    },
    search (a) {
      this.$router.push({
        path: '/searchBook',
        query: {
          key: a
        }
      })
      location.reload()
    },
    next_pic () {
      var c = document.getElementsByName('r')
      this.t = (this.t + 1) % 6
      for (var i = 0; i < 6; i++) {
        c[i].className = 'item'
      }
      // console.log(this.t)
      c[this.t].className = 'item active'
      // console.log(c[0].className)
    },
    guanbi () {
      document.getElementById('con').style.display = 'none'
      document.getElementById('all_light').style.display = 'none'
    },
    add () {
      document.getElementById('all_light').style.display = 'block'
      document.getElementById('con').style.display = 'block'
    },
    next (text) {
      console.log('top' + text)
      this.$router.push({
        path: '/searchBook',
        query: {
          key: text
        }
      })
      location.reload()
    },
    getCookie: function () {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ') // 显示格式切割
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=')// 再次切割
          // 判断查找相对应的值
          if (arr2[0] === 'username') {
            this.user_no = arr2[1]// 保存
            // console.log(arr2[1])
          } else if (arr2[0] === 'password') {
            // this.form.password = arr2[1]
            // console.log(arr2[1])
          }
        }
      }
    },
    item () {
      this.$router.replace({path: '/item'})
    },
    getrecoment () {
      this.getCookie()
      console.log('??' + this.user_no)
      axios({
        method: 'post',
        url: 'recommand',
        headers: {
          'Accept': 'application/json'
        },
        params: {
          user_no: this.user_no,
          type: '2'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.recommend2 = resp.data
        // for (var i = 0; i < 5; i++) {
        //   this.recommend2[i] = resp.data[i]
        // }
        console.log(resp.data)
      })
        .catch(failResponse => {
        })
      axios({
        method: 'post',
        url: 'recommand',
        headers: {
          'Accept': 'application/json'
        },
        params: {
          type: '1'
        },
        CrossDomain: true,
        dataType: 'jsonp'
      }).then(resp => {
        this.recommend1 = resp.data
        console.log(resp.data)
      })
        .catch(failResponse => {
        })
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
        // console.log('ttt' + resp.data)
        // console.log('cate' + resp.data.category1[0].category_name)
      })
        .catch(failResponse => {
        })
    }
  },
  mounted () {
    this.next_pic()
    setInterval(this.next_pic, 3000)
    this.getrecoment()
    // this.gg()
  }
}
$(function () {
  $('#service').hover(function () {
    $('.service').show()
  }, function () {
    $('.service').hide()
  })
  $('#shopcar').hover(function () {
    $('#shopcarlist').show()
  }, function () {
    $('#shopcarlist').hide()
  })
})
</script>

<style scoped>
  .carousel-inner,.carousel-inner div {
    z-index: 9;
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
  }
  input{
    margin-bottom: 10px;
  }
  .cube {
    float: left;
    width: 200px;
    height: 200px;
    /*margin: 100px -250px;*/
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
  @keyframes rotate {
    form {
      transform: rotateX(0) rotateZ(0);
    }
    to {
      transform: rotateX(360deg) rotateZ(360deg);
    }
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
</style>
<style src="../css/webbase.css"></style>
<style src="../css/pages-JD-index.css"></style>
<style src="../css/widget-cartPanelView.css"></style>
