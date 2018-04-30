var app=angular.module('myApp')
app.service('monService',['$http',function($http){
  
   
    //recuperer les données du serveur en utilisant la method GET en http
    this.getQuestions=function($scope){

        $http({
            method:'GET',
            url:'http://forum/api/questions'
        }).then(function successCallback(response, ) {
            $scope.questions = [];
            $scope.questions = response.data;  
           // console.log('util');
           // console.log($scope.questions[id].id_uti); 
          
           $scope.ques = $scope.questions;
          
         
           
          // console.log("données de questions")
           //console.log($scope.ques);
 });


    };
    //recuperer les reponses d'une question avec un id de la question
    this.getQuestion=function($scope, id){
        var id_temp = id;
        console.log('Here');
        console.log(id_temp)
       
        $http({
            method:'GET',
            url:'http://forum/api/question/'+id_temp
        }).then(function successCallback(response) {
            this.question = response.data;
            console.log(this.question)
            $scope.responses = response.data;
            //recuperer le id de la question pour utiliser au post de la reponse
           $scope.id_response = id_temp;         
    });
    };
//fonction ajouter  une nouvelle reponse
    this.sendResponse=function($scope,text_resp,id_uti, id_response){
        console.log('service var')
        console.log(text_resp)
        console.log(id_uti)
        console.log(id_response)
        if(confirm("vous voulez enregistez cette reponse?"))
        $http({
            method:'POST',
            url:'http://forum/api/ajoutr',
            data: {text_rep:text_resp,id_ques:id_response,id_uti:id_uti}
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
           $http({
               method:'GET',
               url:'http://forum/api/question/'+id_response
           }).then(function successCallback(response) {
              console.log('get successfully')
       
                this.question = response.data;
                $scope.responses = response.data;
               
                console.log($scope.responses)
            })
            
     });

    };
    //fonction pour ajouter une nouvelle question
    this.sendQuestion=function($scope,text_ques,u){
        u=sessionStorage.user;
        console.log('mes envois')
        console.log(text_ques)
        console.log(u)
   
        $http({
            method:'POST',
            url:'http://forum/api/ajoutq',
            data: {text_ques:text_ques,id_uti:u},
            
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
            alert("question enregistrer")
                $scope.questions = response.data;
               
                
           
            
     });

    };
    this.auto=function($scope,user,pw){
       $scope.con=false;
        $http({
            method:'POST',
            url:'http://forum/api/login',
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
               // console.log('storage')
                sessionStorage.user = $scope.ut;
               // console.log(sessionStorage.user);
                

  
                
    
                    if(($scope.user==$scope.use[0].login) && ($scope.pw==$scope.use[0].pw))
                    {  
                         alert("Bienvenu"+" "+name); 
                    location.href='questions.html';
                    }
else{
    alert("login ou mot de passe est faux")
location.reload();
}

           
                    
            
           
            
            
      });
    }

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
           
    
   


       util=tab[index].id_uti;
        console.log('id utilisateur qui a cree la question')
        console.log(util);
        
        if(util!=u)
{alert("vous n'avez pas le droit de supprimer")}
else{
$http({
    method:'DELETE',
    url:'http://forum/api/supp/'+id_temp  
}).then(function successCallback(response) {
   this.question = response.data;
    //recuperer le id de la question pour utiliser au post de la reponse
   $scope.id_response = id_temp;   
        
}); alert("supprimé!!")}
      
         
/*
       
        $http({
            method:'DELETE',
            url:'http://forum/api/supp/'+id_temp  
        }).then(function successCallback(response) {
           this.question = response.data;
            //recuperer le id de la question pour utiliser au post de la reponse
           $scope.id_response = id_temp;   
                
    });*/
    };


    this.delReponse=function(id){
        var id_temp= response.id_rep;
        
        console.log('this');
        console.log(id_temp)
       
        $http({
            method:'DELETE',
            url:'http://forum/api/supp_rep/'+id_temp
           
        }).then(function successCallback(response) {
            $scope.responses = response.data;
           
        });
    };
   
}]);

