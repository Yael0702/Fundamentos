function game() {
  var validMoves = ["T", "R", "P"];

  var player1 = prompt("Jugador 1, elige tu jugada (T, R o P):").toUpperCase();
  var player2 = prompt("Jugador 2, elige tu jugada (T, R o P):").toUpperCase();

  switch (player1) {
    case "T":
      switch (player2) {
        case "T":
          return "Empate";
        case "R":
          return "T-R Roca rompe tijeras. Gana el jugador 1";
        case "P":
          return "P-T Papel cubre roca. Gana el jugador 2";
      }
      break;

    case "R":
      switch (player2) {
        case "T":
          return "T-R Roca rompe tijeras. Gana el jugador 2";
        case "R":
          return "Empate";
        case "P":
          return "R-P Roca es cubierta por papel. Gana el jugador 1";
      }
      break;

    case "P":
      switch (player2) {
        case "T":
          return "P-T Papel cubre roca. Gana el jugador 1";
        case "R":
          return "R-P Roca es cubierta por papel. Gana el jugador 2";
        case "P":
          return "Empate";
      }
      break;

    default:
      return "Jugada inválida";
  }
}

alert("¡Bienvenidos al juego de Piedra, Papel o Tijera!");

var resultado = game();
alert(resultado);
