$(document).ready(function(){
    
    $(".team__name").click(function(){
        $(this).each(function(){
           if ($('.team__person').hasClass('open')) {
               $('.team__person').removeClass('open');
           } else {
            $('.team__person').addClass('open');
           }
            
        });        
    });
});


