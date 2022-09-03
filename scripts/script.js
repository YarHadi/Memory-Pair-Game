//arr of characters

const characters = [
    {
      id: 1,
      check: 1,
      img: "./img/dio.webp",
    },
    {
      id: 2,
      check: 1,
      img: "./img/the_world.jpg",
    },
    {
      id: 3,
      check: 2,
      img: "./img/giorno.webp",
    },
    {
      id: 4,
      check: 2,
      img: "./img/gold_exp.webp",
    },
    {
      id: 5,
      check: 3,
      img: "./img/josuke.png",
    },
    {
      id: 6,
      check: 3,
      img: "./img/crazy_diamond.jpg",
    },
    {
      id: 7,
      check: 4,
      img: "./img/jotaro.webp",
    },
    {
      id: 8,
      check: 4,
      img: "./img/star_platinum.webp",
    },
    {
      id: 9,
      check: 5,
      img: "./img/kira.webp",
    },
    {
      id: 10,
      check: 5,
      img: "./img/killer_queen.webp",
    },
    {
      id: 11,
      check: 6,
      img: "./img/jolyne.webp",
    },
    {
      id: 12,
      check: 6,
      img: "./img/stone_free.webp",
    },
  ];
  
  //creacting field for a game
  
  const mainField = document.querySelector(".main-field");

  var ourCharacters=characters.sort(function() { return 0.5 - Math.random() })
  
  function createMainField(data) {
    const cards = data
      .map(
        (
          character
        ) => `<div class="flip-container" ontouchstart="this.classList.toggle('hover');">
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
  
  createMainField(ourCharacters);
  
  //flip func
  
  function flip(id) {
    const card = document.getElementById(id);
    card.style.transform = "rotateY(180deg)";
  }
  
  //check
  
  var checkElements = [];
  
  function checkCard(arr) {
    const card1Id = document.getElementById(arr[0]);
    const card1check = arr[1];
    const card2Id = document.getElementById(arr[2]);
    const card2check = arr[3];
    if (card1check == card2check) {
      checkElements = [];
    } else {
      checkElements = [];
      setTimeout(() => {
        card1Id.style.transform = "rotateY(0deg)";
        card2Id.style.transform = "rotateY(0deg)";
      }, 500);
    }
  }
  
  //event listener
  
  const onClick = ({ target }) => {
    const selectedCharacter = target.dataset.id;
    const { id, check } = characters.find(
      (character) => character.id == selectedCharacter
    );
    if (checkElements.length < 4) {
      flip(id);
      checkElements.push(id, check);
    }
    if (checkElements.length == 4) {
      checkCard(checkElements);
    }
  };
  
  mainField.addEventListener("click", onClick);

//   help menu

const helpContainer=document.querySelector('.help-menu')

function showHelp(){
    helpContainer.style.display='flex';
}

function closeHelp(){
    helpContainer.style.display='none';
}