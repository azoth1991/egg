'use strict';

const Controller = require('egg').Controller;
const getToken = require('../websdk/getWebToken');
const getUserInfo = require('../websdk/getWebUserInfo');
const config = require('../config');
const fs = require('fs');
const tenpay = require('tenpay');
// var WXPay = require('weixin-pay');
// var wxpay = WXPay({
// 	appid: config.appId,
// 	mch_id: config.mch_id,
// 	partner_key: config.partner_key, //微信商户平台API密钥
// 	pfx: fs.readFileSync('./apiclient_cert.p12'), //微信商户平台证书
// });
const tenPayconfig = {
  appid: config.appId,
  mchid: config.mch_id,
  partnerKey: config.partner_key,
  pfx: fs.readFileSync('./apiclient_cert.p12'),
  notify_url: 'http://www.goodluck78.com/home',
  // spbill_create_ip: 'IP地址'
};
const api = new tenpay(tenPayconfig, true);
class PayController extends Controller {
  async index() {
    // 获取openid
    var query = this.ctx.query;
    var dataStr = await getToken(query.code);
    var data = JSON.parse(dataStr);
    let res = await api.getPayParams({
      out_trade_no:'123',
      body: 'testees',
      total_fee: '1',
      openid: data['openid'],
    });
    // this.ctx.body = res;
    console.log(res);
    await this.ctx.render('pay/pay.tpl',{...res});
  }
}

module.exports = PayController;
