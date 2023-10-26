$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1.7
          },
          600: {
            items: 2.1
          },
          1000: {
            items: 3.1
          }
        }
      });


                                           
  
// OBS: Automatize a abertura dos modais de cada produto

    // uma classe pode chamar o modal dinamicamente
  
    // ESTRUTURA:

      $('.nav-modal-open').on("click", function(e){
        e.preventDefault();
        
        let elem = $(this).attr('rel')



        $('.modal-body').html($('#'+ elem).html())

        let ModalRoot = new bootstrap.Modal($('#modal-root'))
        
        ModalRoot.show()

      })



})

let textosH5 = $('.item h5')
textosH5.append("<span class='badge bg-danger ms-2'>Novo</span>")



