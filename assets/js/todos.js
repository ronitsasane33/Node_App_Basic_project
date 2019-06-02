$("ul").on("click", "span",  function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(1500, function(){
        $(this).remove();
    })
})

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
})


$("input").on("keypress",function(event){
    if(event.which === 13){
        $("ul").append("<li><span> X </span>"+ $(this).val() + "</li>")
    }
}
)