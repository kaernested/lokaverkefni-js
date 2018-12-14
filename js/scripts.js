
console.log("virkar");//þetta svínvirkar og er tengt

//TEMPLATES
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var main = document.querySelector('main');

header.innerHTML = headerTemplate;
footer.innerHTML = footerTemplate;
main.innerHTML = templates.frontPageTemplate;

// TEMPLATES klárast
//Burger byrjar hér
var burger = document.querySelector(".burger-container");
var close = document.querySelector(".close");
var menu = document.querySelector(".menu");
var burgerLines = document.getElementsByClassName("burgerlines");

var navIsOpen = false;
console.log(burgerLines)

burger.onclick = function(){/* opnar og lokar burger menu*/
    if(!navIsOpen){/* Þetta opnar burger menu*/ 
        burger.classList.add("open");
        menu.classList.add("show-menu");
        navIsOpen = true;
    }
    else{/* Þetta lokar burger menu*/
        burger.classList.remove("open")
        menu.classList.remove("show-menu");
        navIsOpen = false;
    }
}

var listItem = document.querySelectorAll('.list-item');

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', () => {
        burger.classList.remove("open")
        menu.classList.remove("show-menu");
        navIsOpen = false;
    })
    
}

document.body.onscroll = function(){/*þegar skrollað er með burger menu opinn að þá lokast hann*/ 
    if(navIsOpen){
        console.log("hello")
        burger.classList.remove("open")
        menu.classList.remove("show-menu");
        navIsOpen = false;
    }
}
// Burger endar hér

// array undir nafninu cards byrjar hér
var cards = [/* Þetta er array sem inniheldur object, þau eru flokkuð niður á tvær mismunandi síður með comingSoon*/
    {
        img: `./images/Fantasticbeasts.jpg`,
        title: `Fantastic Beasts: The Crimes Of Grindelwald`,
        about: `2 klast 13 mín | 13 ára`,
        comingSoon: false,

    },
    {
        img: `./images/Bohemianrhapsody.jpg`,
        title: `Bohemian Rhapsody`,
        about: `2 klst 14 mín | 12 ára`,
        comingSoon: false,


    },
    {
        img: `./images/Grinch.jpg`,
        title: `The Grinch`,
        about: `1 klst 30 mín | Leyfð`,
        comingSoon: false,

    },
    {
        img: `./images/Nutcracker.jpg`,
        title: `The Nutcracker And The Four Realms`,
        about: `1 klst 39 mín | 9 ára`,
        comingSoon: false,

    },
    {
        img: `./images/Smallfoot.jpg`,
        title: `Small Foot`,
        about: `1 klst 36 mín | Leyfð`,
        comingSoon: false,

    },
    {
        img: `./images/Overlord.jpg`,
        title: `Overlord`,
        about: `1 klst 49 mín | 16 ára`,
        comingSoon: false,

    },
    {
        img: `./images/Hunterkiller.jpg`,
        title: `Hunter Killer`,
        about: `2 klst 01 mín | 12 ára`,
        comingSoon: false,

    },
    {
        img: `./images/Halloween.jpg`,
        title: `Halloween`,
        about: `1 klst 39 mín | 16 ára`,
        comingSoon: false,

    },
    {
        img: `./images/ralph.jpg`,
        title: `Ralph Breaks The Internet`,
        about: `30.11.18 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/creed.jpg`,
        title: `Creed II`,
        about: `30.11.18 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/mortalengines.jpg`,
        title: `Mortal Engines`,
        about: `14.12.18 | 12 ára`,
        comingSoon: true,

    },
    {
        img: `./images/aquamanposter.jpg`,
        title: `Aquaman`,
        about: `19.12.18 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/bumblebee.jpg`,
        title: `Bumblebee`,
        about: `26.12.18 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/marypoppins.jpg`,
        title: `Mary Poppins Returns`,
        about: `26.12.18 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/spiderman.jpg`,
        title: `Spider-Man: Into The Spider Verse`,
        about: `26.12.18 | Leyfð`,
        comingSoon: true,

    },

    {
        img: `./images/dragon.jpg`,
        title: `How To Train Your Dragon: The Hidden World`,
        about: `1.3.2019 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/captainmarvel.jpg`,
        title: `Captain Marvel`,
        about: `8.3.2019 | 12 ára`,
        comingSoon: true,

    },
    {
        img: `./images/detectivepikachu.jpg`,
        title: `Detective Pikachu`,
        about: `10.05.19 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/aladdin.jpg`,
        title: `Aladdin`,
        about: `22.5.2019 | Leyfð`,
        comingSoon: true,

    },
    {
        img: `./images/toystory.jpg`,
        title: `Toy Story`,
        about: `20.6.2019 | Leyfð`,
        comingSoon: true,

    },

]
//array endar hér

//functionið renderCards byrjar hér


function renderCards(isComingSoon, id){//function með parameter sem spyr hvort cardið sé isComingSoon?
    var container = document.querySelector(id);
    container.innerHTML = "";
    var showCard = false;//gef showCard að það sé false
    for(var i = 0; i<cards.length;i++){
        if(isComingSoon){
            showCard = !cards[i].comingSoon;
        }
        else{
            showCard = cards[i].comingSoon;
        }

/*Þetta bætir html kóða inn í htmlið*/ /*comingSoon? heldur utan um allan kóðan og spyr í hvert card hvort það sé true eða false og flokkar niður á index eða comingsoon síður*/ 
        container.innerHTML += showCard?`
            <div class="cards">
                <img src="${cards[i].img}"/>
                <div class="card-info">
                    <div class="cards-headline">
                        <h4>${cards[i].title}</h4>
                    </div>
                    <div class="cards-about">
                        <p>${cards[i].about}</p>
                    </div>
                    <div class="inspect-btn-container">
                        <i class="fas fa-angle-down"></i>
                        <a href="#"><button id="inspect-btn" onclick=function()>Skoða nánar<i class="fas fa-angle-right"></i></button></a>
                    </div>
                </div>
            </div>
            
        `:""
    }
    console.log('keyri function renderCards, showCard er:' + showCard);
}
renderCards(true, '.content-container');

document.getElementById('frontpage').onclick = () => {
    main.innerHTML = templates.frontPageTemplate;
    renderCards(true, '.content-container');
}
document.getElementById('inspect-btn').onclick = () => {
    main.innerHTML = templates.movieInfoTemplate;
}
document.getElementById("comingsoon").onclick = function(){//þegar klikkað er á comingsoon síðuna þá verða cardsin sem eru true sýnileg
    console.log("comingsoon")
    main.innerHTML = templates.comingSoonTemplate;
    var container = document.querySelector(".content-container");
    console.log(container);
    renderCards(false, '.content-container');
};

document.getElementById('aboutus').onclick = () => {
    main.innerHTML = templates.aboutUsTemplate;
}
/* Search bar*/ 
function searchForTitle(event){
    var title;
    var searchResults = [];
    var container = document.querySelector(".content-container");
    var searchBar = document.querySelector(".search-field")
    console.log(event)

    for(i=0; i<cards.length; i++){
       if(cards[i].title.toLowerCase().search(searchBar.value.toLowerCase()) !==-1){
            searchResults.push(cards[i])
            title = cards[i].title;
       }   
        else
        {
       console.log('Search returned nothing');
    }
}

if(event.keyCode === 13){//keycode 13 er Enter takkinn
    console.log(searchResults);
    container.innerHTML = "";
    for(i=0; i<searchResults.length; i++){
        container.innerHTML += `
        <div class="cards">
            <img src="${searchResults[i].img}"/>
            <div class="card-info">
                <div class="cards-headline">
                    <h4>${searchResults[i].title}</h4>
                </div>
                <div class="cards-about">
                    <p>${searchResults[i].about}</p>
                </div>
                <div class="inspect-btn-container">
                    <i class="fas fa-angle-down"></i>
                    <a href="movieinfo.html"><button id="inspect-btn">Skoða nánar<i class="fas fa-angle-right"></i></button></a>
                </div>
            </div>
        </div>
        `
    }
}
return searchForTitle;
}
document.querySelector(".search-field").onkeypress = searchForTitle//þegar ýtt er á Enter að þá er leitað að því sem er í stikunni


/* Trailer virkni á takka */

var trailerButton = document.querySelector(".trailer-btn");


function openTrailer(){
    console.log(onclick)
    var trailer = document.querySelector(".trailer");
    trailer.innerHTML = getTrailerTemplate();
}

if(trailerButton) {
    trailerButton.onclick = openTrailer;
}


function getTrailerTemplate(){
    return `
    <div class="trailer-container" style= " position: fixed; background-color: rgba(0,0,0,0.8); top: 0; display: flex; justify-content: center; flex-direction: column; align-items: center; z-index: 90; ">
        <div class="close-trailer">
            <i class="fas fa-times" onclick = "parentNode.parentNode.remove()"></i>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8bYBOVWLNIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `
}
