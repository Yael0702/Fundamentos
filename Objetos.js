var objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
  };
  
  var propiedad = "propiedad1";
  
  console.log(objeto.propiedad1);  // Acceso con notación de punto, imprime "valor1"
  console.log(objeto["propiedad1"]);  // Acceso con notación de corchetes y comillas, imprime "valor1"
  console.log(objeto[propiedad]);  // Acceso con notación de corchetes y variable, imprime "valor1"
  
  console.log(objeto.propiedad2);  // Acceso con notación de punto, imprime "valor2"
  console.log(objeto["propiedad2"]);  // Acceso con notación de corchetes y comillas, imprime "valor2"
  console.log(objeto[propiedad2]);  // Acceso con notación de corchetes y variable no definida, devuelve un error
  