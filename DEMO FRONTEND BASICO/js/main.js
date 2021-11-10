//JavaScript y el DOM
document.getElementById("pSaludo").innerHTML = "Hola JAvaScript...!!!";

document.getElementById("pOtro").style.fontWeight = "bold";
document.getElementById("pOtro").style.color = "blue";

document.getElementById("miImg").src = "./imag/4.png";
var elementos = document.getElementsByClassName("parrafo");
for(let i=0; i<elementos.length; i++){
    elementos[i].style.fontSize = "large";
}

//****** Async / Await*****
//Normal
function datos(){ 
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log('Normal' ,data);
        });
}

    //async / await
    async function datosAsync (){ 
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json();
        console.log('Async/Await ', json);   
}
datos();
datosAsync();


//POO
class FiguraGeometrica{
    constructor(atributo){
        this.atributo = atributo;

    }
    perimetro(){return 0; }
}
class Rectangulo extends FiguraGeometrica{
    constructor(atributo, alto, ancho){
        super(atributo);
        this.alto = alto;
        this.ancho = ancho;
    }

    area(){
        return this.alto * this.ancho;
    }

    static prueba(){
        console.log("Método estático");
    }
}

