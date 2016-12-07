var mp4Controllers = angular.module('mp4Controllers', []);

mp4Controllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function(){
    $window.sessionStorage.baseurl = $scope.url;
    $scope.displayText = "URL set";

  };

}]);

mp4Controllers.controller('loginController', ['$scope', '$http', 'login', '$window' , function($scope, $http,  login, $window) {
  $scope.url = $window.sessionStorage.baseurl;
    $scope.SendData = function () {
        console.log("called");
        //create user data
        var userData = {
            username: $scope.username,
            password: $scope.password,
        };
      
      console.log(userData);
      //post user
        login.post(userData).success(function (data) {;           
          console.log(data);
        })
        .error(function (data) {
          console.log("failure");
        });
    };

}]);

mp4Controllers.controller('registerController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;
}]);

mp4Controllers.controller('dashboardController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http,  dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;

    $scope.idx = -1;  //dont show character for now
    var searchParam = '/characters';

    dnd_database.get(searchParam).success(function (data) {;  
      console.log(data.data);         
      $scope.characters = data.data
    })
    .error(function (data) {
      console.log("failure");
    });

    //select character
    $scope.selectCharacter = function(index) {  
      $scope.idx = index;
    }

}]);

mp4Controllers.controller('raceController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;


    $scope.idx = 0;
    var searchParam = '/constants/races';
    
    dnd_database.get(searchParam).success(function (data) {;           
      $scope.races = data.data
    })
    .error(function (data) {
      console.log("failure");
    });
    
    //select class
    $scope.selectRace = function(index) {  
      $scope.idx = index;
    }
}]);

mp4Controllers.controller('classController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;


    $scope.idx = 0;
    var searchParam = '/constants/classes';
    
    dnd_database.get(searchParam).success(function (data) {;           
      $scope.classes = data.data
    })
    .error(function (data) {
      console.log("failure");
    });
    
    //select class
    $scope.selectClass = function(index) {  
      $scope.idx = index;
    }
}]);
