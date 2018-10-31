var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault;
  console.log('buscarei pacientes');
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    console.log(resposta);
    var pacientes= JSON.parse(resposta);
    pacientes.forEach(function(paciente){
      adicionaPacienteNaTabela(paciente)
    });

  })
  xhr.send();



});
