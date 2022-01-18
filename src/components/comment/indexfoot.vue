<template>
  <div class="py-container" ><!--style="background-color: #ddd"-->
    <div class="footlink" >
<!--      <div class="Mod-service">-->
<!--        <ul class="Mod-Service-list">-->
<!--          <li class="grid-service-item intro  intro1">-->
<!--            <i class="serivce-item fl"></i>-->
<!--            <div class="service-text">-->
<!--              <h4>正品保障</h4>-->
<!--              <p>正品保障，提供发票</p>-->
<!--            </div>-->
<!--          </li>-->
<!--          <li class="grid-service-item  intro intro2">-->

<!--            <i class="serivce-item fl"></i>-->
<!--            <div class="service-text">-->
<!--              <h4>正品保障</h4>-->
<!--              <p>正品保障，提供发票</p>-->
<!--            </div>-->
      <div class="clearfix Mod-list" >
        <div class="yui3-g">
          <div class="yui3-u-1-6" style="margin-left: 100px">
            <h4>购物指导</h4>
            <ul class="unstyled">
              <li>购物流程</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>

          </div>
          <div class="yui3-u-1-6" style="margin-left: 100px">
            <h4>配送方式</h4>
            <ul class="unstyled">
              <li>约定取货</li>
              <li>配送服务</li>
              <li>货物配送</li>
            </ul>
          </div>
          <div class="yui3-u-1-6" style="margin-left: 100px">
            <h4>支付方式</h4>
            <ul class="unstyled">
              <li>货到付款</li>
              <li>在线支付</li>
              <li>微信付款</li>
            </ul>
          </div>
          <div class="yui3-u-1-6" style="margin-left: 100px">
            <h4>售后服务</h4>
            <ul class="unstyled">
              <li>售后政策</li>
              <li>退款说明</li>
              <li>取消订单</li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <!-- 底部栏位 -->
    </div>
    <v-foot></v-foot>
  </div>
</template>

<script>
import VFoot from './foot'
export default {
  name: 'v-indexfoot',
  components: {VFoot}
}
</script>

<style scoped>
  .unstyled li {
    margin-top: 13px;
  }
</style>
