var mp4Controllers = angular.module('mp4Controllers', []);

var stringToJson = function(str) {
  return eval("(" + str + ")");
};

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
      //console.log(data.data);         
      $scope.characters = data.data
    })
    .error(function (data) {
      console.log("failure");
    });

    //select character
    $scope.selectCharacter = function(id) {  
      var searchParam = '/characters/' + id;

      dnd_database.get(searchParam).success(function (data) {;  
        //console.log(data.data);         
        $scope.selectedCharacter = data.data
      })
      .error(function (data) {
        console.log("failure");
      });
    }

}]);

mp4Controllers.controller('raceController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;

  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($window.sessionStorage.character !== undefined) {
    console.log($window.sessionStorage.character);
    character = JSON.parse($window.sessionStorage.character);
    $scope.idx = 0;
  }


    $scope.idx = 0;
    var searchParam = '/constants/races';
    
    dnd_database.get(searchParam).success(function (data) {;           
      $scope.races = data.data
      $scope.selectRace(0);
    })
    .error(function (data) {
      console.log("failure");
    });
    
    //select class
    $scope.selectRace = function(index) {  
      var race = $scope.races[index];
      var race = JSON.stringify(race);
      $window.sessionStorage.race = race;
      $scope.idx = index;
    };

    $scope.saveData = function() {
      character.race = JSON.parse($window.sessionStorage.race);
      dnd_database.put(character._id, character).success(function(data) {
        $window.sessionStorage.character = undefined;
      })
    }

}]);

mp4Controllers.controller('classController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;

  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($scope.disableButtons()) {
    character = JSON.parse($window.sessionStorage.character);
    $scope.idx = 0;
  }

    $scope.idx = 0;
    var searchParam = '/constants/classes';
    
    dnd_database.get(searchParam).success(function (data) {;           
      $scope.classes = data.data
      $scope.selectClass(0);
    })
    .error(function (data) {
      console.log("failure");
    });
    
    //select class
    $scope.selectClass = function(index) {  
      var selectedClass = $scope.classes[index];
      var selectedClass = JSON.stringify(selectedClass);
      $window.sessionStorage.class = selectedClass;
      $scope.idx = index;
    }

    $scope.saveData = function() {
      character.class=  JSON.parse($window.sessionStorage.class);
      dnd_database.put(character._id, character).success(function(data) {
        $window.sessionStorage.character = undefined;
      })
    }
}]);

mp4Controllers.controller('abilitiesController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;
  $scope.indexes = {str: 0, dex: 1, con: 2, int: 3, wis: 4, cha: 5};

  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($scope.disableButtons()) {
    character = JSON.parse($window.sessionStorage.character);
    $scope.abilities = [
      {name: "str", val: character.abilities.str},
      {name: "dex", val: character.abilities.dex},
      {name: "con", val: character.abilities.con},
      {name: "int", val: character.abilities.int},
      {name: "wis", val: character.abilities.wis},
      {name: "cha", val: character.abilities.cha}
    ];
  } else {
    $scope.abilities = [
      {name: "str", val: 0},
      {name: "dex", val: 0},
      {name: "con", val: 0},
      {name: "int", val: 0},
      {name: "wis", val: 0},
      {name: "cha", val: 0}
    ];
  }


  $scope.randomize = function (stat) {
    stat.val = (Math.floor((Math.random() * 33) + 3));
  };

  $scope.randomizeStats = function () {
    $scope.abilities.forEach(function (stat) {
      $scope.randomize(stat);
    });
    $scope.saveJSON();
  };

  $scope.incrementStat = function (stat, val) {
    $scope.abilities[$scope.indexes[stat]].val += val;
    $scope.saveJSON();
  };

  $scope.saveJSON = function () {
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

  $scope.saveData = function () {
    character.abilities = JSON.parse($window.sessionStorage.abilities);
    dnd_database.put(character._id, character).success(function(data) {
      $window.sessionStorage.character = undefined;
    })
  };

  $scope.saveJSON();
}]);

mp4Controllers.controller('inventoryController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;
  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($scope.disableButtons()) {
    character = JSON.parse($window.sessionStorage.character);
    $scope.items = [{ name: "" }];
    if(character.inventory.length !== 0) {
      character.inventory.forEach(function(item) {
        $scope.items.push({ name: item });
      })
    }
  } else {
    $scope.items = [{ name: "" }];
  }

  $scope.saveItems = function() {
    var json = [];
    $scope.items.forEach(function(item) {
      if(item.name.trim().length !== 0) {
        json.push(item.name);
      }
    });
    $window.sessionStorage.inventory = JSON.stringify(json);
  };

  $scope.addItem = function() {
    $scope.items.push({ name: "" });
    $scope.saveItems();
  };

  $scope.deleteItem = function(item) {
    $scope.items.splice(item, 1);
    $scope.saveItems();
  };

  $scope.saveData = function () {
    character.inventory = JSON.parse($window.sessionStorage.inventory);
    dnd_database.put(character._id, character).success(function(data) {
      $window.sessionStorage.character = undefined;
    })
  };
}]);

mp4Controllers.controller('featsController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;

  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($scope.disableButtons()) {
    character = JSON.parse($window.sessionStorage.character);
    $scope.featArray = character.feats;
  }
  else {
    $scope.featArray = [];
  }

    $scope.idx = 0;
    var searchParam = '/constants/feats';
    
    dnd_database.get(searchParam).success(function (data) {;           
      $scope.feats = data.data
    })
    .error(function (data) {
      console.log("failure");
    });
    

    $scope.selectFeat = function(index) { 
      $scope.featArray.push($scope.feats[index]);
      var featArray = JSON.stringify($scope.featArray);
      $window.sessionStorage.feats = featArray;
      $scope.idx = index;
    }


    $scope.removeFeat = function(index) { 
      $scope.featArray.splice(index, 1);
      var featArray = JSON.stringify($scope.featArray);
      $window.sessionStorage.feats = featArray;
    };

  $scope.saveData = function() {
    character.feats = JSON.parse($window.sessionStorage.feats);
    dnd_database.put(character._id, character).success(function(data) {
      $window.sessionStorage.character = undefined;
    })
  }
}]);

mp4Controllers.controller('finalController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;
  var character = null;
  $scope.disableButtons = function() {
    return $window.sessionStorage.character !== undefined;
  };
  if($scope.disableButtons()) {
    character = JSON.parse($window.sessionStorage.character);
      $scope.name =  character.name;
      $scope.pictureURL = character.pictureURL;
  }
  var searchParam = '/characters';

    $scope.sendData = function() { 
          var newCharacter = {
            name: $scope.name,
            user: $scope.userName,
            level: 1,
            pictureURL: $scope.pictureURL,
            class: JSON.parse($window.sessionStorage.class),
            race: JSON.parse($window.sessionStorage.race),
            abilities: JSON.parse($window.sessionStorage.abilities),
            feats: JSON.parse($window.sessionStorage.feats),
            inventory: JSON.parse($window.sessionStorage.inventory),
        }; 
        console.log(newCharacter)
        dnd_database.post(newCharacter).success(function (data) {;           
          console.log(data.message);
        })
        .error(function (err, data) {
          console.log(err);
        });
      
    };

    $scope.saveData = function() {
      character.name = $scope.name;
      character.pictureURL = $scope.pictureURL;
      dnd_database.put(character._id, character).success(function(data) {
          $window.sessionStorage.character = undefined;
      });
    }

}]);

mp4Controllers.controller('characterController', ['$scope', '$http', 'dnd_database', '$window' , '$routeParams', function($scope, $http, dnd_database, $window, $routeParams) {
  $scope.userName = $routeParams.userName;
  console.log($routeParams.characterID);

    var searchParam = '/characters/' + $routeParams.characterID;

    dnd_database.get(searchParam).success(function (data) {
      console.log(data.data);         
      $scope.character = data.data;
      $window.sessionStorage.character = JSON.stringify($scope.character);
    })
    .error(function (data) {
      console.log("failure");
    });

}]);
