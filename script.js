// Captura os elementos do HTML através dos IDs
const form = document.getElementById("formEmail");
const emailInput = document.getElementById("emailInput");
const mensagem = document.getElementById("mensagem");

// Adiciona um "ouvinte" para o evento de envio (submit) do formulário
form.addEventListener("submit", function (event) {
    // Evita que a página recarregue ao submeter o formulário
    event.preventDefault();

    // Pega o valor digitado e remove espaços em branco nas pontas
    const valorEmail = emailInput.value.trim();

    // Expressão Regular (RegEx) para validar a estrutura do e-mail (usuario@dominio.com)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validações e tratamentos dos casos
    if (valorEmail === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "O campo de e-mail não pode estar vazio.";
    } else if (!regexEmail.test(valorEmail)) {
        mensagem.style.color = "orange";
        mensagem.textContent =
            "E-mail inválido! A estrutura correta deve conter um nome de usuário, o caractere '@' e um domínio (ex: usuario@provedor.com).";
    } else {
        mensagem.style.color = "green";
        mensagem.textContent = "Sucesso! O e-mail foi preenchido corretamente.";
    }
});
