angular.module('tcApp').controller('LoginCtrl', function($scope, auth, $state){
	auth.signin({
		popup:true,
		standalone:true,
		offline_mode:true,
		device:'Phone'
	}, function(){
		$state.go('app.trails');
	}, function(error){
		console.log("There was an error loggin in", error);
	});
});