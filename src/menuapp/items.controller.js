(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['MenuDataService', 'items'];
function ItemListController(MenuDataService, items) {
  var itemList = this;
  console.log(items);
  itemList.category = items.data.category.short_name;
  itemList.items = items.data.menu_items;
}

})();
