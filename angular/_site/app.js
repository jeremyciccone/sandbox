(function() {
	var app = angular.module('appy', ["firebase"]);

	app.controller('showContent', ['$http', '$log', '$firebase', '$scope', function($http, $log, $firebase, $scope) {
    	var ref = new Firebase("https://brilliant-inferno-1602.firebaseio.com/");
    // // create an AngularFire reference to the data
    	var sync = $firebase(ref);
    // // download the data into a local object
    	var shower = this;
		shower.content = [ ];
		shower.vals = 0;
    	syncObj = sync.$asObject();
    	
    	syncObj.$loaded().then(function(syncObj) {
    		console.log(syncObj);
    		shower.vals = syncObj.vals;
    		for(i=0; i<syncObj.content.length; i++) {
    			shower.content[i] = syncObj.content[i];
    			if(!shower.content[i]['valu']) {
    				shower.content[i]['valu'] = 0;
    			}
    		}
    	});

		
		// $http.get('content.json').success(function(data) {
		// 	shower.content = data;
		// 	shower.content.forEach(function(entry) {
		// 		entry.valu = 0;
		// 	});
		// });
		// shower.vals = 0;

		shower.increase = function(item) {
			shower.vals += 1;
			item.valu += 1;
			syncObj.$save(item);
		};
	}]);

	app.directive('contentBlock', function() {
		return {
			restrict: 'E',
			templateUrl: './contentBlock.html',
			controller: 'showContent',
			controllerAs: 'shower'
		}
	});


})();