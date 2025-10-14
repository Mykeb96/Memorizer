import { useState, useEffect } from 'react'

import styles from './styles/App.module.scss'

import Card from './components/Card'

export interface CardType {
  color: string,
  id: string,
  partnerId: string,
  isActive: boolean,
  isMatched: boolean
};

export interface gameState {
  card_one: CardType,
  card_two: CardType
};

const colors: string[] = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Purple',
  'Pink',
  'Black'
];

const initialGameState: gameState = {
  card_one: {
    color: '',
    id: '',
    partnerId: '',
    isActive: false,
    isMatched: false
  },
  card_two: {
    color: '',
    id: '',
    partnerId: '',
    isActive: false,
    isMatched: false
  }
};

function App() {
  const createDeck = () => {
    let deck: CardType[] = [];
    for (let i = 0; i < colors.length; i++) {
      let cardOneId = crypto.randomUUID();
      let cardTwoId = crypto.randomUUID();
      deck.push({
        color: colors[i],
        id: cardOneId,
        partnerId: cardTwoId,
        isActive: false,
        isMatched: false
      });
      deck.push({
        color: colors[i],
        id: cardTwoId,
        partnerId: cardOneId,
        isActive: false,
        isMatched: false
      });
    }
    deck = deck.sort(() => Math.random() - 0.5);

    return deck;
  };
  const [cards, setCards] = useState<CardType[]>(createDeck());
  const [selectedCards, setSelectedCards] = useState<gameState>(initialGameState);
  const [gameOver, setGameOver] = useState<boolean>(true);

  let twoCardsSelected: boolean = selectedCards.card_one.id !== '' && selectedCards.card_two.id !== '';
  let cardsMatch: boolean = (selectedCards.card_one.partnerId == selectedCards.card_two.id) && twoCardsSelected;

  const setCardActive = (cardId: string) => {
    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isActive: true } : card
    ));
  };

  const setSelectedCardsInactive = () => {
    setCards(prev => prev.map(card => 
      (card.id === selectedCards.card_one.id || card.id === selectedCards.card_two.id) 
        ? { ...card, isActive: false } 
        : card
    ));
  };

  const setMatchedCards = () => {
    setCards(prev => prev.map(card => 
      card.id === selectedCards.card_one.id || card.id === selectedCards.card_two.id
        ? { ...card, isMatched: true, isActive: false }
        : card
    ));
  };

  const handleGameState = (card: CardType) => {
    const isCardAlreadySelected = selectedCards.card_one.id === card.id || 
                                 selectedCards.card_two.id === card.id;
    const isTwoCardsSelected = selectedCards.card_one.id !== '' && 
                              selectedCards.card_two.id !== '';
  
    if (isCardAlreadySelected || isTwoCardsSelected) {
      return;
    }

    if (selectedCards.card_one.id === '') {
      setSelectedCards({
        card_one: card,
        card_two: { color: '', id: '', partnerId: '', isActive: card.isActive, isMatched: card.isMatched }
      });
    } else {
      setSelectedCards({
        card_one: selectedCards.card_one,
        card_two: card
      });
    }

    setCardActive(card.id)
  };

  const playAgain = () => {
    setCards(createDeck());
    setGameOver(false);
  }

  useEffect(() => {
    if (twoCardsSelected) {
      if (cardsMatch) {
        console.log('you found a match!');
        setTimeout(() => {
          setMatchedCards();
        }, 1000);
      } else {
          console.log('you made a mistake!');
      }
      setTimeout(() => {
        setSelectedCardsInactive();
        setSelectedCards(initialGameState);
      }, 1000)
    };
  },[selectedCards]);

  useEffect(() => {
    const allCardsMatched = cards.every((card: CardType) => card.isMatched);
    
    if (allCardsMatched) {
      setGameOver(true);
    };
  }, [cards]);

  return (
    <div id="App">
        {!gameOver ? (
          <div className={styles.Cards_Container}>
            {cards.map((card: CardType) => 
              <Card
                key={card.id} 
                id={card.id}
                partnerId={card.partnerId}
                color={card.color} 
                handleGameState={handleGameState}
                isActive={card.isActive}
                isMatched={card.isMatched}
              />
            )}
          </div>
        ) 
        :
          <div className={styles.victory_screen}>
            <span className={styles.victory_text}>You Won!</span>
              <button onClick={playAgain} className={styles.play_again}>Play Again</button>
          </div>
        }
    </div>
  )
}

export default App
