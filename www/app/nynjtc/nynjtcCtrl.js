angular.module('tcApp').controller('nynjtcCtrl', function($scope){

	$scope.mission = 'The New York-New Jersey Trail Conference is a federation of member clubs and individuals dedicated to providing recreational hiking opportunities in the region and representing the interests and concerns of the hiking community. The Conference is a volunteer-directed public service organization committed to:';
	
	$scope.About = 'Since 1920, the New York-New Jersey Trail Conference has partnered with parks to create, protect, and promote a network of over 2,000 miles of public trails in the New York-New Jersey metropolitan region. The Trail Conference organizes volunteer service projects that keep these trails open, safe, and enjoyable for the public. We publish maps and books that guide public use of these trails.  The Trail Conference is a nonprofit organization with a membership of 10,000 individuals and 100 clubs that have a combined membership of over 100,000 active, outdoor-loving people.';	
	
	$scope.type = 'About';
	$scope.setType = function(event){
		$scope.type = angular.element(event.target).text();
		console.log($scope.type);
  };
	
});
 