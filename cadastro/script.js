  function cadastrar() {
            // Captura dos valores
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const idade = document.getElementById('idade').value;
            const endereco = document.getElementById('endereco').value;

            // Validação simples
            if (nome === '' || email === '' || idade === '' || endereco === '') {
                document.getElementById('resultado').style.color = 'red';
                document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos.';
            } else {
                // Exibição da mensagem
                const mensagem = `Usuário cadastrado: ${nome} (${email}), ${idade} anos, endereço: ${endereco}.`;
                document.getElementById('resultado').style.color = 'green';
                document.getElementById('resultado').innerText = mensagem;

               
            }
        }