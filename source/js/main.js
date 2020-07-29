// Импортируем jQuery
//= ../../node_modules/jquery/dist/jquery.js

window.onload = function(event){
    
    $('#message').val('        ');
    $('#message').bind('change paste keyup input', function(){
        if($(this).val().length == 0){
            $('#message').val('        ');
        }else if($(this).val().length < 8){
            $('#message').val(' ' + $('#message').val());
        }
    });
};
 