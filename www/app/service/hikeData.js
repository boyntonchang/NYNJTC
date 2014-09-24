angular.module('tcApp').factory('hikeData', function($http, $q, $ionicLoading, $timeout){
	return {
		getTrails:function(){
			var deferred = $q.defer();
			$ionicLoading.show({template:'<i class="icon ion-loading-c"></i>'});
			$http.get('/data/nynjtcData.json').success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 500);
				
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