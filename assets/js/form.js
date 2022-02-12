function testaFormulario(e) {
    e.preventDefault();

    var fonePattern = /[^0-9-() ]+/g

    if (fonePattern.test(e.target.elements['fone'].value)) {

        alert('Apenas Número São Permitidos no campo Telefone!')
        return false
    }

    if (e.target.elements['fone'].value.replace(/[-() ]/g, '').length < 11) {
        alert('Número inválido')
        return false
    }

    var pessoasCru = localStorage.getItem('pessoas')

    if (pessoasCru != null) {
        var pessoas = JSON.parse(pessoasCru)
    } else {
        var pessoas = [];
    }

    if (id !== null) {
        pessoas[id] = {
            name: e.target.elements['nome'].value,
            tel: e.target.elements['fone'].value,
            xp: (e.target.elements['experiencia'].value == 'true')
        }
    } else {
        pessoas.push({
            name: e.target.elements['nome'].value,
            tel: e.target.elements['fone'].value,
            xp: (e.target.elements['experiencia'].value == 'true')
        })
    }

    localStorage.setItem('pessoas', JSON.stringify(pessoas))
    document.getElementById('goHome').click()
}

var urlPrincipal = new URL(window.location.href)

var id = (urlPrincipal.searchParams.get('pessoa'))

if (id !== null) {
    var pessoasCru = localStorage.getItem('pessoas')
    if (pessoasCru != null) {
        var pessoas = JSON.parse(pessoasCru)
    } else {
        var pessoas = [];
    }
    console.log(pessoas[id])

    document.getElementById('nome').value = pessoas[id].name;
    document.getElementById('fone').value = pessoas[id].tel;
    // document.getElementById('experiencia').value = pessoas[id].xp;
    if (pessoas[id].xp) {
        document.getElementById('experiencia-sim').checked = 'true'
    } else {
        document.getElementById('experiencia-nao').checked = 'true'

    }
}

function testaCampoTelefone(e) {
    e.preventDefault();
    console.log(e);

    if (e.target.value.length == 0) {
        e.target.value += '('
    }

    if (e.target.value.length == 3) {
        e.target.value += ') '
    }

    if (e.target.value.length == 10) {
        e.target.value += '-'
    }

    if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
        e.target.value += e.key;
    }
}