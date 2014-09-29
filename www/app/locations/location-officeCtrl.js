angular.module('tcApp').controller('locationOfficeCtrl', function($scope){

	
	
	$scope.map = {
	
		center : {
				latitude:41.100424 ,
				longitude:-74.158425
		},
		
		zoom:12
	};
	
	$scope.marker = {
			latitude:41.100424 ,
			longitude:-74.158425,
			title:'NYNJTC Office',
			showWindow:true
	};

}); 