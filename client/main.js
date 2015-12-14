import angular from 'github:angular/bower-angular@1.4.8'
import ngUIRouter from 'angular-ui-router'

const main = angular.module('main', [ngUIRouter]);

main.controller('AppCtrl', function($scope) {
    let testVar = 'testVar';
    $scope.appState = {};
    $scope.appState.msg = `Hey There ${testVar}`;
});

export default main