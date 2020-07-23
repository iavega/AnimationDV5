document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('keydown', (event) => {
        var posicion_base = 259;
        var elemento = document.getElementById('Personaje');
        var posicion = elemento.getBoundingClientRect();
        console.log("Top1", posicion.top)
        let operacion = 0;
        switch (event.key) {
            case "Up": // IE specific value
            case "ArrowUp":
                if (localStorage.getItem('salto') == 1) {
                    break
                }
                localStorage.setItem('salto', 1);
                var a = setInterval(function () {
                    let elementoSalto1 = document.getElementById('Personaje');
                    elementoSalto1.src = 'mario_move.png';
                    let posicionSalto1 = elemento.getBoundingClientRect();
                    operacion = Number(posicionSalto1.top) - 20;
                    elementoSalto1.style.top = operacion + 'px';
                }, 40);
                setTimeout(function () {
                    clearInterval(a);
                    let elementoSalto1 = document.getElementById('Personaje');
                    let posicionSalto1 = elementoSalto1.getBoundingClientRect();
                    console.log("x=", posicionSalto1.x, "y=", posicionSalto1.y)
                    var b = setInterval(function () {
                        let elementoSalto1 = document.getElementById('Personaje');
                        elementoSalto1.src = 'mario_move.png';
                        let posicionSalto1 = elemento.getBoundingClientRect();
                        operacion = Number(posicionSalto1.top) + 17;
                        console.log("top", operacion)
                        if (operacion < posicion_base) {
                            elementoSalto1.style.top = operacion + 'px';
                        }
                    }, 100);
                    setTimeout(function () {
                        clearInterval(b);
                        let elementoSalto1 = document.getElementById('Personaje');
                        localStorage.setItem('AnimationOn', 0);
                        elementoSalto1.src = 'mario.png';
                        elementoSalto1.style.top = '580px';
                        if (localStorage.getItem('IdAnimation').length == 0){
                        localStorage.setItem('salto', 0);
                        }
                    }, 200)
                }, 300)
                break
            case "Right": // IE specific value
            case "ArrowRight":
                if (localStorage.getItem('salto') == 1) {
                    break
                }
                elemento.style.transform = 'rotateY(0deg)';
                elemento.src = 'mario_move.png';
                operacion = Number(posicion.left) + 3
                console.log("para adelante", operacion);
                elemento.style.left = operacion + 'px';
                setTimeout(function () {
                    var elemento1 = document.getElementById('Personaje');
                    elemento1.src = 'mario.png';
                }, 100)
                break
            case "Left": // IE specific value
            case "ArrowLeft":
                if (localStorage.getItem('salto') == 1) {
                    break
                }
                elemento.style.transform = 'rotateY(180deg)';
                elemento.src = 'mario_move.png';
                operacion = Number(posicion.left) - 20;
                console.log("para atrass", operacion);
                elemento.style.left = operacion + 'px';
                setTimeout(function () {
                    var elemento1 = document.getElementById('Personaje');
                    elemento1.src = 'mario.png';
                }, 100)
                break
        }
    });
});