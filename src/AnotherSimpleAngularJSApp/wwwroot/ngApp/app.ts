namespace SimpleAngularJSAppWithRouting
{
    angular.module("MyApp", ["ui.router"]).config
    (
        (
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
        ) =>
        {
            // Define routes
            $stateProvider
                .state("Home",
                {
                    url: "/",
                    templateUrl: "/ngApp/views/home.html",
                    controller: SimpleAngularJSAppWithRouting.Controllers.HomeController,
                    controllerAs: "controller"
                })
                .state("Items",
                {
                    url: "/items",
                    templateUrl: "/ngApp/views/items.html",
                    controller: SimpleAngularJSAppWithRouting.Controllers.ItemsController,
                    controllerAs: "controller"
                })
                .state('About',
                {
                    url: "/about",
                    templateUrl: "ngApp/views/about.html",
                    controller: SimpleAngularJSAppWithRouting.Controllers.AboutController,
                    controllerAs: "controller"
                })
                .state("notFound",
                {
                    url: "/notFound",
                    templateUrl: "/ngApp/views/notFound.html"
                });

            // Handle request for non-existent route
            $urlRouterProvider.otherwise("/notFound");
            //$urlRouterProvider.otherwise('/');

            $locationProvider.html5Mode(true);
        }
    );
}