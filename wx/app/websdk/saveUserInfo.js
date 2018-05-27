'use strict';
const request = require('request');
const qs = require('querystring');
const config = require('../config');

function saveUserInfo(info) {
  let reqUrl = `http://101.37.151.85:8008/socket/regUser?openid=${info['openid']}&nickname=${info['nickname']}&sex=${info['sex']}&language=${info['language']}&city=${info['city']}&province=${info['province']}&headimgurl=${info['headimgurl']}&country=${info['country']}`;
  let options = {
    method: 'get',
    url: reqUrl
  };
  console.log(options.url);
  return new Promise((resolve, reject) => {
    request(options, function (err, res, body) {
      console.log(err, res, body)
      if (res) {
        resolve(body);
      } else {
        reject(err);
      }
    })
  })
}

module.exports = saveUserInfo;