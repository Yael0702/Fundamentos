function resolverEcuacionSegundoGrado(a, b, c) {
    const discriminante = b * b - 4 * a * c;
  
    if (discriminante < 0) {
      return "No existen soluciones reales";
    } else {
      const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
      return `Las soluciones de la ecuación son: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  
  // Ejemplo de uso
  const a = 1;
  const b = -3;
  const c = 2;
  
  const soluciones = resolverEcuacionSegundoGrado(a, b, c);
  console.log(soluciones);