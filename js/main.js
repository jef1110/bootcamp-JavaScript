function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"

}

function redirecionar(){
    //window.open("https://www.facebook.com/")
    window.location.href = "https://www.facebook.com"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui"

    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui"
    //alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"

    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    alert(elemento.value)
}

//function soma(n1, n2){
  //  return n1 + n2
//}
/*var validar
function validarIdade(idade){    
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual é a sua idade")
prompt(validarIdade(idade))
*/

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}

//alert(soma(1000, 500))
//alert(setReplace("Jefferson Leandro", "Leandro", "Leonardo"))

//var d = new Date();
//alert(d.getMonth()+1)
//alert(d.getDay()+1)
//alert(d.getHours()+1)
//alert('Hoje é ' + d.getDate() + '/' + (d.getMonth() + 1))

/*
var count

for(count=0;count<=5;count++){
    alert(count)
}*/

/*
var count = 0
while (count <= 5){
    console.log(count)
    alert(count)
    count++
}*/ 

/*
var idade = prompt('Qual sua idade?')
if(idade >=18){
    alert('Maior de idade')
}else{
    alert('Menor de idade')
}*/

//var frutas = [{nome: 'maça', cor: 'vermelha'}, {nome: 'uva', cor: 'roxa'}]
//console.log(frutas)
//alert(frutas[1].nome)

//var fruta = {nome: 'maça', cor: 'vermelha'}
//console.log(fruta.cor)

//var lista = ['pera', 'uva', 'maça']
//lista.push('laranja')
//console.log(lista.length)
//console.log(lista.toString())
//console.log(lista.join(' - ')) define o tipo de espaço entre os elementos


//var nome = "Jefferson leonardo"
//var n1 = 29
//var n2 = 10
//var frase = 'Japão é o melhor time do mundo'
//alert(`${nome} tem ${idade} anos.`)
//alert(idade + idade2)
//console.log(nome)
//console.log(n1 * n2)
//console.log(frase.toUpperCase())
//console.log(frase.replace('Japão', 'Brasil'))
//alert(frase.replace('Japão', 'Brasil'))