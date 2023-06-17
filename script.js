function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var opa = window.document.getElementById('opa')
    var data = new Date()
    var hora = data.getHours()

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var tempo = new Date(), displayDate;
        if (navigator.userAgent.toLowerCase().indexOf('edge') > -1) {
            displayDate = tempo.toLocaleTimeString('pt-BR');
        } else {
            displayDate = tempo.toLocaleTimeString('pt-BR', { timeZone: 'America/Recife'});
        }

        msg.innerHTML = displayDate;

        // hora = 21 // testes

        if (hora >= 0 && hora < 5) { //como resolver o problema de 00h?
            opa.innerText = 'Boa madrugada!'
            img.src = 'fotogada.png'
            document.body.style.background = '#4b262d'
            // 187 185 174 1
        } else if (hora >= 5 && hora < 12) {
            opa.innerText = 'Bom dia!'
            img.src = 'fotomanha.png'
            document.body.style.background = '#55c2db'
            // 214 196 145 1
        } else if (hora >= 12 && hora < 18) {
            opa.innerText = 'Boa tarde!'
            img.src = 'fototarde.png'
            document.body.style.background = '#e5905b'
            // 135 81 57 1
        } else {
            opa.innerText = 'Boa noite!'
            img.src = 'fotonoite.png'
            document.body.style.background = '#262e45'
            // 73 96 108 1
        }
    }
}
