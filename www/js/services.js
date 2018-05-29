angular.module('starter.services', [])

  .service('monService',['$http',function($http){
    var u=sessionStorage.user;
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
      
    window.alert("login ou mot de passe est faux")
   
      
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
this.getQuestion=function($scope, id){
    var id_temp = id;
    console.log('Here');
    console.log(id_temp)
   
    console.log('Here');
    console.log(id_temp)
   
    $http({
        method:'GET',
        url:'http://serve/api/question/'+id_temp
    }).then(function successCallback(response) {
        this.question = response.data;
        console.log(this.question)
        $scope.responses = response.data;
        //recuperer le id de la question pour utiliser au post de la reponse
       $scope.id_response = id_temp;         
       $scope.somme = $scope.responses.length;
console.log('somme')
console.log( $scope.somme)
sessionStorage.totale = $scope.somme;

});

}
this.conut=function($scope){
    $http({
        method:'GET',
        url:'http://serve/api/nbr_u'
    }).then(function successCallback(response) {
       
      
        $scope.nombres = [];
      $scope.nombres = response.data;  
      console.log('XXX')
      console.log($scope.nombres)
})
}
this.sendQuestion=function($scope,text_ques,u,author,photo){
    var u=sessionStorage.user;
    console.log('mes envois')
    console.log('text_ques')
    console.log(text_ques)
    console.log('user id')
    console.log(u)
    console.log('author')
    console.log(author)
    console.log('photo')
    console.log(photo)
    $http({
        method:'POST',
        url:'http://serve/api/ajoutq',
        data: {text_ques:text_ques,id_uti:u,photo:photo},
        
    }).then(function successCallback(response) {
        console.log('success')
        console.log(response);
        alert("question enregistrer")
            $scope.questions = response.data;
           
          
       
        
 });

};
this.outS=function(){
  
    location.href="/#/tab/dash";
    location.reload();
}

}]);