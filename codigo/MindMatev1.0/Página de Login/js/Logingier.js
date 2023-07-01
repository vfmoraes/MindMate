function enviarDados() {
    var nome_completo = document.getElementById("nome_completo").value;
    var cpf = document.getElementById("cpf").value;
    var local_formacao = document.getElementById("local_formacao").value;
    var telefone = document.getElementById("telefone").value;
    var instituicao_medica = document.getElementById("instituicao_medica").value;
    var dados = {
      email: email,
      senha: senha,
      cpf: cpf,
      telefone_para_contato: telefone_para_contato,
      nome_completo: nome_completo
    };
    var jsonString = JSON.stringify(dados);
   
  }
  