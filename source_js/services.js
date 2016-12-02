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

mp4Services.factory('login', function($http, $window) {
    return {
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/login');
        },
        delete : function(_id) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.delete(baseUrl+'/login/'+_id);
        },
        post : function(taskData) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.post(baseUrl+'/login', taskData);
        },
        put : function(taskData, putTo) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.put(baseUrl+'/login/'+putTo, taskData);
        }
    }
});