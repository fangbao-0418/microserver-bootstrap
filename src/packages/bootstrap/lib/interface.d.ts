/*
 * @Date: 2020-06-02 10:34:10
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-02 10:39:03
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/interface.d.ts
 */ 

export interface InjectConfigProps {
  serverName: string
  path: string
  js: { src: string, inject?: 'body' | 'head' }[]
  css?: { src: string, inject?: 'body' | 'head' }[]
}