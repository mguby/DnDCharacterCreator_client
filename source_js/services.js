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

mp4Services.factory('dnd_database', function($http, $window) {
    return {
        //params is the search parameters
        get : function(params) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+params);   
        },
        post : function(newCharacter) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.post(baseUrl+'/characters', newCharacter);   
        }
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