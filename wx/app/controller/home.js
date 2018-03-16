'use strict';

const Controller = require('egg').Controller;
const getToken = require('../websdk/getWebToken');
const getUserInfo = require('../websdk/getWebUserInfo');
var config = require('../config');
class HomeController extends Controller {
  async index() {
    var query = this.ctx.query;
    var ctx = this.ctx;
    var dataStr = await getToken(query.code);
    var data = JSON.parse(dataStr);
    this.ctx.body = await getUserInfo(data['access_token'], data['openid'])
  }
}

module.exports = HomeController;
