import 'jquery'
import angular from 'github:angular/bower-angular@1.4.8'
import ngUIRouter from 'angular-ui-router'
import main from './main'

import 'bootstrap/css/bootstrap.min.css!'
import 'bootstrap-material/dist/css/bootstrap-material-design.min.css!'
import 'bootstrap';
import 'bootstrap-material/dist/css/ripples.min.css!'
import 'bootstrap-material/dist/js/material.min.js'
import 'bootstrap-material/dist/js/ripples.min.js'

angular.element(document).ready(function() {
    angular.bootstrap(document, [main.name]);
});