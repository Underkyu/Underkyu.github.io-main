const gliders = document.querySelectorAll("[id^=glider]");

gliders.forEach((glide) => {
  const glider = document.querySelector(`#${glide.id} .glider`);
  const gliderPrev = document.querySelector(`#${glide.id} .glider-prev`);
  const gliderNext = document.querySelector(`#${glide.id} .glider-next`);
  const gliderDots = document.querySelector(`#${glide.id} .dots`);

  new Glider(glider, {
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: true,
    dots: gliderDots,
    arrows: {
      prev: gliderPrev,
      next: gliderNext
    }
  });
});

 
function menuAparece(id){
  document.getElementById(id).style.display = 'block';
}
function menuDesaparece(id){
  document.getElementById(id).style.display = 'none' 
}
function block(){
let el = document.querySelector('.menu_sanduiche');
if(el.classList.contains('open')){
  el.classList.remove('open');
} else{
  el.classList.add('open');
}

}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      