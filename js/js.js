

$('#mainNav').affix({
  offset: {
    top: 100
  }
})

	


$(document).ready(function()
{

$('#boton').click(function(event) {
$('#cajon2').show(500);
$('#boton').hide();
});

});


     function ponerTitulo(json){
  $.each( json, function( i, empleado ) {
    $("#titulo").append(noticias.titulo);
  }); 
}