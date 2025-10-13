import React from 'react'
import styles from '../styles/components/Card.module.scss'

import type { CardType } from '../App'

interface CardProps {
    color: string;
    id: string;
    partnerId: string;
    handleGameState: (card: CardType) => void;
    isActive: boolean
}

const Card = React.memo(({ color, id, partnerId, handleGameState, isActive}: CardProps) => {

    return (
        <div className={styles.container} style={{backgroundColor: isActive ? color : 'transparent'}}>
            <span>{color}</span>
            <button onClick={() => handleGameState({color: color, id: id, partnerId: partnerId, isActive: isActive})}>Click</button>
        </div>
    )
});

export default Card;