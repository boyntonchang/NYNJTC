angular.module('tcApp').controller('trail-DetailCtrl', function ($scope, $stateParams, hikeData){
	hikeData.getTrails().then(function(data){
		$scope.trails = data;
		
		$scope.trailId = Number($stateParams.id);
		
		$scope.trail = _.find($scope.trails, {"id":$scope.trailId});
		console.log($scope.trail);
		
		var mile = $scope.trail.Length;
		
		$scope.trailMile = mile.replace(/miles/, '');
		
		var diff = $scope.trail.Difficulty;
		
		console.log(diff);
		
		switch (diff) {
		
			case 'Easy':
				 $scope.diffVal = 1;
				break;
			case 'Easy to Moderate':
				 $scope.diffVal = 2;
				break;
			case 'Moderate':
				 $scope.diffVal = 3;
				break;
				
			case 'Moderate to Strenuous':
				 $scope.diffVal = 3.5;
				break;
			case 'Strenuous':
				 $scope.diffVal = 4;
				break;
			case 'Very Strenuous':
				 $scope.diffVal = 5;
				break;
				
			default:
				 console.log('error');
		};
		
		return $scope.diffVal ;

		
	});
});