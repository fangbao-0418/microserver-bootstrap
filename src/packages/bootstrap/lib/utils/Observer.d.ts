/// <reference path="../types/helper.d.ts" />
declare const Observer: {
    subscribe: (fn: Function) => void;
    addRoute: (routeInfo: RouteInfo) => void;
    trigger: () => void;
    getRoutes: () => RouteInfo<any>[];
};
export default Observer;
