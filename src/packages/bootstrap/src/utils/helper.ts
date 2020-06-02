/*
 * @Date: 2020-06-01 19:37:11
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-02 13:45:48
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/utils/helper.ts
 */

type InjectType = 'head' | 'body'

export function loadjs (src: string, inject: InjectType = 'body') {
  const el = document.createElement('script')
  el.setAttribute('src', src)
  el.setAttribute('charset', 'utf-8')
  el.setAttribute('defer', 'defer')
  document[inject].append(el)
}

export function loadcss (src: string, inject: InjectType = 'body') {
  const el = document.createElement('link')
  el.setAttribute('rel', 'stylesheet')
  el.setAttribute('href', src)
  el.setAttribute('charset', 'utf-8')
  document[inject].append(el)
}