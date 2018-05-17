<<<<<<< HEAD
app=angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/connexion", {
        templateUrl :"/view/log.html",
        controller : "questionsController"
    })
   
     
    
    .when("/questions", {
        templateUrl : "/view/questions.html",
        controller : "questionsController"
    })
    .when("/reponses", {
        templateUrl : "/view/reponses.html",
        controller : "questionsController"
    })
    .when("/ajout-question", {
        templateUrl : "/view/ajoutq.html",
        controller : "questionsController"
    })
    .when("/about", {
        templateUrl : "/view/about.html"
    })
});
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
           
            
        monService.delQuestion($scope,index,id)
        location.reload();
     }
        
 
    }
    $scope.delR=function(index,id){
        if (confirm("vous voulez supprimer?")){
            monService.delReponse($scope,index,id);
        }
    }
    
 //Fonction ajouter une question
    $scope.ajoutques = function () {
        console.log('mes variables')
        console.log($scope.text_ques)
        console.log(u)
        
     monService.sendQuestion($scope,$scope.text_ques, $scope.id_uti );
     alert("Question enregister");
   
        
    }
    //Fonction ajouter une reponse
    $scope.ajoutRep = function (text_resp,id_response) {
        
        
        monService.sendResponse($scope,text_resp,id_response);
     
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
$scope.logi=function(){
   
    
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
        url:'http://serve/api/questions'
    }).then(function successCallback(response) {
        $scope.questions = [];
        $scope.questions = response.data;
    
})
$http({
    method:'GET',
    url:'http://serve/api/question/'+id_temp
}).then(function successCallback(response) {
    this.question = response.data;
    $scope.responses = response.data;
  });
});
app.controller('outController', function ($scope, $http) {
$scope.logOut=function(){
    sessionStorage.clear();
    location.href="#!/";
}
});
=======
/*'use strict';
 var app=angular.module("myApp",['ngRoute'])
          app.config(function($routeProvider){
              $routeProvider.when("#/:id",{
                templateUrl:'view/question.html',
                controller:'questionController'
            })
          });
    */
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
