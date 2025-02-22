let title = document.createElement("h1")
title.innerHTML = "Welcome Second Year! to teacher Irvin's class 🐧"
document.getElementById("contenido").appendChild(title)

let square = document.createElement("h2")
square.innerHTML = "Como nosotros ya estuvimos con él todo el año pasado, queremos darles algunos consejos para que aprovechen al máximo sus clases y tengan una buena experiencia 🚀🏆. "
square.setAttribute("id", "square")

document.getElementById("contenido").appendChild(square)

let mensajes = [
    "No le tengan miedo. Puede parecer serio por ratos, pero en realidad es un gran maestro y una muy buena persona.",
    "Disfruten la clase. Informática es una materia muy útil e interesante si saben aprovecharla. Si van con buena actitud, les va a gustar, en especial cuando hacemos actividades, bailamos o cantamos.",
    "Participen activamente. No se queden solo escuchando, hagan preguntas, respondan y compartan ideas. Entre más participen, más van a aprender.",
    "Siempre hagan las tareas y entréguenlas con tiempo. NUNCA dejen nada para última hora o el último día. Es mejor hacerlas con calma y sin estrés, además, es algo que a él no le gusta.",
    "No dependan completamente de él y traten también de aprender a su manera. Teacher Irvin explica muy bien, pero también es importante que investiguen y practiquen por su cuenta.",
    "Siempre ayúdense los unos a los otros. Si alguien tiene dudas, ayúdenlo. Si ustedes tienen dudas, pregúntenle a alguien. Todos pueden aprender mejor si se apoyan.", 
    "No tengan miedo de equivocarse. A veces las cosas no salen bien a la primera, pero lo importante es intentarlo y mejorar poco a poco.",
    "Practiquen fuera de clase. No se queden solo con lo que ven en clase. Si pueden, practiquen en casa y busquen aprender más por su cuenta.",
    "Sean responsables. Teacher Irvin valora mucho el esfuerzo y la dedicación. Si hacen las cosas bien y con responsabilidad, tendrán una buena experiencia.",
    "Aprovechen al máximo la experiencia. No es solo una materia más, es una oportunidad para aprender algo que realmente puede servirles en el futuro, y además, él es un amor."
];
let contador = 0;
let btn2 = document.createElement("button");
btn2.innerHTML = "¡Haz click para ver los consejos!";

document.getElementById("contenido").appendChild(btn2);

btn2.addEventListener("click", function () {
    if (contador < mensajes.length){
        let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `${contador + 1} - ${mensajes[contador]}`
    document.getElementById("contenido").appendChild(nuevoParrafo);
    contador++;
    }else{
        alert("Ya te dimos todos los consejos que pudimos 😁, ¡así que disfruta!")
    };
    
});











