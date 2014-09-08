(function ( $ ) {
 
    
 
    $.fn.jqCarousel = function() {
        myCarousel.init();
        return this;
    };
 
 var myCarousel={
	itemLength:0,
	setItemLength:function()
	{
	
	 this.itemLength=$('.myCarouselContent div').length;
	},
	setActiveContent:function()
	{
	
	if(this.itemLength>0)
	{
	  var loopCount=0;
	  for(loopCount=0;loopCount<this.itemLength;loopCount++)
	  {
		if(loopCount==0)
		{
			$($('.myCarouselContent div')[loopCount]).attr('class','active');
		}
		else
		{
			$($('.myCarouselContent div')[loopCount]).hide();
		}
	  }
	  
	}
	},
	rightChange:function()
	{
	if($('.myCarouselContent div.active').next().length=='1')
	{
		$('.myCarouselContent div.active').next().attr('class','nactive');
		$('.myCarouselContent div.active').removeClass('active').hide();		
		$('.myCarouselContent div.nactive').attr('class','active').removeClass('nactive').show('slide', {direction: 'right'}, 1000);
		this.correctIconPositions();
	}
	else
	{
	this.reset();
	}
	},
	leftChange:function()
	{
	if($('.myCarouselContent div.active').prev().length=='1')
	{
		$('.myCarouselContent div.active').prev().attr('class','pactive');
		$('.myCarouselContent div.active').removeClass('active').hide();		
		$('.myCarouselContent div.pactive').attr('class','active').removeClass('pactive').show('slide', {direction: 'left'}, 1000);
		this.correctIconPositions();
	}
	else
	{
	this.lreset();
	}
	},
	reset:function()
	{
	 $('.myCarouselContent div.active').removeClass('active');
	this.setItemLength();
	this.setActiveContent();
	 $('.myCarouselContent div.active').show('slide', {direction: 'right'}, 1000);
	 this.correctIconPositions();
	},
	lreset:function()
	{
	 $('.myCarouselContent div.active').removeClass('active').hide();	 
	 $($('.myCarouselContent div')[this.itemLength-1]).attr('class','active').show('slide', {direction: 'left'}, 1000);
	 this.correctIconPositions();
	}	
	
	
	,
	correctIconPositions:function()
	{
	$('#right').css('top',($('.myCarousel div.active img').height()/2)) ;
	$('#left').css('top',($('.myCarousel div.active img').height()/2));
	
	$('#right').css('left',($('.myCarousel div.active img').width()-80)) ;
	},
	init:function()
	{
	this.setItemLength();
	this.setActiveContent();
	this.correctIconPositions();
	
	$('#right').click(function(){myCarousel.rightChange()});
	$('#left').click(function(){myCarousel.leftChange()});
	setInterval(function(){myCarousel.rightChange()},5000);
	
	}
	};
	
}( jQuery ));

$(document).ready(function(){
$('.mycarousel').jqCarousel();
});
	





