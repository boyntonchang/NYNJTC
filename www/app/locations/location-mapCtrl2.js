angular.module('tcApp').controller('locationMapCtrl', function($scope, $rootScope,$stateParams, hikeData){

	
	
	$scope.map = {
	
		center : {
				latitude:0 ,
				longitude:0 
		},
		
		zoom:12
	};
	
	$rootScope.marker = {};

	

	
	hikeData.getTrails().then(function(data){
	
		$scope.trails = data;
		
		$scope.locationId = Number($stateParams.id);
		
	
	
		$scope.selectedTrail = _.find($scope.trails, {"id":$scope.locationId});
		
		var locationValue = $scope.selectedTrail.GPS.split(",");
	
		//$rootScope.locationVal = locationValue;
		console.log(locationValue[0]);
		console.log(locationValue[1]);
		
		
		
		 

		$scope.map.center.latitude = locationValue[0];
		$scope.map.center.longitude = locationValue[1];

		$rootScope.marker = {
		
			latitude: locationValue[0],
			longitude:locationValue[1],
		
			//title:"test",
			showWindow:true
		};
		
	});
	
	
}); 