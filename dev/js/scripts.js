// call popup

$('.call').click(function(){
  event.preventDefault();
  $('.popup-call').bPopup({
    closeClass:'icon__close',
      amsl: 0,
      positionStyle: 'fixed',
    }); 
});

// popup registration

$('.call-popup-registration').click(function(e){
  e.preventDefault();
  $('.popup-registration').bPopup({
    closeClass:'popup-close',
      amsl: 0,
      positionStyle: 'fixed',
    }); 
});

$('.call-popup-logIn').click(function(e){
  e.preventDefault();
  $('.popup-logIn').bPopup({
    closeClass:'popup-close',
      amsl: 0,
      positionStyle: 'fixed',
    }); 
});

$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('#rise').bPopup().close();
           $('#okthanks').bPopup({
             closeClass:'СЃlose',
                 amsl: 0
            });
           setTimeout(function(){$('#okthanks').bPopup().close();}, 3000);
       }else{
       alert(res.text);
       }
    }, 'json');
    return false;
  })

// scroll smooth

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

// wow animate

new WOW().init();