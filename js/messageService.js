angular.module('chatroom').service('messageService', function($http){

  this.getMessages = function() {
    return $http( {
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/api/chats'
    });
  };

  this.postMessage = function(messageProp) {
    return $http( {
      method: 'POST',
      url: 'https://practiceapi.devmounta.in/api/chats',
      data: {"message": messageProp}
    });
  };

});
