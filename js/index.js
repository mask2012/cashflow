(function() {

	var index={
		jobIndex:0,	//选定的job次序

		init:function(){
			this.domSwiper();
			this.initSwiper();

			this.addEvent();
		},

		addEvent:function(){
			var that=this;
			$('#btnStart').on('tap',function(){
				location.href="game.html?jobIndex="+that.jobIndex;
			});
		},

		domSwiper:function(){
			var template = $("#jobTemplate").html();
			var compiledHtml=$.compiler(template, {
                data: jobData
            });
            $('#jobSwiper .swiper-wrapper').html(compiledHtml);
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
                autoplay:false,
                onSlideChangeEnd:function(slide){
                	that.jobIndex=slide.activeIndex;
                }
            });
		},

	};

	window.index=index;

})();

index.init();