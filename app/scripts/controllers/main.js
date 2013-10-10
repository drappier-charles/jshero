'use strict';

angular.module('jsheroApp')
	.controller('MainCtrl',['$scope','Game',function ($scope,game) {
		$scope.start = function() {
			$('audio').attr('src',song.url)
            if($('.player_audio').paused != false)
            	$('audio').get(0).play();
            else
            	$('audio').get(0).pause();
		}

		$("audio").bind('timeupdate', function() {
			game.updateCurrentDisplay(this.currentTime,song.touchkeys);
		});

		$scope.score = 0;
  }]);

angular.module('jsheroApp').
	factory('Game',[function() {

	return {
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
}]);