(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/menuitem.template.html',
  bindings: {
    items: '<'
  }
});

})();
