angular.module('tcApp', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	
		.state('home', {
			url:'/home',
			
			templateUrl:'app/home/main.html'
		})
		.state('app', {
			url:'/app',
			abstract:true,
			templateUrl:'app/layout/menu-layout.html'
		})
		.state('app.hike', {
			url:'/hike',
			views:{
			'mainContent':{
				templateUrl:'app/hike/hike.html'
				}
			
			}
		})
		.state('app.region', {
			url:'/region',
			views:{
			'mainContent':{
				templateUrl:'app/hike/hike-region.html'
				}
			
			}
		})
		.state('app.region-trail', {
			url:'/region-trail',
			views:{
			'mainContent':{
				templateUrl:'app/hike/region-trail.html'
				}
			
			}
		})
		.state('app.trail-Detail', {
			url:'/trail-Detail/:id',
			views:{
			'mainContent':{
				templateUrl:'app/hike/trail-Detail.html'
				}
			
			}
		})
		.state('app.title', {
			url:'/title',
			views:{
			'mainContent':{
				templateUrl:'app/hike/hike-title.html'
				}
			
			}
		})
		.state('app.difficulty', {
			url:'/difficulty',
			views:{
			'mainContent':{
				templateUrl:'app/hike/hike-difficulty.html'
				}
			
			}
		})
		.state('app.park', {
			url:'/park',
			views:{
			'mainContent':{
				templateUrl:'app/hike/hike-park.html'
				}
			
			}
		})
	
		.state('app.trails', {
			url:'/trails',
			views:{
			'mainContent':{
				templateUrl:'app/trails/trails.html'
				}
			
			}
		}).state('app.nynjtc', {
			url:'/nynjtc',
			views:{
			'mainContent':{
				templateUrl:'app/nynjtc/nynjtc.html'
				}
			
			}
		});
		
		$urlRouterProvider.otherwise('/app/region');
});