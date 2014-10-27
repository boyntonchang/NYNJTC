angular.module('tcApp').controller('trail-DetailCtrl', function ($scope, $stateParams, hikeData,$rootScope, $http, trailPost, $firebase){
	
	
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
		
	
		
		
		$scope.walked = false;
		
		var trailListRef = new Firebase($rootScope.baseUrl + escapeEmailAddress($rootScope.userEmail));
	
		trailListRef.on('value', function(snapshot){
		
					
					var data = snapshot.val();
					
					$scope.visitedId = [];
					for (var key in data) {
						if (data.hasOwnProperty(key)) {
							
								data[key].key = key;
								
								$scope.visitedId.push(data[key].id);
						}
					}
		
					console.log($scope.visitedId);
					
					var visitedId = $scope.visitedId;
					var trailId = $scope.trailId;
					
					var idMatch = _.indexOf(visitedId, trailId);
					
					console.log(idMatch);
					
					console.log(trailId);
					
					if(idMatch >-1){
						$scope.walked = true;
					
					
					} else{
						
						
						$scope.walked = false;
					}
					
				
							
	
				
				$rootScope.hide();
		});
		
		
	
		
		
		

	
		
		
		
		$scope.toggleWalked = function (key){
		
			var trailListRef = new Firebase($rootScope.baseUrl + escapeEmailAddress($rootScope.userEmail));
		
			if(!$scope.walked){
				
				$scope.walked = !$scope.walked;
			
				$rootScope.visitedTrail = $scope.trail;
				
				console.log('visited');

				$firebase(trailListRef).$add($rootScope.visitedTrail);
				
				//console.log('key',key);
				
				$rootScope.hide();
				
			} else if($scope.walked){
				   $scope.walked = !$scope.walked;
				   console.log('not visited');
				   
				   trailListRef.on('value', function(snapshot){
						var data = snapshot.val();
						
						for (var key in data){
							if(data[key].id == $scope.trailId){
								$firebase(trailListRef).$remove(key);
							}
						}
				   })
					//$firebase(trailListRef).$remove();
					//console.log('key',key);
					//console.log($scope.trailId);		
				$rootScope.hide();
				
			}
			
			
							
							
		};
		
		function escapeEmailAddress(email) {
			if (!email) return false
			// Replace '.' (not allowed in a Firebase key) with ','
			email = email.toLowerCase();
			email = email.replace(/\./g, ',');
			return email.trim();
}
		
		//$rootScope.visitedTrails = trailPost.query();
		
		
			
		
		
		
	
	});
	

	
	
	/* $scope.checked==true;
		console.log($scope.checked);
		$rootScope.visitedTrails = [];
		if($scope.checked==true){
			console.log('checked')
			//rootScope.visitedTrails.push($scope.trail);
		} else {
			$rootScope.visitedTrails.splice(0, $rootScope.visitedTrails.length);
		} */
		
		

});