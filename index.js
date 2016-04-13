(function () {
  "use strict";

  var moduleName = 'angular-global-resolve';

  angular
    .module(moduleName, [])
    .provider('globalResolve', function () {
      return {
        addGlobalDependencies: function (routeProvider, dependencies) {
          var when;
          if (routeProvider.when) {
            when = routeProvider.when;
            routeProvider.when = decorate;
          } else {
            when = routeProvider.state;
            routeProvider.state = decorate;
          }

          function decorate(path, route) {
            var globalResolve = route.globalResolve || typeof route.globalResolve === 'undefined';
            if (globalResolve) {
              route.resolve = angular.extend(dependencies, route.resolve || {});
            }
            return when.call(routeProvider, path, route);
          }
        },
        $get: {}
      };
    });

  if (typeof module !== 'undefined') {
    module.exports = moduleName;
  }

}());
