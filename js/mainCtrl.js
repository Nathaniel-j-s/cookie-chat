angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  $scope.getMessages = function() {
    messageService.getMessages().then(function(response) {
      $scope.messages = response.data;
    });
  };

  $scope.postMessage = function(messageProp) {
    messageService.postMessage(messageProp).then(function(response) {
      console.log(response);
    })
  };

    setInterval(function(){
     $scope.getMessages();

   }, 1500)

})
