class validatePessoa
{
    nome(nome) {
        let re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+[ ][A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]*$/;
        return re.test(nome);
    }

    msg(msg = "Dados inválidos") {
        alert(msg);
        return false;
    }
}

let Pessoa = new validatePessoa

let validarFormulario = (el) => {
    let nome = Pessoa.nome(document.cadastro.nome.value);

    return (!nome) ? Pessoa.msg("Nome inválido. Você deve digitar seu nome e sobrenome \n\nPor exemplo: Michael Douglas") : nome;
}

export { Pessoa, validarFormulario };