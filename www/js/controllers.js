angular.module('starter.controllers', [])
//clavier

.controller('DashCtrl',['$scope','monService',function($scope,monService){
    var u=sessionStorage.user;
    if (typeof(Storage) !== "undefined") {
      // Store
      //$scope.w="Bienvenue";
      localStorage.setItem("lastname",name);
      // Retrieve
      document.getElementById("result").innerHTML =localStorage.getItem( "lastname");
  } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  // se connecter
  $scope.log=function(){
    console.log('utilisateur')
    console.log($scope.user)
    console.log('mot de passe')
    console.log($scope.pw)
    
   monService.auto($scope,$scope.user,$scope.pw);
}
// se deconnecter
  $scope.logout=function($scope){
    monService.outS()
  }
}])


.controller('ChatsCtrl', function($scope,) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('AccountCtrl', ['$scope','monService','$http',function($scope,monService,$http){

  monService.conut($scope);

}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = function($scope){  }   
})


.controller('questionsControll',['$scope','monService','$http',function($scope,monService,$http){
//affiche les questions
  $scope.showResponsesTable = false;
  monService.getQuestions($scope);
  $scope.responses = '';

  //affiche les reponses d'une question
  $scope.getQuestion = function(id, currentQ){

    //currentQuestion est la question courante
    $scope.currentQuestion = currentQ;
    $scope.showResponsesTable = true;
    monService.getQuestion($scope, id);  
  
} 
//ajouter une reponse
$scope.ajoutRe = function(){
  var u=sessionStorage.user;
  console.log($scope.text)
  console.log($scope.id_response)
  console.log(u)
monService.sendRep($scope,$scope.text,$scope.id_response,u);
//location.reload();
}

 //revenir a la page des questions
$scope.return=function(){
  location.reload();
}
/*
$scope.ajout=function(){
 location.href="/#/tab/repondre"
}*/

$scope.ajoutQ=function(){
  location.href="/#/tab/ajoutq"
}

  
$scope.ajoutques = function () {
  var u=sessionStorage.user;
  console.log('mes variables')
  console.log($scope.text)
  console.log(u)
 
  //console.log($scope.prenom)
 // console.log($scope.photo)
monService.sendQuestion($scope,$scope.text, $scope.id_uti );
alert("Question enregister");
location.href='/#/tab/questions'; 
location.reload(); 
}
//supprimer une question
$scope.delQuestion = function(index, id, currentQ){
  if (confirm("vous voulez supprimer?")){
  monService.delQuestion($scope,index,id)
  location.reload();
}


}
$scope.delReponse=function(index,id){
  if (confirm("vous voulez supprimer?")){
    monService.delR($scope,index,id)
    location.reload();
  }
}

$scope.ajout_utilisateur = function() {
  console.log('mes entrées')
  console.log($scope.nom)
  console.log($scope.prenom)
  console.log($scope.email)
  console.log($scope.adresse)
  console.log($scope.photo)
  console.log($scope.age)
  console.log($scope.login)
  console.log($scope.pw)
 monService.ajoutU($scope,$scope.nom,$scope.prenom,$scope.email,$scope.adresse,$scope.photo,$scope.age,$scope.login,$scope.pw);
alert("Vous etes maintenant mombre de NTW-Mobile")
location.href="/#/tab/dash";
} 
}])
.controller('searchController', function ($scope, $http) {

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