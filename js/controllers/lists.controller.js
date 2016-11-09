'use strict';
// Lists Controller

function ListsController(){

}

// class ListsController{

//   init(){

//   }

ListsController.prototype.$addListForm = function(){
  return $('#add_list')
}

ListsController.prototype.$listTitleInput = function(){
  return $('#list_title')
}

ListsController.prototype.$selectListMenu = function(){
  return $('#select_list')
}

ListsController.prototype.$addTaskForm = function(){
  return $('#add_task')
}

ListsController.prototype.$wrapper = function(){
  return $('#wrapper')
}

ListsController.prototype.init = function(){
  //return this.$addTaskForm().css('display', 'none')
} 

//   $listTitleInput(){
//     return $('#list_title')
//   }

//   $selectListMenu(){
//     return $('#select_list')
//   }

//   $addTaskForm(){
//     return $('#add_task')
//   }

//   $wrapper(){
//     return $('#wrapper')
//   }

// }