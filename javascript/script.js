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
    mucarela:23,
    calabresa:25
}


function functionaddpedido(){
    var main = document.getElementById('main')//onde os elementos criados serao colocados
    var div = document.createElement('div')//criaçap de div
    //div.textContent = 'mesa' //text dentro da mesa
    div.classList.add('mesa')//add classe mesa para style
    main.appendChild(div)//div adicionada ao espaço main
    var btnfechar = document.createElement('button')//criaçao do button fechar
    btnfechar.appendChild(document.createTextNode('X'))//text no botton fechar
    div.appendChild(btnfechar)//adiconando o button na div
    btnfechar.classList.add('btnfechar')//adicionando style ao button
    btnfechar.addEventListener('click', fechar)//function ao click no btn fechar
    function fechar(){
        div.classList.add('delete')//class para display none para remover a mesa
    }
    //criaçao dos inputs
    let inputnumber = document.createElement('input')
    inputnumber.type = 'number'
    inputnumber.id = 'inputnumber'
    inputnumber.className = 'teststyle'//para style
    div.appendChild(inputnumber)

    let inputname = document.createElement('input')
    inputname.type = 'text'
    inputname.id = 'inputname'
    inputname.className = 'teststyle' //para style
    div.appendChild(inputname)

    //botao adicionar informaçoes
    var btnaddinfo = document.createElement('button')
    btnaddinfo.appendChild(document.createTextNode('Adicionar informações'))
    div.appendChild(btnaddinfo)
    btnaddinfo.addEventListener('click', addinfo)
    function addinfo(){
        
        if(inputnumber.value == '' && inputname. value == ''){
            alert('por favor coloque o numero e nome na mesa')
        }else if(inputnumber.value == ''){
            alert('por favor coloque um numero na mesa')
        }else if(inputname.value == ''){
            alert('por favor coloque um nome da mesa')
        }else{
            var p1 = document.createElement('p')
            var p2 = document.createElement('p')
            p1.appendChild(document.createTextNode(inputnumber.value))
            p2.appendChild(document.createTextNode(inputname.value))
            div.appendChild(p1)
            div.appendChild(p2)

            

            inputnumber.classList.add('delete')
            inputname.classList.add('delete')
            btnaddinfo.classList.add('delete')

            var abrircardapio = document.createElement('button')
            abrircardapio.appendChild(document.createTextNode('Abrir Cardapio'))
            div.appendChild(abrircardapio)
            abrircardapio.addEventListener('click', abrircardapiofunc)
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
                li2.appendChild(document.createTextNode(`Mussarela.................23,00$`))
                li3.appendChild(document.createTextNode('Calabresa'))
                li4.appendChild(document.createTextNode('Portuguesa'))

                //add pizza mucarela
                var btnaddmucarela = document.createElement('button')
                btnaddmucarela.appendChild(document.createTextNode('+'))
                li2.appendChild(btnaddmucarela)

                btnaddmucarela.addEventListener('click', btnaddmucarelafunc)
                function btnaddmucarelafunc(){
                    
                    
                    clientevalor += menuCardapio.mucarela
                    clientevalor =  parseInt(clientevalor);
                    

                    console.log(clientevalor)
                    var p3 = document.createElement('p')
                    p3.appendChild(document.createTextNode(`Pizza Mucarela .....${menuCardapio.mucarela.toFixed(2)}$`))
                    div.appendChild(p3)
                    //imprimir resultado, criar uma div abaixo que vai manter o resultado atualizado


                }






                var fecharcardapio = document.createElement('button')
                fecharcardapio.appendChild(document.createTextNode('X'))
                li.appendChild(fecharcardapio)
                fecharcardapio.classList.add('btnfechar')

                fecharcardapio.addEventListener('click', fecharcardapiofunc)
                function fecharcardapiofunc(){
                    ul.classList.add('delete')
                }

                
                
                

                

                
            }
            
            
            var clientevalor = []
            
            
            
            
            
            
            
            
        }
        
    }


}
function addmucarela(){
    console.log('mussarela adicionada')
}

adicionarpedido.addEventListener('click', functionaddpedido)