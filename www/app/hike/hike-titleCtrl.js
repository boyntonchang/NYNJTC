angular.module('tcApp').controller('hike-titleCtrl', function($scope, hikeData){
	
		hikeData.getTrails().then(function(data){

	
			$scope.trails = data;
			
		
			
		});
	
});