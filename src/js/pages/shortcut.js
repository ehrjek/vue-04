// const shortcut = {
//   template: `
//     <div class='py-container'>
//         <div class='shortcut'>
//             <ul class='fl'>
//                <li class='f-item'>乐优欢迎您！</li>
//                <li class='f-item' v-if='username'>
//                尊敬的会员，<span style='color: red;'>{{username}}</span>
//                |
//                <a href="javascript:void(0)" @click="logout">退出登录</a>
//                </li>
//                <li v-else class='f-item'>
//                    请<a href='javascript:void(0)' @click='gotoLogin'>登录</a>　
//                    <span><a href='/register.html' target='_blank'>免费注册</a></span>
//                </li>
//            </ul>
//            <ul class='fr'>
//
//                <li class='f-item'>我的</li>
//                <li class='f-item space'></li>
//                <li class='f-item'><a href='/home.html' target='_blank'>我的乐优</a></li>
//                <li class='f-item space'></li>
//                <li class='f-item'>乐优会员</li>
//                <li class='f-item space'></li>
//                <li class='f-item'>企业采购</li>
//                <li class='f-item space'></li>
//                <li class='f-item'>关注乐优</li>
//                <li class='f-item space'></li>
//                <li class='f-item' id='service'>
//                    <span>客户服务</span>
//                    <ul class='service'>
//                        <li><a href='/cooperation.html' target='_blank'>合作招商</a></li>
//                        <li><a href='/shoplogin.html' target='_blank'>商家后台</a></li>
//                        <li><a href='/cooperation.html' target='_blank'>合作招商</a></li>
//                        <li><a href='#'>商家后台</a></li>
//                    </ul>
//                </li>
//                <li class='f-item space'></li>
//                <li class='f-item'>网站导航</li>
//            </ul>
//        </div>
//     </div>
//     `,
//   name: "shortcut",
//   data() {
//     return {
//       username: null
//     }
//   },
//   created() {
//     axios.get("/user/info/me")
//       .then(resp => {
//         // 结果中获取 username属性
//         this.username = resp.data.username;
//       })
//         .catch(e => console.log(e));
//   },
//   methods: {
//     gotoLogin() {
//       window.location = "/login.html?returnUrl=" + window.location;
//     },
//     logout() {
//       ly.http.post("/auth/user/logout").then(
//         this.username = ''
//       )
//     }
//   }
// };
// Vue.component("shortcut", shortcut);

// const shortcut = {
//   template: `
//     <div class='py-container'>
//         <div class='shortcut'>
//             <ul class='fl'>
//                <li class='f-item'>九源欢迎您！</li>
//                <li class='f-item' v-if='username'>
//                尊敬的会员，<span style='color: red;'>{{username}}</span>
//                |
//                <a href="javascript:void(0)" @click="logout">退出登录</a>
//                </li>
//                <li v-else class='f-item'>
//                    请<a href='javascript:void(0)' @click='gotoLogin'>登录</a>　
//                    <span><a href='/register.html' target='_blank'>免费注册</a></span>
//                </li>
//            </ul>
//            <ul class='fr'>
//
//                <li class='f-item'>我的订单</li>
//                <li class='f-item space'></li>
//                <li class='f-item'><a href='/home.html' target='_blank'>我的九源</a></li>
//                <li class='f-item space'></li>
//                <li class='f-item'>九源会员</li>
//                <li class='f-item space'></li>
//                <li class='f-item'>企业采购</li>
//                <li class='f-item space'></li>
//                <li class='f-item'>关注九源</li>
//                <li class='f-item space'></li>
//                <li class='f-item' id='service'>
//                    <span>客户服务</span>
//                    <ul class='service'>
//                        <li><a href='/cooperation.html' target='_blank'>合作招商</a></li>
//                        <li><a href='/shoplogin.html' target='_blank'>商家后台</a></li>
//                        <li><a href='/cooperation.html' target='_blank'>合作招商</a></li>
//                        <li><a href='#'>商家后台</a></li>
//                    </ul>
//                </li>
//                <li class='f-item space'></li>
//                <li class='f-item'>网站导航</li>
//            </ul>
//        </div>
//     </div>
//     `,
//   name: "shortcut",
//   data() {
//     return {
//       username: null
//     }
//   },
//   created() {
//     axios.get("/user/info/me")
//         .then(resp => {
//           // 结果中获取 username属性
//           this.username = resp.data.username;
//         })
//         .catch(e => console.log(e));
//   },
//   methods: {
//     gotoLogin() {
//       window.location = "/login.html?returnUrl=" + window.location;
//     },
//     logout() {
//       ly.http.post("/auth/user/logout").then(
//           this.username = ''
//       )
//     }
//   }
// };
// Vue.component("shortcut", shortcut);
