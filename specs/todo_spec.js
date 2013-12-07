//ชื่อ test 
describe('To do Controller', function() { 
	var $scope;

	beforeEach(inject(function($rootScope, $controller) {
		// ประกาศตัวแปรบนสุด เพื่อป้องกันปัญหา single var pattern
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope: $scope};

		$controller('ToDoController', configuration);
	}));

	/*
    it('should clear name when click clear button', function() {
    	$scope.name = 'Sarocha';
    	expect($scope.getName()).toEqual('Sarocha');

    	$scope.clearName();
    	expect($scope.getName()).toEqual('');
    });
	*/

	it('should have 3 default to do list', function() {
		expect($scope.getToDoList().length).toEqual(3);
		expect($scope.getToDoList()[0]).toEqual({title:"learn angular", checked:true});
		expect($scope.getToDoList()[1]).toEqual({title:"learn TDD", checked:true});
		expect($scope.getToDoList()[2]).toEqual({title:"go home", checked:false});
	});

	it('should add new item when call add function', function() {
		var oldLength = $scope.getToDoList().length;
		$scope.newTitle = "eat";
		$scope.addToDo();
		expect($scope.getToDoList()[oldLength]).toEqual({title:"eat", checked:false});
	});

	it('should clear new to do when click add button', function() {
		$scope.newTitle = "abc";
		expect($scope.newTitle).toEqual('abc');

		$scope.addToDo();
		expect($scope.newTitle).toEqual('');		
	});

	// it('should change checked status when click check box', function() {
	// 	var length = $scope.getToDoList().length;
		
	// 	var lastToDo = $scope.getToDoList()[length - 1];
	// 	expect(lastToDo.checked).toEqual(false);

	// 	$scope.toggleStatus(length - 1);

	// 	lastToDo = $scope.getToDoList()[length - 1];
	// 	expect(lastToDo.checked).toEqual(true);
	// });
});

