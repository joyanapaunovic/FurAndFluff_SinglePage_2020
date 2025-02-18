

/*after slider*/
$(document).ready(function(){
    $('#readMore1').click(function(){
        $('#text1').toggle();
        if($('#text1').is(':visible')){
            $('#readMore1').html('Close');
        } else {
            $('#readMore1').html('Read more');
              }
    });
});


/*after slider */
$(document).ready(function(){
    $('#readMore2').click(function(){
        $('#text2').toggle();
        if($('#text2').is(':visible')){
            $('#readMore2').html('Close');
            //console.log('close');
        }
            else {
            $('#readMore2').html('Read more');
            //console.log('read more');
           }
    });
});


/*profili*/
//scroll and toggle
//my-story
$('document').ready(function(){
    $('.my-story').click(function(){
        $(this).prev().toggle();
        if($('.text-pet-info').is(':visible')){
            $(this).val('Close');
            $('.item').scroll();
        }
        else{
            $(this).val('My story');
        }
    });
});


//our-story button different
$(document).ready(function(){
    $('#our-story').click(function(){
        $(this).prev().toggle();
        if($('.text-pet-info').is(':visible')){
            $(this).val('Close');
            $('.item').scroll();
        }
        else{
            $(this).val('Our story');
        }
    });
});



   


   
