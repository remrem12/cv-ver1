

	var $iso = $(".noidung").isotope();

	$('.filter a').click(function(){
		cate = $(this).attr('href');
		$iso.isotope({filter: cate})
		
		return false;
	})

