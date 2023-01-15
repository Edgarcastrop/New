function SI(){

    document.getElementById("todo").innerHTML = "";
    const todo = document.getElementById("todo");

    const anuncio = document.createElement("div");
    anuncio.className = "anuncio";
    anuncio.id = "anuncio";
    const corazao = document.getElementById("anuncio");

    todo.appendChild(anuncio);
    let cambio = document.getElementById("anuncio") 
    try{
        let animacion = "entrada 3s"
        cambio.style.animation = animacion;
    }
    finally {
        setTimeout(() => {
            let animacion = "pulse 1s infinite";
            cambio.style.animation = animacion;
            document.styleSheets[0].insertRule('anuncio::after', "animation:"+ ';');
            document.styleSheets[1].insertRule('anuncio::before', "animation:"+ ';');

    }, 3000);
    }
}
function numerorandom(r){
    return Math.floor(Math.random() * r);
}
function NO(){    
    let y = numerorandom(600);
    let x = numerorandom(600);
    document.getElementById("no").style.top = y + "px";
    document.getElementById("no").style.left = x +"px";
}