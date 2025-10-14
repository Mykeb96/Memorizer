import React from 'react'
import styles from '../styles/components/Card.module.scss'

import type { CardType } from '../App'

interface CardProps {
    color: string;
    id: string;
    partnerId: string;
    handleGameState: (card: CardType) => void;
    isActive: boolean;
    isMatched: boolean;
}

const Card = React.memo(({ color, id, partnerId, handleGameState, isActive, isMatched}: CardProps) => {

    return (
        <div 
        className={styles.container}
        style={{
        backgroundColor: isActive ? color : 'transparent',
        visibility: isMatched ? 'hidden' : 'initial'
        }}
        >
            <button onClick={() => handleGameState({color: color, id: id, partnerId: partnerId, isActive: isActive, isMatched: isMatched})}>Click</button>
        </div>
    )
});

export default Card;