

angular.module('tcApp').controller('regionCtrl', function($scope, hikeData, $rootScope){

	hikeData.getTrails().then(function(data){
		
		
		$scope.trails = data;
		
		$scope.regions = _.map(_.uniq($scope.trails, 'Region'), 'Region');
									
	//	$scope.regions = _.uniq($scope.trails, 'Region');							
									
									
		//console.log($scope.regions);
		$rootScope.obj = {};
		$scope.getRegionList = function(row){
			$rootScope.obj = row;
			console.log($scope.obj);
			
		}
		
	});
});