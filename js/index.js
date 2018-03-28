(function() {

	var index={
		jobData:[
			{
				jobName:'小学老师',
				jobClass:'ico_teacher',
				jobCashIn:2400,
				jobCashOut:1400,
				jobCashFlow:400,
				jobKidFee:140,
			},
			{
				jobName:'飞行员',
				jobClass:'ico_polit',
				jobCashIn:8400,
				jobCashOut:3400,
				jobCashFlow:400,
				jobKidFee:140,
			},
		],
		init:function(){
			this.initSwiper();
		},
		initSwiper:function(){
			var that = this;
            var swiper = new Swiper('#jobSwiper', {
                // threshold: 30,
                direction: 'horizontal',
                slidesPerView:2.5,
                spaceBetween:20,
                initialSlide:2,
                centeredSlides:true,
                loop:true,
                pagination:$('#jobSwiper .swiper-pagination')
            });
		}
	};

	window.index=index;

})();

index.init();