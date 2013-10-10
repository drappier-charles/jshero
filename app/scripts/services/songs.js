angular.module('jsheroApp').
	factory('Songs',[function() {

	var songs = [{
		id : 0,
		url : 'http://downloads.avalanche-mdz.fr/Musique/Discographie%20Skrillex/01%20My%20Name%20Is%20Skrillex.mp3',
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