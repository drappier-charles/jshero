angular.module('jsheroApp').
	factory('Game',['TouchKeys',function(touchkeys) {
	var touchkeys = touchkeys.all();
	return {
		trackTimeout : 3,
		lastUpdateTime : 0,
		updateCurrentDisplay:function(currentTime,touchs) {
			this.lastUpdateTime = currentTime;
			for(var i=0 ;i<touchs.length; i++) {
				var touchkey = touchkeys[i];
				if (touchkey.timestamp-this.trackTimeout<currentTime && touchkey.timestamp>currentTime && !touchkey.added) {
					this.addTouch(touchkey);
					touchkey.added = true;
				} else if (touchkey.timestamp-this.trackTimeout<currentTime && touchkey.timestamp>currentTime) {
					this.moveTouch(touchkey.id,currentTime-touchkey.timestamp);
				} else if (this.exist(touchkey.id) && (touchkey.timestamp-this.trackTimeout>currentTime || touchkey.timestamp<currentTime)) {
					this.removeTouch(touchkey.id);
				}
			}
		},

		addTouch: function(touch) {
			$('.track[ref='+touch.color+']').append('<div class="touchkey" game-timestamp="'+touch.timestamp+'" ref="'+touch.id+'"></div>');
		},

		moveTouch: function(id,time) {
			var percent = ((this.trackTimeout + time)/this.trackTimeout)*100;
			$('.touchkey[ref='+id+']').animate({
				top:percent+'%'
			},100)
		},

		removeTouch: function(id) {
			$('.touchkey[ref='+id+']').remove();
		},

		exist: function(id) {
			return ($('.touchkey[ref='+id+']').length != 0)
		},

		firstTouchInColor: function(color) {
			return $('.track[ref='+color+'] .touchkey').eq(0)
		},

		isOkTouch : function(touch) {
			if(touch.length == 0) return false;
			return touch.attr('game-timestamp')-1<this.lastUpdateTime
		},

		hit : function(color,score) {
			var touch = this.firstTouchInColor(color);
			if(!this.isOkTouch(touch))
				score--;
			else {
				score++;
				touch.remove();
			}

			$('#currentScore').html(score)
			return score;
		}
	}
}]);