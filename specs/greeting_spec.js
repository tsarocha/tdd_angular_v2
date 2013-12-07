//ชื่อ test 
describe('Greeting Controller', function() { 
	var $scope;

	// เป็นคำสั่งที่จะ run ก่อนที่จะ run test case แต่ละ test
	// $new เป็น magic เพื่อช่วยทำ dependency injection 
	// เวลา new จะไปเอาตัวที่เกี่ยวข้อง เข้ามา import ให้
	// นี่คือโครงของการ test controller !!!
	beforeEach(inject(function($rootScope, $controller) {
		// ประกาศตัวแปรบนสุด เพื่อป้องกันปัญหา single var pattern
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope: $scope};

		$controller('GreetingController', configuration);
		/*
		$controller('GreetingController', {
			// $scope ตัวซ้าย คือของ GreetingController , ตัวขวา คือ scope ของ test
			$scope: $scope
		});
		*/
	}));

	/*
	// it = 1 test case
    it('should have name as tua by default', function() {
    	// ค่า default
        expect($scope.getName()).toEqual('tua');
    });

    it('should return Sarocha when name is Sarocha', function(){
    	$scope.name = 'Sarocha';
    	expect($scope.getName()).toEqual('Sarocha');
    });

    it('should clear name when click clear button', function() {
    	$scope.name = 'Sarocha';
    	expect($scope.getName()).toEqual('Sarocha');

    	$scope.clearName();
    	expect($scope.getName()).toEqual('');
    });
	*/
});

