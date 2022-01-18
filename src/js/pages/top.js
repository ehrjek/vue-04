// const lyTop = {
//   template: `
//     <div class='nav-top' @click="showOption=false" >
//      <shortcut/>
//         <!--头部-->
//         <div class='header' id='headApp'>
//             <div class='py-container'>
//                 <div class='yui3-g Logo'>
//                     <div class='yui3-u Left logoArea'>
//                         <a class='logo-bd' title='乐优' href='/index.html' target='_blank'></a>
//                     </div>
//                     <div class='yui3-u Center searchArea'>
//                         <div class='search' style="font-weight:bold">
//                             <div action='' class='sui-form form-inline'>
//                                 <!--searchAutoComplete-->
//                                 <div class='input-append' >
//                                     <input style="font-weight:bold" type='text' id='autocomplete' v-model='key' @keyup="handleKey($event)"
//                                             @click.stop="" autocomplete="off"  class='input-error input-xxlarge' @focus="showOption=true&&options.length>0" />
//                                     <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button>
//                                 </div>
//                                 <div v-show="showOption" style="position: absolute;z-index:9999;border: 1px lightgrey solid;overflow-y:auto; height: 150px" >
//                                   <ul style="list-style: none;margin-top: 0; background-color: #fff;width: 500px;">
//                                     <li :style="{cursor: 'pointer',width: '500px','background-color':index===i ? '#ddd':'#fff'}"
//                                         v-for="(option, i) in options"  @mouseover="index=i"
//                                         @click.self.prevent="selectOption(option)" >
//                                       {{option}}
//                                     </li>
//                                   </ul>
//                                 </div>
//                             </div>
//
//                         </div>
//                         <div class='hotwords'>
//                             <ul>
//                                 <li class='f-item'>首发</li>
//                                 <li class='f-item'>优惠</li>
//                                 <li class='f-item'>9.9元团购</li>
//                                 <li class='f-item'>每满99减30</li>
//                                 <li class='f-item'>亿元优惠</li>
//                                 <li class='f-item'>9.9元团购</li>
//                                 <li class='f-item'>办公用品</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class='yui3-u Right shopArea'>
//                         <div class='fr shopcar'>
//                             <div class='show-shopcar' id='shopcar'>
//                                 <span class='car'></span>
//                                 <a class='sui-btn btn-default btn-xlarge' href='/cart.html' target='_blank'>
//                                     <span>我的购物车</span>
//                                     <i class='shopnum'>0</i>
//                                 </a>
//                                 <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'>
//                                     <p>'啊哦，你的购物车还没有商品哦！'</p>
//                                     <p>'啊哦，你的购物车还没有商品哦！'</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class='yui3-g NavList'>
//                     <div class='yui3-u Left all-sort'>
//                         <h4>乐优精品</h4>
//                     </div>
//                     <div class='yui3-u Center navArea' style="z-index: 50">
//                         <ul class='nav'>
//                             <li class='f-item'>服装城</li>
//                             <li class='f-item'>美妆馆</li>
//                             <li class='f-item'>品优超市</li>
//                             <li class='f-item'>全球购</li>
//                             <li class='f-item'>闪购</li>
//                             <li class='f-item'>团购</li>
//                             <li class='f-item'>有趣</li>
//                             <li class='f-item'><a href='/seckill-index.html' target='_blank'>秒杀</a></li>
//                         </ul>
//                     </div>
//                     <div class='yui3-u Right'></div>
//                 </div>
//             </div>
//         </div>
//        </div>
//       `,
//   name: 'ly-top',
//   data() {
//     return {
//       key: this.getUrlParam("key"), // 用户输入的关键字
//       query: location.search,
//       showOption: false,// 是否要展示提示框
//       options: [], // 搜索框的自动补全提示内容
//       index: -1,// 目前选中的提示框内容的角标
//     }
//   },
//   watch: {
//     index(val) {
//       if (val !== -1) {
//         this.key = this.options[val];
//       }
//     }
//   },
//   methods: {
//     handleKey(e) {
//       if (e.keyCode === 8 || (48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90)) {
//         // 字母、数字、backspace键，需要去查询数据
//         this.getSuggestion();
//       } else if (e.keyCode === 13) {
//         // 回车键，搜索
//         this.search();
//       } else if (e.keyCode === 27) {
//         // esc键，取消提示框展示内容
//         this.showOption = false;
//       } else if (e.keyCode === 38) {
//         // up键，选中提示框中的上一个选项
//         this.index > 0 ? this.index-- : this.index = this.options.length - 1
//       } else if (e.keyCode === 40) {
//         // down键，选中提示框中的下一个选项
//         this.index < this.options.length - 1 ? this.index++ : this.index = 0
//       }
//     },
//     getSuggestion() {
//       axios.get("/search/goods/suggestion?key=" + this.key)
//         .then(resp => {
//           // 保存数据
//           this.options = resp.data;
//           // 显示提示框
//           this.showOption = resp.data && resp.data.length > 0;
//         })
//         .catch(e => {
//           console.log(e);
//           this.options = []
//         })
//     },
//     search() {
//       window.location = '/search.html?key=' + this.key;
//     },
//     getUrlParam: function (name) {
//       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//       var r = window.location.search.substr(1).match(reg);
//       if (r != null) {
//         return decodeURI(r[2]);
//       }
//       return null;
//     },
//     selectOption(o) {
//       // 关闭提示框
//       this.showOption = false;
//       // 清空提示框内容
//       this.options = [];
//       // 跳转页面
//       window.location = '/search.html?key=' + o;
//     }
//   }
// }
// Vue.component("lyTop", lyTop);
const lyTop = {
  template: `
    <div class='nav-top' @click="showOption=false" >
     <shortcut/>
        <!--头部--> 
        <div class='header' id='headApp'> 
            <div class='py-container'> 
                <div class='yui3-g Logo'> 
                    <div class='yui3-u Left logoArea'> 
                        <a class='logo-bd' title='乐优' href='/index.html' target='_blank'></a> 
                    </div> 
                    <div class='yui3-u Center searchArea'> 
                        <div class='search' style="font-weight:bold"> 
                            <div action='' class='sui-form form-inline'> 
                                <!--searchAutoComplete--> 
                                <div class='input-append' > 
                                    <input style="font-weight:bold" type='text' id='autocomplete' v-model='key' @keyup="handleKey($event)"
                                            @click.stop="" autocomplete="off"  class='input-error input-xxlarge' @focus="showOption=true&&options.length>0" /> 
                                    <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button> 
                                </div> 
                                <div v-show="showOption" style="position: absolute;z-index:9999;border: 1px lightgrey solid;overflow-y:auto; height: 150px" >
                                  <ul style="list-style: none;margin-top: 0; background-color: #fff;width: 500px;">
                                    <li :style="{cursor: 'pointer',width: '500px','background-color':index===i ? '#ddd':'#fff'}"
                                        v-for="(option, i) in options"  @mouseover="index=i"
                                        @click.self.prevent="selectOption(option)" >
                                      {{option}}
                                    </li>
                                  </ul>
                                </div>
                            </div> 
                            
                        </div> 
                        <div class='hotwords'> 
                            <ul> 
                                <li class='f-item'>热搜：</li> 
                                <li class='f-item'>计算机组成原理</li> 
                                <li class='f-item'>人体简史</li> 
                                <li class='f-item'>新人购书八折起</li> 
                                <li class='f-item'>9.9元团购</li> 
                                <li class='f-item'>计科专业大三用书</li> 
                            </ul> 
                        </div> 
                    </div> 
                    <div class='yui3-u Right shopArea'> 
                        <div class='fr shopcar'> 
                            <div class='show-shopcar' id='shopcar'> 
                                <span class='car'></span> 
                                <a class='sui-btn btn-default btn-xlarge' href='/cart.html' target='_blank'> 
                                    <span>我的购物车</span> 
                                    <i class='shopnum'>0</i> 
                                </a> 
                                <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'> 
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> 
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
                <div class='yui3-g NavList'> 
                    <div class='yui3-u Left all-sort'> 
                        <h4>九源精品</h4> 
                    </div> 
                    <div class='yui3-u Center navArea' style="z-index: 50"> 
                        <ul class='nav'> 
                            <li class='f-item'>教材</li> 
                            <li class='f-item'>电子书</li> 
                            <li class='f-item'>网络文学</li> 
                            
                             
                            <li class='f-item'>团购</li> 
                            <li class='f-item'>有趣</li> 
                            <li class='f-item'><a href='/seckill-index.html' target='_blank'>秒杀</a></li> 
                        </ul> 
                    </div> 
                    <div class='yui3-u Right'></div> 
                </div> 
            </div> 
        </div>
       </div> 
      `,
  name: 'ly-top',
  data() {
    return {
      key: this.getUrlParam("key"), // 用户输入的关键字
      query: location.search,
      showOption: false,// 是否要展示提示框
      options: [], // 搜索框的自动补全提示内容
      index: -1,// 目前选中的提示框内容的角标
    }
  },
  watch: {
    index(val) {
      if (val !== -1) {
        this.key = this.options[val];
      }
    }
  },
  methods: {
    handleKey(e) {
      if (e.keyCode === 8 || (48 <= e.keyCode && e.keyCode <= 57) || (65 <= e.keyCode && e.keyCode <= 90)) {
        // 字母、数字、backspace键，需要去查询数据
        this.getSuggestion();
      } else if (e.keyCode === 13) {
        // 回车键，搜索
        this.search();
      } else if (e.keyCode === 27) {
        // esc键，取消提示框展示内容
        this.showOption = false;
      } else if (e.keyCode === 38) {
        // up键，选中提示框中的上一个选项
        this.index > 0 ? this.index-- : this.index = this.options.length - 1
      } else if (e.keyCode === 40) {
        // down键，选中提示框中的下一个选项
        this.index < this.options.length - 1 ? this.index++ : this.index = 0
      }
    },
    getSuggestion() {
      axios.get("/search/goods/suggestion?key=" + this.key)
          .then(resp => {
            // 保存数据
            this.options = resp.data;
            // 显示提示框
            this.showOption = resp.data && resp.data.length > 0;
          })
          .catch(e => {
            console.log(e);
            this.options = []
          })
    },
    search() {
      window.location = '/search.html?key=' + this.key;
    },
    getUrlParam: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURI(r[2]);
      }
      return null;
    },
    selectOption(o) {
      // 关闭提示框
      this.showOption = false;
      // 清空提示框内容
      this.options = [];
      // 跳转页面
      window.location = '/search.html?key=' + o;
    }
  }
}
Vue.component('lytop', lyTop)
