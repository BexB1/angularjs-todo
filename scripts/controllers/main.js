"use strict";

angular
  .module('todoListApp')
  .controller("mainCtrl", function($scope, dataService, $http) {

  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
  };

  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input changed.");
  };

  dataService.getTodos(function(response) {
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodos = function(todo) {
    var filteredTodos = $scope.todos.filter(function(todo) {
      if(todo.edited) {
        return todo;
      }
    })
    dataService.saveTodos(filteredTodos);
  }

})