'use strict';
var app=angular.module("myApp",[]);
app.controller('questionsController',['$scope','monService',function($scope,monService){
   
    monService.getQuestions($scope);

    //un controlleur pour recuperer les resultats de mon service


}])

app.controller('questionController',['$scope','$routeParams','monService',function($scope,$routeParams,monService){
    monService.getQuestion($scope,$routeParams.id);
    
}])
