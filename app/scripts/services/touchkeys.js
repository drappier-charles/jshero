angular.module('jsheroApp').
	factory('TouchKeys',[function() {

	var touchkeys = [{
		id:0,
		timestamp:5,
		color:3
	},{
		id:1,
		timestamp:4,
		color:1
	},{
		id:2,
		timestamp:5,
		color:0
	},{
		id:3,
		timestamp:6,
		color:1
	},{
		id:4,
		timestamp:7,
		color:0
	}];

	return {
		all: function() {				
		  	return touchkeys;
		},
		find: function(id) {
			return jQuery.grep( touchkeys, function(elementOfArray, indexInArray) {
				return elementOfArray.id == id;
			})[0];
		}
	};
}]);