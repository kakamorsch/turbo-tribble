var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault;
  console.log('buscarei pacientes');
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax")
    if(xhr.status == 200){
      var resposta = xhr.responseText;
      erroAjax.classList.add("invisivel");
      console.log(resposta);
      var pacientes= JSON.parse(resposta);
      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente)
      });
    }else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove("invisivel");
    }

  })
  xhr.send();



});
