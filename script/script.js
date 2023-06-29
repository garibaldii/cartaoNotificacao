function parte_2() {
    var input = document.getElementById("input_email");
    var posicao_quadrado_branco = document.getElementById("container_all");
    var mensagem = document.getElementById("parte_2");
    var mensagem_erro = document.getElementById("mensagem_erro");

    if (!validar_email(input.value)) {
        mensagem_erro.style.display = 'block';
        input.style.borderColor = 'red';
        input.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        return;
    }

    mensagem_erro.style.display = 'none';
    input.style.borderColor = '';
    input.style.backgroundColor = ''

    posicao_quadrado_branco.style.display = 'none';
    mensagem.style.display = 'flex';

    document.getElementById("conteudo_parte_2").innerHTML = `A confirmation email has been sent to ${input.value}. Please open it and click the button inside to confirm your subscription.`;
}

function validar_email(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
