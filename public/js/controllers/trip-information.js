function TripInformationController($scope) {
	$scope.oneAtATime = true;
	$scope.groups = [{
		id: 'tab-0',
		title: "Trip options and dates",
		target: "trip options data"
	}, {
		id: 'tab-1',
		title: "Itenereies",
		links: [{
			title: 'Young Proffesional Trips',
			target: 'http://israelonthehouse.com/content/young-professionals-trip-itinerary#!/signup'
		}, {
			title: 'Student Trips',
			target: 'http://israelonthehouse.com/content/student-trips-itinerary#!/signup'
		}]
	}, {
		id: 'tab-2',
		title: "Photos",
		target: "http://israelonthehouse.com/content/gallery-1"
	}, {
		id: 'tab-3',
		title: "How to Register",
    target: "#!/register"
	}, {
		id: 'tab-4',
		title: "Elgibility",
		target: "#"
	}, {
		id: 'tab-5',
		title: "Trip Extensions",
		target: "#"
	}];
}