//ชื่อ test 
describe('To do Controller', function() { 
	var $scope;

	beforeEach(inject(function($rootScope, $controller) {
		// ประกาศตัวแปรบนสุด เพื่อป้องกันปัญหา single var pattern
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope: $scope, TodoService: null};

		$controller('ToDoController', configuration);

		// initialize test
		$scope.toDoList = [ {title:"learn angular", isDone:true},
							{title:"learn TDD", isDone:true},
							{title:"go home", isDone:false} ];
	
	}));

	it('should have 3 default to do list', function() {
		expect($scope.toDoList.length).toEqual(3);
	});

	it('first item should has learn angular for description and it is done', function() {
		expect($scope.toDoList[0]).toEqual({title:"learn angular", isDone:true});	
	});

	it('second item should has learn TDD for description and it is done', function() {
		expect($scope.toDoList[1]).toEqual({title:"learn TDD", isDone:true});
	});

	it('first item should has go home for description and it is not done', function() {
		expect($scope.toDoList[2]).toEqual({title:"go home", isDone:false});
	});


	it('should add new item when call add function', function() {
		expect($scope.toDoList.length).toEqual(3);
		$scope.addToDo("eat");
		expect($scope.toDoList.length).toEqual(4);
		expect($scope.toDoList[3]).toEqual({title:"eat", isDone:false});
	});

	it('should clear new to do when click add button', function() {
		$scope.newTitle = "abc";
		expect($scope.newTitle).toEqual('abc');

		$scope.addToDo("abc");
		expect($scope.newTitle).toEqual('');		
	});
});

