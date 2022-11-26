var usuarios = [
    {
      "Email": "eduardofelipecpdb@gmail.com",
      "Senha": 123,
      "Tipo": 1
    },
    {
      "Email": "josesilva@contoso.com",
      "Senha": 123,
      "Tipo": 2
    },
    {
      "Email": "andrenascimento@contoso.com",
      "Senha": 123,
      "Tipo": 3
    }
  ];
  
  $('#loginForm').on('submit', event => {
    if(!JSON.parse(localStorage.getItem("usuarios")))
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    var loggado = Login();
    if (loggado) {
        localStorage.setItem("lembrarDeMim", $('#lembreDeMim').is(':checked'));
        // alert("Autenticado com sucesso");
        switch(loggado) {
          case 1:
            window.location.href = "../doador/homeDoador.html";
            break;
          case 2:
            window.location.href = "../parceiro/homeParceiro.html";
            break;
          case 3:
            window.location.href = "../ong/homeOng.html";
            break;
          default:
            window.location.href = "ong/homeOng.html";
            break;
        }
    }
    else alert("Login ou senha incorretos");
});

function Login() {
    var email = $('#email').val();
    var senha = $('#senha').val().toString();
    
    for (var usuario of JSON.parse(localStorage.getItem("usuarios"))) {
      if (email == usuario.Email && senha == usuario.Senha)
      {
        var dadosUsuarioAutenticado = {
            "Email": email,
            "Tipo": usuario.Tipo
        }
        localStorage.setItem("userData", JSON.stringify(dadosUsuarioAutenticado));
        return usuario.Tipo;
      }
    }
    return undefined;
  };