'use strict';
var app=angular.module("myApp",[]);
app.controller('questionsController',['$scope','monService',function($scope,monService){

    //console.log('stor')
   // console.log(sessionStorage.user);

   var u=sessionStorage.user;
   console.log('mon id')
   console.log(u);
    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        $scope.w="Bienvenu";
     
               
        localStorage.setItem("lastname",$scope.w +"  "+name);
        // Retrieve
        document.getElementById("result").innerHTML =localStorage.getItem( "lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

  
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
    $scope.delQuestion = function(index, id, currentQ){
        //monService.getQuestions($scope);
        
        if (confirm("vous voulez supprimer?")){
           
            
        monService.delQuestion($scope,index, id)
        location.reload();
     }
        
 
    }
    
 //Fonction ajouter une question
    $scope.ajoutques = function () {
        console.log('mes variables')
        console.log($scope.text_ques)
        console.log(u)
        
     monService.sendQuestion($scope,$scope.text_ques, $scope.id_uti );
     alert("Question enregister");
     location.href='questions.html';
        
    }
    //Fonction ajouter une reponse
    $scope.ajoutRep = function () {
        console.log($scope.text_resp)
        console.log($scope.id_uti)
        console.log($scope.id_response)
        
        monService.sendResponse($scope,$scope.text_resp, $scope.id_uti , $scope.id_response);

alert("reponse enregister")
    }

    
  //recuperer mes données dans un init 

    $scope.init = function() {
        console.log('init')
        $scope.showResponsesTable = false;
        
        monService.getQuestions($scope);
        monService.getQuestion($scope, $scope.id_response);
        monService.auto($scope,$scope.user);
    }
$scope.log=function(){
    $scope.con=true;
    
    console.log('utilisateur')
    console.log($scope.user)
    console.log('mot de passe')
    console.log($scope.pw)
    
   monService.auto($scope,$scope.user,$scope.pw);
  
 
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

