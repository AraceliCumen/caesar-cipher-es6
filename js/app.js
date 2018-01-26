$(document).ready(function() {
  // Función para convertir a mayusculas
  const isCapital = text => text === text.toUpperCase();
  

  // Función para comprobar números
  const isNumber = (text) => {
    let cont = true;
    for (let i = 0, len = text.length; i < len; i++) {
      if (isNaN(text[i]) === false) {
        cont = false;
        i = len;
      }
    }
    return cont;
  }; 

  // Capturamos el boton para cifrar
  $('#btn-cif').click(() => {
    chiper();
  });

  // capturamos el boton para decifrar
  $('#btn-decif').click(() => {
    dechiper();
  });

  // función para encriptar
  const chiper = () =>{
    let input = $('#input-cif').val().trim();
    if (input.length !== 0 && isNumber(input)) {
      let stringEncripted = '', position, characterEncripted;
      for (let i = 0, len = input.length; i < len; i++) {
        let codAscci = input.charCodeAt(i);
        if (isCapital(input)) {
          position = ((codAscci - 65 + 33) % 26 + 65);
        } else {
          position = ((codAscci - 97 + 33) % 26 + 97);
        }
        characterEncripted = String.fromCharCode(position);
        stringEncripted += characterEncripted;
      }
      $('#result').text('La palabra encriptada es : ' + stringEncripted);
    } else {
      $('#error').text('No estas ingresando una cadena, no ingreses campos vacíos ni números');
    }
  };

  // función para desencriptar
  const dechiper = () =>{
    var input = $('#input-cif').val().trim();
    if (input.length !== 0 && isNumber(input)) {
      var stringDescripted = '', position, caracterDes;
      for (let i = 0, len = input.length; i < len; i++) {
        let codAscci = input.charCodeAt(i);
        if (isCapital(input)) {
          position = (codAscci - 65 - 33 % 26 + 65);
        } else {
          position = (codAscci - 97 - 33 % 26 + 97);
        }
        caracterDes = String.fromCharCode(position);
        stringDescripted += caracterDes;
      }
      $('#result').text('La palabra desencriptada es : ' + stringDescripted);
    } else {
      $('#error').text('No estas ingresando una cadena, no ingreses campos vacíos ni números');
    }
  };
});