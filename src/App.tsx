import { useState, useEffect } from 'react'

import styles from './styles/App.module.scss'

import Card from './components/Card'

export interface Card {
  color: string | null,
  id: number | null
}

interface gameState {
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

function App() {
  const [cards, setCards] = useState<string[]>([...colors, ...colors])
  const [selectedCards, setSelectedCards] = useState<gameState>({
    card_one: {
      color: null,
      id: null
    },
    card_two: {
      color: null,
      id: null
    }
  })

  const handleGameState = (card: Card) => {
    if (selectedCards.card_one.id == null) {
      setSelectedCards({
        card_one: card,
        card_two: {
          color: null,
          id: null
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
    // console.log(selectedCards);

    if (selectedCards.card_one.id != null && selectedCards.card_two.id != null) {
      if (selectedCards.card_one.color == selectedCards.card_two.color) {
        console.log('you found a match!')
        setCards((prevCards) => prevCards.filter((card: any) => card !== selectedCards.card_one.color))

      } else {
        console.log('you made a mistake!')
      }
      setSelectedCards({
        card_one: {
          color: null,
          id: null
        },
        card_two: {
          color: null,
          id: null
        }
      })
    }
  },[selectedCards])


  return (
    <div id="App">
      <div className={styles.Cards_Container}>
        {cards.map((color: string, key: number) => 
        <Card 
          key={key} 
          id={key} 
          color={color} 
          handleGameState={handleGameState}
        />
        )}
      </div>
    </div>
  )
}

export default App
