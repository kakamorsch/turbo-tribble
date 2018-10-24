var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length; i++){
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdIMC = paciente.querySelector(".info-imc");

  dadosValidos=true;

  if(peso <= 0 || peso >= 1000){
    dadosValidos = false;
    tdIMC.textContent = "Peso inválido.";
    paciente.classList.add("paciente-invalido");
  }

  if(altura <= 0 || altura >= 3.00){
    dadosValidos = false;
    tdIMC.textContent = "Altura inválido.";
    paciente.classList.add("paciente-invalido");
  }
  var imc = peso / (altura * altura);
  if(dadosValidos == true){
    tdIMC.textContent = imc.toFixed(2);
  }
}
