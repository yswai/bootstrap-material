import 'jquery'
import angular from 'github:angular/bower-angular@1.4.8'
import ngUIRouter from 'angular-ui-router'
import main from './main'

import 'bootstrap-material/dist/css/bootstrap-material-design.min.css!'
import 'bootstrap-material/dist/css/ripples.min.css!'
import 'bootstrap'
import 'bootstrap-material'

angular.element(document).ready(function() {
    angular.bootstrap(document, [main.name]);
});