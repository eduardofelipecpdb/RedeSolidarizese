$("#cadastroItem").on("submit", (event) => {
  var dadosOng = JSON.parse(localStorage.getItem("userData"));

  if (!dadosOng)
    ErroERedirect("Você precisa estar autenticado para cadastrar um item");
  else if (dadosOng.Tipo != 3)
    ErroERedirect(
      "Você precisa estar autenticado como uma ong para cadastrar um item"
    );
  else {
    dadosItem = {
      EmailOng: dadosOng.Email,
      Nome: $("#nome").val(),
      NomeOng: getUserName(dadosOng.Email),
      Data: new Date().toLocaleDateString(),
      Qtd: $("#infinito").is(":checked") || !$("#qtd").val() ? 0 : $("#qtd").val(),
      Descricao: $("#descricao").val(),
    };
    Cadastrar(dadosItem);
  }
});

function Cadastrar(dadosItem) {
  var itens = JSON.parse(localStorage.getItem("itensDoacao"));

  if (!itens) {
    itens = [];
    dadosItem.Id = 1;
    itens.push(dadosItem);
  } else {
    itens.sort((a, b) => (a.Id > b.Id ? 1 : -1));
    dadosItem.Id = itens.at(-1).Id + 1;
    itens.push(dadosItem);
  }
  localStorage.setItem("itensDoacao", JSON.stringify(itens));
  SucessoERedirect("Item cadastrado com sucesso");
}

