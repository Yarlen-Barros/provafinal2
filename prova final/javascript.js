function pegar (){
    A = document.getElementById('número');
    let num1 = parseInt(A.value);
    B = document.getElementById('número2');
    let num2 = parseInt(B.value);
    let DivMensagem = document.getElementById('Mensagem')
    
    let dados = somar(num1,num2);

    let div = document.createElement('div');
    div.textContent = dados; 
    DivMensagem.append(div);





}
function somar (num1,num2){
    let dados =  num1 + num2;
    return dados;



}