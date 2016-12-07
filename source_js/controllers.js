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

mp4Controllers.controller('abilitiesController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;
  $scope.indexes = { str: 0, dex: 1, con: 2, int: 3, wis: 4, cha: 5 };

  $scope.abilities = [
    { name: "str", val: 0 },
    { name: "dex", val: 0 },
    { name: "con", val: 0 },
    { name: "int", val: 0 },
    { name: "wis", val: 0 },
    { name: "cha", val: 0 }
  ];

  $scope.randomize = function(stat) {
    stat.val = (Math.floor((Math.random()*33)+3));
  };

  $scope.randomizeStats = function() {
    $scope.abilities.forEach(function(stat) {
      $scope.randomize(stat);
    });
    $scope.saveJSON();
  };

  $scope.incrementStat = function (stat, val) {
    $scope.abilities[$scope.indexes[stat]].val += val;
    $scope.saveJSON();
  };

  $scope.saveJSON = function() {
    var abilities = {
      str: $scope.abilities[0].val,
      dex: $scope.abilities[1].val,
      con: $scope.abilities[2].val,
      int: $scope.abilities[3].val,
      wis: $scope.abilities[4].val,
      cha: $scope.abilities[5].val
    };
    $window.sessionStorage.abilities = JSON.stringify(abilities);
    console.log($window.sessionStorage.abilities);
  };

}]);
