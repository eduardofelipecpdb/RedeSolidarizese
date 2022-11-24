function getUserName (email) {
    var dadosUsuarios = JSON.parse(localStorage.getItem("dadosUsuarios"));
    var result = dadosUsuarios.find(obj => {
        return obj.Email === email
    });
    return result.Dados.Nome;
}

function ErroERedirect(msg) {
    alert(msg);
    window.location.href = "../index.html";
}

function SucessoERedirect(msg) {
    alert(msg);
    window.location.href = "itensCadastrados.html";
}