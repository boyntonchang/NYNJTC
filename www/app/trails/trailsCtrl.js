angular.module('tcApp').controller('trailsCtrl', function($scope, $rootScope,$firebase,$ionicModal){
	
	$rootScope.show("Please wait... Processing");
	
	$rootScope.visitedTrails =[];
	
	var trailListRef = new Firebase($rootScope.baseUrl + escapeEmailAddress($rootScope.userEmail));
	
	trailListRef.on('value', function(snapshot){
		var data = snapshot.val();
		
		
		
		$rootScope.visitedTrails = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                
                    data[key].key = key;
					
                    $rootScope.visitedTrails.push(data[key]);
					//$rootScope.walked = true;
                
            }
        }
	
		//console.log(data);
		$rootScope.hide();
	});
	

	console.log('user email',$rootScope.userEmail);
	console.log('visited trail',$rootScope.visitedTrail);
	
	
			function escapeEmailAddress(email) {
				if (!email) return false
				// Replace '.' (not allowed in a Firebase key) with ','
				email = email.toLowerCase();
				email = email.replace(/\./g, ',');
				return email.trim();
			}
	
});

