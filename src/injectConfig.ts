/*
 * @Date: 2020-06-02 10:32:30
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-04 16:21:09
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/entry/src/injectConfig.ts
 */

import { InjectConfigProps } from '@/packages/bootstrap/src/interface'

const configs: InjectConfigProps[] = [
  // {
  //   serverName: 'common',
  //   path: '/',
  //   css: [
  //     // { src: 'https://cdn.hzxituan.com/crm_npm/antd/3.26.8/dist/antd.min.css', inject: 'head' },
  //     { src: 'https://test-crmadmin.hzxituan.com/static/css/vendors.b09197b0.chunk.css', inject: 'head' },
  //     { src: 'https://test-crmadmin.hzxituan.com/static/css/main.775c08f5.chunk.css', inject: 'head' }
  //   ],
  //   js: [
  //     { src: 'https://test-crmadmin.hzxituan.com/static/js/runtime.e701d7b3.js' },
  //     { src: 'https://test-crmadmin.hzxituan.com/static/js/vendors.6740da20.chunk.js' },
  //     { src: 'https://test-crmadmin.hzxituan.com/static/js/main.414b2e4b.chunk.js' }
  //   ]
  // },
  {
    serverName: 'common',
    path: '/',
    css: [
      // { src: 'https://cdn.hzxituan.com/crm_npm/antd/3.26.8/dist/antd.min.css', inject: 'head' },
      // { src: 'https://test-crmadmin.hzxituan.com/static/css/vendors.b09197b0.chunk.css', inject: 'head' },
      // { src: 'https://test-crmadmin.hzxituan.com/static/css/main.775c08f5.chunk.css', inject: 'head' }
    ],
    js: [
      { src: 'http://localhost:3000/static/js/bundle.js' },
      { src: 'http://localhost:3000/static/js/vendors.chunk.js' },
      { src: 'http://localhost:3000/static/js/main.chunk.js' }
    ]
  },
  // {
  //   serverName: 'crm',
  //   path: '/',
  //   css: [
  //     { src: 'http://localhost:3002/app.css', inject: 'head' }
  //   ],
  //   js: [
  //     // { src: 'http://localhost:3002/app.js' }
  //   ]
  // }
  {
    serverName: 'order',
    path: '/order',
    css: [
      { src: 'http://localhost:3002/expose.css', inject: 'head' }
    ],
    js: [
      { src: 'http://localhost:3002/expose.js' }
    ]
  }
]

export default configs