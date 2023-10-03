let vida_squirtle = 150;
let vida_charmander = 150;
let danoBubble = 15;
let danoTackle = 10;
let cura = 10;
function bubble(){
   return (vida_charmander - danoBubble)
}


function takleS(){
    let v = vida_charmander -= danoTackle;
    document.getElementById('hp').style.width= v + "px";
    document.getElementById('hpc').innerHTML = v + "%"
    if (v < 10){
        alert ("charmander foi mamado");
        let ataque = document.getElementById('ataque_s2');
        ataque.outerHTML = '<button type="button"= id="ataque_s2">Tackle</button>';
    }
}

function bubble(){
    let v = vida_charmander -= danoBubble;
    document.getElementById('hp').style.width= v + "px";
    document.getElementById('hpc').innerHTML = v + "%"
    if (v < 10){
        alert ("charmander foi derrotado");
        let ataque = document.getElementById('ataque_s1');
        ataque.outerHTML = '<button type="button"= id="ataque_s1">Bubble</button>';
    }
}
function curarC(){
    if (vida_charmander <150 ){
    let v = vida_charmander += cura
    document.getElementById('hp').style.width =   v + "px";
    document.getElementById('hpc').innerHTML = v + "%"
}
}

function curarS(){
    return (vida_squirtle +cura)
}