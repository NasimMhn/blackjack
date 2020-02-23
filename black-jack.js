
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

// Creates new card (img) in parent
const createImg = (cards, parent) => {
  let img = document.createElement('img')
  img.src = cards[0].img
  img.className = "card"
  parent.appendChild(img);
}

// Count sum of card array's values 
const countScore = (cards, element) => {
  let totalSum = 0
  cards.map((card) => {
    totalSum = totalSum + card.value
  })
  element.innerText = totalSum
}

// Moves card from one deck to another
const moveCard = (fromDeck, toDeck) => {
  toDeck.unshift(fromDeck[0])
  fromDeck.shift()
}

let allCards = [
  {
    "value": 1,
    "type": "hearts",
    "img": "assets/cards/AH.png"
  },
  {
    "value": 2,
    "type": "hearts",
    "img": "assets/cards/2H.png"
  },
  {
    "value": 3,
    "type": "hearts",
    "img": "assets/cards/3H.png"
  },
  {
    "value": 4,
    "type": "hearts",
    "img": "assets/cards/4H.png"
  },
  {
    "value": 5,
    "type": "hearts",
    "img": "assets/cards/5H.png"
  },
  {
    "value": 6,
    "type": "hearts",
    "img": "assets/cards/6H.png"
  }
]

let dealerUpcards = []
let playerUpcards = []

let shuffledCards = shuffleCards(allCards)
let { dealerDeck, playerDeck } = splitDeck(shuffledCards)





// Score
let dealerScore = document.getElementById('dealer-score')
let playerScore = document.getElementById('player-score')

// Sections
let dealerSection = document.getElementById('dealer-cards')
let playerSection = document.getElementById('player-cards')


const play = () => {

  moveCard(playerDeck, playerUpcards)
  createImg(playerUpcards, playerSection)
  countScore(playerUpcards, playerScore)

  setTimeout(() => {
    moveCard(dealerDeck, dealerUpcards)
    createImg(dealerUpcards, dealerSection)
    countScore(dealerUpcards, dealerScore)
  }, 700);
}


