
// shuffle cards
const shuffleCards = (array) => {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array;
}

// Splits cards into two deck
const splitDeck = (cards) => {
  const totalCards = cards.length
  const splitIndex = (totalCards / 2)

  const dealerDeck = cards.slice(0, splitIndex)
  const playerDeck = cards.slice(splitIndex, totalCards)
  return { dealerDeck, playerDeck }
}

// Moves card from one deck to another
const moveCard = (fromDeck, toDeck) => {
  toDeck.push(fromDeck[0])
  fromDeck.shift()
}

let allCards = [
  {
    "id": 1,
    "type": "hearts",
    "img": "assets/cards/AH.png"
  },
  {
    "id": 2,
    "type": "hearts",
    "img": "assets/cards/2H.png"
  },
  {
    "id": 3,
    "type": "hearts",
    "img": "assets/cards/3H.png"
  },
  {
    "id": 4,
    "type": "hearts",
    "img": "assets/cards/4H.png"
  },
  {
    "id": 5,
    "type": "hearts",
    "img": "assets/cards/5H.png"
  },
  {
    "id": 6,
    "type": "hearts",
    "img": "assets/cards/6H.png"
  }
]

let dealerUpcards = []
let playerUpcards = []

let shuffledCards = shuffleCards(allCards)
let { dealerDeck, playerDeck } = splitDeck(shuffledCards)









const play = () => {
  moveCard(dealerDeck, dealerUpcards)
  createImg(dealerUpcards[0].img)

}


const createImg = (imgSrc) => {
  let img = document.createElement('img')
  img.src = imgSrc
  img.className = "card"
  document.getElementById('dealer-side').appendChild(img);
}