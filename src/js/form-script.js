$(document).ready(function () {

  const btnToastFreq = $('#btn-toast-freq')
  const toastFreq = $('#toast-freq')

  if (btnToastFreq) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastFreq)
    btnToastFreq.on('click', () => {
      toastBootstrap.show()
      toastFreq.addClass("d-flex")
    })
  }

  const btnSalvardados = $('#btn-salvar-dados')
  const toastSalvarDados = $('#toast-salvar-dados')


  if (btnSalvardados) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastSalvarDados)
    btnSalvardados.on('click', () => {
      toastBootstrap.show()
      toastSalvarDados.addClass("d-flex")
    })
  }

  function ValidaCampo(campo) {

    let textoAlerta = campo.parent().find('.text-muted')


    if (campo.val() == "") {
      campo.addClass('invalido')
      textoAlerta.fadeIn()
      return false
    } else {

      if (campo.attr('name') == 'nome') {
        if (campo.val().length < 2 || campo.val().match(/[^a-zA-Z0-9]+/g)) {
          campo.addClass('invalido')
          textoAlerta.show()
          return false
        } else {
          campo.removeClass('invalido')
          textoAlerta.hide()
        }
      }
      if (campo.attr('name') == 'email') {
        if (!campo.val().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)) {
          campo.addClass('invalido')
          textoAlerta.show()
          return false
        } else {
          campo.removeClass('invalido')
          textoAlerta.hide()
        }
      }
      campo.removeClass('invalido')
      textoAlerta.hide()
    }
  }


  function ValidaForm(form) {
    let listCampos = $()
  }


  $('body').on('blur', '#nome-input', function (e) {
    e.preventDefault();
    ValidaCampo($(this))

  })

  $('body').on('blur', '#email-input', function (e) {
    e.preventDefault();
    ValidaCampo($(this))
  })

  $('body').on('blur', '#fone-input', function (e) {
    e.preventDefault();
    ValidaCampo($(this))
    $(this).on('keyup', function () {
      $(this).mask('(00)00000-0000')
    })
  })

  $('body').on('blur', '#cep-input', function (e) {
    e.preventDefault();
    ValidaCampo($(this))
    $(this).on('keyup', function () {
      $(this).mask('00000-000')
    })
  })

  $('body').on('blur', '#cidade-input', function (e) {
    e.preventDefault();
    ValidaCampo($(this))
  })

  $('#link-avatar').hover(function () {
    $('#span-avatar').toggleClass('visible')
  })

  


})