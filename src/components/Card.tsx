import styles from '../styles/components/Card.module.scss';

import { useState, useEffect } from 'react';

import type { Card, gameState } from '../App';

interface CardProps {
    color: string;
    id: string;
    partnerId: string;
    handleGameState: (card: Card) => void;
    selectedCards: gameState
}

export default function Card({ color, id, partnerId, handleGameState, selectedCards }: CardProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    useEffect(() => {
        const 
    }, [selectedCards])

    return (
        <div className={styles.container} style={{backgroundColor: isClicked ? color : 'none'}}>
            <span>{color}</span>
            <button onClick={() => handleGameState({color: color, id: id, partnerId: partnerId})}>Click</button>
        </div>
    )
}