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
     $scope.quantity = 3;
   
    console.log("questions")
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

sessionStorage.id_response = $scope.id_temp;
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
this.sendQuestion=function($scope,text,u){
    var u=sessionStorage.user;
    console.log('mes envois')
    console.log('text_ques')
    console.log(text)
    console.log('user id')
    console.log(u)
   
    $http({
        method:'POST',
        url:'http://serve/api/ajoutq',
        data: {text:text,id_uti:u},
        
    }).then(function successCallback(response) {
        console.log('success')
        console.log(response);
        alert("question enregistrer")
            $scope.questions = response.data;
           
          
       
        
 });

};
this.delQuestion=function($scope,index,id){

       
        
    console.log('index')
    console.log(index);
    
 

     var id_temp = id;
     var u=sessionStorage.user;
     console.log('id de la question');
     console.log(id_temp); 
     console.log('mon id utilisateur')
     console.log(u);
     var tab =$scope.questions;
     console.log('mon json')
     console.log(tab);
        
 



    util=$scope.questions[index].id_uti;
     console.log('id utilisateur qui a cree la question')
     console.log(util);
     
     if(util!=u)
{alert("vous n'avez pas le droit de supprimer")}
else{
$http({
 method:'DELETE',
 url:'http://serve/api/supp/'+id_temp  
}).then(function successCallback(response) {
this.question = response.data;
 //recuperer le id de la question pour utiliser au post de la reponse
$scope.id_response = id_temp;   
     
}); alert("supprimé!!")}
   
      

 };
 this.delR=function($scope,index,id){

       
        
    console.log('index')
    console.log(index);
    
 

     var id_temp = id;
     var u=sessionStorage.user;
     console.log('id de la reponse');
     console.log(id_temp); 
     console.log('mon id utilisateur')
     console.log(u);
     ut=$scope.responses[index].id_uti;
     console.log('id utilisateur qui a cree la reponse')
     console.log(ut);
     if(ut!=u)
{alert("vous n'avez pas le droit de supprimer")}
else{
$http({
 method:'DELETE',
 url:'http://serve/api/supp_rep/'+id_temp  
}).then(function successCallback(response) {
this.question = response.data;
 //recuperer le id de la question pour utiliser au post de la reponse
$scope.id_response = id_temp;   
     
}); alert("supprimé!!")}
   
      

 };
 
 this.sendRep=function($scope,text,id_response,u){
    var u=sessionStorage.user;
    console.log('mes envois')
    console.log('text_rep')
    console.log($scope.text)
    console.log('user id')
    console.log(u)
    console.log('id question')
    console.log($scope.id_response)
    $http({
        method:'POST',
        url:'http://serve/api/ajoutr',
        data:{text_rep:text,id_ques:id_response,id_uti:u},
    }).then(function successCallback(response) {
        console.log('success')
        console.log(response);
        alert("ok")
            $scope.questions = response.data;
 });

  };
  this.ajoutU=function($scope,nom,prenom,email,adresse,photo,age,login,pw){
    console.log('mes envois')
    console.log($scope.nom)
  console.log($scope.prenom)
  console.log($scope.email)
  console.log($scope.adresse)
  console.log($scope.photo)
  console.log($scope.age)
  console.log($scope.login)
  console.log($scope.pw)
  $http({
    method:'POST',
    url:'http://serve/api/ajoutus',
    data:{nom:nom,prenom:prenom,email:email,adresse:adresse,photo:photo,age:age,login:login,pw:pw},
}).then(function successCallback(response) {
    console.log('success')
    console.log(response);
    alert("ok")
        $scope.utlisateurs = response.data;
        console.log(utilisateurs)
});

};

  
this.outS=function(){
  
    location.href="/#/tab/dash";
    location.reload();
}

}]);