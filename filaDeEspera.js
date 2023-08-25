let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes: \n\n" +
      pacientes +
      "Escolha uma ação: \n" +
      "1. Novo paciente\n" +
      "2. Consultar paciente\n" +
      "3. Sair\n"
  );

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Qual o nome do novo paciente? ");
      fila.push(novoPaciente);
      break;
    case "2":
      let pacienteCons = fila.shift();
      if (pacienteCons) {
        alert(pacienteCons + " foi consultado(a)");
      } else {
        alert("Não há pacientes na fila.");
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
