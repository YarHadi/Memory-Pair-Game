//arr of characters

const characters=[
    {
        id:1,
        img:"./img/dio.webp"
    },
    {
        id:2,
        img:"./img/the_world.jpg"
    },
    {
        id:3,
        img:"./img/giorno.webp"
    },
    {
        id:4,
        img:"./img/gold_exp.webp"
    },
    {
        id:5,
        img:"./img/josuke.png"
    },
    {
        id:6,
        img:"./img/crazy_diamond.jpg"
    },
    {
        id:7,
        img:"./img/jotaro.webp"
    },
    {
        id:8,
        img:"./img/star_platinum.webp"
    },
    {
        id:9,
        img:"./img/kira.webp"
    },
    {
        id:10,
        img:"./img/killer_queen.webp"
    },
    {
        id:11,
        img:"./img/jolyne.webp"
    },
    {
        id:12,
        img:"./img/stone_free.webp"
    },

];

//creacting field

const mainField = document.querySelector(".main-field");

function createMainField(data) {
  const cards = data
    .map(
      (character) => `<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
      <div id="${character.id}" class="flipper">
          <div data-id="${character.id}" class="front">
              <img data-id="${character.id}" class="character-img" src="./img/logo.png">
          </div>
          <div class="back">
              <img class="character-img" src="${character.img}">
          </div>
      </div>
  </div>`
    )
    .join("");
    mainField.innerHTML = cards;
}

createMainField(characters);

//flip func

function flip(id){
    const card=document.getElementById(id);
    card.style.transform='rotateY(180deg)';
}

//event listener

const onClick = ({ target }) => {
    const selectedCharacter = target.dataset.id;
    const {id} = characters.find((character) => character.id == selectedCharacter);
    flip(id);
  };
  
  mainField.addEventListener("click", onClick);

//reset

  function reset(id){
    const card=document.getElementById(id);
    card.style.transform='rotateY(0deg)';
  }