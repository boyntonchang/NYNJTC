angular.module('tcApp').controller('park-trailCtrl', function($scope, hikeData, $rootScope){
	
		hikeData.getTrails().then(function(data){

	
			$scope.trails = data;
			$scope.selectedTrails = [];
			var parkObj = $rootScope.parkObj;
			var curTrails = $scope.trails;
			
			for(var i=0;i < curTrails.length; i++){
			
				var trail = $scope.trails[i];
				if(trail.Park.indexOf(parkObj) !== -1){
					$scope.selectedTrails.push(trail);
				}
				
			};
			console.log($scope.selectedTrails);
		});
	}
);