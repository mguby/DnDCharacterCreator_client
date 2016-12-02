var mp4Services = angular.module('mp4Services', []);

mp4Services.factory('CommonData', function(){
    var data = "";
    return{
        getData : function(){
            return data;
        },
        setData : function(newData){
            data = newData;
        }
    }
});

mp4Services.factory('dashboard', function($http, $window) {
    return {
        //params is the search parameters
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get('http://localhost:8080/api/dashboard');   
        },
    }
});
