var flashcardAppControllers = angular.module('flashcardAppControllers', []);
flashcardAppControllers.controller('flashcardCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.test = "fbllabhhs df";
	$scope.size = 4;
	$scope.correctAnswerIndex = 0;
	$scope.answers = [ { value: '', correct: false }, 
										 { value: '', correct: false }, 
										 { value: '', correct: false }, 
										 { value: '', correct: false }
									 ];
	// $scope.answers = ['', '', '', ''];
	$scope.generateAnswerFields = function(size) {
		var arr = [];
		for(var i=0;i<size;i++) {
			arr.push({value: ''});
		}
		$scope.list = arr;
	}
	$scope.markAnswerCorrect = function (index) {
		console.log(index)
		$scope.correctAnswerIndex = index;
	}
	$scope.createFlashcard = function(question, category, answers) {
		answers[$scope.correctAnswerIndex].correct = true;
		$http.post('/create_flashcard?question=' + question + '&category=' + category).success(function(response) {
        if(response['status'] === 'success') {
        	console.log("Created flashcard");
        	var flashcard_id = response['flashcard_id'];
        	for(i in answers) {
        		console.log("Creating answer");
	      		$http.post('/create_answer?text=' + answers[i].value + "&flashcard_id=" + flashcard_id + "&correct="+ answers[i].correct ).success(function(response) {
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