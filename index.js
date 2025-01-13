document.querySelector('#formCadastroLogin').addEventListener('submit', function (event) {
    event.preventDefault(); 
    cadastraUsuario(); 
});

function cadastraUsuario() {
  const nomeUsuario = document.querySelector("#nomeUsuario").value;
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  const confirmaSenha = document.querySelector("#confirmaSenha").value;
  const loginObj = { nomeUsuario, email, senha, confirmaSenha };
  console.log("loginObj: ", loginObj);
}
