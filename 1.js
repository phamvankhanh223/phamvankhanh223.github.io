 $(function(){
 		
 	$hieuung=$('.noidung').isotope({
 		itemSelector:'.khoianh',
 		layoutMode:'masonry'

 	});

 	$hieuung.imagesLoaded().progress(function(){
 		$hieuung.isotope('layout');

 	});
 
})  
 