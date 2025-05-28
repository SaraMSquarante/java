 function somar() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
      const resultado = n1 + n2;
      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }

    function subtrair() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
      const resultado = n1 - n2;
      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }

    function multiplicacao() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
      const resultado = n1 * n2;
      document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }

    function divisao() {
      const n1 = parseFloat(document.getElementById("numero1").value);
      const n2 = parseFloat(document.getElementById("numero2").value);
        if (n2 === 0) {
        document.getElementById("resultado").innerText = "Erro: divisão por zero!";
      } else {
        const resultado = n1 / n2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
      }
    }
  