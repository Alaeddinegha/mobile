'use strict';
var app=angular.module("myApp",[]);
app.controller('questionsController',['$scope','monService',function($scope,monService){
    //initialiser le text d'une reponse et le id de l'utilisateur vide
    $scope.text_resp = '';
        $scope.id_uti ='';
        //initialiser la variable showResponsesTable avec la valeur false
        $scope.showResponsesTable = false;
    monService.getQuestions($scope);
    $scope.responses = '';
    //les reponses d'une question 
    $scope.getQuestion = function(id, currentQ){
        //currentQuestion est la question courante
        $scope.currentQuestion = currentQ;
        $scope.showResponsesTable = true;
        monService.getQuestion($scope, id);  
    } 
    //supp
    $scope.delQuestion = function(id, currentQ){
        monService.delQuestion($scope, id);}
   /* this.delReponse=function(id){
           monService.delReponse(id);
       }*/
    
 //Fonction ajouter une question
    $scope.ajoutques = function () {
        console.log('mes variables')
        console.log($scope.text_ques)
        console.log($scope.id_uti)
     monService.sendQuestion($scope,$scope.text_ques, $scope.id_uti )
        
    }
    //Fonction ajouter une reponse
    $scope.ajoutRep = function () {
        console.log($scope.text_resp)
        console.log($scope.id_uti)
        console.log($scope.id_response)
        monService.sendResponse($scope,$scope.text_resp, $scope.id_uti , $scope.id_response)


    }

    
  //recuperer mes données dans un init 

    $scope.init = function() {
        console.log('init')
        $scope.showResponsesTable = false;
        
        monService.getQuestions($scope);
        monService.getQuestion($scope, $scope.id_response);
    }


}])
app.controller('searchController', function ($scope, $http) {

    $http({
        method:'GET',
        url:'http://forum/api/questions'
    }).then(function successCallback(response) {
        $scope.questions = [];
        $scope.questions = response.data;
    
})
$http({
    method:'GET',
    url:'http://forum/api/question/'+id_temp
}).then(function successCallback(response) {
    this.question = response.data;
    $scope.responses = response.data;
  });
});