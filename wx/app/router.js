'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/wx', controller.wx.index);
  router.get('/MP_verify_fkIpU1O2iaKK5VoI.txt', controller.test.index);

};
