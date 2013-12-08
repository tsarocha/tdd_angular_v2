// เพื่อ bind service
var todoApp = angular.module('todoApp', ['ngResource']); // [] คือ plugin ที่ใช้ เช่น ['firebase']
// 'ToDoService' > ประกาศชื่อ , TodoService ชื่อ class ที่ใช้ bind (เพื่อใช้สำหรับเวลา minify จะได้จับคู่ตัวแปรได้ไม่พัง)
//todoApp.service('TodoService', TodoService);

// factory คือ มันจะเอาไปสร้าง service อีกที ใช้คู่กับ ngResource
todoApp.factory('TodoService', TodoService);
// ยุบแบบนี้ได้ เพราะว่า TodoService มันใช้ชื่อเหมือนกัน
todoApp.controller('ToDoController', ToDoController);

function ToDoController($scope, TodoService) {
	$scope.toDoList = "";

	$scope.init = function() {
		$scope.toDoList = TodoService.query(function(returnedItems) {
			//callback ที่ return data ที่ได้ กลับมาให้
			returnedItems.forEach(function(eachItem) {
				var itemObj;
				itemObj = {title:eachItem.title, isDone:eachItem.done};
				$scope.toDoList.push(itemObj);
			});
		});
	}	
	$scope.addToDo = function(title) {
		var newToDo = {title:title, isDone:false};
		$scope.toDoList.push(newToDo);
		$scope.newTitle = "";
	}
}

function TodoService($resource) {
	/*
	//make request ข้ามเครื่อง จะได้ callback กลับมา
	this.query = function() {
		return [ 	{title:"learn angular", isDone:true},
					{title:"learn TDD", isDone:true},
					{title:"go home", isDone:false} ];
	}*/
	var url, paramDefaults, actions;

	url = 'https://tuasarocha.firebaseio.com/GeekyTodos.json'
	paramDefaults = {};
	actions = { 
		'saveAll': {method: 'PUT', isArray: true} 
	};
	return $resource(url, paramDefaults, actions);
}