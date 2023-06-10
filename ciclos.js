function generarSalida() {
    let numero = 1;
    let contador = 1;
  
    for (let i = 1; i <= 12; i++) {
      console.log(numero);
      numero += contador;
      contador++;
    }
  }
  
  generarSalida();
  