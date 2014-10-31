angular.module('tcApp').factory('hikeDataMarker', function($http, $q, $ionicLoading){
	return {
		getMarker:function(){
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