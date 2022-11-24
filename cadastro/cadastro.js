$('#cadastroDoador').on('submit', event => {
    if(verificaSenhas()){
        dadosDoador = {"Nome": $('#nome').val()}
        cadastrar(1, dadosDoador);
    }
});

$('#cadastroParceiro').on('submit', event => {
    if(verificaSenhas()){
        dadosEstabelecimento = {
            "Nome": $('#nome').val(),
            "CNPJ": $('#cnpj').val(),
            "Endereco": $('#endereco').val(),
            "Descricao": $('#descricao').val()
        }
        cadastrar(2, dadosEstabelecimento);
    }
});

$('#cadastroOng').on('submit', event => {
    if(verificaSenhas()){
        dadosOng = {
            "Nome": $('#nome').val(),
            "Descricao": $('#descricao').val()
        }
        cadastrar(3, dadosOng);
    }
});

function verificaSenhas() {
    if($('#senha').val() == $('#repitaSenha').val()) return true;
    else {
        alert("Você digitou duas senhas diferentes");
        return false;
    }
}

function cadastrar(tipoUsuario, dados) {
    email = $('#email').val();
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(!usuarios) usuarios = [];

    for (var usuario of usuarios) {
      if (email == usuario.Email) {
        alert("E-mail já cadastrado");
        return;
      }
    }

    usuarios.push({"Email": email, "Senha": $('#repitaSenha').val(), "Tipo": tipoUsuario});

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    gravaDadosUsuario(email, tipoUsuario, dados);

    alert("Cadastro realizado com sucesso");
    window.location.href = "../login/login.html";
}

function gravaDadosUsuario(email, tipoUsuario, dados) {
    var dadosUsuarios = JSON.parse(localStorage.getItem("dadosUsuarios"));
    if(!dadosUsuarios) dadosUsuarios = [];

    dadosUsuarios.push({"Email": email, "Tipo": tipoUsuario, "Dados": dados});
    localStorage.setItem("dadosUsuarios", JSON.stringify(dadosUsuarios));
}