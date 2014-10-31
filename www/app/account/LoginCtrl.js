angular.module('tcApp').controller('LoginCtrl', [
        '$scope', '$rootScope', '$firebaseAuth', '$window', '$ionicLoading',
        function($scope, $rootScope, $firebaseAuth, $window, $ionicLoading) {
            // check session
            $rootScope.checkSession();

            $scope.user = {
                email: "",
                password: ""
            };
            $scope.validateUser = function() {
                $rootScope.show('Please wait.. Authenticating');
				$ionicLoading.show({template:'Please wait.. Authenticating'});
                var email = this.user.email;
                var password = this.user.password;
                if (!email || !password) {
                    $rootScope.notify("Please enter valid credentials");
					$ionicLoading.show({template:'Please enter valid credentials'});
                    return false;
                }

                $rootScope.auth.$login('password', {
                    email: email,
                    password: password
                }).then(function(user) {
                    $rootScope.hide();
                    $rootScope.userEmail = user.email;
                    $window.location.href = ('#/app/trail');
                }, function(error) {
                    $rootScope.hide();
                    if (error.code == 'INVALID_EMAIL') {
						$ionicLoading.show({template:'Invalid Email Address'});
                        $rootScope.notify('Invalid Email Address');
						//alert('email');
                    } else if (error.code == 'INVALID_PASSWORD') {
						$ionicLoading.show({template:'Invalid Password'});
                       $rootScope.notify('Invalid Password');
						//alert('password');
                    } else if (error.code == 'INVALID_USER') {
						$ionicLoading.show({template:'Invalid User'});
						$rootScope.notify('Invalid User');
                    } else {
						$ionicLoading.show({template:'Oops something went wrong. Please try again later'});
                       $rootScope.notify('Oops something went wrong. Please try again later');
                    }
                });
            }
        }
    ]);