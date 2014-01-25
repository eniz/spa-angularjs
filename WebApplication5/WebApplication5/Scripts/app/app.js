'use strict';


// Declare app level module which depends on controllers, filters and services
angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
// configure the module
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/drivers", { templateUrl: "Scripts/app/partials/drivers.html", controller: "driversController" }).
      when("/drivers/:id", { templateUrl: "Scripts/app/partials/driver.html", controller: "driverController" }).
      when("/teams", { templateUrl: "Scripts/app/partials/teams.html", controller: "teamsController" }).
	  when("/teams/:id", { templateUrl: "Scripts/app/partials/team.html", controller: "teamController" }).
	  when("/races", { templateUrl: "Scripts/app/partials/races.html", controller: "racesController" }).
	  when("/races/:id", { templateUrl: "Scripts/app/partials/race.html", controller: "raceController" }).
      otherwise({ redirectTo: '/drivers' });
}]);