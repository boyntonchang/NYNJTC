angular.module('tcApp').factory('trailPost', function($resource){
	return $resource('/api/data/visitedTrail', {id:'@id'},
			{update:{
				method: 'PUT'
				}
			
			}
	);
});