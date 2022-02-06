namespace SimpleAngularJSAppWithRouting.Controllers {
    export class IndexController {
        public message = 'Hello from the INDEX page!';
    }

    angular.module('MyApp').controller('IndexController', IndexController);
}