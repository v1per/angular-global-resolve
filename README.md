## What
Resolve common dependencies for routes
  
## Install
  
```
$ npm install --save angular-global-resolve
```  

## Usage

```js
angular
  .module('app', [
    require('angular-global-resolve')
  ])
```

```js
angular
	.module('expenses', [])
	.config(routes)


function routes($stateProvider, globalResolveProvider) {
	globalResolveProvider.addGlobalDependencies($stateProvider, {
		user: function (userService) {
			'ngInject';
			return userService.getUser();
			}
	});
}
```

**NOTICE:**

You can use either $stateProvider (ui-router) and $routeProvider (ngRoute)
