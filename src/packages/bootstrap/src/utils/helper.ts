/*
 * @Date: 2020-06-01 19:37:11
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-01 19:41:24
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/utils/helper.ts
 */

export function loadjs (src: string) {
  const el = document.createElement('script')
  el.setAttribute('src', src)
  el.setAttribute('charset', 'utf-8')
  document.body.append(el)
}

export function loadcss (src: string) {
  const el = document.createElement('link')
  el.setAttribute('rel', 'stylesheet')
  el.setAttribute('href', src)
  el.setAttribute('charset', 'utf-8')
  document.head.append(el)
}