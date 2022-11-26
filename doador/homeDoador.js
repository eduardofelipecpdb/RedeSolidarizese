function AdicionaEventListener(){
    document.addEventListener('click', function (e) {
        if (e.target.closest('#card')) {
            window.location.href = "detalhesItem.html?id=" + e.target.id;
        }
    });
}

