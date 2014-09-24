angular.module('tcApp').controller('hike-DiffCtrl', function($scope, hikeData){
	
		hikeData.getTrails().then(function(data){

	
			$scope.trails = data;
			//$scope.diffString = 'Drag circle for search by difficulty';
			
			//$scope.data.volume = '';
			$scope.dataVol = {'volume' : 0};
			
			//$scope.selectedTrails = $scope.trails;
			
			console.log($scope.selectedTrails);
			$scope.$watch('dataVol.volume', function(){
				
				
				$scope.selectedTrails = [];
				switch($scope.dataVol.volume) {
				
					case '1':
						$scope.diffString ='Easy';
						break;
					case '2':
						$scope.diffString ='Easy to Moderate';
						break;
					case '3':
						$scope.diffString ='Moderate';
						break;
					case '4':
						$scope.diffString ='Moderate to Strenuous';
						break;
					case '5':
						$scope.diffString ='Strenuous';
						break;
					case '6':
						$scope.diffString ='Very Strenuous';
						break;
					default :
						$scope.diffString ='Drag circle for search by difficulty';
						
						break;
					
					
				}
				console.log('diff', $scope.diffString);
				var curTrails = $scope.trails;
				var diffString = $scope.diffString;
				
			
				
				for(var i=0;i < curTrails.length; i++){
					
					var trail = $scope.trails[i];
					

					if(trail.Difficulty.indexOf(diffString) !== -1 && trail.Difficulty.length === diffString.length){
						
						$scope.selectedTrails.push(trail);
						
						
					}
					
				};
				
				console.log($scope.selectedTrails);
				
			});
			

				
			
		});
	
});