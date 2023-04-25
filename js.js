function contar() {
    var inicio = document.getElementById('inumero1')
    var fim = document.getElementById('inumero2')
    var passo = document.getElementById('ipasso')
    var res = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        
    } else {
        res.innerHTML = "Contando:  <br>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerar PASSO 1")
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}	`
            }
        } else {
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{27A1}`
            }
        } 
        res.innerHTML += `\u{2611}`
    }
}

