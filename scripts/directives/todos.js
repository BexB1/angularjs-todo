angular
  .module('todoListApp')
  .directive('todos', function() {
    return {
      templateUrl: 'templates/todo.html',
      controller: 'mainCtrl',
      replace: true
    }
  })