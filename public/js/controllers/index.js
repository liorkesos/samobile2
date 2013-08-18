function IndexController($scope, Global, CMS) {
    $scope.init = function() {
    	CMS.get("index", function(content) {
    		$scope.content = content;
    	});
    }
    
    $scope.update = function(){
    	CMS.update("index", $scope.content, function(content) {
    		$scope.content = content;
    	});
    }
}
