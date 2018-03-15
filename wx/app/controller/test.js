'use strict';

const Controller = require('egg').Controller;
var WechatAPI = require('co-wechat-api');
var config = require('../config');
class TestController extends Controller {
  async index() {
    var api = new WechatAPI(config.appId, config.appSecret);
    this.ctx.body = 'fkIpU1O2iaKK5VoI';
  }
}

module.exports = TestController;
