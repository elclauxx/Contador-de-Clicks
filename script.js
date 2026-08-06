const contador = document.getElementById("counter")

const botonMenos1 = document.getElementById("subtract1")
const botonMenos10 = document.getElementById("subtract10")
const botonMenos100 = document.getElementById("subtract100")

const botonRestablecer = document.getElementById("restore")

const botonMas1 = document.getElementById("plus1")
const botonMas10 = document.getElementById("plus10")
const botonMas100 = document.getElementById("plus100")

const botonEstablecer = document.getElementById("set")

let numero = 0

function actualizarContador() {
    contador.textContent = numero;
}

// RESTAS

function restar1() {
    botonMenos1.addEventListener("click", () => {
        if (numero > 0) {
            numero--
            actualizarContador()
        }
    })
}

function restar10() {
    botonMenos10.addEventListener("click", () => {
        if (numero > 0 && numero >= 10) {
            numero -= 10
            actualizarContador()
        } else {
            numero = 0
            actualizarContador()
        }
    })
}

function restar100() {
    botonMenos100.addEventListener("click", () => {
        if (numero > 0 && numero >= 100) {
            numero -= 100
            actualizarContador()
        } else {
            numero = 0
            actualizarContador()
        }
    })
}

// SUMAS

function sumar1() {
    botonMas1.addEventListener("click", () => {
        numero++
        actualizarContador()
    })
}

function sumar10() {
    botonMas10.addEventListener("click", () => {
        numero += 10
        actualizarContador()
    })
}

function sumar100() {
    botonMas100.addEventListener("click", () => {
        numero += 100
        actualizarContador()
    })
}

// RESTABLECER & ESTABLECER

function restablecer() {
    botonRestablecer.addEventListener("click", () => {
        let confirmar = window.confirm("¿Seguro que queres reiniciar el contador?")
        if (!confirmar) {
            // Deja el contador igual
        } else {
            numero = 0
            actualizarContador()
        }
    })
}

// CODIGO PRINCIPAL
let teclaUno = false
let teclaDos = false
let teclaTres = false
let teclaEsc = false
let teclaComa = false
let teclaPunto = false
let teclaMenos = false


// TECLA 1 + 1
document.addEventListener("keydown", () => {
    if (event.code === "Digit1" && !teclaUno) {
        numero++
        actualizarContador()
        teclaUno = true
    }

    document.addEventListener("keyup", () => {
        if (event.code === "Digit1") {
            teclaUno = false
        }
    })
})

// TECLA 2 + 10
document.addEventListener("keydown", () => {
    if (event.code === "Digit2" && !teclaDos) {
        numero += 10
        actualizarContador()
        teclaDos = true
    }

    document.addEventListener("keyup", () => {
        if (event.code === "Digit2") {
            teclaDos = false
        }
    })
})

// TECLA 3 + 100
document.addEventListener("keydown", () => {
    if (event.code === "Digit3" && !teclaTres) {
        numero += 100
        actualizarContador()
        teclaTres = true
    }
    document.addEventListener("keyup", () => {
        if (event.code === "Digit3") {
            teclaTres = false
        }
    })
})

// RESTABLECER
document.addEventListener("keydown", () => {
    if (event.code === "Escape" && !teclaEsc) {
        numero = 0
        actualizarContador()
        teclaEsc = true
    }
    document.addEventListener("keyup", () => {
        if (event.code === "Escape") {
            teclaEsc = false
        }
    })
})

// TECLA , -1
document.addEventListener("keydown", () => {
    if (event.code === "Comma" && !teclaComa) {
        if (numero > 0) {
            numero--
            actualizarContador()
            teclaComa = true
        }
    }
    document.addEventListener("keyup", () => {
        if (event.code === "Comma") {
            teclaComa = false
        }
    })
})

// TECLA . -10
document.addEventListener("keydown", () => {
    if (event.code === "Period" && !teclaPunto) {
        if (numero > 0 && numero >= 10) {
            numero -= 10
            actualizarContador()
            teclaPunto = true
        } else {
            numero = 0
            actualizarContador()
            teclaPunto = true
        }
    }
    document.addEventListener("keyup", () => {
        if (event.code === "Period") {
            teclaPunto = false
        }
    })
})

// TECLA - -100
document.addEventListener("keydown", () => {
    if (event.code === "Slash" || event.code === "Minus" && !teclaMenos) {
        if (numero > 0 && numero >= 100) {
            numero -= 100
            actualizarContador()
            teclaMenos = true
        } else {
            numero = 0
            actualizarContador()
            teclaMenos = true
        }
    }
    document.addEventListener("keyup", () => {
        if (event.code === "Slash" || event.code === "Minus") {
            teclaMenos = false
        }
    })
})