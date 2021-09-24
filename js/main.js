var NEW_ROW = document.getElementById('input');
var numerator = [];

for(var i = 0; i < pokemons.length; i++) {

    var NEW_COL = document.createElement('li');
    NEW_COL.classList.add('col-3', 'mb-4');
    NEW_ROW.appendChild(NEW_COL);

    var NEW_CARD = document.createElement('div');
    NEW_CARD.classList.add('card');
    NEW_COL.appendChild(NEW_CARD);

    var CARD_TOP = document.createElement('div');
    CARD_TOP.classList.add('card-img-top', 'd-flex', 'justify-content-center');
    NEW_CARD.appendChild(CARD_TOP);

    var NEW_IMG = document.createElement('img');
    NEW_IMG.setAttribute('src', pokemons[i].img)
    NEW_IMG.setAttribute('width', '130')
    NEW_IMG.setAttribute('height', '130')
    CARD_TOP.appendChild(NEW_IMG);

    var NEW_DIV = document.createElement('div');
    NEW_DIV.classList.add('card-body');
    NEW_CARD.appendChild(NEW_DIV);

    var POCEMON_NAME = document.createElement('p');
    POCEMON_NAME.classList.add('card-title', 'fs-6', 'fw-bold', 'text-center', 'text-truncate');
    POCEMON_NAME.textContent = 'Name: ' + pokemons[i].name;
    NEW_DIV.appendChild(POCEMON_NAME);

    var POCEMON_TYPE = document.createElement('p');
    POCEMON_TYPE.classList.add('card-text', 'fs-6', 'fw-normal', 'text-center', 'text-liner', 'fst-italic');
    POCEMON_TYPE.textContent = 'Type: ' + pokemons[i].type;
    NEW_DIV.appendChild(POCEMON_TYPE);

    var num = document.createElement('p');
    num.classList.add('card-text', 'fs-6', 'fw-normal', 'text-center', 'text-liner');
    num.textContent = 'Num: ' + pokemons[i].num;
    NEW_DIV.appendChild(num);
}
