let select = document.getElementById("sel");
let opt = [];
let optInNumber = [];
let divi = document.getElementById("divi");
let text;
function add(n){
    if(n > 100 || n < 1 || n == ""){
        alert("[ERRO] Número inválido");
    }else{
        opt.push(n);
        for(i in opt){
            if(opt[i].text == `Valor ${n} adicionado`){
                alert("[ERRO] Valor repetido");
                opt.pop();
            }else if(opt[i].text != undefined){
                console.log("Pule esta parte");
            }
            else{
                opt[i] = document.createElement("option");
                opt[i].text = `Valor ${n} adicionado`;
                optInNumber.push(n);
                select.appendChild(opt[i]);
             }
        }
    }  
}
function end(numb = optInNumber) {
    numb.sort();
    let total = 0;
    let media = 0;
    for(i in numb){
        total += Number(numb[i]);
    }
    if(text == undefined){
        text = document.createElement("p");
        text.innerHTML += `Ao todo, temos ${numb.length} números cadastrados <br>`;    
        text.innerHTML += `O maior valor informado é ${numb[numb.length-1]} <br>`;
        text.innerHTML += `O menor valor informado é ${numb[0]} <br>`;
        text.innerHTML += `A soma entre todos os valores é ${total} <br>`;
        text.innerHTML += `A média dos valores digitados é ${total/numb.length}`
        divi.appendChild(text);
    }else{
        divi.removeChild(text);
        text = undefined;   
        end();     
    }
}