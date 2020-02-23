

// Shuffle cards
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

// Set score to score element
const countScore = (cards, element) => {
  totalScore = sumCards(cards)
  element.innerText = totalScore
}

// Helper function that sums card values
const sumCards = (cards) => {
  let total = 0
  cards.map((card) => {
    total = total + card.value
  })
  return total
}


// Moves card from one deck to another
const moveCard = (fromDeck, toDeck) => {
  toDeck.unshift(fromDeck[0])
  fromDeck.shift()
}

// Plays sound of flipping a card
const playSound = () => {
  let audio = new Audio("./assets/flip-card.mp3")
  audio.play()
}

// Displays result
const showResult = (message) => {
  document.getElementById("result").classList.add("show-result")
  document.getElementById("result").innerText = message
}

let allCards = [
  {
    "value": 1,
    "img": "assets/cards/AH.png"
  },
  {
    "value": 2,
    "img": "assets/cards/2H.png"
  },
  {
    "value": 3,
    "img": "assets/cards/3H.png"
  },
  {
    "value": 4,
    "img": "assets/cards/4H.png"
  },
  {
    "value": 5,
    "img": "assets/cards/5H.png"
  },
  {
    "value": 6,
    "img": "assets/cards/6H.png"
  },
  {
    "value": 7,
    "img": "assets/cards/7H.png"
  },
  {
    "value": 8,
    "img": "assets/cards/8H.png"
  },
  {
    "value": 9,
    "img": "assets/cards/9H.png"
  },
  {
    "value": 10,
    "img": "assets/cards/10H.png"
  },
  {
    "value": 10,
    "img": "assets/cards/JH.png"
  },
  {
    "value": 10,
    "img": "assets/cards/QH.png"
  },
  {
    "value": 10,
    "img": "assets/cards/KH.png"
  },
]

// Arrays with cards turned up on the table
let dealerUpcards = []
let playerUpcards = []

// Score
let dealerScore = document.getElementById('dealer-score')
let playerScore = document.getElementById('player-score')

// Sections
let dealerSection = document.getElementById('dealer-cards')
let playerSection = document.getElementById('player-cards')

let shuffledCards = shuffleCards(allCards)
let { dealerDeck, playerDeck } = splitDeck(shuffledCards)

// Play
const play = () => {
  moveCard(playerDeck, playerUpcards)
  createImg(playerUpcards, playerSection)
  countScore(playerUpcards, playerScore)
  playSound()
  let result = winner(dealerUpcards, playerUpcards)
  if (result) return
  setTimeout(() => {
    if (sumCards(dealerUpcards) < 18 || sumCards(dealerUpcards) < sumCards(playerUpcards)) {
      moveCard(dealerDeck, dealerUpcards)
      createImg(dealerUpcards, dealerSection)
      countScore(dealerUpcards, dealerScore)
      playSound()
      winner(dealerUpcards, playerUpcards)
    }
  }, 700);


}

// Hold
const hold = () => {
  setTimeout(() => {
    if (sumCards(dealerUpcards) < 18 || sumCards(dealerUpcards) < sumCards(playerUpcards)) {
      moveCard(dealerDeck, dealerUpcards)
      createImg(dealerUpcards, dealerSection)
      countScore(dealerUpcards, dealerScore)
      playSound()
      winner(dealerUpcards, playerUpcards)
    }
  }, 700);
}

const winner = (dealerUpcards, playerUpcards) => {
  if (blackJack(playerUpcards) || bust(dealerUpcards) || sumCards(playerUpcards) === 21) {
    showResult("You win!! 🏆")
    return true
  }
  if (blackJack(dealerUpcards) || bust(playerUpcards) || sumCards(dealerUpcards) === 21) {
    showResult("You lose! 😢")
    return true
  }
  else false
}

// Check if BlackJack
const blackJack = (cards) => {
  if (cards.length === 2) {
    if ((cards[0].value === 1 && cards[1].value === 10) || (cards[1].value === 1 && cards[0].value === 10)) {
      return true
    }
  }
  else false
}

// If score > 21
const bust = (cards) => {
  const score = sumCards(cards)
  if (score > 21) {
    return true
  }
  return false
}