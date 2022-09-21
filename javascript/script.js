

const mesaInfo = document.getElementById("mesaInfo")

//adiconar mesa
const addMesa = document.getElementById("addMesa")
addMesa.addEventListener('click', gerarPedido)
function gerarPedido(){
    mesaInfo.style.display = 'block'
}

//fechar campo de adicionar mesa
const fechar = document.getElementById('fechar')
fechar.addEventListener('click', fecharPedido)
function fecharPedido(){
    mesaInfo.style.display = 'none'
}

//gerar mesa
const gerarMesa = document.getElementById('gerarMesa')
var inputMesa = document.getElementById('numeroMesa')
var inputCliente = document.getElementById('nomeCliente')

const ul = document.getElementById('ul')
//const item = document.getElementsByTagName('li') parece q n precisa

function createListElement(){
    var li = document.createElement('li')
    
    
    li.appendChild(document.createTextNode(inputMesa.value))
    li.innerHTML += '<br>'
    li.appendChild(document.createTextNode(inputCliente.value))
    li.innerHTML += `<br>`
    ul.appendChild(li)
    

    var dBtn = document.createElement('button')
    dBtn.appendChild(document.createTextNode('X'))
    li.appendChild(dBtn)
    dBtn.addEventListener('click' , deleteListItem)
    function deleteListItem(){
        li.classList.add('delete')
    }

    var cardapio = document.createElement('button')
    cardapio.appendChild(document.createTextNode('Cardapio'))
    li.appendChild(cardapio)
    cardapio.addEventListener('click' , cardapiolist)

    function cardapiolist(){
        //cardapio
        var burguer = 20
        var pizza = 50
        var refrigerante = 4
        var cardapio = document.getElementById('cardapio')
        var saldo = document.getElementById('saldo')
        var cliente = 0

        
        var botaohamburguer = document.createElement('button')
        botaohamburguer.appendChild(document.createTextNode('adicionar hamb 20$'))
        cardapio.appendChild(botaohamburguer)
        botaohamburguer.addEventListener('click' , hamb)
        function hamb(){
        cliente += burguer
        saldo.innerHTML = `${cliente}`
        console.log(cliente)
        }
        
        var botaopizza = document.createElement('button')
        botaopizza.appendChild(document.createTextNode('adicionar pizza 50$'))
        cardapio.appendChild(botaopizza)
        botaopizza.addEventListener('click' , funcpizza)
        function funcpizza(){
        cliente += pizza
        saldo.innerHTML = `${cliente}`
        console.log(cliente)
        }

    }
}

gerarMesa.addEventListener('click' , addListAfterClick)
function addListAfterClick(){
    if(inputMesa.value === "" || inputCliente.value == "" ){
        //verificar se os campos estao preenchidos
        if(inputMesa.value === "" && inputCliente.value != ""){
            alert("Por favor digite o número da mesa")
        }else if(inputCliente.value === "" && inputMesa.value != ""){
            alert("Por favor digite o nome do cliente")
        }else{
            alert("Por favor digite o número da mesa e o nome do cliente")
        }
    }else{
        createListElement()
        inputMesa.value = ''
        inputCliente.value = ''
    }
}



