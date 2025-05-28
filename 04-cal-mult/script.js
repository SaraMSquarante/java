function multiplicaçao() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
      const resultado = n1 * n2;
      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }
  