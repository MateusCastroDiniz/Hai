$(document).ready(function(){

    $(".btn-envia-mensagem").on('click', function(event){
        event.preventDefault();
        
        $("#texto-head-contato p").text('')

        if($("#email").val() == ""){
            $("#email").css({border: '1px solid red'})
            $("#texto-head-contato").append("<p class='fs-4 fw-light text-danger mt-4'>Preencha os campos descritos em vermelho</p>")
        }else{
            $("#email").css({border: ''})
            $("#texto-head-contato p").text("")
        }
    })
})