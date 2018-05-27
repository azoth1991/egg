'use strict';

const Controller = require('egg').Controller;
const getToken = require('../websdk/getWebToken');
const getUserInfo = require('../websdk/getWebUserInfo');
const saveUserInfo = require('../websdk/saveUserInfo');
var config = require('../config');
class HomeController extends Controller {
  async index() {
    var query = this.ctx.query;
    var ctx = this.ctx;
    if(query.code){
      var dataStr = await getToken(query.code);
      var data = JSON.parse(dataStr);
      var userInfoStr = await getUserInfo(data['access_token'], data['openid'])
      var userInfo = JSON.parse(userInfoStr);
      saveUserInfo(userInfo);
      await this.ctx.render('pay/jump.tpl',{openid:userInfo['openid'],sourceWechatId: query.sourceWechatId});
    } else {
      await this.ctx.render('pay/home.tpl');
    }
  }
}

module.exports = HomeController;
