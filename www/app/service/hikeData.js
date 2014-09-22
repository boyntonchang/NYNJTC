angular.module('tcApp').factory('hikeData', function($http, $q){
	return {
		getTrails:function(){
			var deferred = $q.defer();
			$http.get('/data/nynjtcData.json').success(function(data){
				deferred.resolve(data);
			})
			.error(function(){
				console.log('Error while making HTTP call.');
				deferred.reject();
			});
			
			return deferred.promise;
		}
	};
});