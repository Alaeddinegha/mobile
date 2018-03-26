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
    this.sendQuestion=function($scope,text_ques,id_uti){
        console.log('mes envois')
        console.log(text_ques)
        console.log(id_uti)
   
        $http({
            method:'POST',
            url:'http://forum/api/ajoutq',
            data: {text_ques:text_ques,id_uti:id_uti}
        }).then(function successCallback(response) {
            console.log('success')
            console.log(response);
            
                $scope.questions = response.data;
               
                
           
            
     });

    };
    this.delQuestion=function($scope, id){
        var id_temp = id;
        console.log('Here');
        console.log(id_temp)
       
        $http({
            method:'DELETE',
            url:'http://forum/api/supp/'+id_temp
        }).then(function successCallback(response) {
            this.question = response.data;
           
            $scope.responses = response.data;
            //recuperer le id de la question pour utiliser au post de la reponse
           $scope.id_response = id_temp;         
    });
    };
    

}]);
