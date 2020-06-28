"use strict";
/*
 * @Date: 2020-06-01 17:44:07
 * @LastEditors: fangbao
 * @LastEditTime: 2020-06-04 15:37:49
 * @FilePath: /eslint-plugin-xt-react/Users/fangbao/Documents/xituan/xt-crm-microservice/entry/src/packages/bootstrap/src/index.ts
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
var universal_router_1 = require("universal-router");
var history_1 = require("history");
var helper_1 = require("./utils/helper");
var Observer_1 = require("./utils/Observer");
__createBinding(exports, Observer_1, "default", "Observer");
var history = history_1.createHashHistory();
var injectConfig = [];
/** 加载过的server */
var loadedServer = [];
function initRoutes() {
    var routes = [];
    injectConfig.forEach(function (item) {
        routes.push({
            path: item.path + "(.*)",
            action: function (context) {
                console.log(item, loadedServer, 'loadedServer');
                var isloaded = !!loadedServer.find(function (serverName) { return serverName === item.serverName; });
                if (!isloaded) {
                    loadedServer.push(item.serverName);
                    var js = item.js || [];
                    var css = item.css || [];
                    css.forEach(function (attr) {
                        helper_1.loadcss(attr.src, attr.inject);
                    });
                    js.forEach(function (attr) {
                        helper_1.loadjs(attr.src, attr.inject);
                    });
                }
                console.log(context, item, 'action');
                if (item.serverName !== 'common') {
                    return '';
                }
                // return ''
            }
        });
    });
    console.log(routes, 'routes');
    return routes;
}
function routerResolve(router, serverPath) {
    router.resolve(serverPath)
        .then(function (html) {
        console.log(html, 'loaded');
        // document.body.innerHTML = html
    });
}
function initRouterResolve(router) {
    var location = history.location;
    var pathname = location.pathname;
    var serverPath = pathname.replace(/^(\/\w+)\/?.*$/, '$1');
    routerResolve(router, serverPath);
}
function start() {
    var routes = initRoutes();
    // console.log(routes, 'routes')
    var router = new universal_router_1["default"](routes);
    var unlisten = history.listen(function (location, action) {
        var pathname = location.pathname;
        var serverPath = pathname.replace(/^(\/\w+)\/?.*$/, '$1');
        console.log(pathname, 'pathname');
        routerResolve(router, serverPath);
    });
    initRouterResolve(router);
}
function bootstrap(config) {
    injectConfig = config;
    var app = {
        start: start
    };
    return app;
}
exports["default"] = bootstrap;
