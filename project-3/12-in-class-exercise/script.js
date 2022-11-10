$(document).ready(function () {   
    $('#flowerpot').click(function () {
      $('.announcement').toggle();
    });
    
     $('#keyboard').click(function () {   
        $(this).toggleClass("bigger");
    });
    
    $(function () {
        $("#dragging").draggable();
    });   
    
});