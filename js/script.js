var items = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]'); //pegando o nome do meu produto
    var precoProduto = document.querySelector('input[name=price]'); //pegando o preço do meu produto 
    

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value

    });

    /*
     <div class="lista-produto-single">
        <h3>RedBull</h3>
        <h3 class="price-produto"><span>R$20,00</span></h3>
    </div>
   
    */

    let listaProdutos = document.querySelector('.lista-produto');
    let soma = 0;
    listaProdutos.innerHTML='';

    items.map(function(val){
        soma+=parseFloat(val.valor); //parseInt para transformar em numero e tirar da string e parseFloat para adicionar os valores dps da virgula ou no caso os centavos
        
        
        listaProdutos.innerHTML += `
       
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
    </div>
        
        `;

    })
    soma = soma.toFixed(2); //para ter só duas casas decimais apenas!
    nomeProduto.value = '';
    precoProduto.value = ''; //zerar os inputs

    let elementoSoma = document.querySelector('.soma-produto h1');

    elementoSoma.innerHTML = 'Total: R$' + soma;

})
//LIMPAR:
document.querySelector('button[name=limpar]')
.addEventListener('click' , ()=>{

    items = []; //digo que meus itens volta a ser vazio
    
    document.querySelector('.lista-produto').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = " Total: R$0"
    
})