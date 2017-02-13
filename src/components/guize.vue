<!--活动规则（guize）组件-->
<template>
  <div class="lover_action">
    <div class="action_detail">
      <h3>活动</h3>
      <p>用户通过活动页面点击购买活动页面商品，交易完成后获得红包奖励，红包在活动结束后<span>3</span>个工作日内统一发放到对应的5173账户，具体详情可咨询客服<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2602776493&site=qq&menu=yes">QQ:2602776493.</a></p>
    </div>
    <div class="action_rule">
      <h3>活动规则</h3>
      <p>1、活动期间（2017年2月13日-2017年2月16日）单个5173账号可多次参加活动领取红包奖励 .</p>
      <p>2、每个红包仅在寄售、担保适用，且需要满足使用条件 :</p>
      <p>①订单佣金≥红包金额 ;</p>
      <p>②充值类不能使用 ;</p>
      <p> 3、红包使用期限为2017年2月11日-2017年3月11日，请获得红包后尽快使用，逾期未使用将会过期！</p>
      <p>4、5173保留在法律规定范围内对活动规则进行解释的权利 .</p>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style>
  /*活动详情*/
  .lover_action{
    color: #f3f2bc;
    padding-left: 39px;
  }
  .lover_action .action_detail{
    margin-top: 48px;
    width: 1024px;
    height: 184px;
  }
  .lover_action .action_detail h3{
    font-size: 46px;
    line-height: 73px;
  }
  .lover_action .action_detail p{
    font-size: 24px;
    line-height: 50px;
  }
  .lover_action .action_detail span{
    color: #ebff46;
    margin: 0 5px;
  }
  .lover_action .action_detail a{
    color: #ebff46;
    text-decoration:underline;
    margin-left: 5px;
  }
  /*活动规则*/
  .lover_action .action_rule h3{
    font-size: 46px;
    line-height: 73px;
  }
  .lover_action .action_rule p{
    font-size: 24px;
    line-height: 50px;
  }
</style>
