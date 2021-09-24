var card = document.getElementById('list');

for(var i = 0; i < pokemons.length; i++) {

    var coll = document.createElement('li');
    coll.classList.add('col-3', 'mb-4');
    card.appendChild(coll);

    var cards = document.createElement('div');
    cards.classList.add('card');
    coll.appendChild(cards);

    var cards_top = document.createElement('div');
    cards_top.classList.add('card-img-top', 'd-flex', 'justify-content-center');
    cards.appendChild(cards_top);

    var imgage = document.createElement('img');
    imgage.setAttribute('src', pokemons[i].img)
    imgage.setAttribute('width', '130')
    imgage.setAttribute('height', '130')
    cards_top.appendChild(imgage);

    var NEW_DIV = document.createElement('div');
    NEW_DIV.classList.add('card-body');
    cards.appendChild(NEW_DIV);

    var POCEMON_NAME = document.createElement('h1');
    POCEMON_NAME.classList.add('card-title', 'fs-4', 'fw-bold', 'text-center', 'text-truncate');
    POCEMON_NAME.textContent = 'Name: ' + pokemons[i].name;
    NEW_DIV.appendChild(POCEMON_NAME);

    var POCEMON_TYPE = document.createElement('p');
    POCEMON_TYPE.classList.add('card-text', 'fs-6', 'fw-normal', 'text-center', 'text-liner');
    POCEMON_TYPE.textContent = 'Type: ' + pokemons[i].type;
    NEW_DIV.appendChild(POCEMON_TYPE);

    var num = document.createElement('span');
    num.classList.add('card-text', 'fs-6', 'fw-normal', 'text-center', 'text-liner');
    num.textContent = 'Num: ' + pokemons[i].num;
    NEW_DIV.appendChild(num);

    var time = document.createElement('span');
    time.classList.add('card-text', 'fs-6', 'fw-normal', 'text-center', 'm-5', 'text-liner');
    time.textContent = 'Time: ' + pokemons[i].spawn_time;
    NEW_DIV.appendChild(time);
}
