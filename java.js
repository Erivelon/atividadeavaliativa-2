var anonasNasc = document.querySelector(`#anoNascimento`)

var sexo = document.getElementsByName(`sexo`)


var botao = document.getElementById(`botao`)

var imagem = document.querySelector(`#img`)



botao.addEventListener(`click`, () => {

    let data = new Date()
    let anoAtual = data.getFullYear()

    let idade = anoAtual - anonasNasc.value

    if (sexo[0].checked) {

        if (idade <= 12) {
            imagem.src = "img/menino.png"

           alert(`Criança com ${idade} anos de idade!`)  
        }
        
    }
    else if (sexo[1].checked) {
        
        if (idade <= 12) {
            imagem.src = "img/menina.png"
            alert(`Criança com ${idade} anos de idade!`) 

            
        }}
// ------------------------------------------------//
        if(sexo[0].checked){

             if(idade >12 && idade < 18){
              imagem.src = "img/adolescente-1.png" 
              alert(`Adolescente com ${idade} anos de idade!`)  
              
            }    

        }else if(sexo[1].checked){
            if(idade > 12 && idade < 18){
               imagem.src = "img/adolescente-2.png" 
               alert(`Adolescente com ${idade} anos de idade!`) 
            }
        }
 // ------------------------------------------------//
        if(sexo[0].checked){
            
            if(idade >= 18 && idade < 60){
                imagem.src = "img/homem.png"
                alert(idade)
                alert(`Homem com ${idade} anos de idade!`) 
            }
        }else if(sexo[1].checked){
            if(idade >=18 && idade <60){
                imagem.src = "img/mulher.png"
                alert(`Mulher com ${idade} anos de idade!`) 
            }
        }
        // ------------------------------------------------//

        if(sexo[0].checked){

            if(idade > 60 && idade < 130){
                imagem.src ="img/idoso-1.png"
                alert(`Idoso com ${idade} anos de idade!`)
            }
        }else if(sexo[1].checked){
            if(idade > 60 && idade < 130){
                imagem.src ="img/idosa-2.png"
                alert(`Idosa com ${idade} anos de idade!`)
            }
        }
})



