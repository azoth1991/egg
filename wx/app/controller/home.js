'use strict';

const Controller = require('egg').Controller;
const getToken = require('../websdk/getWebToken');
const getUserInfo = require('../websdk/getWebUserInfo');
var config = require('../config');
class HomeController extends Controller {
  async index() {
    var query = this.ctx.query;
    var ctx = this.ctx;
    // this.ctx.body = 'hi'
    getToken(query.code)
    // getToken('071685Tg2Q8kZH0kmsTg2aMNSg2685Tn')
    .then(function (data) {
      return JSON.parse(data);
    })
    .then(function (data) {
      getUserInfo(data['access_token'], data['openid']).then(_ => {
        ctx.body = JSON.stringify({userinfo: _});
      })
    });
  }
}

module.exports = HomeController;
