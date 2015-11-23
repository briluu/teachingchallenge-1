'use strict';

// initialization function called after Google JS Library has finished loading
// used to ensure the Google auth sequence doesn't begin until the Google JavaScript library is fully loaded
function init() {
  // call the initialize function in $window
  window.initialize();
}

// create angular app
var myApp = angular.module('myApp', []);

// create angular controller
myApp.controller('GoogleApiCtrl', ['$scope', '$window', function($scope,$window) { 

  // boolean to hide display of results until they're loaded
  $scope.isBackendReady = false; 

  // OAuth2 clientID
  var clientId = '282322657286-thqf8d9ol44fcasamt9e358p2ghigb1c.apps.googleusercontent.com'; 
  // general api access key
  var apiKey = 'AIzaSyDbyRiJkjf4CU5YO6B6sc_K_iQkw-rXC74'; 

  // list of scopes the user will be asked to grant access to separated by a space character (' ')
  var scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly']; 

  $window.initialize = function() {
    $scope.$apply($scope.handleClientLoad);
  };

  // START
  // handleClientLoad function called when Google JS library is loaded in index.html head tag
  $scope.handleClientLoad = function() { 
    
  }

  // check authorization status on page load and as needed in the future
  $scope.checkAuth = function() {
    
    
  }

  // handle authorization result
  $scope.handleAuthResult = function(authResult) {
    
    
  }
   
  // authorize the user when the Sign In with Google button is pressed
  $scope.handleAuthClick = function(event) {

    
  }

  // Load Google Drive API
  $scope.loadDriveApi = function(){

    // load the API
   
      // call listFiles()
     
    })
  }

  // send request for files to the API and save them to the scope
  $scope.listFiles = function() {

    // build a request object to request up to ten Drive files
    

    // execute the request

    

 
  }

}]);