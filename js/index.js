var titulo = document.getElementById('titulo');
var descricao = document.getElementById('descrição');

const superpoderes = [

    {
        titulo : "lagrimas ácidas",
        descricao: "Chora ácido mas não é imuni a ácido",
        image: 'http://www.baconfrito.com/wp-content/uploads/2012/07/tobey.jpg'
    },
    {
        titulo : "supercalvice",
        descricao: "Perde o cabelo muito rápido",
        image: 'https://exame.com/wp-content/uploads/2018/10/calvo.jpg'
    },
    {
        titulo : "supercalvice3",
        descricao: "Perde o cabelo muito rápido",
        image: 'https://exame.com/wp-content/uploads/2018/10/calvo.jpg'
    },
    {
        titulo : "supercalvice4",
        descricao: "Perde o cabelo muito rápido",
        image: 'https://exame.com/wp-content/uploads/2018/10/calvo.jpg'
    }

]
poderesDiv = document.getElementsByClassName("superpoderes")[0];

superpoderes.map(function(test){
    divPoder = document.createElement("div");
    divPoder.setAttribute("class","body-power");
    h2Poder = document.createElement("h4");
    h2Poder.innerHTML = "teste";
    imgPoder = document.createElement("img");
    imgPoder.setAttribute("class","img-heroi");
    imgPoder.setAttribute("src","teste");
    descPoder = document.createElement("p");
    descPoder.innerHTML = "teste";
    divPoder.appendChild(h2Poder);
    divPoder.appendChild(imgPoder);
    divPoder.appendChild(descPoder);

    filhos = divPoder.children;
    filhos[0].innerHTML  = test.titulo;
    filhos[2].innerHTML = test.descricao;
    filhos[1].setAttribute("src",test.image);

    poderesDiv.appendChild(divPoder);

}); 





