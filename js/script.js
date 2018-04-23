$('.title-box').mousemove(function(event){
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1; //mouse left/right movement
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1; //mouse top/bottom movement
  $('.page-back').css('margin-left', moveX + 'px');
  $('.page-back').css('margin-top', moveY + 'px');
});
