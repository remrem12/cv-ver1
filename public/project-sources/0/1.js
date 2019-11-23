	document.addEventListener("DOMContentLoaded", function(){

	var nutPhai = document.querySelector(".nuts b.phai"),
		nutTrai = document.querySelector(".nuts b.trai"),
		slides = document.querySelectorAll(".slides ul li"),
		chisohientai = 0;
		soslide = slides.length;
		status = 'off';

	function nextSlide(){
		var current = slides[chisohientai];
		var aniStatus = 0;
		// check trang thai cua slide
		var classIn = "next-hien-" + ten;
		var classOut = "next-an-" + ten;
		if(status == "on"){ return false; }

		status = "on";
		// Xác định chỉ số phần tử tiếp theo
		if(chisohientai < soslide - 1){
			//chua den cuoi
			chisohientai++;
		}
		else{ // la phan tu cuoi cung
			chisohientai = 0;
		}
		
		var next = slides[chisohientai];

		// check chuyển động kết thúc
		

		var nextEndAni = function(){
			this.classList.remove(classIn);
			this.classList.add("active");
			aniStatus++;
			if(aniStatus == 2){status = "off"}
		}
		
		var currentEndAni = function(){
			// console.log("done");
			this.classList.remove("active");
			this.classList.remove(classOut);
			aniStatus++;
			if(aniStatus == 2){status = "off"}
		}
		
		
		next.classList.add(classIn);
		next.addEventListener("webkitAnimationEnd", nextEndAni);
		current.classList.add(classOut);
		current.addEventListener("webkitAnimationEnd", currentEndAni);
	};   // XONG NÚT PHẢI
	

	// NÚT TRÁI

	function prevSlide(){
		var current = slides[chisohientai];
		var classIn = "prev-hien-" + ten;
		var classOut = "prev-an-" + ten;
		var aniStatus = 0;
		if(status == "on"){ return false; }
		status = "on";
		if(chisohientai > 0){
			//chua den cuoi
			chisohientai--;
		}
		else{ // la phan tu cuoi cung
			chisohientai = soslide - 1;
		}
		var prev = slides[chisohientai];
		var prevEndAni = function(){
			this.classList.remove(classIn);
			this.classList.add("active");
			aniStatus++;
			if(aniStatus == 2){status = "off"}
		}
		
		var currentEndAni = function(){
			//console.log("done");
			this.classList.remove("active");
			this.classList.remove(classOut);
			aniStatus++;
			if(aniStatus == 2){status = "off"}
		}
		prev.classList.add(classIn);
		prev.addEventListener("webkitAnimationEnd", prevEndAni);
		current.classList.add(classOut);
		current.addEventListener("webkitAnimationEnd", currentEndAni);
	}

	
	

	// MENU

	var nutMenu = document.querySelector(".menu-but");
	var listMenu = document.querySelector(".menu-content");
	var cancel = document.querySelector(".close");
	var menu = document.querySelectorAll(".option");
	var ten = document.querySelector(".acti").id;
	console.log(ten);
	nutMenu.onclick = function(){
		listMenu.classList.add("menuvao");
		listMenu.classList.remove("menura");
	}
	function Huy(){
		listMenu.classList.add("menura");
		listMenu.classList.remove("menuvao");
	}
	cancel.onclick = function(){Huy();}

	for (var i = 0; i < menu.length; i++) {
		menu[i].onclick = function(){
			for (var j = 0; j < menu.length; j++) {
				menu[j].classList.remove("acti");
			}
			this.classList.add("acti");
			ten = this.id;
			var tennut = this.innerHTML;
			nutMenu.innerHTML = tennut;
			Huy();
		}
	}

	nutTrai.addEventListener("click", function(){ prevSlide(); });
	nutPhai.addEventListener("click", function(){ nextSlide(); });


}, false)