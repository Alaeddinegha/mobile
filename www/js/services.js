angular.module('starter.services', [])

  .service('monService',['$http',function($http){
    this.auto=function($scope,user,pw){
      
      $http({
          method:'POST',
          url:'http://serve/api/login',
          data: {login:user,pw:pw},
          
      }).then(function successCallback(response) {
          console.log('success')
          console.log(response);
         
             $scope.use= response.data;
          $scope.log=$scope.use.login;
            name=$scope.use[0].prenom;
            $scope.ut=$scope.use[0].id_uti;
             // Check browser support
 
      
              console.log('utilisateur')
              console.log(name);
              console.log('data')
              console.log($scope.use)
          
             console.log('storage')
              sessionStorage.user = $scope.ut;
              console.log(sessionStorage.user);
  if($scope.use=="faux"){  
      alert("login ou mot de passe est faux")
  location.reload();       
    
                       }
                      
 else{
  alert("Bienvenu"+" "+name); 
  location.href='/#/tab/questions';       
}
});
}
this.getQuestions=function($scope){
  $http({
      method:'GET',
      url:'http://serve/api/questions'
  }).then(function successCallback(response, ) {
      $scope.questions = [];
      $scope.questions = response.data;  
     // console.log('util');
     // console.log($scope.questions[id].id_uti); 
    
     $scope.ques = $scope.questions;
    
   
     
    console.log("données de questions")
    console.log($scope.ques);
});


};

this.outS=function(){
  
    location.href="/#/tab/dash";
    location.reload();
}
  
}]);