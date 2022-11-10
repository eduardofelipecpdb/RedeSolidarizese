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
  
  $('#entrar').on('click', event => {
    if(!JSON.parse(localStorage.getItem("usuarios")))
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    var loggado = Login();
    if (loggado) {
        localStorage.setItem("lembrarDeMim", $('#lembreDeMim').is(':checked'));
        window.location.href = "../index.html";
    }
    else alert("Login ou senha incorretos");
});

function Login() {
    var email = $('#email').val();
    var senha = $('#senha').val();
    
    for (var usuario of JSON.parse(localStorage.getItem("usuarios"))) {
        console.log(usuario);
      if (email == usuario.Email && senha == usuario.Senha)
      {
        var dadosUsuarioAutenticado = {
            "Email": email,
            "Tipo": usuario.Tipo
        }
        localStorage.setItem("userData", JSON.stringify(dadosUsuarioAutenticado));
        return true;
      }
      return false;
    }
  };