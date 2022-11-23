function CheckSeEstaVinculado (id) {
    var vinculos = JSON.parse(localStorage.getItem("vinculosItemParceiro"));
    var dadosParceiro = JSON.parse(localStorage.getItem("userData"));

    if(!vinculos) return false;
    var result = vinculos.find(obj => {
        return obj.Email === dadosParceiro.Email && obj.Id === id
    });
    if (result) return true;
}

function AlternaVinculo(idItem) {
    var vinculos = JSON.parse(localStorage.getItem("vinculosItemParceiro"));
    var dadosParceiro = JSON.parse(localStorage.getItem("userData"));
    
    if(!vinculos) vinculos = [];

    if(CheckSeEstaVinculado(idItem)) {
        for(var item in vinculos) {
            if(item.Id = idItem) {
                vinculos.pop(item);
            }
        }
    }
    else{
        var dadosVinculo = {
            Email: dadosParceiro.Email,
            Id: idItem
        }
        vinculos.push(dadosVinculo);
    }
    localStorage.setItem("vinculosItemParceiro", JSON.stringify(vinculos));
    $("#" + idItem).text(setVinculoText(idItem));
}

function AdicionaEventListener(){
    document.addEventListener('click', function (e) {
        if (e.target.closest('#card')) {
            AlternaVinculo(e.target.id);
        }
    });
}

function setVinculoText (idItem) {
    return CheckSeEstaVinculado(idItem) ? "Vinculado ✔️" : "Não vinculado ⚠️";
}

