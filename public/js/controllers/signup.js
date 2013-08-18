function SignupController($scope) {
	$scope.contact = {};
	$scope.invitees = [];

	$scope.currentStepView = 0;
	$scope.views = [
		"form",
		"suggest-friends",
		"friends-form",
		"thank-you",
	];

	$scope.addInvitee = function() {
		$scope.invitees.push({
			firstName: this.inviteeFirstName,
			lastName: this.inviteeLastName,
			email: this.inviteeEmail,
			phone: this.inviteePhone
		});

		this.inviteeFirstName = this.inviteeLastName = this.inviteeEmail = this.inviteePhone = "";
	}

	$scope.removeInvitee = function(invitee) {
		for(var i in $scope.invitees){
			if($scope.invitees[i] == invitee) {
 				$scope.invitees.splice(i, 1)
 			}
		}
	}

	$scope.next = function() {
		$scope.currentStepView++;
	}

	$scope.send = function() {
		$scope.currentStepView = $scope.views.length - 1;

		$.ajax({
			type: "POST",
			url: "http://israelonthehouse.com/lead_generator",
			data: {
				contact: $scope.contact,
				invitees: $scope.invitees
			},
			dataType: "jsonp"
		}).done(function() {

		});
	}
}