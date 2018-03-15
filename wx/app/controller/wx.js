'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');
const path = require('path');
const url = require('url');
const config = require('../config');

function sha1(str) {
  var shasum = crypto.createHash("sha1");
  shasum.update(str);
  str = shasum.digest("hex");
  return str;
}
function wechatAuth(req, res) {
  var query = url.parse(req.url, true).query;
  var signature = query.signature;
  var echostr = query.echostr;
  var timestamp = query['timestamp'];
  var nonce = query.nonce;

  var reqArray = [nonce, timestamp, config.token];

  //对数组进行字典排序
  reqArray.sort();
  var sortStr = reqArray.join('');//连接数组
  var sha1Str = sha1(sortStr);

  if (signature === sha1Str) {
    res.end(echostr);
  } else {
    res.end("false");
    console.log("授权失败!");
  }
}
class WxController extends Controller {
  async index() {
    var query = this.ctx.query;
    var signature = query.signature;
    var echostr = query.echostr;
    var timestamp = query['timestamp'];
    var nonce = query.nonce;

    var reqArray = [nonce, timestamp, config.token];

    //对数组进行字典排序
    reqArray.sort();
    var sortStr = reqArray.join('');//连接数组
    var sha1Str = sha1(sortStr);

    if (signature === sha1Str) {
      this.ctx.body = echostr;
    } else {
      this.ctx.body = "false";
      console.log("授权失败!");
    }
  }
}

module.exports = WxController;
