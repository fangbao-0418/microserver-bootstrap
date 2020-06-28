"use strict";
/*
 * @Date: 2020-06-01 19:37:11
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-02 13:45:48
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/server/src/packages/bootstrap/src/utils/helper.ts
 */
exports.__esModule = true;
exports.loadcss = exports.loadjs = void 0;
function loadjs(src, inject) {
    if (inject === void 0) { inject = 'body'; }
    var el = document.createElement('script');
    el.setAttribute('src', src);
    el.setAttribute('charset', 'utf-8');
    el.setAttribute('defer', 'defer');
    document[inject].append(el);
}
exports.loadjs = loadjs;
function loadcss(src, inject) {
    if (inject === void 0) { inject = 'body'; }
    var el = document.createElement('link');
    el.setAttribute('rel', 'stylesheet');
    el.setAttribute('href', src);
    el.setAttribute('charset', 'utf-8');
    document[inject].append(el);
}
exports.loadcss = loadcss;
