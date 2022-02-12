var pessoasCru = localStorage.getItem('pessoas')
if (pessoasCru != null) {
    var pessoas = JSON.parse(pessoasCru)
} else {
    var pessoas = [];
}

function desenhaTabela() {

    linhasExistentes = [...document.querySelectorAll('table.lista tbody .conteudo-dinamico')];

    linhasExistentes.forEach(element => {
        element.remove()
    });

    for (pessoa in pessoas) {
        document.querySelector('table.lista tbody').innerHTML +=
            `<tr class="conteudo-dinamico" style="background-color: ${((pessoa % 2 == 0) ? '#fff' : '#eee')}">
                <td>${pessoas[pessoa].name}</td>
                <td>${pessoas[pessoa].tel}</td>
                <td>${pessoas[pessoa].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>'}</td>
                <td>
                    <button onclick="excluirUsuario(${pessoa})"> Excluir </button>
                    <a href="./src/form.html?pessoa=${pessoa}"> Alterar</a>

                    
                </td>
            </tr>`
    }
}

function excluirUsuario(p) {
    pessoas.splice(p, 1);
    desenhaTabela();
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
}

desenhaTabela()