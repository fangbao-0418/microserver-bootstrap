/*
 * @Date: 2020-06-02 10:29:30
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-02 10:31:40
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/config.ts
 */ 

const configs = [
  {
    serverName: 'crm',
    path: '/',
    js: [
      { src: 'https://test-crmadmin.hzxituan.com/static/js/vendors.fb99b979.chunk.js', inject: 'body' },
      { src: 'https://test-crmadmin.hzxituan.com/static/js/main.053dbd45.chunk.js', inject: 'body' }
    ],
    // css: [
    //   { src: 'https://test-crmadmin.hzxituan.com/static/js/vendors.fb99b979.chunk.js', inject: 'body' },
    //   { src: 'https://test-crmadmin.hzxituan.com/static/js/main.053dbd45.chunk.js', inject: 'body' }
    // ]
  }
]