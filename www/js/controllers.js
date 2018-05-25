angular.module('starter.controllers', [])

.controller('DashCtrl',['$scope','monService',function($scope,monService){
 
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
.controller('AccountCtrl', function($scope,) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = function($scope){
    
    
  } 
     
})

.controller('questionsControll',['$scope','monService','$http',function($scope,monService,$http){
  $scope.showResponsesTable = false;
  monService.getQuestions($scope);
  $scope.responses = '';
  $scope.getQuestion = function(id, currentQ){
    $scope.currentQuestion = currentQ;
    $scope.showResponsesTable = true;     
var id_temp=id;
     $http({
        method:'GET',
        url:'http://serve/api/question/'+id_temp
    }).then(function successCallback(response) {
        this.question = response.data;
        console.log(this.question)
        $scope.responses = response.data;
        //recuperer le id de la question pour utiliser au post de la reponse
       $scope.id_response = id_temp;    
      
});
} 

}])
