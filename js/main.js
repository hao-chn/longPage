//main.js
var mySwiper = new Swiper('.swiper-container', {
	loop:true,
  direction: 'vertical',
	mousewheel: true,
	watchSlidesProgress: true,
	speed: 1000,
//	autoplay : {		
//  delay:6000,								 // 自动切换时间
//  stopOnLastSlide: true,		 // 切换到最后一个时自动停止	
// 	}, 	
	effect : 'coverflow',
    on:{
      init: function(){
				console.log(this)
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
		    switch (this.activeIndex) {
		    	case 0:
		        setTimeout(function(){
		          $(".titleP1").css({
		            animation: 'tada 1.5s linear 0.2s infinite'
		          })            
		        },2200);	// 定时器时间是上一个动画执行时间
		        setTimeout(function(){
		          $(".pigP1").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		        
		      break;
		    }
      },
 			slideChangeTransitionStart: function(){
	      swiperAnimate(this);
	    },   
      slideChangeTransitionEnd: function(){
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		    switch (this.activeIndex) {
		    	case 0:
		        setTimeout(function(){
		          $(".titleP1").css({
		            animation: 'tada 1.5s linear 0.2s infinite'
		          })            
		        },2200);	// 定时器时间是上一个动画执行时间
		        setTimeout(function(){
		          $(".pigP1").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		 
		      break;
		    	
		    	case 1:
		        setTimeout(function(){          	
		          $(".titleP2").css({
		            animation: 'tada 1.6s linear 0s infinite'
		          })
		        },2200);	// 定时器时间是上一个动画执行时间   
		        setTimeout(function(){
		          $(".pigP2").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		 		        
		      break;
		        
		    	case 2:
		        setTimeout(function(){          	
		          $(".titleP3").css({
		            animation: 'buzz-out 1.6s linear 0s infinite'
		          })
		        },2200);	// 定时器时间是上一个动画执行时间  
		        setTimeout(function(){
		          $(".pigP3").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		 			        
		      break;
		    	
		    	case 3:
		        setTimeout(function(){          	
		          $(".titleP4").css({
		            animation: 'wobble-vertical 1.6s linear 0s infinite'
		          })
		        },2200);
		        setTimeout(function(){
		          $(".pigP4").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		 			        
		      break;
		        
		    	case 4:
		        setTimeout(function(){
		          $(".titleP5").css({
		            animation: 'tada 1.5s linear 0.2s infinite'
		          })            
		        },2200);	// 定时器时间是上一个动画执行时间     
		        setTimeout(function(){
		          $(".pigP5").css({
		            animation: 'bounce 1.5s linear 0.2s infinite'
		          })            
		        },2400);	// 定时器时间是上一个动画执行时间		 			        
		      break;
		    }
        
        
        
      }
    }
});