<template >
  <div class='nav-top' @click="showOption=false" >
    <Navigat1></Navigat1>
    <!--头部-->
    <div class='header' id='headApp'>
      <div class='py-container'>
        <div class='yui3-g Logo'>
          <div class='yui3-u Left logoArea'>
            <button  style='border:none' class='logo-bd' title='九源 ' @click='gotoindex' target='_blank'></button>
          </div>
          <div class='yui3-u Center searchArea'>
            <div class='search' style="font-weight:bold">
              <div action='' class='sui-form form-inline'>
                <!--searchAutoComplete-->
                <div class='input-append' >
                  <input style="font-weight:bold " type='text' id='autocomplete' v-model='key'
                         @click.stop="" autocomplete="off"  class='input-error input-xxlarge'  /><!--@keyup="handleKey($event)"-->
                  <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button>
                </div>
              </div>

            </div>
            <div class='hotwords'>
              <ul>
                <li class='f-item'>热搜：</li>
                <li class='f-item' type="button" @click="search1('英语')">英语</li>
                <li class='f-item' type="button" @click="search1('考研')">考研</li>
                <li class='f-item' type="button" @click="search1('计算机组成原理')">计算机组成原理</li>
                <li class='f-item' type="button" @click="search1('数学')">数学</li>
                <li class='f-item' type="button" @click="search1('教材')">教材</li>
              </ul>
            </div>
          </div>
          <div class='yui3-u Right shopArea'>
            <div class='fr shopcar'>
              <div class='show-shopcar' id='shopcar'>
                <span class='car'></span>
                <a class='sui-btn btn-default btn-xlarge' @click="cart" target='_blank'>
                  <span>我的购物车</span>
<!--                  <i class='shopnum'>0</i>-->
                </a>
                <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'>
                  <p>进入购物车</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='yui3-g NavList'>
          <div class='yui3-u Left all-sort'>
            <h4>九源精品</h4>
          </div>
          <div class='yui3-u Right'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigat1 from './navigate'
export default {
  name: 'v-top',
  components: {Navigat1},
  data () {
    return {
      // key: this.getUrlParam('key'), // 用户输入的关键字
      key: '',
      query: location.search,
      showOption: false, // 是否要展示提示框
      options: [], // 搜索框的自动补全提示内容
      index: -1, // 目前选中的提示框内容的角标
      array: {
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
        version: ''
      }
    }
  },
  // watch: {
  //   index (val) {
  //     if (val !== -1) {
  //       this.key = this.options[val]
  //     }
  //   }
  // },
  methods: {
    cart () {
      this.$router.replace({path: '/cart'})
      location.reload()
    },
    search1 (text) {
      this.$router.push({
        path: '/searchBook',
        query: {
          key: text
        }
      })
      location.reload()
    },
    search () {
      // console.log('top' + this.key)
      this.$router.push({
        path: '/searchBook',
        query: {
          key: this.key
        }
      })
      // location.reload()
    },
    gotoindex () {
      this.$router.replace({path: '/index'})
    }
  }
}
</script>

<style scoped>

</style>
