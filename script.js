const contador = document.getElementById("counter")

const botonMenos1 = document.getElementById("subtract1")
const botonMenos10 = document.getElementById("subtract10")
const botonMenos100 = document.getElementById("subtract100")

const botonRestablecer = document.getElementById("restore")

const botonMas1 = document.getElementById("plus1")
const botonMas10 = document.getElementById("plus10")
const botonMas100 = document.getElementById("plus100")

const inputSet = document.getElementById("inputSet")
const botonEstablecer = document.getElementById("set")

let numero = 0

function actualizarContador() {
    contador.textContent = numero;
}

function sumar(valor) {
    numero += valor
    actualizarContador()
}

function restar(valor) {
    if (numero >= valor) {
        numero -= valor
    } else {
        numero = 0
    }

    actualizarContador()
}

function restablecer() {
    if (confirm("¿Seguro que querés restablecer el contador?")) {
        numero = 0
        actualizarContador()
    }
}

botonMas1.addEventListener("click", () => sumar(1))
botonMas10.addEventListener("click", () => sumar(10))
botonMas100.addEventListener("click", () => sumar(100))

botonRestablecer.addEventListener("click", restablecer)

botonMenos1.addEventListener("click", () => restar(1))
botonMenos10.addEventListener("click", () => restar(10))
botonMenos100.addEventListener("click", () => restar(100))