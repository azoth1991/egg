'use strict';

const Controller = require('egg').Controller;
// var WechatAPI = require('co-wechat-api');
var config = require('../config');
class HomeController extends Controller {
  async index() {
    // var api = new WechatAPI(config.appId, config.appSecret);
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
