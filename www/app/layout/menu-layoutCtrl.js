angular.module('tcApp').controller('menu-layoutCtrl', function($scope, $state){
	$scope.logout = function() {
		auth.signout();
		$state.go('app.hike');
		
		};
		
		
});