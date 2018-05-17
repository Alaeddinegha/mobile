var app=angular.module('myApp')
app.service('monService',['$http',function($http){
  
   
    //recuperer les données du serveur en utilisant la method GET en http
    this.getQuestions=function($scope){

        $http({
            method:'GET',
<<<<<<< HEAD
            url:'http://serve/api/questions'
=======
            url:'http://forum/api/questions'
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
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
<<<<<<< HEAD
            url:'http://serve/api/question/'+id_temp
=======
            url:'http://forum/api/question/'+id_temp
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
        }).then(function successCallback(response) {
            this.question = response.data;
            console.log(this.question)
            $scope.responses = response.data;
            //recuperer le id de la question pour utiliser au post de la reponse
           $scope.id_response = id_temp;         
    });
    };
//fonction ajouter  une nouvelle reponse
<<<<<<< HEAD
    this.sendResponse=function($scope,text_resp,id_response){
        u=sessionStorage.user;
        console.log('text rep')
        console.log(text_resp)
        console.log('user')
        console.log(u)
        console.log('id rep')
=======
    this.sendResponse=function($scope,text_resp,id_uti, id_response){
        console.log('service var')
        console.log(text_resp)
        console.log(id_uti)
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
        console.log(id_response)
        if(confirm("vous voulez enregistez cette reponse?"))
        $http({
            method:'POST',
<<<<<<< HEAD
            url:'http://serve/api/ajoutr',
            data: {text_rep:text_resp,id_ques:id_response,id_uti:u}
=======
            url:'http://forum/api/ajoutr',
            data: {text_rep:text_resp,id_ques:id_response,id_uti:id_uti}
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
           $http({
               method:'GET',
<<<<<<< HEAD
               url:'http://serve/api/question/'+id_response
=======
               url:'http://forum/api/question/'+id_response
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
           }).then(function successCallback(response) {
              console.log('get successfully')
       
                this.question = response.data;
                $scope.responses = response.data;
               
                console.log($scope.responses)
            })
            
     });
<<<<<<< HEAD
     location.reload();
    }
=======

    };
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
    //fonction pour ajouter une nouvelle question
    this.sendQuestion=function($scope,text_ques,u){
        u=sessionStorage.user;
        console.log('mes envois')
        console.log(text_ques)
        console.log(u)
   
        $http({
            method:'POST',
<<<<<<< HEAD
            url:'http://serve/api/ajoutq',
=======
            url:'http://forum/api/ajoutq',
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
            data: {text_ques:text_ques,id_uti:u},
            
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
            alert("question enregistrer")
                $scope.questions = response.data;
               
<<<<<<< HEAD
                location.href="/#!questions";
=======
                
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
           
            
     });

    };
    this.auto=function($scope,user,pw){
<<<<<<< HEAD
      
        $http({
            method:'POST',
            url:'http://serve/api/login',
=======
       $scope.con=false;
        $http({
            method:'POST',
            url:'http://forum/api/login',
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
            data: {login:user,pw:pw},
            
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
           
<<<<<<< HEAD
               $scope.use= response.data;
            $scope.log=$scope.use.login;
              name=$scope.use[0].prenom;
=======
                $scope.use= response.data;
               $scope.log=$scope.use.login;
               name=$scope.use[0].prenom;
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
              $scope.ut=$scope.use[0].id_uti;
               // Check browser support
   
        
                console.log('utilisateur')
                console.log(name);
                console.log('data')
                console.log($scope.use)
<<<<<<< HEAD
            
               console.log('storage')
                sessionStorage.user = $scope.ut;
                console.log(sessionStorage.user);
    if($scope.use=="faux"){  
        alert("login ou mot de passe est faux")
    location.reload();       
      
                         }
                        
   else{
    alert("Bienvenu"+" "+name); 
    location.href="/#!questions";       
=======
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
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
}

           
                    
            
           
            
            
      });
    }

<<<<<<< HEAD

=======
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
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
<<<<<<< HEAD
    url:'http://serve/api/supp/'+id_temp  
=======
    url:'http://forum/api/supp/'+id_temp  
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
}).then(function successCallback(response) {
   this.question = response.data;
    //recuperer le id de la question pour utiliser au post de la reponse
   $scope.id_response = id_temp;   
        
}); alert("supprimé!!")}
      
         
<<<<<<< HEAD

    };


    this.delReponse=function($scope,index,id){
        var u=sessionStorage.user;
        console.log('index')
        console.log(index)
        var id_temp=id;
        CQ=$scope.responses[index].id_uti;
        console.log('this');
        console.log(CQ)
        console.log('im')
        console.log(u)
        if(CQ!=u)
        {alert("vous n'avez pas le droit de supprimer")}
        else{
       
        $http({
            method:'DELETE',
            url:'http://serve/api/supp_rep/'+id_temp
=======
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
>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
           
        }).then(function successCallback(response) {
            $scope.responses = response.data;
           
        });
<<<<<<< HEAD
    }
    };

}]);
=======
    };
   
}]);

>>>>>>> 96ffc89acbc867672f1d11ed8e489d4dae1d2cf9
