let pilha = [];
let opcao = "";

do {
  card = "";
  for (i = 0; i < pilha.length; i++) {
    card += i + 1 + "° - " + pilha[i] + "\n";
  }

  opcao = prompt(
    "Cards: " +
      pilha.length +
      "\n" +
      card +
      "\n" +
      "Escolha uma opção: \n" +
      "1. Adicionar uma carta\n" +
      "2. Puxar uma carta\n" +
      "3. Sair\n"
  );

  switch (opcao) {
    case "1":
      let cardADC = prompt("Qual o card adicionado? ");
      pilha.unshift(cardADC);
      break;
    case "2":
      let cardPUX = pilha.shift();
      if (!cardPUX) {
        alert("Não há card para remover do topo.");
      } else {
        alert(cardPUX + " foi retirado do topo do baralho");
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção Inválida");
  }
} while (opcao !== "3");
