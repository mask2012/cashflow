(function() {

	var game={
		init:function(){
			// this.initSwiper();
		},

		initSwiper:function(){
			var that = this;
            var swiper = new Swiper('#jobSwiper', {
                // threshold: 30,
                direction: 'horizontal',
                slidesPerView:2,
                spaceBetween:27,
                initialSlide:1,
                centeredSlides:true,
                loop:false,
                autoplay:false
            });
		},

	};

	window.game=game;

})();

game.init();