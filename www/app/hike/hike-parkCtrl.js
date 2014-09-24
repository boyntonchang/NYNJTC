
angular.module('tcApp').controller('hike-parkCtrl', function($scope, hikeData, $rootScope){

	hikeData.getTrails().then(function(data){
		
		
		$scope.trails = data;
		
		$scope.parks = _.map(_.uniq($scope.trails, 'Park'), 'Park');
									
		$rootScope.parkObj = {};
		$scope.getParkList = function(row){
			$rootScope.parkObj = row;
			console.log($scope.parkObj);
			
		}
		
	});
});