//Función para calcular la raíz cuadrada de un número
function raizCuadrada(numero) {
    return Math.sqrt(numero);
}
//Función para calcular el exponente de un número
function exponente(base, exponente) {
    return base ** exponente;
}

//Función para calcular el factorial de un número
function factorial(num) {
    var resultado = 1;

    for (var i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
// Función para dividir dos números
function dividir(num1, num2) {
    return num1 / num2;
  }
// Función para multiplicar dos números
function multiplicar(num1, num2) {
    return num1 * num2;
  }


// Función para restar dos números
function restar(num1, num2) {
    return num1 - num2;
  }

// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
// Función principal del programa
function calculadora() {
    var opcion = prompt(
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;
  
    if (opcion !== "5" && opcion !== "7") {
      num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
    switch (opcion) {
        case "1":
          resultado = sumar(num1, num2);
          break;
        case "2":
          resultado = restar(num1, num2);
          break;
        case "3":
          resultado = multiplicar(num1, num2);
          break;
        case "4":
          resultado = dividir(num1, num2);
          break;
        case "5":
          resultado = factorial(num1);
          break;
        case "6":
          var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
          resultado = exponente(num1, exponenteNum);
          break;
        case "7":
          resultado = raizCuadrada(num1);
          break;
        default:
          resultado = "Opción no válida";
          break;
      }
    
      alert("El resultado es: " + resultado);
    
  }
  
  // Llamar a la función principal
  calculadora();
