angular.module('tcApp').factory('hikeData', function($http, $q, $ionicLoading){
	return {
		getTrails:function(){
			var deferred = $q.defer();
			$ionicLoading.show({template:'<i class="icon ion-loading-c"></i>'});
			$http.get('/data/nynjtcData.json').success(function(data){
		
					$ionicLoading.hide();
					deferred.resolve(data);
			
				
			})
			.error(function(){
				console.log('Error while making HTTP call.');
				$ionicLoading.hide();
				deferred.reject();
			});
			
			return deferred.promise;
		}
	};
});