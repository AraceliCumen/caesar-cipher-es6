/* Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
Consideraciones Específicas
Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números */

window.addEventListener('load', () => {
  // Iniciar modal
  $('#modalcif').modal();

  // Creamos una función para evaluar si la letra es mayuscula

  isUpperCase((str)=> {
    return str === str.toUpperCase();
  });

  // Creamos la función para encriptar
  cipher((string)=>{
    // Creamos una variable para obtener la posicion del caracter encriptado
    let encryptedCharacterPosition = 0;
    // Creamos una variable para obtener en caracter encriptado
    let encryptedCharacter = '' ;
    // Creamos una varable para almacenar la palabra encriptada
    let encryptedWord = '' ;
    
    // Válidamos que no se ingresen vacíos ni números
    if (string.length === 0 || containsNumber(string)) {
      return alert('No estas ingresando una cadena, no ingreses campos vacíos ni números');
    } else {
      // Recorremos el string que proporciona el usuario
      for (let i = 0; i < string.length; i++) {
        // Creamos una variable para obtener el codAscci de la letra
        var asciiCode = string.charCodeAt(i);
        // Evaluamos si la letra es mayúscula o minúscula
        if (isUpperCase(string)) {
          // Obtemos el caracter encriptado de la posición i, si es mayuscul
          encryptedCharacterPosition = ((asciiCode - 65 + 33) % 26 + 65);
        } else {
          // Obtemos el caracter encriptado de la posición i, si es minúscula
          encryptedCharacterPosition = ((asciiCode - 97 + 33) % 26 + 97);
        }
        // Obtnempos el caracter de la nueva posición
        encryptedCharacter = String.fromCharCode(encryptedCharacterPosition);
        // Concatenamos los caracteres para formar el nuevo string ya encriptado
        encryptedWord += encryptedCharacter;
      }
      return encryptedWord;
    }
  });

  // Creamos la función para desencriptar
  decipher((string)=>{
    // Creamos una variable para obtener la posicion del caracter encriptado
    let posititionOfTheDecryptedCharacter = 0;
    // Creamos una variable para obtener en caracter encriptado
    let decryptedCharacter = '' ;
    // Creamos una varable para almacenar la palabra encriptada
    let decryptedWord = '' ;
    // Válidamos que no se ingresen vacíos ni números ni vacios
    if (string.length === 0 || containsNumber(string)) {
      return alert('No estas ingresando una cadena, no ingreses campos vacíos ni números');
    } else {
      // Recorremos el string que proporciona el usuario
      for (let i = 0; i < string.length; i++) {
        // Creamos una variable para obtener el codAscci de la letra
        let asciiCode = string.charCodeAt(i);
        // Evaluamos si la letra es mayúscula o minúscula
        if (isUpperCase(string)) {
          // Obtemos el caracter deseencriptado de la posición i, si es mayuscula
          // Evaluamos o condicionamos para que cumpla con  las letras desede la H hasta la Z
          if ((asciiCode - 65 - 33) >= -26) {
            posititionOfTheDecryptedCharacter = ((asciiCode - 65 - 33) + 65 + 26);
            // Evaluamos o condicionamos para que cumpla con las letra que escapan de  la condición anterior: Osea con las letra desde la A  hasta la G
          } else if ((asciiCode - 65 - 33) < - 26) {
            posititionOfTheDecryptedCharacter = ((asciiCode - 65 - 33) + 65 + 26 + 26);
          }
        } else {
          // Obtemos el caracter desencriptado de la posición i, si es minúscula
          if ((asciiCode - 97 - 33) >= -26) {
            posititionOfTheDecryptedCharacter = ((asciiCode - 97 - 33) + 97 + 26);
          } else if ((asciiCode - 97 - 33) < -26) {
            posititionOfTheDecryptedCharacter = ((asciiCode - 97 - 33) + 97 + 26 + 26);
          }
        }
        // Obtnempos el caracter de la nueva posición
        decryptedCharacter = String.fromCharCode(posititionOfTheDecryptedCharacter);
        // Concatenamos los caracteres para formar el nuevo string ya desencriptado
        decryptedWord += decryptedCharacter;
      }
      return decryptedWord;
    }
  });


  // Creamos una función para evaluar siel string es númererico
  containsNumber((string)=>{
    // Creamos una variable result  que retorna false
    let result = false;
    // Recorremos el string
    for (let i = 0; i < string.length; i++) {
      // Declaramos una variable n que va almacenar el caracter de la posición i del string
      let number = string.charAt(i);
      // Retornamos el result
      // con parseFloat(n)--->retornamos el valor numér
      // con !isNaN(parseFloat(n))-->evaluamos que el caracter del parseFloat(n) no se NaN ...osea que necesariamente sea un número
      // con isFinite(n)-->comprobamos que ese caracter es finito
      result = !isNaN(parseFloat(number)) && isFinite(number);
    }
    return result;
  });
});