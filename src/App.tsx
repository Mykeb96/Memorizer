import { useState, useEffect } from 'react'

import styles from './styles/App.module.scss'

import Card from './components/Card'

export interface Card {
  color: string,
  id: string,
  partnerId: string,
}

export interface gameState {
  card_one: Card,
  card_two: Card
}

const colors: string[] = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Purple',
  'Pink',
  'Black'
]

const initialGameState: gameState = {
  card_one: {
    color: '',
    id: '',
    partnerId: ''
  },
  card_two: {
    color: '',
    id: '',
    partnerId: ''
  }
}

function App() {
  const createDeck = () => {
    let deck: Card[] = []
    for (let i = 0; i < colors.length; i++) {
      let cardOneId = crypto.randomUUID();
      let cardTwoId = crypto.randomUUID();
      deck.push({
        color: colors[i],
        id: cardOneId,
        partnerId: cardTwoId
      })
      deck.push({
        color: colors[i],
        id: cardTwoId,
        partnerId: cardOneId
      })
    }
    deck = deck.sort(() => Math.random() - 0.5);

    return deck;
  }
  const [cards, setCards] = useState<Card[]>(createDeck())
  const [selectedCards, setSelectedCards] = useState<gameState>(initialGameState)

  let twoCardsSelected: boolean = selectedCards.card_one.id !== '' && selectedCards.card_two.id !== ''
  let cardsMatch: boolean = (selectedCards.card_one.partnerId == selectedCards.card_two.id) && twoCardsSelected

  const handleGameState = (card: Card) => {
    if (selectedCards.card_one.id == '') {
      setSelectedCards({
        card_one: card,
        card_two: {
          color: '',
          id: '',
          partnerId: ''
        }
      })
    } else {
      setSelectedCards({
        card_one: selectedCards.card_one,
        card_two: card
      })
    }
  }

  useEffect(() => {
    console.log(selectedCards)
    if (twoCardsSelected) {
      if (cardsMatch) {
        console.log('you found a match!')
        setTimeout(() => {
          setCards((prevCards) => prevCards.filter((card: Card) => card.color !== selectedCards.card_one.color))
        }, 1000)
      } else {
        setTimeout(() => {
          console.log('you made a mistake!')
        }, 1000)
      }
      setSelectedCards(initialGameState)
    }
  },[selectedCards])


  return (
    <div id="App">
      <div className={styles.Cards_Container}>
        {cards.map((card: Card, key: number) => 
        <Card 
          key={key} 
          id={card.id}
          partnerId={card.partnerId}
          color={card.color} 
          handleGameState={handleGameState}
        />
        )}
      </div>
    </div>
  )
}

export default App
