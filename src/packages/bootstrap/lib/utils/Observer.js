"use strict";
/// <reference path="../types/helper.d.ts" />
exports.__esModule = true;
var XT_MICRO_SERVICE_LISTENER = 'xt-micro-service-listener';
var XT_MICRO_SERVICE_ROUTES = 'xt-micro-service-routes';
var routes = window[XT_MICRO_SERVICE_ROUTES] = (window[XT_MICRO_SERVICE_ROUTES] || []);
var listeners = window[XT_MICRO_SERVICE_LISTENER] = (window[XT_MICRO_SERVICE_LISTENER] || []);
var Observer = {
    subscribe: function (fn) {
        listeners.push(fn);
    },
    addRoute: function (routeInfo) {
        routes.push(routeInfo);
        this.trigger();
    },
    trigger: function () {
        listeners.map(function (fn) {
            fn && fn();
        });
    },
    getRoutes: function () {
        return routes;
    }
};
exports["default"] = Observer;
