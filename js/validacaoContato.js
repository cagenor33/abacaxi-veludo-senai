//================================================================================
// VALIDAÇÃO DO FORMULÁRIO - CONTATO
//================================================================================

const formContato = document.querySelector('#cadastro_contato')


formContato.addEventListener('submit', (event) => {
        // Parar o envio do formulario
        event.preventDefault();
        const regContato = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const nameContato = document.querySelector("#nomeContato").value;
        const emailContato = document.querySelector("#emailContato").value;
        const mensagemContato = document.querySelector("#sugestao").value;

        if (nameContato == "") {
            alert("O Campo nome é obrigatório");
            //input.className = "error"
            return false;
        }

        if (emailContato == "") {
            alert("O campo e-mail é obrigatório");
            return false;
        }

        if (mensagemContato == "") {
            alert("O campo sugestão é obrigatório");
            return false;
        }

        if (!regContato.test(emailContato)) {
            alert("Esse e-mail não é valido");
            return false;
        }

        return formContato.submit(alert("Seus dados foram enviados com sucesso!"));
    });