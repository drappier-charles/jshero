'use strict';

angular.module('jsheroApp')
	.controller('MainCtrl',['$scope',function ($scope) {
		$scope.start = function() {
            this.audioElement = document.createElement('audio');
            this.audioElement.setAttribute('src', song.url);
            this.audioElement.setAttribute('ontimeupdate','mainController.updateCurrentDisplay(this.currentTime,song.touchkeys)');
            this.audioElement.play();
		}
		$scope.score = 0;
  }]);


var mainController = {
	updateCurrentDisplay:function(currentTime,touchs) {
		var keepTime = 1
		for(var i=0 ;i<touchs.length; i++) {
			var touchkey = touchkeys[i];
			if(touchkey.timestamp-keepTime<currentTime && touchkey.timestamp+keepTime>currentTime && !this.exist(touchkey.id)) {
				this.addTouch(touchkey.color,touchkey.id)
			} else if(this.exist(touchkey.id) && (touchkey.timestamp-keepTime>currentTime || touchkey.timestamp+keepTime<currentTime)) {
				this.removeTouch(touchkey.id)
			}
		}
	},

	addTouch: function(color,id) {
		$('.track[ref='+color+']').append('<div class="touchkey" ref="'+id+'"></div>');
	},

	removeTouch: function(id) {
		$('.touchkey[ref='+id+']').remove();
	},

	exist: function(id) {
		return ($('.touchkey[ref='+id+']').length != 0)
	}
}