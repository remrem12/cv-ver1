
$(window).on('load', function(){
    let preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';


    var greeting = anime.timeline();

var hello = charming(document.querySelector('.home-greeting h3'));

greeting
.add({
    targets: '.home-greeting h3 span',
    duration: 1000,
    opacity: [ 0, 1 ],
    translateY: [ -40, 0 ],
    delay: function(el, i){
        return 50*i;
    },
    
})

.add({
    targets: '.home-greeting svg g path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500,
    delay: function(el, i){
        return 200*i;
    },
    easing: 'easeOutSine'
})

// 
function sayHello(){
    var i = 0;
    var speed = 100;
    var name = "Front-End Web Developer";

    typeWriter = () => {
        if (i < name.length) {
            document.querySelector(".hello").innerHTML += name.charAt(i);
            i++; 
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    
}
setTimeout(sayHello, 2000);

})





var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1
        },            
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
});


// project hoverdir
$(function() {
			
    $(' .inner-item ').each( function() { $(this).hoverdir(); } );

});


// filter

var $grid = $('.grid').isotope();
  // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


// Acive class

    let filterButtons = $('.filter-button-group button');
    for(let i = 0; i < filterButtons.length; i++){
        filterButtons[i].addEventListener('click', function(){
            if(!filterButtons[i].classList.contains('active')){
            for(let j = 0; j < filterButtons.length; j++){
                filterButtons[j].classList.remove('active');
            }
                filterButtons[i].classList.add('active')
            }
        })
        
    }
    


    let portfolio = document.querySelector('#page-portfolio');
    let projectDetail = document.querySelector('.project-detail');
    function noScroll() {
        projectDetail.style.transform = 'translateY(' + portfolio.scrollTop + 'px)';
    }
    portfolio.addEventListener('scroll', noScroll);



// show project function
var projectName = document.querySelectorAll('.project-name');
var listProject = document.querySelectorAll('.project-content div');
$('.close-project-detail').click(function(){
    $('.project-detail').removeClass('showP');
    for(let i = 0; i < listProject.length; i++){
        listProject[i].classList.remove('up');
    }
})
for(let i = 0; i < projectName.length; i++){
    projectName[i].addEventListener('click', function(){
        $('.project-detail').addClass('showP');
        var index = projectName[i].dataset.no;
        // $('.project-content div')[index + 1].addClass('up')
        
        listProject[index].classList.add('up');
    })
}

$('.submit-mail').click(function(){
    
    let clearInput = document.querySelectorAll('.input-field input');
    for(let i = 0; i < clearInput.length; i++){
        clearInput[i].value = '';
    }
    
    alert('Your mail has been sent! (UwU)');
})



