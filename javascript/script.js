
// alert('Projeto contém bugs e está em desevolvimento')
var podefechar = true 
console.log(podefechar)

const adicionarpedido = document.getElementById("addmesa") //button add mesa no html
var menuCardapio = {
    mussarela:23,
    calabresa:25,
    portuguesa:28,
    marguerita:27.5,
    frango:30.8,
    napolitana:25.9
}
var bebidas = {
    cocacola2l: 12.5,
    fantalaranja2l: 12,
    guarana2l: 11.5
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
        
        if(podefechar){
            div.classList.add('delete')//class para display none para remover a mesa
        }
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
                podefechar = false
            console.log(podefechar)
                

                const ul = document.createElement('ul')
                const li = document.createElement('li')//titulo cardapio
                const li1 = document.createElement('li')// mussarela
                const li2 = document.createElement('li')//calabresa
                const li3 = document.createElement('li')//portuguesa
                const li4 = document.createElement('li')//marguerita
                const li5 = document.createElement('li')//frango
                const li6 = document.createElement('li')//napolitana
                const li7 = document.createElement('li')// titulo bebidas
                const li8 = document.createElement('li')// coca cola 2l
                const li9 = document.createElement('li')// fanta laranja 2l
                const li10 = document.createElement('li')// guarana 2l
                main.appendChild(ul)

                //fechar modal do cardapio
                var fecharcardapio = document.createElement('button')
                fecharcardapio.appendChild(document.createTextNode('X'))
                ul.appendChild(fecharcardapio)
                fecharcardapio.classList.add('fechar-modal')

                fecharcardapio.addEventListener('click', fecharcardapiofunc)
                function fecharcardapiofunc(){
                    podefechar = true
                    
                    ul.parentNode.removeChild(ul);
                }

                ul.classList.add('cardapio')
                ul.appendChild(li)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                ul.appendChild(li5)
                ul.appendChild(li6)
                ul.appendChild(li7)
                ul.appendChild(li8)
                ul.appendChild(li9)
                ul.appendChild(li10)

                
                
                li.appendChild(document.createTextNode(`Cardapio`))
                li.classList.add('title')
                //pizzas 
                li1.appendChild(document.createTextNode(`Pizza Mussarela.................23,00$`))
                li2.appendChild(document.createTextNode('Pizza Calabresa.................25,00$'))
                li3.appendChild(document.createTextNode('Pizza Portuguesa................28,00$'))
                li4.appendChild(document.createTextNode('Pizza Marguerita................27,50$'))
                li5.appendChild(document.createTextNode('Pizza Frango....................30,80$'))
                li6.appendChild(document.createTextNode('Pizza Napolitana................25,90$'))
                li7.appendChild(document.createTextNode('Bebidas'))
                li7.classList.add('title')
                li8.appendChild(document.createTextNode('Coca Cola 2Lts................12,50$'))
                li9.appendChild(document.createTextNode('Fanta Laranja 2Lts............12,00$'))
                li10.appendChild(document.createTextNode('Guaraná 2Lts..................11,50$'))

                //add pizza mussarela
                var btnaddmussarela = document.createElement('button')
                btnaddmussarela.appendChild(document.createTextNode('+'))
                li1.appendChild(btnaddmussarela)
                
                

                btnaddmussarela.addEventListener('click', btnaddmussarelafunc)
                function btnaddmussarelafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.mussarela
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
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
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }

                //add pizza calabresa
                var btnaddcalabresa = document.createElement('button')
                btnaddcalabresa.appendChild(document.createTextNode('+'))
                li2.appendChild(btnaddcalabresa)
                
                btnaddcalabresa.addEventListener('click', btnaddcalabresafunc)
                function btnaddcalabresafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.calabresa
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Calabresa .....${menuCardapio.calabresa.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovercalabresa = document.createElement('button')
                    btnremovercalabresa.appendChild(document.createTextNode('X'))
                    btnremovercalabresa.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovercalabresa)

                    btnremovercalabresa.addEventListener('click' , removecalabresa)
                    function removecalabresa(){
                        clientevalor -= menuCardapio.calabresa
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //add pizza portuguesa
                var btnaddportuguesa = document.createElement('button')
                btnaddportuguesa.appendChild(document.createTextNode('+'))
                li3.appendChild(btnaddportuguesa)
                
                btnaddportuguesa.addEventListener('click', btnaddportuguesafunc)
                function btnaddportuguesafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.portuguesa
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Portuguesa ....${menuCardapio.portuguesa.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremoveportuguesa = document.createElement('button')
                    btnremoveportuguesa.appendChild(document.createTextNode('X'))
                    btnremoveportuguesa.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremoveportuguesa)

                    btnremoveportuguesa.addEventListener('click' , removeportuguesa)
                    function removeportuguesa(){
                        clientevalor -= menuCardapio.portuguesa
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //add pizza Marguerita
                var btnaddmarguerita = document.createElement('button')
                btnaddmarguerita.appendChild(document.createTextNode('+'))
                li4.appendChild(btnaddmarguerita)
                
                btnaddmarguerita.addEventListener('click', btnaddmargueritafunc)
                function btnaddmargueritafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.marguerita
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza Marguerita ....${menuCardapio.marguerita.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovemarguerita = document.createElement('button')
                    btnremovemarguerita.appendChild(document.createTextNode('X'))
                    btnremovemarguerita.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovemarguerita)

                    btnremovemarguerita.addEventListener('click' , removemarguerita)
                    function removemarguerita(){
                        
                        clientevalor -= menuCardapio.marguerita
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //add pizza frango
                var btnaddfrango = document.createElement('button')
                btnaddfrango.appendChild(document.createTextNode('+'))
                li5.appendChild(btnaddfrango)
                
                btnaddfrango.addEventListener('click', btnaddfrangofunc)
                function btnaddfrangofunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.frango
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza frango ....${menuCardapio.frango.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovefrango = document.createElement('button')
                    btnremovefrango.appendChild(document.createTextNode('X'))
                    btnremovefrango.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovefrango)

                    btnremovefrango.addEventListener('click' , removefrango)
                    function removefrango(){
                        
                        clientevalor -= menuCardapio.frango
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //add pizza Napolitana
                var btnaddnapolitana = document.createElement('button')
                btnaddnapolitana.appendChild(document.createTextNode('+'))
                li6.appendChild(btnaddnapolitana)
                
                btnaddnapolitana.addEventListener('click', btnaddnapolitanafunc)
                function btnaddnapolitanafunc(){
                    
                    //button adicionar o pedido
                    clientevalor += menuCardapio.napolitana
                    clientevalor =  parseFloat(clientevalor);
                    divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`

                    console.log(clientevalor.toFixed(2))
                    var p3 = document.createElement('p')
                    p3.classList.add('p3')
                    p3.appendChild(document.createTextNode(`Pizza napolitana ....${menuCardapio.napolitana.toFixed(2)}$`))
                    divpedidos.appendChild(p3)
                    
                    //button remover o pedido
                    var btnremovenapolitana = document.createElement('button')
                    btnremovenapolitana.appendChild(document.createTextNode('X'))
                    btnremovenapolitana.classList.add('btn-remover-pedido')
                    p3.appendChild(btnremovenapolitana)

                    btnremovenapolitana.addEventListener('click' , removenapolitana)
                    function removenapolitana(){
                        
                        clientevalor -= menuCardapio.napolitana
                        console.log(clientevalor.toFixed(2))
                        p3.style.display = 'none'
                        divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                    }
                }
                //bebidas****************************
                 //add coca cola
                 var btnaddcoca = document.createElement('button')
                 btnaddcoca.appendChild(document.createTextNode('+'))
                 li8.appendChild(btnaddcoca)
                 
                 btnaddcoca.addEventListener('click', btnaddcocafunc)
                 function btnaddcocafunc(){
                     
                     //button adicionar o pedido
                     clientevalor += bebidas.cocacola2l
                     clientevalor =  parseFloat(clientevalor);
                     divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
 
                     console.log(clientevalor.toFixed(2))
                     var p3 = document.createElement('p')
                     p3.classList.add('p3')
                     p3.appendChild(document.createTextNode(`Coca Cola 2Lts ....${bebidas.cocacola2l.toFixed(2)}$`))
                     divpedidos.appendChild(p3)
                     
                     //button remover o pedido
                     var btnremovecoca = document.createElement('button')
                     btnremovecoca.appendChild(document.createTextNode('X'))
                     btnremovecoca.classList.add('btn-remover-pedido')
                     p3.appendChild(btnremovecoca)
 
                     btnremovecoca.addEventListener('click' , removecoca)
                     function removecoca(){
                         
                         clientevalor -= bebidas.cocacola2l
                         console.log(clientevalor.toFixed(2))
                         p3.style.display = 'none'
                         divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                     }
                 }
                  //add fanta laranja
                  var btnaddfantalaranja = document.createElement('button')
                  btnaddfantalaranja.appendChild(document.createTextNode('+'))
                  li9.appendChild(btnaddfantalaranja)
                  
                  btnaddfantalaranja.addEventListener('click', btnaddfantalaranjafunc)
                  function btnaddfantalaranjafunc(){
                      
                      //button adicionar o pedido
                      clientevalor += bebidas.fantalaranja2l
                      clientevalor =  parseFloat(clientevalor);
                      divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
  
                      console.log(clientevalor.toFixed(2))
                      var p3 = document.createElement('p')
                      p3.classList.add('p3')
                      p3.appendChild(document.createTextNode(`Fanta Laranja 2Lts ....${bebidas.fantalaranja2l.toFixed(2)}$`))
                      divpedidos.appendChild(p3)
                      
                      //button remover o pedido
                      var btnremovefantalaranja = document.createElement('button')
                      btnremovefantalaranja.appendChild(document.createTextNode('X'))
                      btnremovefantalaranja.classList.add('btn-remover-pedido')
                      p3.appendChild(btnremovefantalaranja)
  
                      btnremovefantalaranja.addEventListener('click' , removefantalaranja)
                      function removefantalaranja(){
                          
                          clientevalor -= bebidas.fantalaranja2l
                          console.log(clientevalor.toFixed(2))
                          p3.style.display = 'none'
                          divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                      }
                  }
                  //add guarana
                  var btnaddguarana = document.createElement('button')
                  btnaddguarana.appendChild(document.createTextNode('+'))
                  li10.appendChild(btnaddguarana)
                  
                  btnaddguarana.addEventListener('click', btnaddguaranafunc)
                  function btnaddguaranafunc(){
                      
                      //button adicionar o pedido
                      clientevalor += bebidas.guarana2l
                      clientevalor =  parseFloat(clientevalor);
                      divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
  
                      console.log(clientevalor.toFixed(2))
                      var p3 = document.createElement('p')
                      p3.classList.add('p3')
                      p3.appendChild(document.createTextNode(`Guaraná 2Lts ....${bebidas.guarana2l.toFixed(2)}$`))
                      divpedidos.appendChild(p3)
                      
                      //button remover o pedido
                      var btnremoveguarana = document.createElement('button')
                      btnremoveguarana.appendChild(document.createTextNode('X'))
                      btnremoveguarana.classList.add('btn-remover-pedido')
                      p3.appendChild(btnremoveguarana)
  
                      btnremoveguarana.addEventListener('click' , removeguarana)
                      function removeguarana(){
                          
                          clientevalor -= bebidas.guarana2l
                          console.log(clientevalor.toFixed(2))
                          p3.style.display = 'none'
                          divres.innerHTML = `Valor do pedido: ${clientevalor.toFixed(2)}$`
                      }
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


