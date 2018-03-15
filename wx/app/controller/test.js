'use strict';

const Controller = require('egg').Controller;
var config = require('../config');
class TestController extends Controller {
  async index() {
    this.ctx.body = 'fkIpU1O2iaKK5VoI';
  }
}

module.exports = TestController;
