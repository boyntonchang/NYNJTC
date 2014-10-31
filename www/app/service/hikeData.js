angular.module('tcApp').factory('hikeData', function($http, $q, $ionicLoading, DSCacheFactory){
	return {
	
		
		getTrails:function(){
			var deferred = $q.defer(),
					cacheKey = "trail",
					trailCache =DSCacheFactory.get("trailCache"),
					trailData = trailCache.get(cacheKey);		
			if(trailData){
				console.log("Found data inside cache", trailData);
				deferred.resolve(trailData);
			} else{
			
				$ionicLoading.show({template:'<i class="icon ion-loading-c"></i>'});
				$http.get('/data/nynjtcData.json').success(function(data){
				
						console.log("Received data via HTTP");
						$ionicLoading.hide();
						trailCache.put(cacheKey, data);
						deferred.resolve(data);
				
					
				})
				.error(function(){
					console.log('Error while making HTTP call.');
					$ionicLoading.hide();
					deferred.reject();
				});
				
			}
			return deferred.promise;
		}
	};
});