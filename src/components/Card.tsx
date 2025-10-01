import { useState, useEffect } from 'react'
import styles from '../styles/components/Card.module.scss'

import type { Card } from '../App'

interface CardProps {
    color: string;
    handleGameState: (card: Card) => void;
    id: number;
}

export default function Card({ color, handleGameState, id }: CardProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleSelectCard = () => {
        setIsClicked(true);
        handleGameState({color: color, id: id})
    }

    return (
        <div className={styles.container} style={{backgroundColor: isClicked ? color : 'none'}}>
            <button onClick={handleSelectCard}>Click</button>
        </div>
    )
}