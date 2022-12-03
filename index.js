var usuariosGravar = "[{\"Email\":\"paulo@gmail.com\",\"Senha\":\"paulo\",\"Tipo\":3},{\"Email\":\"irenenobrega@outlook.com.br\",\"Senha\":\"doação\",\"Tipo\":3},{\"Email\":\"joao@gmail.com\",\"Senha\":\"joao\",\"Tipo\":1},{\"Email\":\"techhouse@gmail.com\",\"Senha\":\"techhouse\",\"Tipo\":2}]";
var vinculosItemParceiro = "[{\"Email\":\"techhouse@gmail.com\",\"Id\":\"1\"},{\"Email\":\"techhouse@gmail.com\",\"Id\":\"3\"}]";
var alertas = "[{\"EmailParceiro\":\"techhouse@gmail.com\",\"Titulo\":\"Venha buscar garrafas de agua\",\"EmailOng\":\"paulo@gmail.com\",\"Item\":\"2\",\"Qtd\":\"20\",\"Descricao\":\"Temos 20 garrafas de agua que tiveram vendas baixas, portanto estamos disponibilizando para venda\",\"Data\":\"02/12/2022\"},{\"EmailParceiro\":\"techhouse@gmail.com\",\"Titulo\":\"Venha buscar pães de forma\",\"EmailOng\":\"paulo@gmail.com\",\"Item\":\"1\",\"Qtd\":\"40\",\"Descricao\":\"Possuímos 40 pacotes de pão de forma disponíveis para doação\",\"Data\":\"02/12/2022\"}]";
var dadosUsuarios = "[{\"Email\":\"paulo@gmail.com\",\"Tipo\":3,\"Dados\":{\"Nome\":\"Viver bem\",\"Descricao\":\"Somos focados no auxilio a pessoas carentes e necessitadas que vivem nas ruas.\"}},{\"Email\":\"irenenobrega@outlook.com.br\",\"Tipo\":3,\"Dados\":{\"Nome\":\"Pensando no amanhã \",\"Descricao\":\"Somos focados no auxilio a pessoas com poucos recursos, onde precisam de ajuda. \"}},{\"Email\":\"joao@gmail.com\",\"Tipo\":1,\"Dados\":{\"Nome\":\"João Senna\"}},{\"Email\":\"techhouse@gmail.com\",\"Tipo\":2,\"Dados\":{\"Nome\":\"Tech House\",\"CNPJ\":\"00394494001450\",\"Endereco\":\"Av. José Manoel de Almeida, 165\",\"Descricao\":\"Estabelecimento de techhouse que busca promover o bem estar do próximo. \"}}]";
var lembrarDeMim = false;
var itensDoacao = "[{\"EmailOng\":\"paulo@gmail.com\",\"Nome\":\"Pão \",\"NomeOng\":\"Viver bem\",\"Data\":\"28/11/2022\",\"Qtd\":0,\"Descricao\":\"Estamos precisando de pães para distribuição a pessoas necessitadas. \",\"Id\":1},{\"EmailOng\":\"paulo@gmail.com\",\"Nome\":\"Água Mineral \",\"NomeOng\":\"Viver bem\",\"Data\":\"28/11/2022\",\"Qtd\":0,\"Descricao\":\"Estamos necessitando de água para hidratação de necessitados. \",\"Id\":2},{\"EmailOng\":\"irenenobrega@outlook.com.br\",\"Nome\":\"Macarrão\",\"NomeOng\":\"Pensando no amanhã \",\"Data\":\"28/11/2022\",\"Qtd\":\"10\",\"Descricao\":\"Precisamos da ajuda com macarrão para ação beneficente.\",\"Id\":3},{\"EmailOng\":\"irenenobrega@outlook.com.br\",\"Nome\":\"Óleo \",\"NomeOng\":\"Pensando no amanhã \",\"Data\":\"28/11/2022\",\"Qtd\":\"15\",\"Descricao\":\"Precisamos de óleo para ação beneficente.\",\"Id\":4}]";

$(window).ready(function () {
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    if(!usuarios){
        console.log("Gravando dados");
        localStorage.setItem("usuarios", usuariosGravar);
        localStorage.setItem("vinculosItemParceiro", vinculosItemParceiro);
        localStorage.setItem("alertas", alertas);
        localStorage.setItem("dadosUsuarios", dadosUsuarios);
        localStorage.setItem("lembrarDeMim", lembrarDeMim);
        localStorage.setItem("itensDoacao", itensDoacao);
    }
});