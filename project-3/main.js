//is there a way to make javascript redirect page (so like if this happens go to page-#.html else go to page-#.html) - jQuery

$(document).ready(function(){
    $('a.answer1a').click(function(){
        location.replace("page-3.html")
    })
})

//IT WORKED sort of. just need to style now