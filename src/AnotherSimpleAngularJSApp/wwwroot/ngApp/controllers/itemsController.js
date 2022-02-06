var SimpleAngularJSAppWithRouting;
(function (SimpleAngularJSAppWithRouting) {
    var Controllers;
    (function (Controllers) {
        var ItemsController = (function () {
            function ItemsController() {
                this.message = 'Hello from the ITEMS page!';
                this.items = [
                    { id: 1, name: 'Widget' },
                    { id: 2, name: 'Midget' },
                    { id: 3, name: 'Tidget' }
                ];
            }
            return ItemsController;
        }());
        Controllers.ItemsController = ItemsController;
        angular.module('MyApp').controller('controller', ItemsController);
    })(Controllers = SimpleAngularJSAppWithRouting.Controllers || (SimpleAngularJSAppWithRouting.Controllers = {}));
})(SimpleAngularJSAppWithRouting || (SimpleAngularJSAppWithRouting = {}));
//# sourceMappingURL=itemsController.js.map