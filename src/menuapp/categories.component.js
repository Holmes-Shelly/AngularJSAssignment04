(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menuapp/templates/menucategory.template.html',
  bindings: {
    categories: '<'
  }
});

})();
