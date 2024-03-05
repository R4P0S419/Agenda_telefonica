const form = document.getElementById("form-agenda");
const numeros = [];
const nomes = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();


    adicionaLinha();
    atualizaTabela();
    
    
});

function adicionaLinha() {
    const inputNomeUsuario = document.getElementById('nome-usuario');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (numeros.includes(inputNumeroTelefone.value)) {
        alert(`O numero de telefone: ${inputNumeroTelefone.value} ja foi inserido`);
    } else {
        
        nomes.push(inputNomeUsuario.value);
        numeros.push(inputNumeroTelefone.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeUsuario.value}</td>`;
        linha += `<td> ${inputNumeroTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeUsuario.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


