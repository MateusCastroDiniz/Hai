const botao_add_carrinho = document.getElementsByClassName("add-carrinho-btn")
const mensagem_carrinho_sucesso = document.getElementById('carrinho-sucess')

for(let i=0; i<botao_add_carrinho.length;i++){
if (botao_add_carrinho[i]) {
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(mensagem_carrinho_sucesso)
  botao_add_carrinho[i].addEventListener('click', () => {
    toastBootstrap.show()
    mensagem_carrinho_sucesso.classList.add("d-flex")
  })
}}

const btn_envia_msg = document.getElementsByClassName("btn-envia-mensagem")
const msg_sucess = document.getElementById('mensagem-sucesso')

for(let i=0; i<btn_envia_msg.length;i++){
if (btn_envia_msg[i]) {
  let toastBootstrap = bootstrap.Toast.getOrCreateInstance(msg_sucess)
  btn_envia_msg[i].addEventListener('click', () => {
    toastBootstrap.show()
    msg_sucess.classList.add("d-flex")
  })
}}
