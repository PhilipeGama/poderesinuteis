var titulo = document.getElementById('titulo');
var descricao = document.getElementById('descrição');

const superpoderes = [

    {
        titulo : "lagrimas ácidas",
        descricao: "Chora ácido mas não é imuni a ácido.",
        image: 'http://www.baconfrito.com/wp-content/uploads/2012/07/tobey.jpg'
    },
    {
        titulo : "supercalvice",
        descricao: "Perde o cabelo muito rápido.",
        image: 'https://exame.com/wp-content/uploads/2018/10/calvo.jpg'
    },
    {
        titulo : "Imunidade a tiro",
        descricao: "Mas somente ao décimo terceiro tiro.",
        image: 'https://j.gifs.com/wjok6X.gif'
    },
    {
        titulo : "Atrair qualquer mulher",
        descricao: "Mas o efeito colateral é ser broxa.",
        image: 'https://comoconquistarumamina.com.br/wp-content/uploads/2014/08/tenha-vairas-amiagas-para-conquistar-uma-namorada.jpg'
    }

]
poderesDiv = document.getElementsByClassName("superpoderes")[0];

superpoderes.map(function(test){
    divPoder = document.createElement("div");
    divPoder.setAttribute("class","body-power");
    h3Poder = document.createElement("h3");
    h3Poder.innerHTML = "teste";
    imgPoder = document.createElement("img");
    imgPoder.setAttribute("class","img-heroi");
    imgPoder.setAttribute("src","teste");
    descPoder = document.createElement("p");
    descPoder.innerHTML = "teste";
    
    divPoder.appendChild(imgPoder);
    divPoder.appendChild(h3Poder);
    divPoder.appendChild(descPoder);

    filhos = divPoder.children;
    filhos[1].innerHTML  = test.titulo;
    filhos[2].innerHTML = test.descricao;
    filhos[0].setAttribute("src",test.image);

    poderesDiv.appendChild(divPoder);

}); 





