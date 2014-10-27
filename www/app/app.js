angular.module('tcApp', ['ionic', 'google-maps','ngResource', 'firebase'])
.run(function($ionicPlatform, $rootScope, $firebaseAuth, $firebase, $window, $ionicLoading, $state) {
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
	
	
        $rootScope.userEmail = null;
        $rootScope.baseUrl = 'https://radiant-heat-2978.firebaseio.com/';
        var authRef = new Firebase($rootScope.baseUrl);
        $rootScope.auth = $firebaseAuth(authRef);

        $rootScope.show = function(text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading..',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        };

        $rootScope.hide = function() {
            $ionicLoading.hide();
        };

        $rootScope.notify = function(text) {
            $rootScope.show(text);
            $window.setTimeout(function() {
                $rootScope.hide();
            }, 1999);
        };

        $rootScope.logout = function() {
            $rootScope.auth.$logout();
            $rootScope.checkSession();
			$rootScope.visitedTrails = "";
			console.log('log out', $rootScope.visitedTrails);
        };

        $rootScope.checkSession = function() {
            var auth = new FirebaseSimpleLogin(authRef, function(error, user) {
                if (error) {
                    // no action yet.. redirect to default route
                    $rootScope.userEmail = null;
					console.log('default');
                  // $window.location.href = '#/login';
                } else if (user) {
                    // user authenticated with Firebase
                    $rootScope.userEmail = user.email;
                     $window.location.href = '#/home';
					 console.log(user.email);
                } else {
                    // user is logged out
                    $rootScope.userEmail = null;
                     $window.location.href = '#/app/login';
					 console.log('log out');
                }
            });
        }
	   $rootScope.$on('$stateChangeError', function(event, toState, toParams, 
                                                 fromState, fromParams, error) {
      $state.go(error);
    });
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider){

	
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
			.state('app.park-trail', {
			url:'/park-trail',
			views:{
			'mainContent':{
				templateUrl:'app/hike/park-trail.html'
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
		})
		.state('app.nynjtc', {
			url:'/nynjtc',
			views:{
			'mainContent':{
				templateUrl:'app/nynjtc/nynjtc.html'
				}
			
			}
		})
		.state('app.login', {
			url:'/login',
			views:{
			'mainContent':{
				templateUrl:'app/account/login.html'
				}
			
			}
		})
		.state('app.signup', {
			url:'/signup',
			views:{
			'mainContent':{
				templateUrl:'app/account/signup.html'
				}
			
			}
		})
		.state('app.location-map', {
			url:'/location-map/:id',
			views:{
			'mainContent':{
				templateUrl:'app/locations/location-map.html'
				}
			
			}
		})
		.state('app.location-office', {
			url:'/location-office',
			views:{
			'mainContent':{
				templateUrl:'app/locations/location-office.html'
				}
			
			}
		});

		
		$urlRouterProvider.otherwise('/home');
});