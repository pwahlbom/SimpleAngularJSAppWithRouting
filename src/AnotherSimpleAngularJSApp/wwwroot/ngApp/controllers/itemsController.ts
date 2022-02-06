namespace SimpleAngularJSAppWithRouting.Controllers {
    export class ItemsController {
        public message = 'Hello from the ITEMS page!';

        public items;

        constructor() {
            this.items = [
                { id: 1, name: 'Widget' },
                { id: 2, name: 'Midget' },
                { id: 3, name: 'Tidget' }
            ];
        }
    }

    angular.module('MyApp').controller('controller', ItemsController);
}