let display = document.getElementById("display")
var ops = ["+", "-", "*", "/", "="]
function buttons(btn) {
    display.value += btn.value
}

//limpa display
document.getElementById("c").addEventListener('click', () => {
    display.value = ""
})

function calculate() {
    let op
    if (display.value.indexOf("+") != -1) {
        op = "+"
    } if (display.value.indexOf("-") != -1) {
        op = "-"
    }
    if (display.value.indexOf("*") != -1) {
        op = "*"
    }
    if (display.value.indexOf("/") != -1) {
        op = "/"
    }
    console.log(op)
    var operation = display.value.split(op)
    var formattedOperation = operation.map(item => Number(item))
    let total = 0
    switch (op) {
        case "+":
            total = formattedOperation.reduce((a, b) => a + b)
            display.value = total
            console.log(total)
            break;
        case "-":
            total = formattedOperation.reduce((a, b) => a - b)
            display.value = total
            console.log(total)
            break;
        case "*":
            total = formattedOperation.reduce((a, b) => a * b)
            display.value = total
            console.log(total)
            break;
        case "/":
            total = formattedOperation.reduce((a, b) => a / b)
            if(total == Infinity){
                display.value = "Não divida por 0"
                setTimeout(() => display.value="", 1500)
                break
            }
            display.value = total
            console.log(total)
            break;
        default:
            break;
    }

    console.log(operation)
}