angular.module('tcApp').controller('locationMapCtrl', function($scope, $stateParams, hikeDataMarker){

	
	
	$scope.map = {
	
		center : {
				latitude:0 ,
				longitude:0 
		},
		
		zoom:12
	};
	
	$scope.marker = {};
	
	hikeDataMarker.getMarker().then(function(data){
	
		$scope.trails = data;
		
		$scope.locationId = Number($stateParams.id);
		
	
	
		$scope.selectedTrail = _.find($scope.trails, {"id":$scope.locationId});
		
		var locationValue = $scope.selectedTrail.GPS.split(",");
	
		
		console.log(locationValue[1]);
		
		$scope.marker = {
			latitude: locationValue[0],
			longitude:locationValue[1],
			title:$scope.selectedTrail.Title,
			showWindow:true
		};
		
		$scope.map.center.latitude = locationValue[0];
		$scope.map.center.longitude = locationValue[1];
	
	});
}); 