var SimpleAngularJSAppWithRouting;
(function (SimpleAngularJSAppWithRouting) {
    var Controllers;
    (function (Controllers) {
        var IndexController = (function () {
            function IndexController() {
                this.message = 'Hello from the INDEX page!';
            }
            return IndexController;
        }());
        Controllers.IndexController = IndexController;
        angular.module('MyApp').controller('IndexController', IndexController);
    })(Controllers = SimpleAngularJSAppWithRouting.Controllers || (SimpleAngularJSAppWithRouting.Controllers = {}));
})(SimpleAngularJSAppWithRouting || (SimpleAngularJSAppWithRouting = {}));
//# sourceMappingURL=indexController.js.map