
var cartPanelView = {

  // 初始化
  setup : function (callback) {

    $('.tbar-cart-item').hover(function (){ $(this).find('.p-del').show(); },function(){ $(this).find('.p-del').hide(); });
    $('.jth-item').hover(function (){ $(this).find('.add-cart-button').show(); },function(){ $(this).find('.add-cart-button').hide(); });

    // 悬浮按钮
    $('.toolbar-tab').hover(function (){
      $(this).find('.tab-text').html($(this).attr("data"));
      $(this).find('.tab-text').addClass("tbar-tab-hover");
      $(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover");
      $(this).addClass("tbar-tab-selected");
    },function(){
      $(this).find('.tab-text').removeClass("tbar-tab-hover");
      $(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover");
      $(this).removeClass("tbar-tab-selected");
    });
  },

  // 侧栏按钮点击
  tabItemClick : function (typeName) {
    if($('.toolbar-wrap').hasClass('toolbar-open')){
      cartPanelView.tbar_panel_close(typeName);
    }else{
      cartPanelView.tbar_panel_show(typeName);
    }
  },

  // 面板显示
  tbar_panel_show : function(panelName) {

    // 悬浮按钮
    $('.toolbar-tab').removeClass('tbar-tab-click-selected');
    $('.tbar-tab-'+panelName).addClass('tbar-tab-click-selected');
    $('.tbar-tab-'+panelName).find('.tab-text').remove();

    // 面板内容
    $('.toolbar-panel').css('visibility','hidden');
    $('.tbar-panel-'+panelName).css({'visibility':"visible","z-index":"1"});

    // 面板显示
    $('.toolbar-wrap').addClass('toolbar-open');
  },

  // 关闭面板
  tbar_panel_close : function(panelName) {

    if($('.tbar-tab-'+panelName).find('.tab-text').length > 0){
      $('.toolbar-tab').each(function(i){
        var tagValue = $(this).attr("tag");
        if((tagValue != panelName)&&(tagValue != undefined)){
          var info = "<em class='tab-text '>"+$(this).attr('data')+"</em>";
          $(this).append(info);
          $(this).removeClass('tbar-tab-click-selected');
          $('.tbar-panel-'+$(this).attr('tag')).css({'visibility':"hidden","z-index":"-1"});
        }
      });
      $('.tbar-tab-'+panelName).addClass('tbar-tab-click-selected');
      $('.tbar-tab-'+panelName).find('.tab-text').remove();
      $('.tbar-panel-'+panelName).css({'visibility':"visible","z-index":"1"});
    }else{
      $('.toolbar-wrap').removeClass('toolbar-open');
      var info = "<em class='tab-text '>"+$('.tbar-tab-'+panelName).attr("data")+"</em>";
      $('.tbar-tab-'+panelName).append(info);
      $('.tbar-tab-'+panelName).removeClass('tbar-tab-click-selected');
      $('.tbar-panel-'+panelName).css({'visibility':"hidden","z-index":"-1"});
    }
  },
};

const cartData = {
  "totalQuantity":3,
  "totalPrices":8998,
  "carts":[
    {
      "pid":"10803521657",
      "image":"http://img10.360buyimg.com/cms/s80x80_jfs/t2941/284/2460981288/184644/79d9d20b/57bd9890N73efbc30.jpg",
      "title":"炫龙毁灭者DC 桌面级处理器 GTX950M 4G大显存 15.6英寸游戏笔记本电脑1",
      "color":"黑色",
      "size":"I3-6100/8G/500G+128G",
      "unitPrice":4499,
      "quantity":1
    },
    {
      "pid":"10803523232",
      "image":"http://img10.360buyimg.com/cms/s80x80_jfs/t2941/284/2460981288/184644/79d9d20b/57bd9890N73efbc30.jpg",
      "title":"炫龙毁灭者DC 桌面级处理器 GTX950M 4G大显存 15.6英寸游戏笔记本电脑2",
      "color":"黑色",
      "size":"I3-6100/8G/500G+128G",
      "unitPrice":4499,
      "quantity":1
    }
  ]
};

const sidePanel = {
  template: `
    <div class="toolbar-wrap J-wrap">
      <div class="toolbar">
        <div class="toolbar-panels J-panel">

          <!-- 购物车 -->
          <div style="visibility: hidden;" class="J-content toolbar-panel tbar-panel-cart toolbar-animate-out">
            <h3 class="tbar-panel-header J-panel-header">
              <a href="" class="title"><i></i><em class="title">购物车</em></a>
              <span class="close-panel J-close" onclick="cartPanelView.tbar_panel_close('cart');" ></span>
            </h3>
            <div class="tbar-panel-main">
              <div class="tbar-panel-content J-panel-content">
                <div id="J-cart-tips" class="tbar-tipbox hide">
                  <div class="tip-inner">
                    <span class="tip-text">还没有登录，登录后商品将被保存</span>
                    <a href="#none" class="tip-btn J-login">登录</a>
                  </div>
                </div>
                <div id="J-cart-render">
                  <!-- 列表 -->
                  <div id="cart-list" class="tbar-cart-list">
                    <div class="tbar-cart-item" v-for="c in cartData.carts">
                      <div class="jtc-item-promo">
                        <em class="promo-tag promo-mz">满赠<i class="arrow"></i></em>
                        <div class="promo-text">已购满600元，您可领赠品</div>
                      </div>
                      <div class="jtc-item-goods">
                        <span class="p-img"><a href="#" target="_blank"><img :src="c.image" :alt="c.title" height="50" width="50"/></a></span>
                        <div class="p-name">
                          <a href="#">{{c.title}}</a>
                        </div>
                        <div class="p-price"><strong>¥{{c.unitPrice}}</strong>×{{c.quantity}}</div>
                        <a href="#none" class="p-del J-del">删除</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 小计 -->
            <div id="cart-footer" class="tbar-panel-footer J-panel-footer">
              <div class="tbar-checkout">
                <div class="jtc-number"> <strong class="J-count" id="cart-number">{{cartData.totalQuantity}}</strong>件商品 </div>
                <div class="jtc-sum"> 共计：<strong class="J-total" id="cart-sum">¥{{cartData.totalPrices}}</strong> </div>
                <a class="jtc-btn J-btn" href="#none" target="_blank">去购物车结算</a>
              </div>
            </div>
          </div>

          <!-- 我的关注 -->
          <div style="visibility: hidden;" data-name="follow" class="J-content toolbar-panel tbar-panel-follow">
            <h3 class="tbar-panel-header J-panel-header">
              <a href="#" target="_blank" class="title"> <i></i> <em class="title">我的关注</em> </a>
              <span class="close-panel J-close" onclick="cartPanelView.tbar_panel_close('follow');"></span>
            </h3>
            <div class="tbar-panel-main">
              <div class="tbar-panel-content J-panel-content">
                <div class="tbar-tipbox2">
                  <div class="tip-inner"> <i class="i-loading"></i> </div>
                </div>
              </div>
            </div>
            <div class="tbar-panel-footer J-panel-footer"></div>
          </div>

          <!-- 我的足迹 -->
          <div style="visibility: hidden;" class="J-content toolbar-panel tbar-panel-history toolbar-animate-in">
            <h3 class="tbar-panel-header J-panel-header">
              <a href="#" target="_blank" class="title"> <i></i> <em class="title">我的足迹</em> </a>
              <span class="close-panel J-close" onclick="cartPanelView.tbar_panel_close('history');"></span>
            </h3>
            <div class="tbar-panel-main">
              <div class="tbar-panel-content J-panel-content">
                <div class="jt-history-wrap">
                  <ul>
                    <li class="jth-item">
                      <a href="#" class="img-wrap"> <img src="/img/like_03.png" height="100" width="100" /> </a>
                      <a class="add-cart-button" href="#" target="_blank">加入购物车</a>
                      <a href="#" target="_blank" class="price">￥498.00</a>
                    </li>
                    <li class="jth-item">
                      <a href="#" class="img-wrap"> <img src="/img/like_02.png" height="100" width="100" /></a>
                      <a class="add-cart-button" href="#" target="_blank">加入购物车</a>
                      <a href="#" target="_blank" class="price">￥498.00</a>
                    </li>
                  </ul>
                  <a href="#" class="history-bottom-more" target="_blank">查看更多足迹商品 &gt;&gt;</a>
                </div>
              </div>
            </div>
            <div class="tbar-panel-footer J-panel-footer"></div>
          </div>

        </div>

        <div class="toolbar-header"></div>

        <!-- 侧栏按钮 -->
        <div class="toolbar-tabs J-tab">
          <div onclick="cartPanelView.tabItemClick('cart')" class="toolbar-tab tbar-tab-cart" data="购物车" tag="cart" >
            <i class="tab-ico"></i>
            <em class="tab-text"></em>
            <span class="tab-sub J-count " id="tab-sub-cart-count">3</span>
          </div>
          <div onclick="cartPanelView.tabItemClick('follow')" class="toolbar-tab tbar-tab-follow" data="我的关注" tag="follow" >
            <i class="tab-ico"></i>
            <em class="tab-text"></em>
            <span class="tab-sub J-count hide">0</span>
          </div>
          <div onclick="cartPanelView.tabItemClick('history')" class="toolbar-tab tbar-tab-history" data="我的足迹" tag="history" >
            <i class="tab-ico"></i>
            <em class="tab-text"></em>
            <span class="tab-sub J-count hide">0</span>
          </div>
        </div>

        <div class="toolbar-footer">
          <div class="toolbar-tab tbar-tab-top" > <a href="#"> <i class="tab-ico  "></i> <em class="footer-tab-text">顶部</em> </a> </div>
          <div class="toolbar-tab tbar-tab-feedback" > <a href="#" target="_blank"> <i class="tab-ico"></i> <em class="footer-tab-text ">反馈</em> </a> </div>
        </div>

        <div class="toolbar-mini"></div>

      </div>

      <div id="J-toolbar-load-hook"></div>

    </div> 
    `,
  name: "sidePanel",
  data() {
    return {
      cartData
    }
  },
  created(){
    // 初始购物车侧边栏
    cartPanelView.setup();
  }
};
Vue.component("sidePanel", sidePanel);