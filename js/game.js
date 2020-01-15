(function() {

	var game={
		init:function(){
			this.initSwiper();
		},

		initSwiper:function(){
			var that = this;
            var gameSwiper = new Swiper('#gameSwiper', {
                direction: 'horizontal',
                loop:false,
                autoplay:false,
                onSlideChangeEnd:function(slide){
                	var nowIndex=slide.activeIndex;
                	$('#swiperIndicator li').removeClass('on');
                	$('#swiperIndicator li').eq(nowIndex).addClass('on');
                }
            });

            $('#swiperIndicator li').on('tap', function(event) {
            	event.preventDefault();
            	var nowIndex=$(this).index();
            	gameSwiper.slideTo(nowIndex, 230, function(){

            	});
            });
		},

	};

	window.game=game;

})();

game.init();