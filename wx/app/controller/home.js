'use strict';

const Controller = require('egg').Controller;
const getToken = require('../websdk/getWebToken');
const getUserInfo = require('../websdk/getWebUserInfo');
var config = require('../config');
class HomeController extends Controller {
  async index() {
    var query = this.ctx.query;
    var ctx = this.ctx;
    if(query.code){
      var dataStr = await getToken(query.code);
      var data = JSON.parse(dataStr);
      var userInfo = await getUserInfo(data['access_token'], data['openid'])
      console.log('openid',userInfo['openid'])
      await this.ctx.render('pay/jump.tpl',{openid:JSON.parse(userInfo)['openid']});
    } else {
      await this.ctx.render('pay/home.tpl');
    }
  }
}

module.exports = HomeController;
