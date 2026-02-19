let dia = document.getElementById("dia")
let hora = document.getElementById("hora")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")


// let agora  = new Date()

// dia.innerHTML = agora.getDate()
// hora.innerHTML = agora.getHours()
// minutos.innerHTML = agora.getMinutes()
// segundos.innerHTML = agora.getSeconds()

function atualizarRelogio() {
    let agora = new Date()

    dia.innerHTML = agora.getDate()
    hora.innerHTML = agora.getHours()
    minutos.innerHTML = agora.getMinutes()
    segundos.innerHTML = agora.getSeconds()
}


setInterval(atualizarRelogio, 1000)