angular.module('tcApp').controller('region-trailCtrl', function($scope, hikeData, $rootScope){
	
		hikeData.getTrails().then(function(data){

	
			$scope.trails = data;
			$scope.selectedTrails = [];
			var Obj = $rootScope.obj;
			var curTrails = $scope.trails;
			
			for(var i=0;i < curTrails.length; i++){
			
				var trail = $scope.trails[i];
				if(trail.Region.indexOf(Obj) !== -1){
					$scope.selectedTrails.push(trail);
				}
				
			};
			console.log($scope.selectedTrails);
		});
	}
);
	
