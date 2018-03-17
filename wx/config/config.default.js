'use strict';

module.exports = appInfo => {
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1521125368833_4992';
  // add your config here
  config.middleware = [];

  return config;
};