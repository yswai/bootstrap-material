import angular from 'github:angular/bower-angular@1.4.8'
import $ from 'jquery'
import 'angular-ui-router'

const main = angular.module('main', ['ui.router']);

main.config(function($stateProvider) {
    console.log($stateProvider);
});

main.run(function() {
    $.material.init();
});

main.controller('AppCtrl', function($scope) {
    let testVar = 'testVar';
    $scope.showDialog = false;
    $scope.appState = {};
    $scope.appState.msg = `Hey There ${testVar}`;
});

export default main