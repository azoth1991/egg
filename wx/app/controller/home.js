'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
    // await ctx.render('home/index.tpl', data);
  }
}

module.exports = HomeController;
