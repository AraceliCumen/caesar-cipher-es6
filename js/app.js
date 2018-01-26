$(document).ready(function() {
  const isCapital = (text) => {
    return text === text.toUpperCase();
  };

  const isNumber = (text) => {
    var cont = true;
    for (let i = 0, len = text.length; i < len; i++) {
      if (isNaN(text[i]) === false) {
        cont = false;
        i = len;
      }
    }
    return cont;
  }; 

  $('#encriptar').click(function() {
    var palabra = $('#palabra').val().trim();
    if (palabra.length !== 0 && isNumber(palabra)) {
      var palabraEncriptada = '', posicion, caracterEncriptado;
      for (let i = 0, len = palabra.length; i < len; i++) {
        let codigoAscci = palabra.charCodeAt(i);
        if (isCapital(palabra)) {
          posicion = ((codigoAscci - 65 + 33) % 26 + 65);
        } else {
          posicion = ((codigoAscci - 97 + 33) % 26 + 97);
        }
        caracterEncriptado = String.fromCharCode(posicion);
        palabraEncriptada += caracterEncriptado;
      }
      $('#resultado').text('La palabra encriptada es : ' + palabraEncriptada);
    } else {
      alert('Ingresar palabra de forma correcta');
    }
  });

  $('#desencriptar').click(function() {
    var palabra = $('#palabra').val().trim();
    if (palabra.length !== 0 && isNumber(palabra)) {
      var palabraDes = '', posicion, caracterDes;
      for (let i = 0, len = palabra.length; i < len; i++) {
        let codigoAscci = palabra.charCodeAt(i);
        if (isCapital(palabra)) {
          posicion = (codigoAscci - 65 - 33 % 26 + 65);
        } else {
          posicion = (codigoAscci - 97 - 33 % 26 + 97);
        }
        caracterDes = String.fromCharCode(posicion);
        palabraDes += caracterDes;
      }
      $('#resultado').text('La palabra desencriptada es : ' + palabraDes);
    } else {
      alert('Ingresar palabra de forma correcta');
    }
  });
});