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
			{
				jobName:'飞行员1',
				jobClass:'ico_polit',
				jobCashIn:8400,
				jobCashOut:3400,
				jobCashFlow:400,
				jobKidFee:140,
			},
			{
				jobName:'飞行员2',
				jobClass:'ico_polit',
				jobCashIn:8400,
				jobCashOut:3400,
				jobCashFlow:400,
				jobKidFee:140,
			},
		],
		init:function(){
			this.domSwiper();
			this.initSwiper();
		},

		domSwiper:function(){
			var template = $("#jobTemplate").html();
			var compiledHtml=this.compiler(template, {
                data: this.jobData
            });
            $('#jobSwiper .swiper-wrapper').html(compiledHtml);
		},
		initSwiper:function(){
			var that = this;
            var swiper = new Swiper('#jobSwiper', {
                // threshold: 30,
                direction: 'horizontal',
                slidesPerView:2,
                spaceBetween:17,
                initialSlide:2,
                centeredSlides:true,
                loop:false,
                autoplay:false
            });
		},
		compiler: function (str, data){
	        var compiler = arguments.callee;
	        //如果参数str全部为组词字符
	        //console.log /^\w*$/.test(str), "xxx"
	        var fn;
	        if(/^\w*$/.test(str)){
	            fn = !compiler[str] && (compiler[str] = compiler(document.getElementById(str).innerHTML));
	        }else{
	            fn = new Function("obj", "var p=[];with(obj){p.push('" +
	                str.replace(/[\r\t\n]/g, " ")
	                    .split("<@").join("\t")
	                    .replace(/((^|@>)[^\t]*)'/g, "$1\r")
	                    .replace(/\t=(.*?)@>/g, "',$1,'")
	                    .split("\t").join("');")
	                    .split("@>").join("p.push('")
	                    .split("\r").join("\\'")+ "');}return p.join('');");
	        }
	        return data ? fn(data) : fn;
	    },
	};

	window.index=index;

})();

index.init();