<html>
  <head>
    <title></title>
  </head>
  <body>
  </body>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
  <script>
    if ('{{userInfo}}') {
      window.location.href = `http://172.31.110.107:3000/index.html?userInfo={{userInfo}}`
    } else {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49be95151bbf5a65&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
    }
</script>
</html>