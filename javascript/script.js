const addMesa = document.getElementById("addMesa")

function test() {
    const mesaInfo = document.getElementById("mesaInfo")
    const numeroMesa = document.getElementById("numeroMesa").value
    const nomeCliente = document.getElementById("nomeCliente").value

    const pedido = document.createElement('button')
    pedido.type = 'button'
    pedido.innerHTML = 'Pedido';
    

    if(numeroMesa === "" || nomeCliente == "" ){
        //verificar se os campos estao preenchidos
        if(numeroMesa === "" && nomeCliente != ""){
            alert("Por favor digite o número da mesa")
        }else if(nomeCliente === "" && numeroMesa != ""){
            alert("Por favor digite o nome do cliente")
        }else{
            alert("Por favor digite o número da mesa e o nome do cliente")
        }
    }else{
        mesaInfo.innerHTML += `<br> Mesa: ${numeroMesa}`
        mesaInfo.innerHTML += `<br> Cliente: ${nomeCliente}`

        mesaInfo.innerHTML += `<br>` + pedido.outerHTML
    }
    
    

}

addMesa.addEventListener('click', test)