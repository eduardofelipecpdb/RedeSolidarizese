$(window).ready(function () {
    PreencheDados(GetIdItem());
});

function PreencheDados (id) {
    var itens = JSON.parse(localStorage.getItem("itensDoacao"));
    if(!itens) return false;
    var item = itens.find(obj => {
        return String(obj.Id) === id
    });

    $("#nome").text(item.Nome);
    $("#data").text(item.Data);
    $("#nomeOng").text(item.NomeOng);
    $("#emailOng").text(item.EmailOng);
    $("#descricao").text(item.Descricao);
    $("#qtd").text(item.Qtd == 0 ? "Indeterminada" : item.Qtd);
}

function BuscarParceiros() {
    var id = GetIdItem();
    var vinculos = JSON.parse(localStorage.getItem("vinculosItemParceiro"));

    if(!vinculos) return false;
    var vinculosItem = vinculos.find(obj => {
        return String(obj.Id) === id
    });
    var vinculosFinal = !vinculosItem.length ? new Array(vinculosItem) : vinculosItem;

    var parceiros = JSON.parse(localStorage.getItem("dadosUsuarios"));
    var apoiam = [];

    if(!parceiros) return false;
    for(parceiro of vinculosFinal) {
        var apoia = parceiros.find(obj => {
            return String(obj.Email) === parceiro.Email
        });
        apoiam.push(apoia);
    }
    return apoiam;
}

function GetIdItem () {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
    return params.id;
}