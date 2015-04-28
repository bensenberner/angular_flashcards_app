var flashcardAppControllers = angular.module('flashcardAppControllers', []);
flashcardAppControllers.controller('flashcardCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.test = "fbllabhhs df";

	$scope.createFlashcard = function(question, category, answers) {
		$http.post('/create_flashcard?question=' + question + '&category=' + category).success(function(response) {
        if(response['status'] === 'success') {
        	console.log("Created flashcard");
        	var flashcard_id = response['flashcard_id'];
        	for(i in answers) {
        		console.log("Creating answer");
	      		$http.post('/create_answer?text=' + answers[i] + "&flashcard_id=" + flashcard_id ).success(function(response) {
				        if(response['status'] === 'success') {
				          console.log("Created an answer");
				        }
				        else {
				        	console.log("Fail to create answer");
				        }
				    });
	      	}
        }
        else {
        	console.log("Failure");
        }
    });
	};
}]);