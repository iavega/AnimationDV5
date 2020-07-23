document.addEventListener("DOMContentLoaded", function() {
    localStorage.setItem('salto', 0);
    localStorage.setItem('AnimationOn', 0);
    let mostrar = () => {
        let id = localStorage.getItem('IdAnimation')
        document.getElementById(id).style.animationName = "Mostrar";
        document.getElementById(id).style.animationDuration = "2s";
        setTimeout(function () {
            let id = localStorage.getItem('IdAnimation')
            document.getElementById(id).style.left = "500px";
            }, 2000);
    }
    setInterval(function () {
        let cuadros = [
            { "x1": -53, "x2": 10, "y1": 140, "y2": 210, "id":"miModalLab1"},
            { "x1": 91, "x2": 133, "y1": 140, "y2": 210, "id":"miModalLab2"},
            { "x1": 221, "x2": 265, "y1": 140, "y2": 210,"id":"miModalLab3"},
            { "x1": 346, "x2": 401, "y1": 140, "y2": 210,"id":"miModalLab4"},
            { "x1": 475, "x2": 531, "y1": 140, "y2": 210,"id":"miModalLab5"},
            { "x1": 608, "x2": 652, "y1": 140, "y2": 210,"id":"miModalLab6"},
            { "x1": 740, "x2": 784, "y1": 140, "y2": 210,"id":"miModalLab7"},
            { "x1": 861, "x2": 905, "y1": 140, "y2": 210,"id":"miModalLab8"},
            { "x1": 993, "x2": 1037, "y1": 140, "y2": 210,"id":"miModalLab9"},
            { "x1": 1125, "x2": 1169, "y1": 140, "y2": 210,"id":"miModalLab10"},
            { "x1": 1257, "x2": 1290, "y1": 140, "y2": 210,"id":"miModalLab11"},
        ]
        let elementoSalto1 = document.getElementById('Personaje');
        let posicionSalto1 = elementoSalto1.getBoundingClientRect();
        if (localStorage.getItem('AnimationOn') == 0) {
            for (i in cuadros) {
                if (cuadros[i]["x1"] < posicionSalto1.x && cuadros[i]["x2"] > posicionSalto1.x && posicionSalto1.y < 520) {
                    localStorage.setItem('AnimationOn', 1);
                    localStorage.setItem('IdAnimation', cuadros[i]["id"]);
                    mostrar();
                }
            }
        }
    }, 10);
})