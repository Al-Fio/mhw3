let positionShow = 1;
const MAXPOSITIOSHOW = 4;

let currentPositionAbbigliamento = 1; // posizione del primo elemento che viene visto nello shop
const MAXCAROSELLOABBIGLIAMENTO = 5; // numero elementi nello shop

let currentPositionSerie90 = 1; // posizione del primo elemento che viene visto nello shop
const MAXCAROSELLOSERIE90 = 8; // numero elementi nello shop

let currentPositionDT11 = 1; // posizione del primo elemento che viene visto nello shop
const MAXCAROSELLODT11 = 9; // numero elementi nello shop

let TimeoutID;

// Funzione per il selettore di lingua del sito
function chooseLanguage(event) {
    const newDiv = document.createElement('div');
    newDiv.id = 'DivLanguageSelector';
    newDiv.classList.add('flex');
    newDiv.classList.add('column');

    const newLink = document.createElement('a');
    newLink.textContent = 'English - EN';
    newLink.href = 'https://www.beretta.com/en';
    newDiv.appendChild(newLink);

    const newLink1 = document.createElement('a');
    newLink1.textContent = 'Rest of the World - EN';
    newLink1.href = 'https://www.beretta.com/en';
    newDiv.appendChild(newLink1);

    const newLink2 = document.createElement('a');
    newLink2.textContent = 'German - DE';
    newLink2.href = 'https://www.beretta.com/de-de';
    newDiv.appendChild(newLink2);

    const newLink3 = document.createElement('a');
    newLink3.textContent = 'Spain - SP';
    newLink3.href = 'https://www.beretta.com/es-es';
    newDiv.appendChild(newLink3);

    const languageSelector = document.querySelector('#DivSuperiore div');
    languageSelector.appendChild(newDiv);

    const button = event.currentTarget;
    button.removeEventListener('click', chooseLanguage);
    button.addEventListener('click', cancelLanguage);
}

function cancelLanguage(event) {
    const languageSelector = document.querySelector('#DivLanguageSelector');
    languageSelector.remove();

    const language = event.currentTarget;
    language.addEventListener('click', chooseLanguage);
}

const language = document.querySelector('#DivSuperiore button');
language.addEventListener('click', chooseLanguage);
// ****************************************************************************************


// Funzione per lo show all'interno dell'Header
function nextShow() {
    clearTimeout(TimeoutID);

    let position;

    if (positionShow < MAXPOSITIOSHOW) {
        position = positionShow + 1; 
    } else {
        position = 1;
    }

    const show = document.querySelectorAll('.showDiv');
    for (const item of show) {
        item.classList.add('hidden');
    }

    show[position - 1].classList.remove('hidden');

    const dash = document.querySelectorAll('#ButtonShow img.dash');
    for (const item of dash) {
        item.src = 'Immagini/Icon/dash_white.png';
    }

    dash[position - 1].src = 'Immagini/Icon/dash_orange.png';

    positionShow = position;

    TimeoutID = setTimeout(nextShow, 3000);
}

TimeoutID = setTimeout(nextShow, 3000);

function prevShow() {
    clearTimeout(TimeoutID);

    let position;

    if (positionShow > 1) {
        position = positionShow - 1; 
    } else {
        position = MAXPOSITIOSHOW;
    }

    const show = document.querySelectorAll('.showDiv');
    for (const item of show) {
        item.classList.add('hidden');
    }

    show[position - 1].classList.remove('hidden');

    const dash = document.querySelectorAll('#ButtonShow img.dash');
    for (const item of dash) {
        item.src = 'Immagini/Icon/dash_white.png';
    }

    dash[position - 1].src = 'Immagini/Icon/dash_orange.png';

    positionShow = position;

    TimeoutID = setTimeout(nextShow, 3000);
}

function changeHeader(event) {
    clearTimeout(TimeoutID);

    const dash = event.currentTarget;
    const position = parseInt(dash.dataset.show);
    const show = document.querySelectorAll('.showDiv');
    for (const item of show) {
        item.classList.add('hidden');
    }

    show[position - 1].classList.remove('hidden');

    const dashList = document.querySelectorAll('#ButtonShow img.dash');
    for (const item of dashList) {
        item.src = 'Immagini/Icon/dash_white.png';
    }

    dashList[position - 1].src = 'Immagini/Icon/dash_orange.png';

    positionShow = position;

    TimeoutID = setTimeout(nextShow, 3000);
}

const next = document.querySelector('#Next');
next.addEventListener('click', nextShow);

const prev = document.querySelector('#Prev');
prev.addEventListener('click', prevShow);

const dashHeader = document.querySelectorAll('.dash');
for (const item of dashHeader) {
    item.addEventListener('click', changeHeader)
}

// ***************************************************************************************


// Funzione per il NAV
function headerFunction(event) {
    const div = document.querySelectorAll("#NavBar .divLinkHeader");
    const link = event.currentTarget;

    for (const item of div) {
        item.classList.add('hidden');
        item.classList.remove('spaceAround');
        if (item.dataset.div === link.dataset.elem) {
            item.classList.remove('hidden');
            item.classList.add('spaceAround');
        }
    }   
    
    const nav = document.querySelectorAll('#SuperiorNav, #NavBar');
    for (const item of nav) {
        item.classList.add('onHover');
    }

    let item = document.getElementById('Logo');
    item.src = 'Immagini/Icon/Full__Blue.svg'

    item = document.getElementById('Search');
    item.src = 'Immagini/Icon/SearchBlue.svg'

    item = document.getElementById('UserCircle');
    item.src = 'Immagini/Icon/UserCircleBlue.svg';

    item = document.getElementById('ShoppingCart');
    item.classList.add('hidden');
}

function headerFunctionLeave() {
    const div = document.querySelectorAll("#NavBar .divLinkHeader");

    for (const item of div) {
        item.classList.add('hidden');
        item.classList.remove('spaceAround');
    }
    const nav = document.querySelectorAll('#SuperiorNav, #NavBar');
    for (const item of nav) {
        item.classList.remove('onHover');
    }

    let item = document.getElementById('Logo');
    item.src = 'Immagini/Icon/BerettaSimbolo.svg'

    item = document.getElementById('Search');
    item.src = 'Immagini/Icon/Search.svg'

    item = document.getElementById('UserCircle');
    item.src = 'Immagini/Icon/UserCircle.svg';

    item = document.getElementById('ShoppingCart');
    item.classList.remove('hidden');
}

const linkHeader = document.querySelectorAll('#NavBar a.navElement');
for (const item of linkHeader) {
    item.addEventListener('mouseover', headerFunction);
}

const divLinkHeader = document.querySelectorAll('#NavBar .divLinkHeader');
for (const item of divLinkHeader) {
    item.addEventListener('mouseleave', headerFunctionLeave);
}
// ********************************************************************************************************

// Funzioni ausiliari per gli shop (AbbigliamentoTiro, Serie90, DT11)
function dashOrder(dash, currentPosition) {
    for (const item of dash) {
        item.classList.remove('orange');
        item.classList.add('gray');

        if(parseInt(item.dataset.dash) === currentPosition) {
            item.classList.remove('gray');
            item.classList.add('orange'); 
        }
    }
}

function nextShopFunction(divShop, currentPosition, MaxCarosello)  {
    if (currentPosition < MaxCarosello - 2) {
        divShop[currentPosition - 1].classList.add('hidden');
        divShop[currentPosition + 2].classList.remove('hidden');

        currentPosition++;
    }

    return currentPosition;
}

function prevShopFunction(divShop, currentPosition) {
    if (currentPosition > 1) {
        divShop[currentPosition + 1].classList.add('hidden');
        divShop[currentPosition - 2].classList.remove('hidden');

        currentPosition--;
    }

    return currentPosition;
}
 
function changeShopFunction(dash, divShop) {
    const position = parseInt(dash.dataset.dash);

    for (const item of divShop) {
        item.classList.add('hidden');
    }

    divShop[position - 1].classList.remove('hidden');
    divShop[position].classList.remove('hidden');
    divShop[position + 1].classList.remove('hidden');

    return position;
}

// Funzioni per shop Abbigliamento
function prevAbbigliamento() {
    const divShop = document.querySelectorAll('#AbbigliamentoTiro .caroselloShop');
    const dash = document.querySelectorAll('#AbbigliamentoTiro .dashDiv button');

    currentPositionAbbigliamento = prevShopFunction(divShop, currentPositionAbbigliamento);

    dashOrder(dash, currentPositionAbbigliamento);
}

function nextAbbigliamento() {
    const divShop = document.querySelectorAll('#AbbigliamentoTiro .caroselloShop');
    const dash = document.querySelectorAll('#AbbigliamentoTiro .dashDiv button');

    currentPositionAbbigliamento = nextShopFunction(divShop, currentPositionAbbigliamento, MAXCAROSELLOABBIGLIAMENTO);

    dashOrder(dash, currentPositionAbbigliamento);
}

function dashAbbigliamento (event) {
    const dash = event.currentTarget;
    const divShop = document.querySelectorAll('#AbbigliamentoTiro .caroselloShop');
    const dashList = document.querySelectorAll('#AbbigliamentoTiro .dashDiv button');

    currentPositionAbbigliamento = changeShopFunction(dash, divShop);

    dashOrder(dashList, currentPositionAbbigliamento);
}

const nextShopAbbigliamento = document.querySelectorAll('#AbbigliamentoTiro button')[1];
nextShopAbbigliamento.addEventListener('click', nextAbbigliamento);

const prevShopAbbigliamento = document.querySelectorAll('#AbbigliamentoTiro button')[0];
prevShopAbbigliamento.addEventListener('click', prevAbbigliamento);

const dashShopAbbigliamento = document.querySelectorAll('#AbbigliamentoTiro .dashDiv button');
for (const item of dashShopAbbigliamento)   
    item.addEventListener('click', dashAbbigliamento);

// Funzioni per shop Serie90
function prevSerie90() {
    const divShop = document.querySelectorAll('#Serie90 .caroselloShop');
    const dash = document.querySelectorAll('#Serie90 .dashDiv button');

    currentPositionSerie90 = prevShopFunction(divShop, currentPositionSerie90);

    dashOrder(dash, currentPositionSerie90);
}

function nextSerie90() {
    const divShop = document.querySelectorAll('#Serie90 .caroselloShop');
    const dash = document.querySelectorAll('#Serie90 .dashDiv button');

    currentPositionSerie90 = nextShopFunction(divShop, currentPositionSerie90, MAXCAROSELLOSERIE90);

    dashOrder(dash, currentPositionSerie90);
}

function dashSerie90(event) {
    const dash = event.currentTarget;
    const divShop = document.querySelectorAll('#Serie90 .caroselloShop');
    const dashList = document.querySelectorAll('#Serie90 .dashDiv button');

    currentPositionSerie90 = changeShopFunction(dash, divShop);

    dashOrder(dashList, currentPositionSerie90);
}    

const nextShopSerie90 = document.querySelectorAll('#Serie90 button')[1];
nextShopSerie90.addEventListener('click', nextSerie90);

const prevShopSerie90 = document.querySelectorAll('#Serie90 button')[0];
prevShopSerie90.addEventListener('click', prevSerie90);

const dashShopSerie90 = document.querySelectorAll('#Serie90 .dashDiv button');
for (const item of dashShopSerie90)   
    item.addEventListener('click', dashSerie90);

// Funzioni per shop DT11
function prevDT11() {
    const divShop = document.querySelectorAll('#DT11 .caroselloShop');
    const dash = document.querySelectorAll('#DT11 .dashDiv button');

    currentPositionDT11 = prevShopFunction(divShop, currentPositionDT11);

    dashOrder(dash, currentPositionDT11);
}

function nextDT11() {
    const divShop = document.querySelectorAll('#DT11 .caroselloShop');
    const dash = document.querySelectorAll('#DT11 .dashDiv button');

    currentPositionDT11 = nextShopFunction(divShop, currentPositionDT11, MAXCAROSELLODT11);

    dashOrder(dash, currentPositionDT11);
}

function dashDT11(event) {
    const dash = event.currentTarget;
    const divShop = document.querySelectorAll('#DT11 .caroselloShop');
    const dashList = document.querySelectorAll('#DT11 .dashDiv button');

    currentPositionDT11 = changeShopFunction(dash, divShop);

    dashOrder(dashList, currentPositionDT11);
}    

const nextShopDT11 = document.querySelectorAll('#DT11 button')[1];
nextShopDT11.addEventListener('click', nextDT11);

const prevShopDT11 = document.querySelectorAll('#DT11 button')[0];
prevShopDT11.addEventListener('click', prevDT11);

const dashShopDT11 = document.querySelectorAll('#DT11 .dashDiv button');
for (const item of dashShopDT11)   
    item.addEventListener('click', dashDT11);

// ********************************************************************************************************


// Funzioni per API
//Funzione per news
const APIKEY = 'yyyyyyyyyyyyyyyyyyyyyyyyyyy'
const urlNews = 'https://api.thenewsapi.com/v1/news/all?api_token=0bDT6IyYD0PYlMCsj4MyFyJinfHmbkWXAHbw8l64&search=beretta';

function onJsonNews(json) {
    console.log('Json Ricevuto')
    console.log(json);

    const news = document.querySelector("#News");
    news.innerHTML = '';

    let numResult = json.data.length;
    if(numResult > 3) numResult = 3; 

    for (let i = 0; i < numResult; i++) {
        const doc = json.data[i];
        const title = doc.title;
        console.log(doc.title)
        const img_url = doc.image_url;
        const url = doc.url;
        console.log(title);
        const notizia = document.createElement('div');
        notizia.classList.add('notizia');
        notizia.classList.add('spaceBetween');
        notizia.classList.add('column');
        const img = document.createElement('img');
        img.src = img_url;
        const linkNotizia = document.createElement('a');
        linkNotizia.textContent = 'Scopri di più'
        linkNotizia.href = url;
        linkNotizia.classList.add = ('linkNotizia');
        linkNotizia.textContent = title;

        notizia.appendChild(img);
        notizia.appendChild(linkNotizia);
        news.appendChild(notizia);
    } 

}

function onResponse(response) {
    if(!response.ok) {
        console.log("Errore");
        return null;
    }

    return response.json();
}

function onFailure(error) {
    console.log('Error:' + error);
}

fetch(urlNews).then(onResponse, onFailure).then(onJsonNews);

// Funzione per Oauth2
const urlEpisodes = "https://api.spotify.com/v1/shows/7qaUF4cinQDZM7YwhtRAYW/episodes";

function show(episodio, library) {
    // Leggiamo info
    const title = episodio.name;
    const selected_image = episodio.images[1].url;

    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('episodi');

    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;

    // Creiamo la didascalia
    const caption = document.createElement('a');
    caption.textContent = title;
    caption.href = episodio.external_urls_spotify;

    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
}

function onJsonPodcast(json) {
    console.log('JSON ricevuto');
    console.log(json);

    const library = document.querySelector('#EpisodesView');
    library.innerHTML = '';

    const results = json.items;
    console.log();
    let num_results = results.length;

    if(num_results > 5)
        num_results = 5;

    for(let i=0; i<num_results; i++){
        const episodio = results[i]

        show(episodio, library)
    }
}
  
function showLess() {
    const jsonSearch = search(urlEpisodes);
    jsonSearch.then(onJsonPodcast);

    const button = document.querySelector('#ButtonEpisodi');
    button.removeEventListener('click', showLess);
    button.textContent = 'Scopri tutti gli episodi';
    button.addEventListener('click', showEpisodes);
}

function onJsonAll(json) {
    console.log('JSON ricevuto');
    console.log(json);

    const results = json.items;
    let num_results = results.length;

    const library = document.querySelector('#EpisodesView');

    for(let i=0; i<num_results; i++){
        const episodio = results[i]

        show(episodio, library);
    }

    if(json.next !== null) {
        const jsonAlbum = search(json.next);
        jsonAlbum.then(onJsonAll);
    }

    const button = document.querySelector('#ButtonEpisodi');
    button.removeEventListener('click', showEpisodes);
    button.textContent = 'Mostra meno';
    button.addEventListener('click', showLess);
}

function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
}
  
function search(url) {
    return fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    ).then(onResponse)
}
  
function onTokenJson(json) {
    console.log(json)
    token = json.access_token;

    const button = document.querySelector('#ButtonEpisodi');
    button.addEventListener('click', showEpisodes);

    const jsonSearch = search(urlEpisodes);
    jsonSearch.then(onJsonPodcast);
}
  
function onTokenResponse(response) {
    return response.json();
}
  
const client_id = 'xxxxxxxxxxxxxxxxxxxxxxxxx';
const client_secret = 'zzzzzzzzzzzzzzzzzzzzzzz';

let token;

fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body: 'grant_type=client_credentials',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
        }
    }
).then(onTokenResponse).then(onTokenJson);

function showEpisodes() {
    const library = document.querySelector('#EpisodesView');
    library.innerHTML = '';

    const json = search(urlEpisodes);
    json.then(onJsonAll);
}

