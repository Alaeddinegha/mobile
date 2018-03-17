var app=angular.module('myApp')
app.service('monService',['$http',function($http){
    //recuperer les données du serveur en utilisant la method GET en http
    this.getQuestions=function($scope){
        $http({
            method:'GET',
            url:'http://forum/api/questions'
        }).then(function successCallback(response) {
            $scope.questions = response.data;
        
 });

    };
    this.getQuestion=function($scope){
        
       
        $http({
            method:'GET',
            url:'http://forum/api/question/'+id
        }).then(function successCallback(response) {

            $scope.reponses = response.data;
            
    });
};

}]);
