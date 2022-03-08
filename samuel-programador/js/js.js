

$( document ).ready(function() {
    $('#clicker').click(function () {
        $('#testeModal').modal('show')
    })
});

$('#embarqueCarrosel').carousel({
    $('#embarqueCarrosel').on('slide.bs.carousel', function () {
        // do something...
      })
  })

//EXEMPLOS PARA SE BASEAR 
//   $('.hideJquery').click(function(){
//     $(this).parents('li').find('img').hide();
// })
// $('.showJquery').click(function(){
//     $(this).parents('li').find('img').show();
// })
// $('.hideFadeJquery').click(function(){
//     $(this).parents('li').find('img').fadeOut();
// })
// $('.showFadeJquery').click(function(){
//     $(this).parents('li').find('img').fadeIn();
// })

// $('.toggleFadeJquery').click(function(){
//     $(this).parents('li').find('img').fadeToggle();
// })