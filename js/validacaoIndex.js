//================================================================================
// VALIDAÇÃO DO ENVIU DO E-MAIL - NEWSLATER
//================================================================================

const form = document.querySelector('#cadastro')

form.addEventListener('submit', (event) => {
  // Parar o envio do formulario
    event.preventDefault()
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    const email = document.querySelector("#email").value;

    if(email == ""){
      alert("O campo e-mail é obrigatório")
      return false
    }
    
    if(!reg.test(email)){
      alert("Esse e-mail não é valido")
      return false
    }

    return form.submit(alert("Seus dados foram enviados com sucesso!"))
});