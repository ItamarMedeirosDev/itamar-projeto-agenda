const form = document.getElementById('form-agenda');
let linhas ='';
const nomeContato=[];
const numeroContato=[];

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    addLinha();
    attTabela()

})
    
function addLinha(){
    const inputNomeContato=document.getElementById('form-nome');
    const inputTelContato=document.getElementById('form-tel');

    nomeContato.push(inputNomeContato.value);
    numeroContato.push(inputTelContato.value);

    let linha='<tr>';
    linha+=`<td>${inputNomeContato.value}</td>`;
    linha+=`<td>${inputTelContato.value}</td>`;   
    linha+='</tr>';
    linhas+=linha;

    inputNomeContato.value='';
    inputTelContato.value='';
}
function attTabela(){
    const corpoTabela=document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;
}