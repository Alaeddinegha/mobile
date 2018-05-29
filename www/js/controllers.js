angular.module('starter.controllers', [])
//clavier

.controller('DashCtrl',['$scope','monService',function($scope,monService){
   
 
    var u=sessionStorage.user;
    if (typeof(Storage) !== "undefined") {
      // Store
      //$scope.w="Bienvenu";
   
             
      localStorage.setItem("lastname",name);
      // Retrieve
      document.getElementById("result").innerHTML =localStorage.getItem( "lastname");
  } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
  $scope.log=function(){
    
    
    console.log('utilisateur')
    console.log($scope.user)
    console.log('mot de passe')
    console.log($scope.pw)
    
   monService.auto($scope,$scope.user,$scope.pw);
  
 
}
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
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  monService.conut($scope);

}])
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = function($scope){
    
    
  } 
     
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

 //revenir a la page des questions
$scope.return=function(){
  location.reload();
}

$scope.ajoutrep=function(){
  location.href="/#/tab/repondre"
}
$scope.ajoutQ=function(){
  location.href="/#/tab/ajoutq"
}
  
  
$scope.ajoutques = function () {
  var u=sessionStorage.user;
  console.log('mes variables')
  console.log($scope.text_ques)
  console.log(u)
 
  console.log($scope.author)
  console.log($scope.photo)
  
monService.sendQuestion($scope,$scope.text_ques, $scope.id_uti,$scope.author, $scope.photo );
alert("Question enregister");
location.href='/#/tab/questions';  
}

}])
