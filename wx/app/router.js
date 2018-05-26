'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/wx', controller.wx.index);
  router.get('/home', controller.home.index);

};
