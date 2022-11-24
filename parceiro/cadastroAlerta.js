$("#cadastroalerta").on("submit", (event) => {
    var alertas = JSON.parse(localStorage.getItem("alertas"));
    var dadosEstabelecimento = JSON.parse(localStorage.getItem("userData"));
  
    if (!alertas) alertas = [];
    if (dadosEstabelecimento.Tipo != 2)
      ErroERedirect(
        "Você precisa estar autenticado como um estabelecimento parceiro para cadastrar um alerta"
      );
    else {
      dadosAlerta = {
        EmailParceiro: dadosEstabelecimento.Email,
        Titulo: $("#titulo").val(),
        EmailOng: $("#ong option:selected").val(),
        Item: $("#item option:selected").val(),
        Qtd: $("#qtd").val(),
        Descricao: $("#descricao").val(),
        Data: new Date().toLocaleDateString()
      };
      alertas.push(dadosAlerta);
      localStorage.setItem("alertas", JSON.stringify(alertas));
      alert("Alerta enviado com sucesso");
      window.location.href = "alertasParceiro.html";
    }
});

$(window).ready(function () {
    PopulaOngs();
});

$('#ong').on('change', function() {
    PopularItens(this.value);
});

function PopulaOngs () {
    var usuarios = JSON.parse(localStorage.getItem("dadosUsuarios"));
    const ongs = usuarios.filter(v => v.Tipo === 3);

    for(var ong of ongs) {
        $('#ong').append(new Option(ong.Dados.Nome, ong.Email));
    }
}

function PopularItens (emailOng) {
  $('#item')
    .find('option')
    .remove()
    .end()
    .append(new Option("Selecione o item", 0));

    var itens = JSON.parse(localStorage.getItem("itensDoacao"));
    const itensOng = itens.filter(v => v.EmailOng === emailOng);

    for(var item of itensOng) {
        $('#item').append(new Option(item.Nome, item.Id));
    }
}