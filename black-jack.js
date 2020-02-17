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

const splitDeck = (cards) => {
  const totalCards = cards.length
  const splitIndex = (totalCards / 2)

  const firstDeck = cards.slice(0, splitIndex)
  const secondDeck = cards.slice(splitIndex, totalCards)

  return [firstDeck, secondDeck]
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
  }
]


let shuffledCards = shuffleCards(allCards)

let [playerHand, dealerHand] = splitDeck(shuffledCards)








let dealerUpcards = []
let playerUpcards = []

let playerCard = document.getElementById("player-card").src = allCards[2].img
let dealerCard = document.getElementById("player-card").src = allCards[2].img

