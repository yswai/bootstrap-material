import angular from 'github:angular/bower-angular@1.4.8'
import ngMaterial from 'angular-material'

let app = angular.module('app', [ngMaterial]);
app.controller('AppCtrl', function($scope) {
    let testVar = 'testVar';
    $scope.appState = {};
    $scope.appState.msg = `Hey There ${testVar}`;
});