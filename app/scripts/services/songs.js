angular.module('jsheroApp').
	factory('Songs',[function() {

	var songs = [{
		id : 0,
		url : 'images/Blue Foundation - Eyes On Fire (Zeds Dead Remix).mp3',
		touchkeys : [ 0 , 1 , 2 , 3 , 4 ]
	}];

	return {
		all: function() {				
		  	return songs;
		},
		find: function(id) {
			return jQuery.grep( songs, function(elementOfArray, indexInArray) {
				return elementOfArray.id == id;
			})[0];
		}
	};
}]);