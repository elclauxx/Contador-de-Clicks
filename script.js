const contador = document.getElementById("counter")

const botonMenos1 = document.getElementById("subtract1")
const botonMenos10 = document.getElementById("subtract10")
const botonMenos100 = document.getElementById("subtract100")

const botonRestablecer = document.getElementById("restore")

const botonMas1 = document.getElementById("plus1")
const botonMas10 = document.getElementById("plus10")
const botonMas100 = document.getElementById("plus100")

const input = document.getElementById("inputSet")
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
    if (confirm("¿Restablecer el contador?")) {
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

botonEstablecer.addEventListener("click", () => {
    const valor = Number(input.value)

    if (valor >= 0 && confirm(`Establecer contador de ${numero} a ${valor}?`)) {
        numero = valor
        actualizarContador()
        input.value = ""
    }
})

let teclaPresionada = false

document.addEventListener("keydown", (event) => {
    
    if (document.activeElement === input && event.code !== "Enter") return

    if (teclaPresionada) return

    teclaPresionada = true

    switch(event.code) {
        case "Digit1":
            sumar(1)
            break

        case "Digit2":
            sumar(10)
            break

        case "Digit3":
            sumar(100)
            break

        case "Comma":
            restar(1)
            break

        case "Period":
            restar(10)
            break

        case "Minus":
        case "Slash":
            restar(100)
            break

        case "Escape":
            restablecer()
            break

        case "Enter":
            botonEstablecer.click()
            break
    }
})

document.addEventListener("keyup", () => {
    teclaPresionada = false
})