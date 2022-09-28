/*
var addpedido = document.getElementById('addpedido')

addpedido.addEventListener('click', botaomais)

function botaomais(){
    const menucliente = document.getElementById('menucliente')
    menucliente.classList.toggle('ativar')
    addpedido.classList.toggle('delete')
    console.log('funcionando')
}

var cancelar = document.getElementById('cancelar')

cancelar.addEventListener('click', cancelarcriacaomesa)

function cancelarcriacaomesa(){
    const menucliente = document.getElementById('menucliente')
    menucliente.classList.toggle('ativar')
    addpedido.classList.toggle('delete')
}

var buttonadicionarmesa = document.getElementById('buttonadicionarmesa')

buttonadicionarmesa.addEventListener('click', addmesa )

function addmesa(){
    const numbermesa = document.getElementById('numbermesa').value
    const namemesa = document.getElementById('namemesa').value
    const res = document.getElementById('res')
    const menucliente = document.getElementById('menucliente')
    menucliente.classList.toggle('ativar')
    res.innerHTML = `Número da mesa: ${numbermesa}<br>Nome do cliente: ${namemesa} <br>`
    var btncardapio = document.createElement('button')
    btncardapio.appendChild(document.createTextNode('Cardapio'))
    res.appendChild(btncardapio)
    btncardapio.addEventListener('click' , cardapiolist)
    function cardapiolist(){
        var cardapio = document.getElementById('cardapio')
        cardapio.classList.toggle('ativar')
        
        
        let eu = 0
    }
    

}
function addmucarela(){
    console.log('asdas')
}


var menuCardapio = {
    mucarela:23,
    calabresa:25,
    portuguesa:28,
    frango:30,
    fragocatupiry:35
}





var cliente = []
var pizza = document.getElementById('pizza')

pizza.addEventListener('click', btnpizza)
     function btnpizza(){
        pizza = 5
        cliente[0] = pizza
        console.log(cliente[0])
    }


var btn = document.getElementById('btn')
btn.addEventListener('click', btnfunc)
function btnfunc(){
    var nome = document.getElementById('nome').value
    nome =  parseInt(nome);
    let sum = 0;
    cliente.push(nome)
    for (let i = 0; i < cliente.length; i++) {
        sum += cliente[i];
    }
    
    
    
    console.log(cliente)
    console.log(sum);
}



/*
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
<div id="menucliente">
                    <input type="number" name="" id="numbermesa" placeholder="Digite o número da mesa:">
                    <input type="text" name="" id="namemesa" placeholder="Digite o nome do cliente:">
                    <div>
                        <button id="buttonadicionarmesa">
                            Adicionar Mesa
                        </button>
                        <button id="cancelar">
                            cancelar
                        </button>
                    </div>
                    
                </div>
                <ul id="cardapio">
                    <br>
                        <li>
                            <p>
                                Muçarela.................23$
                                <button onclick="addmucarela()">
                                    +
                                </button>
                                <button clas="removemucarela">
                                    -
                                </button>
                            </p>
                        </li>
                    <br>
                        <li>
                            <p>
                                Calabresa................25$
                                <button class="addcalabresa">
                                    +
                                </button>
                                <button class="removecalabresa">
                                    -
                                </button>
                            </p>
                        </li>
                    <br>
                        <li>
                            <p>
                                Portuguesa...............28$
                                <button class="addportuguesa">
                                    +
                                </button>
                                <button class="removeportuguesa">
                                    -
                                </button>
                            </p>
                        </li>
                    <br>
                        <li>
                            <p>
                                Frango...................30$
                                <button class="addfrango">
                                    +
                                </button>
                                <button class="removefrango">
                                    -
                                </button>
                            </p>
                        
                        </li>
                    <br>
                        <li>
                            <p>
                                Frango com catupiry......35$
                                <button class="addfrangocatupiry">
                                    +
                                </button>
                                <button class="removefrangocatupiry">
                                    -
                                </button>
                            </p>
                        </li>
                </ul>
            </div>
*/

const adicionarpedido = document.getElementById("addmesa") //button add mesa no html
var menuCardapio = {
    mussarela:23,
    calabresa:25,
    portuguesa:28
}
    var caixares = document.getElementById('caixa')
    var caixa = 0
    

function functionaddpedido(){
    var main = document.getElementById('main')//onde os elementos criados serao colocados
    var div = document.createElement('div')//criaçap de div
    var divheader = document.createElement('div')
    div.appendChild(divheader)
    divheader.classList.add('divheader')
    //div.textContent = 'mesa' //text dentro da mesa
    div.classList.add('mesa')//add classe mesa para style
    main.appendChild(div)//div adicionada ao espaço main
    var btntrocarmesa = document.createElement('button')
    divheader.appendChild(btntrocarmesa)
    btntrocarmesa.classList.add('btntrocarmesa')
    //btntrocarmesa.addEventListener('click', trocarmesa)
    //function trocarmesa(){}
    var btnfechar = document.createElement('button')//criaçao do button fechar
    btnfechar.appendChild(document.createTextNode('X'))//text no botton fechar
    divheader.appendChild(btnfechar)//adiconando o button na div
    btnfechar.classList.add('btnfechar')//adicionando style ao button
    btnfechar.addEventListener('click', fechar)//function ao click no btn fechar
    function fechar(){
        div.classList.add('delete')//class para display none para remover a mesa
    }
    //criaçao dos inputs
    let inputnumber = document.createElement('input')
    inputnumber.type = 'number'
    inputnumber.id = 'inputnumber'
    inputnumber.placeholder = 'Digite o número da mesa:'
    inputnumber.className = 'inputstyle'//para style
    div.appendChild(inputnumber)

    let inputname = document.createElement('input')
    inputname.type = 'text'
    inputname.id = 'inputname'
    inputname.placeholder = 'Digite o nome:'
    inputname.className = 'inputstyle' //para style
    div.appendChild(inputname)

    //botao adicionar informaçoes
    var btnaddinfo = document.createElement('button')
    div.appendChild(btnaddinfo)
    btnaddinfo.classList.add('btnaddinfo')
    
    btnaddinfo.addEventListener('click', addinfo)
    function addinfo(){
        
        if(inputnumber.value == '' && inputname. value == ''){
            alert('por favor coloque o numero e nome na mesa')
        }else if(inputnumber.value == ''){
            alert('por favor coloque um numero na mesa')
        }else if(inputname.value == ''){
            alert('por favor coloque um nome da mesa')
        }else{
            div.classList.add('mesaheight')
            var p1 = document.createElement('p')
            var p2 = document.createElement('p')
            p1.appendChild(document.createTextNode('Mesa n°: ' + inputnumber.value))
            p2.appendChild(document.createTextNode(inputname.value))
            div.appendChild(p1)
            div.appendChild(p2)
            p1.classList.add('titulodamesa')
            p2.classList.add('titulodamesa')

            inputnumber.classList.add('delete')
            inputname.classList.add('delete')
            btnaddinfo.classList.add('delete')

            var abrircardapio = document.createElement('button')
            abrircardapio.appendChild(document.createTextNode('Abrir Menu:'))
            abrircardapio.classList.add('abrircardapio')
            div.appendChild(abrircardapio)
            abrircardapio.addEventListener('click', abrircardapiofunc)

            var divres = document.createElement('div')
            divres.classList.add('valor-do-pedido')
            var clientevalor = 0
            
            div.appendChild(divres)
            divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

            var divpedidos = document.createElement('div')
            div.appendChild(divpedidos)


            function abrircardapiofunc(){
                
                const ul = document.createElement('ul')
                const li = document.createElement('li')
                const li1 = document.createElement('li')
                const li2 = document.createElement('li')
                const li3 = document.createElement('li')
                const li4 = document.createElement('li')
                main.appendChild(ul)

                ul.classList.add('cardapio')
                ul.appendChild(li)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)

                
                
                li1.appendChild(document.createTextNode(`Cardapio`))
                li2.appendChild(document.createTextNode(`Pizza Mussarela.................23,00$`))
                li3.appendChild(document.createTextNode('Pizza Calabresa.................25,00$'))
                li4.appendChild(document.createTextNode('Pizza Portuguesa................28,00$'))

                //add pizza mussarela
                var btnaddmussarela = document.createElement('button')
                btnaddmussarela.appendChild(document.createTextNode('+'))
                li2.appendChild(btnaddmussarela)
                
                

                btnaddmussarela.addEventListener('click', btnaddmussarelafunc)
                function btnaddmussarelafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.mussarela
                    clientevalor =  parseInt(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor)
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Mussarela .....${menuCardapio.mussarela.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovermussarela = document.createElement('button')
                    btnremovermussarela.appendChild(document.createTextNode('X'))
                    btnremovermussarela.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovermussarela)

                    btnremovermussarela.addEventListener('click' , removemussarela)
                    function removemussarela(){
                        clientevalor -= menuCardapio.mussarela
                        console.log(clientevalor)
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }

                //add pizza calabresa
                var btnaddcalabresa = document.createElement('button')
                btnaddcalabresa.appendChild(document.createTextNode('+'))
                li3.appendChild(btnaddcalabresa)
                
                btnaddcalabresa.addEventListener('click', btnaddcalabresafunc)
                function btnaddcalabresafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.calabresa
                    clientevalor =  parseInt(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor)
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Calabresa .....${menuCardapio.calabresa.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovercalabresa = document.createElement('button')
                    btnremovercalabresa.appendChild(document.createTextNode('X'))
                    btnremovercalabresa.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovercalabresa)

                    btnremovercalabresa.addEventListener('click' , removemussarela)
                    function removemussarela(){
                        clientevalor -= menuCardapio.calabresa
                        console.log(clientevalor)
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //add pizza portuguesa
                var btnaddportuguesa = document.createElement('button')
                btnaddportuguesa.appendChild(document.createTextNode('+'))
                li4.appendChild(btnaddportuguesa)
                
                btnaddportuguesa.addEventListener('click', btnaddportuguesafunc)
                function btnaddportuguesafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.portuguesa
                    clientevalor =  parseInt(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor)
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Portuguesa ....${menuCardapio.portuguesa.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremoveportuguesa = document.createElement('button')
                    btnremoveportuguesa.appendChild(document.createTextNode('X'))
                    btnremoveportuguesa.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremoveportuguesa)

                    btnremoveportuguesa.addEventListener('click' , removemussarela)
                    function removemussarela(){
                        clientevalor -= menuCardapio.portuguesa
                        console.log(clientevalor)
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }




                //fechar modal do cardapio
                var fecharcardapio = document.createElement('button')
                fecharcardapio.appendChild(document.createTextNode('X'))
                li.appendChild(fecharcardapio)
                fecharcardapio.classList.add('btnfechar')

                fecharcardapio.addEventListener('click', fecharcardapiofunc)
                function fecharcardapiofunc(){
                    ul.classList.add('delete')
                }

                
                
            }
            
            
            
            var divpagar = document.createElement('div')
            var btnpagar = document.createElement('button')
            div.appendChild(divpagar)
            divpagar.appendChild(btnpagar)
            btnpagar.classList.add('pagar')
            
            btnpagar.addEventListener('click' , pagar)
            function pagar(){
                
                caixa += clientevalor 
                caixares.innerHTML = `${caixa.toFixed(2)}$`
                div.classList.add('delete')
            }
        }
        
    }


}


adicionarpedido.addEventListener('click', functionaddpedido)