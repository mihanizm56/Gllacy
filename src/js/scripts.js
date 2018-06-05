
(function(){ 
var btnOne = document.getElementById('btn-1'), 
btnTwo = document.getElementById('btn-2'), 
btnThree = document.getElementById('btn-3'), 
img = document.getElementById('change'), 
x = document.body.style, 
y = document.getElementById('popupClick'); 
z = document.getElementById('popup1'), 
close = document.getElementById('feedback-close'); 

var btnOneCheck = function(){ 
img.src = 'img/мороженки-1.png' 
x.backgroundColor = '#86AE9E'
img.style.animation = 'showOne 0.5s linear forwards' 
} 

var btnTwoCheck = function(){ 
img.src = 'img/мороженки-2.png' 
x.backgroundColor = '#8497A8'
img.style.animation = 'showTwo 0.5s linear forwards' 
} 

var btnThreeCheck = function(){ 
img.src = 'img/мороженки-3.png' 
x.backgroundColor = '#A58C85'
img.style.animation = 'showThree 0.5s linear forwards' 
} 

var popupCheck = function(){ 
z.style.display = 'block'
z.style.animation = 'slide 0.8s linear forwards'
} 

var popupClose = function(){ 
z.style.display = 'none' 
} 

var slowScroll = function(){ 
var offset=0; 
$('html,body').animate({ 
scrollTop:$('#head').offset().top - offset},500); 
return false; 
} 

btnOne.addEventListener('click',btnOneCheck,false) 
btnTwo.addEventListener('click',btnTwoCheck,false) 
btnThree.addEventListener('click',btnThreeCheck,false) 
y.addEventListener('click',popupCheck,false) 
close.addEventListener('click',popupClose,false) 
close.addEventListener('click',slowScroll,false) 
})()