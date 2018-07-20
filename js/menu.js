//вертикальное меню

$('.menu__name').on('click', function(e){
    e.preventDefault();
    var item = $(e.target).parent().parent();
    
    item.toggleClass('active');
    item.siblings().removeClass('active');
  });
  
//выпадашка команда

var title = document.getElementsByClassName('accordion__title'),
    cont = document.getElementsByClassName('accordion__cont');

for(var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
        if(!(this.classList.contains('active'))) {
            for(var i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    });
}